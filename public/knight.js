// var questionsBank = [
//   ['hiss', 'The green snake gave a long hiss.'],
//   ['trump', 'I heard the big elephant give a loud trump.'],
//   ['running', 'The dog is running in the park.'],
//   ['roar', 'The hungry lion gave a mighty roar.'],
//   ['jungle', 'Many tall trees grow in the jungle.'],
//   ['monkey', 'The monkey swung from the branch.'],
//   ['chatter', 'I can hear the birds chatter in the morning.'],
//   ['creeping', 'A cat is creeping through the tall grass.'],
//   ['leaping', 'The frog is leaping onto a wet leaf.'],
//   ['fierce', 'The tiger looks very fierce and strong.']
// ]
var questionsBank = [
  ['car', 'I will go to town in my vintage car.'],
  ['land', 'Mrs Wishy Washy has a big land for the animals.'],
  ['way', 'Brr, Brr said the bear all the way to town.'],
  ['late', 'Hurry up or we will be late shouts Peter.'],
  ['ride', 'The helicopter ride was amazing.'],
  ['pool', 'I jumped into the swimming pool excitedly.'],
  ['fly', 'The birds fly out of the big windows.'],
  ['sky', 'Dan flew up into the sky.'],
  ['town', 'That man will be in town till tomorrow morning.'],
  ['bulldozer', 'The big yellow bulldozer moved the heavy dirt.'],
]

questionsBank = Phaser.Actions.Shuffle(questionsBank);
const SCORE_CAP = questionsBank.length;

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
var answerState = 'pending';
var slowTimeScale = 0.1;
var answerText;
const synth = window.speechSynthesis;

const BACKGROUND_SPEED = [100/1000, 250/1000, 400/1000];
const BADDIES_START = 1200;
// const FONT = 'New Rocker';
const FONT = 'Playpen Sans';

var state = {
  state: 0,
  startTime: 0,
  firstRun: true,

  INTRO: 0,
  RUN: 20,
  SLOW: 25,
  CONTINUE: 27,
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
  this.load.setBaseURL('knight');

  function loadSeries(pre, start, end, post='.png') {
    for (let i=start; i<=end; i++) {
      scene.load.image(pre + i, pre + i + post);
    }
  }

  loadSeries('background', 1, 3);
  loadSeries('Run', 1, 9);
  loadSeries('spider_walk', 1, 2);
  loadSeries('Dragon-Idle_', 0, 7)
  this.load.image('Jump', 'Jump.png');
  this.load.image('Dead', 'Dead0.png');
  this.load.image('gameOver', 'gameOver.png');
  this.load.image('intro', 'intro.png');
  this.load.image('questionBackground', 'questionBackground.png');
  this.load.image('snake', 'snakelava.png');
  this.load.image('ghost', 'ghost.png');
  this.load.image('tryAgain', 'tryAgain.png');
  this.load.image('sound', 'sound.png');
  this.load.image('submit', 'submit.png');

  this.load.spritesheet('fullscreen', 'fullscreen.png', { frameWidth: 64, frameHeight: 64 });

  this.load.audio('theme1', 'fight_looped.mp3');
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
    ],
    frameRate: 10,
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

  // Baddies
  this.anims.create({
    key: 'spider',
    frames: [
      { key: 'spider_walk1' },
      { key: 'spider_walk2' }
    ],
    frameRate: 10,
    repeat: -1
  });
  this.anims.create({
    key: 'dragon',
    frames: [
      { key: 'Dragon-Idle_0' },
      { key: 'Dragon-Idle_1' },
      { key: 'Dragon-Idle_2' },
      { key: 'Dragon-Idle_3' },
      { key: 'Dragon-Idle_4' },
      { key: 'Dragon-Idle_5' },
      { key: 'Dragon-Idle_6' },
      { key: 'Dragon-Idle_7' }
    ],
    frameRate: 20,
    repeat: -1
  });
  baddies.push(this.physics.add.sprite(BADDIES_START, 510, 'spider').play('spider'));
  baddies.push(this.physics.add.sprite(BADDIES_START, 461, 'snake'));
  baddies.push(this.physics.add.sprite(BADDIES_START, 480, 'ghost'));
  baddies.push(this.physics.add.sprite(BADDIES_START, 450, 'dragon').play('dragon'));
  baddies.forEach(function(baddy) {
    baddy.body.setAllowGravity(false);
    baddy.baseY = baddy.y;
  });

  // Intro
  intro = this.add.image(400, -200, 'intro').setInteractive();
  intro.on('pointerdown', function () {
    state.setState(state.RUN);
    ninja.y = 455;
    intro.tweenRise.play();
    themes[themeIndex].play({ loop: true });
  });

  // Game Over
  var gameOverBackground = this.add.image(0, 0, 'gameOver');
  var gameOverText1 = this.add.text(0, -120, '- Your Score -', { fontFamily: FONT, fontSize: '32px', fill: '#000' })
  gameOverText1.setOrigin(0.5, 0.5);
  var gameOverText2 = this.add.text(0, -60, '0', { fontFamily: FONT, fontSize: '32px', fill: '#000' })
  gameOverText2.setOrigin(0.5, 0.5);
  var gameOverText3 = this.add.text(0, 0, 'Knight Rank', { fontFamily: FONT, fontSize: '32px', fill: '#000' })
  gameOverText3.setOrigin(0.5, 0.5);
  var gameOverText4 = this.add.text(0, 40, '', { fontFamily: FONT, fontSize: '32px', fill: '#ff0000' })
  gameOverText4.setOrigin(0.5, 0.5);
  tryAgain = this.add.image(0, 120, 'tryAgain').setInteractive();
  tryAgain.setOrigin(0.5, 0.5);
  tryAgain.visible = false;
  tryAgain.on('pointerdown', restart);

  gameOver = this.add.container(400, -200, [gameOverBackground, gameOverText1, gameOverText2, gameOverText3, gameOverText4, tryAgain]);
  gameOver.visible = false;

  // Question and answers
  function addBtn (scene, letter, x, y) {
    let btn = scene.add.rectangle(0, 0, 60, 60, 0xffffff).setStrokeStyle(2, 0x000000);
    btn.setInteractive();
    btn.setOrigin(0.5, 0.5);
    btn.on('pointerdown', clickedAnswer);
    btn.letter = letter;
    let btnText = scene.add.text(0, -2, letter, { fontFamily: FONT, fontSize: '50px', fill: '#000' });
    btnText.setOrigin(0.5, 0.5);

    return scene.add.container(x, y, [btn, btnText]);
  }

  var questionBackground = this.add.image(0, -150, 'questionBackground');
  var soundBtn = this.add.image(-260, -130, 'sound').setInteractive();
  soundBtn.setOrigin(0.5, 0.5);
  soundBtn.on('pointerdown', function() {
    utterThis = new SpeechSynthesisUtterance(questionsBank[score][0] + '. ' + questionsBank[score][1] + '. Spell ' + questionsBank[score][0]);
    utterThis.rate = 0.8;
    synth.speak(utterThis);
  });

  var submitBtn = this.add.image(260, -130, 'submit').setInteractive();
  submitBtn.setOrigin(0.5, 0.5);
  submitBtn.on('pointerdown', checkAnswer);

  answerText = this.add.text(0, -130, '', { fontFamily: FONT, fontSize: '50px', fill: '#000'});
  answerText.setOrigin(0.5, 0.5);

  var btns = [];
  let letters1 = 'abcdefghi';
  let letters2 = 'jklmnopqr';
  let letters3 = 'stuvwxyz<';
  for (let i=0; i<letters1.length; i++) {
    btns.push(addBtn(this, letters1[i], -275 + 70 * i, -20));
  }
  for (let i=0; i<letters2.length; i++) {
    btns.push(addBtn(this, letters2[i], -275 + 70 * i, 50));
  }
  for (let i=0; i<letters3.length; i++) {
    btns.push(addBtn(this, letters3[i], -275 + 70 * i, 120));
  }
  question = this.add.container(360, -410, [questionBackground, soundBtn, submitBtn, answerText, ...btns]);

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
  themes[0].volume = 0.8;
}

function restart() {
  if (tryAgain.visible == false) {
    return;
  }

  ninja.setPosition(120, 500);
  ninja.angle = 0;
  gameOver.setPosition(400, 200);
  gameOver.visible = false;
  tryAgain.visible = false;
  slowTimeScale = 0.1;
  gameOver.list[4].setText('');
  gameOver.list[2].setText('0');
  themeIndex = 0;
  score = 0;
  answerState = 'pending';
  answerText.setText('');
  questionsBank = Phaser.Actions.Shuffle(questionsBank);

  state.setState(state.INTRO);
}

function clickedAnswer () {
  // count filled letters
  let letterCount = 0;
  let text = answerText.text;
  for (let i=0; i<text.length; i++) {
    if (text[i] != '_') {
      letterCount++;
    }
  }

  // Backspace
  if (this.letter == '<') {
    if (letterCount > 0) {
      text = text.substring(0, letterCount - 1) + '_' + text.substring(letterCount);
    }
  

  // Character
  } else {
    if (letterCount < questionsBank[score][0].length) {
      text = text.substring(0, letterCount) + this.letter + text.substring(letterCount + 1);
    }
  }

  answerText.setText(text);
}

function checkAnswer() {
  let text = answerText.text;
  if (text.includes('_')) {
    return;
  }

  if (text == questionsBank[score][0]) {
    answerState = 'correct';
    score++;
  } else {
    answerState = 'wrong';
  }
}

function resetBaddies() {
  if (score == SCORE_CAP - 1) {
    baddyType = baddies.length - 1;
  } else {
    baddyType = Phaser.Math.Between(0, baddies.length - 2);
  }

  baddies.forEach(function(baddy) {
    baddy.x = BADDIES_START;
    baddy.y = baddy.baseY;
    baddy.angle = 0;
  });
}

function update (time, delta) {
  deltaTime += delta;
  var stateTime = deltaTime - state.startTime;
  var scaledDelta = delta * timeScale;

  // Move background and baddies
  function updateWorld() {
    for (let a=0; a<3; a++) {  // Move background
      for (let b=0; b<2; b++) {
        backgrounds[a][b].x -= BACKGROUND_SPEED[a] * scaledDelta * timeScale;
        if (backgrounds[a][b].x < -400) {
          backgrounds[a][b].x += 1600;
        }
      }
    }

    baddies[baddyType].x -= BACKGROUND_SPEED[2] * scaledDelta * timeScale; // Move baddy
  }

  // Intro screen
  if (state.state == state.INTRO) {
    if (state.firstRun) {
      state.firstRun = false;
      intro.tweenDrop.play({ loop: true });
    }

  // Ninja running
  } else if (state.state == state.RUN) {
    if (state.firstRun) {
      state.firstRun = false;
      resetBaddies();
      // setQuestion();
    }

    ninja.anims.play('run', true);

    updateWorld();

    // Slow down time and move question and answers down
    if (baddies[baddyType].x < 600) {
      answerState = 'pending'
      let placeholderText = '';
      for (let i=0; i<questionsBank[score][0].length; i++) {
        placeholderText += '_';
      }
      answerText.setText(placeholderText);
      state.setState(state.SLOW);
    }

  // Slow down time and wait for answer
  } else if (state.state == state.SLOW) {
    timeScale = slowTimeScale;
    ninja.anims.msPerFrame = 1000 / (30 * timeScale);
    if (question.y < 180) {
      question.y += 40;
    }
    if (themes[themeIndex].volume > 0) {
      themes[themeIndex].volume -= 0.02001;
    }
    if (themes[themeIndex].volume < 0) {
      themes[themeIndex].volume = 0;
      const utterThis = new SpeechSynthesisUtterance(questionsBank[score][0] + '. ' + questionsBank[score][1] + '. Spell ' + questionsBank[score][0]);
      utterThis.rate = 0.8;
      synth.speak(utterThis);
    }

    if (answerState != 'pending' || baddies[baddyType].x < 300) {
      state.setState(state.CONTINUE);
    }

    updateWorld();

  // Continue running and check if answer is correct
  } else if (state.state == state.CONTINUE) {
    timeScale = 1;
    ninja.anims.msPerFrame = 1000 / 30;
    if (question.y > -410) {
      question.y -= 40;
    }
    if (themes[themeIndex].volume < 0.8) {
      themes[themeIndex].volume += 0.02001;
      if (themes[themeIndex].volume > 0.8) {
        themes[themeIndex].volume = 0.8;
      }
    }

    if (baddies[baddyType].x < 220 && answerState == 'correct') { // Jump over
      console.log('jump');
      ninja.anims.play('jump', true);
      baddies[baddyType].angle = 60;
      baddies[baddyType].y += 20;
    }

    if (baddies[baddyType].x < 150 && (answerState == 'wrong' || answerState == 'pending')) { // Gets hit
      state.setState(state.LOSE);
    }

    if (baddies[baddyType].x < -50 || baddies[baddyType].y > 800) { // Reset baddy
      resetBaddies();
      answerText.setText('');
      if (score >= SCORE_CAP) {
        state.setState(state.COMPLETED);
      } else {
        state.setState(state.RUN);
      }
    }

    updateWorld();

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
    ninja.anims.play('run', true);
    ninja.x += BACKGROUND_SPEED[2] * scaledDelta;

    if (ninja.x > 900) {
      state.setState(state.GAME_OVER);
    }

  // Game Over screen
  } else {
    if (state.firstRun) {
      state.firstRun = false;
      gameOver.visible = true;
      gameOver.tweenDrop.play();
    }

    gameOver.list[2].setText(score.toString());
    if (score > 9) {
      gameOver.list[4].setText('Knight Commander');
    } else if (score > 8) {
      gameOver.list[4].setText('Paladin');
    } else if (score > 6) {
      gameOver.list[4].setText('Knight');
    } else if (score > 4) {
      gameOver.list[4].setText('Trainee Knight');
    } else if (score > 2) {
      gameOver.list[4].setText('Squire');
    } else {
      gameOver.list[4].setText('Page');
    }

    tryAgain.visible = true;
  }
}

