var questionsBank =[
  {
    level: 0, // Player must have at least this score to receive these questions. They receive 10 points for every correct answer.
    questions: [
      ['1 + 2', '3', '1', '2', '5'], // First item is question, second is correct answers, third to fifth are the incorrect options
      ['2 + 2', '4', '2', '7', '5'],
      ['3 + 4', '7', '3', '2', '5'],
      ['4 + 2', '6', '1', '2', '5'],
      ['2 + 3', '5', '2', '7', '6'],
      ['4 + 4', '8', '3', '2', '5'],
      ['1 + 3', '4', '1', '2', '5'],
      ['2 + 5', '7', '5', '4', '2'],
      ['3 + 3', '6', '2', '1', '8'],
      ['5 + 4', '9', '8', '7', '5'],
    ]
  },
  {
    level: 70,
    questions: [
      ['2 - 1', '1', '3', '2', '5'],
      ['2 - 2', '0', '2', '7', '5'],
      ['7 - 4', '3', '9', '2', '5'],
      ['3 - 1', '2', '3', '4', '5'],
      ['5 - 2', '3', '2', '7', '5'],
      ['7 - 1', '6', '9', '2', '4'],
      ['8 - 4', '4', '2', '3', '6'],
      ['6 - 2', '4', '3', '7', '5'],
      ['5 - 3', '2', '7', '8', '5'],
      ['9 - 4', '5', '13', '2', '4'],
    ]
  },
  {
    level: 140,
    questions: [
      ['2 x 3', '6', '3', '2', '5'],
      ['2 x 2', '4', '2', '7', '5'],
      ['7 x 4', '28', '9', '2', '5'],
      ['3 x 3', '9', '3', '2', '5'],
      ['2 x 4', '8', '2', '7', '5'],
      ['7 x 3', '21', '9', '22', '5'],
      ['4 x 3', '12', '7', '1', '14'],
      ['1 x 3', '3', '7', '4', '2'],
      ['5 x 2', '10', '7', '3', '15'],
      ['6 x 2', '12', '8', '21', '4']
    ]
  },
  {
    level: 210,
    questions: [
      ['4 / 2', '2', '3', '4', '5'],
      ['2 / 2', '1', '2', '7', '5'],
      ['8 / 4', '2', '9', '3', '5'],
      ['9 / 3', '3', '6', '2', '5'],
      ['5 / 1', '5', '2', '7', '4'],
      ['10 / 2', '5', '9', '2', '3'],
      ['6 / 2', '3', '4', '1', '8'],
      ['8 / 2', '4', '6', '10', '2'],
      ['7 / 1', '7', '1', '6', '8'],
      ['10 / 5', '2', '9', '5', '3'],
    ]
  },
  {
    level: 280,
    questions: [
      ['14 + 12', '26', '23', '24', '25'],
      ['12 + 12', '24', '22', '27', '25'],
      ['18 + 14', '32', '39', '33', '35'],
      ['19 + 13', '32', '36', '31', '35'],
      ['15 + 11', '26', '22', '27', '24'],
      ['10 + 23', '33', '39', '32', '31'],
      ['26 + 12', '38', '34', '31', '36'],
      ['28 + 22', '50', '48', '52', '40'],
      ['37 + 21', '58', '59', '56', '48'],
      ['11 + 55', '66', '69', '65', '77'],
    ]
  },
  {
    level: 350,
    questions: [
      ['14 - 12', '2', '3', '4', '5'],
      ['22 - 12', '10', '12', '8', '20'],
      ['18 - 14', '4', '8', '3', '5'],
      ['19 - 11', '8', '6', '10', '12'],
      ['16 - 11', '5', '2', '7', '4'],
      ['32 - 23', '9', '8', '12', '13'],
      ['26 - 12', '14', '13', '11', '16'],
      ['28 - 22', '6', '8', '2', '4'],
      ['37 - 21', '16', '19', '15', '18'],
      ['55 - 13', '42', '40', '43', '41'],
    ]
  },
]

const SCORE_CAP = 500;

function prepQuestionsBank() {
  for (let i=0; i<questionsBank.length; i++) {
    questionsBank[i].i = 0;
    questionsBank[i].questions = Phaser.Actions.Shuffle(questionsBank[i].questions);
  }
}
prepQuestionsBank();

var config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    // parent: 'phaser-example',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 800,
    height: 600
  },
  // width: 800,
  // height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 1000 }
    }
  },
  scene: {
    preload: preload,
    create: create,
    update: update
  }
};

var game = new Phaser.Game(config);
var scene;
var ninja, gameOver, intro, question, answers;
var themes = [];
var themeIndex = 0;
var deltaTime = 0;
var score = 0;
var backgrounds = [[], [], []];
var timeScale = 1.0;
var baddies = [];
var baddyType = 0;
var answer = null;
var correctAnswer;
var slowTimeScale = 0.1;

const BACKGROUND_SPEED = [100/1000, 250/1000, 400/1000];
const BADDIES_START = 1200;

var state = {
  state: 0,
  startTime: 0,
  firstRun: true,

  INTRO: 0,
  DROP_IN: 10,
  RUN: 20,
  LOSE: 30,
  COMPLETED: 40,
  GAME_OVER: 9999,

  setState: function (s) {
    this.state = s;
    this.startTime = deltaTime;
    this.firstRun = true;
  }
};

function preload () {
  scene = this;
  this.load.setBaseURL('ninja');

  function loadSeries(pre, start, end, post='.png') {
    for (let i=start; i<=end; i++) {
      scene.load.image(pre + i, pre + i + post);
    }
  }

  loadSeries('background', 1, 3);
  loadSeries('Run', 1, 9);
  this.load.image('Slide', 'Slide0.png');
  this.load.image('Jump', 'Jump2.png');
  this.load.image('Glide', 'Glide0.png');
  this.load.image('Dead', 'Dead0.png');
  this.load.image('button', 'button.png');
  this.load.image('gameOver', 'gameOver.png');
  this.load.image('intro', 'intro.png');
  this.load.image('questionBackground', 'questionBackground.png');
  this.load.image('answersBackground', 'answersBackground.png');
  this.load.image('grassblock', 'grassblock.png');
  this.load.image('slime', 'slime.png');
  this.load.image('bee', 'bee.png');
  this.load.image('bee_fly', 'bee_fly.png');
  this.load.image('tryAgain', 'tryAgain.png');

  this.load.spritesheet('fullscreen', 'fullscreen.png', { frameWidth: 64, frameHeight: 64 });

  this.load.audio('theme1', 'level1.mp3');
  this.load.audio('theme2', 'level2.mp3');
  this.load.audio('theme3', 'level3.mp3');
}

function create () {
  function genFrames(pre, start, end) {
    let frames = [];
    for (let i=start; i<=end; i++) {
      frames.push({key: pre + i})
    }
    return frames;
  }

  // Background
  backgrounds[0].push(this.add.image(400, 300, 'background1'));
  backgrounds[0].push(this.add.image(1200, 300, 'background1'));
  backgrounds[1].push(this.add.image(400, 300, 'background2'));
  backgrounds[1].push(this.add.image(1200, 300, 'background2'));
  backgrounds[2].push(this.add.image(400, 300, 'background3'));
  backgrounds[2].push(this.add.image(1200, 300, 'background3'));

  // Fullscreen button
  const button = this.add.image(800 - 16, 16, 'fullscreen', 0).setOrigin(1, 0).setInteractive();
  button.on('pointerup', function (){
    if (this.scale.isFullscreen) {
      button.setFrame(0);
      this.scale.stopFullscreen();
    } else {
      button.setFrame(1);
      this.scale.startFullscreen();
    }
  }, this);

  // Ninja
  this.anims.create({
    key: 'run',
    frames: genFrames('Run', 1, 9),
    frameRate: 30,
    repeat: -1
  });

  this.anims.create({
    key: 'jump',
    frames: [
      { key: 'Jump' },
      { key: 'Glide' }
    ],
    frameRate: 10,
    repeat: 0
  });

  this.anims.create({
    key: 'slide',
    frames: [
      { key: 'Slide' }
    ],
    frameRate: 30,
    repeat: 0
  });

  this.anims.create({
    key: 'dead',
    frames: [
      { key: 'Dead' }
    ],
    frameRate: 30,
    repeat: 0
  });

  ninja = this.physics.add.sprite(120, -200, 'Run1').play('run');
  ninja.body.enable = false;

  // Floor
  floor = this.physics.add.staticImage(400, 530);
  floor.body.setSize(1500, 50);

  this.physics.add.collider(ninja, floor);

  // Baddies
  baddies.push(this.physics.add.sprite(BADDIES_START, 475, 'grassblock'));
  baddies.push(this.physics.add.sprite(BADDIES_START, 495, 'slime'));
  this.anims.create({
    key: 'bee',
    frames: [
      { key: 'bee' },
      { key: 'bee_fly' }
    ],
    frameRate: 10,
    repeat: -1
  });
  baddies.push(this.physics.add.sprite(BADDIES_START, 360, 'bee').play('bee'));
  baddies.forEach(function(baddy) {
    baddy.body.setAllowGravity(false);
  });

  // Intro
  intro = this.add.image(400, -200, 'intro').setInteractive();
  intro.on('pointerdown', function () {
    state.setState(state.DROP_IN);
  });

  // Game Over
  var gameOverBackground = this.add.image(0, 0, 'gameOver');
  var gameOverText1 = this.add.text(0, -80, '- Your Score -', { fontFamily: 'Shojumaru', fontSize: '32px', fill: '#000' })
  gameOverText1.setOrigin(0.5, 0.5);
  var gameOverText2 = this.add.text(0, -20, '0', { fontFamily: 'Shojumaru', fontSize: '32px', fill: '#000' })
  gameOverText2.setOrigin(0.5, 0.5);
  var gameOverText3 = this.add.text(0, 40, 'Ninja Rank', { fontFamily: 'Shojumaru', fontSize: '32px', fill: '#000' })
  gameOverText3.setOrigin(0.5, 0.5);
  var gameOverText4 = this.add.text(0, 75, '', { fontFamily: 'Shojumaru', fontSize: '32px', fill: '#ff0000' })
  gameOverText4.setOrigin(0.5, 0.5);
  tryAgain = this.add.image(0, 185, 'tryAgain').setInteractive();
  tryAgain.setOrigin(0.5, 0.5);
  tryAgain.visible = false;
  tryAgain.on('pointerdown', restart);

  gameOver = this.add.container(400, -200, [gameOverBackground, gameOverText1, gameOverText2, gameOverText3, gameOverText4, tryAgain]);
  gameOver.visible = false;

  // Question
  var questionBackground = this.add.image(0,0, 'questionBackground');
  var questionText = this.add.text(0, 0, '', { fontFamily: 'Shojumaru', fontSize: '32px', fill: '#000', wordWrap: { width: 400, useAdvancedWrap: true }});
  questionText.setOrigin(0.5, 0.5);
  question = this.add.container(400, -410, [questionBackground, questionText]);

  // Answers
  function addBtn (scene, x) {
    var btn = scene.add.image(0, 0, 'button').setInteractive();
    var btnText = scene.add.text(0, 0, '', { fontFamily: 'Shojumaru', fontSize: '32px', fill: '#000' });
    btnText.setOrigin(0.5, 0.5);
    btn.on('pointerdown', clickedAnswer);

    return scene.add.container(x, 0, [btn, btnText]);
  }

  var answersBackground = this.add.image(0,0, 'answersBackground');
  var btns = [];
  btns.push(addBtn(this, -240));
  btns.push(addBtn(this, -80));
  btns.push(addBtn(this, 80));
  btns.push(addBtn(this, 240));
  answers = this.add.container(400, -120, [answersBackground, ...btns]);

  // Set up tween animations
  intro.tweenDrop = scene.tweens.create({
    targets: intro,
    y: 300,
    duration: 500
  });
  intro.tweenRise = scene.tweens.create({
    targets: intro,
    y: -300,
    duration: 200
  });
  gameOver.tweenDrop = scene.tweens.create({
    targets: gameOver,
    y: 300,
    duration: 300
  });

  // Set up background music
  themes.push(this.sound.add('theme1'));
  themes.push(this.sound.add('theme2'));
  themes.push(this.sound.add('theme3'));

  for (let a=0; a<2; a++) {
    themes[a].nextTheme = function() {
      themeIndex++;
      scene.tweens.add({
        targets: themes[a],
        volume: 0,
        duration: 1000,
        onComplete: function() {
          themes[a].stop();
          themes[a+1].play({ loop: true });
        }
      });
    };
  }

  // scene.sound.volume = 0;
}

function restart() {
  if (tryAgain.visible == false) {
    return;
  }

  ninja.setPosition(120, -200);
  ninja.angle = 0;
  ninja.body.enable = false;
  gameOver.setPosition(400, 200);
  gameOver.visible = false;
  tryAgain.visible = false;
  slowTimeScale = 0.1;
  gameOver.list[4].setText('');
  gameOver.list[2].setText('0');
  themeIndex = 0;
  score = 0;
  prepQuestionsBank();

  state.setState(state.INTRO);
}

function clickedAnswer () {
  answer = this.choice;
  if (answer == correctAnswer) {
    score += 10;
    slowTimeScale = slowTimeScale + (1.0 - slowTimeScale) / 40;
  }
}

function setQuestion() {
  var currentSet;

  for (let i=questionsBank.length-1; i>=0; i--) {
    if (score >= questionsBank[i].level) {
      let index = questionsBank[i].i;
      questionsBank[i].i++;
      currentSet = questionsBank[i].questions[index];
      break;
    }
  }

  correctAnswer = currentSet[1];
  var options = Phaser.Actions.Shuffle(currentSet.slice(1));

  question.list[1].setText(currentSet[0]);
  for (let i=0; i<4; i++) {
    answers.list[i+1].list[0].choice = options[i];
    answers.list[i+1].list[1].setText(options[i]);
  }
  answer = null;
}

function resetBaddies() {
  baddyType = Phaser.Math.Between(0, baddies.length - 1);

  baddies.forEach(function(baddy) {
    baddy.x = BADDIES_START;
  });
}

function update (time, delta) {
  deltaTime += delta;
  var stateTime = deltaTime - state.startTime;
  var scaledDelta = delta * timeScale;


  // Intro screen
  if (state.state == state.INTRO) {
    if (state.firstRun) {
      state.firstRun = false;
      intro.tweenDrop.play({ loop: true });
    }

  // Ninja drop down
  } else if (state.state == state.DROP_IN) {
    if (state.firstRun) {
      state.firstRun = false;
      ninja.body.enable = true;
      ninja.y = -200;
      ninja.setVelocity(0, 500);
      ninja.anims.play('jump');
      intro.tweenRise.play();
      themes[themeIndex].play({ loop: true });
    }

    if (ninja.body.touching.down) {
      ninja.anims.play('run', true);
      state.setState(state.RUN)
    }

  // Ninja running
  } else if (state.state == state.RUN) {
    if (state.firstRun) {
      state.firstRun = false;
      ninja.slideStopTime = 0;
      resetBaddies();
      setQuestion();
    }

    if (ninja.body.touching.down && deltaTime > ninja.slideStopTime) {
        ninja.anims.play('run', true);
    }

    for (let a=0; a<3; a++) {  // Move background
      for (let b=0; b<2; b++) {
        backgrounds[a][b].x -= BACKGROUND_SPEED[a] * scaledDelta * timeScale;
        if (backgrounds[a][b].x < -400) {
          backgrounds[a][b].x += 1600;
        }
      }
    }

    baddies[baddyType].x -= BACKGROUND_SPEED[2] * scaledDelta * timeScale; // Move baddy

    if (baddies[baddyType].x < 600 && baddies[baddyType].x > 250 && answer == null) { // Slow down
      timeScale = slowTimeScale;
      ninja.anims.msPerFrame = 1000 / (30 * timeScale);
      if (question.y < 110) {
        question.y += 40;
      }
      if (answers.y < 280) {
        answers.y += 40;
      }
    } else {
      timeScale = 1;
      ninja.anims.msPerFrame = 1000 / 30;
      if (question.y > -410) {
        question.y -= 40;
      }
      if (answers.y > -120) {
        answers.y -= 40;
      }
    }

    if (baddies[baddyType].x < 220 && answer == correctAnswer) { // Jump over or slide
      if (baddyType <= 1) {
        if (ninja.body.touching.down) {
          ninja.setVelocity(0, -600);
          ninja.anims.play('jump', true);
        }
      } else {
        ninja.anims.play('slide', true);
        ninja.slideStopTime = deltaTime + 200;
      }
    }

    if (baddies[baddyType].x < 150 && answer != correctAnswer) {
      state.setState(state.LOSE);
    }

    if (baddies[baddyType].x < -50) { // Reset baddy
      resetBaddies();
      setQuestion();
      if (score >= SCORE_CAP) {
        state.setState(state.COMPLETED);
      }
      if (score >= 100 && themeIndex == 0) { // Update music
        themes[themeIndex].nextTheme();
      } else if (score >= 200 && themeIndex == 1) {
        themes[themeIndex].nextTheme();
      }
    }

  // Lose and gets knocked away
  } else if (state.state == state.LOSE) {
    if (state.firstRun) {
      state.firstRun = false;
      ninja.anims.play('dead', true);
    }

    ninja.angle -= 10;
    ninja.x -= 5;
    ninja.y -= 10;

    if (ninja.x < -300) {
      state.setState(state.GAME_OVER);
    }

  // Reached the score cap
  } else if (state.state == state.COMPLETED) {
    if (ninja.body.touching.down && deltaTime > ninja.slideStopTime) {
      ninja.anims.play('run', true);
    }
    ninja.x += BACKGROUND_SPEED[2] * scaledDelta;

    if (ninja.x > 900) {
      state.setState(state.GAME_OVER);
    }

  // Game Over screen
  } else {
    if (state.firstRun) {
      state.firstRun = false;
      postResult({
        game: 'ninja',
        score: score
      });
      gameOver.visible = true;
      gameOver.tweenDrop.play();
    }

    var current = parseInt(gameOver.list[2].text);
    if (current < score) {
      current++;
      gameOver.list[2].setText(current);
    } else {
      if (score > 400) {
        gameOver.list[4].setText('Kage');
      } else if (score > 300) {
        gameOver.list[4].setText('S-Class');
      } else if (score > 200) {
        gameOver.list[4].setText('Special Jounin');
      } else if (score > 150) {
        gameOver.list[4].setText('Jounin');
      } else if (score > 100) {
        gameOver.list[4].setText('Chuunin');
      } else if (score > 50) {
        gameOver.list[4].setText('Genin');
      } else {
        gameOver.list[4].setText('Trainee');
      }

      tryAgain.visible = true;
    }
  }
}

