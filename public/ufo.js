var config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0 }
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
var ufo, tank, gameOver, intro;
var theme, shoot, shieldUp, hitUFO, captured;
var btns = [];
var speed = 20 / 1000;
var deltaTime = 0;
var score = 0;

const LOSE_X = 400;
const LOSE_Y = 420;
const BULLET_SPEED = 1000;

var state = {
  state: 0,
  stateStart: 0,

  INTRO: 0,
  AIM: 10,
  CORRECT: 20,
  WRONG: 30,
  CAPTURE: 40,
  ESCAPE: 50,
  GAME_OVER: 9999,

  setState: function (s) {
    this.state = s;
    this.stateStart = deltaTime;
  }
};

function preload () {
  this.load.setBaseURL('ufo');

  this.load.image('background', 'background.png');
  this.load.image('ufo', 'ufo.png');
  this.load.image('beam', 'beam.png');
  this.load.image('shield', 'shield.png');
  this.load.image('tank', 'tank.png');
  this.load.image('cannon', 'cannon.png');
  this.load.image('bullet', 'bullet.png');
  this.load.image('button', 'button.png');
  this.load.image('gameOver', 'gameOver.png');
  this.load.image('intro', 'intro.png');

  this.load.audio('theme', 'sneakingaround.mp3');
  this.load.audio('shoot', 'sfx_weapon_shotgun1.wav');
  this.load.audio('shieldUp', 'sfx_shieldup.mp3');
  this.load.audio('hitUFO', 'sfx_sound_neutral7.wav');
  this.load.audio('captured', 'sfx_sound_vaporizing.wav');

  scene = this;
}

function addBtn (scene, x) {
  var btn = scene.add.image(x, 560, 'button').setInteractive();
  btn.text = scene.add.text(x, 560, '', { fontFamily: 'Pangolin', fontSize: '32px', fill: '#000' });
  btn.text.setOrigin(0.5, 0.5);
  btn.on('pointerdown', clickedAnswer);
  btns.push(btn);
}

function create () {
  this.add.image(400, 300, 'background');

  // Intro
  intro = this.add.image(400, -200, 'intro').setInteractive();
  intro.on('pointerdown', function () {
    state.setState(state.AIM);
  });

  // UFO
  var ufoBeam = this.add.image(0, 100, 'beam');
  ufoBeam.visible = false;
  var ufoImg = this.add.image(0, 0, 'ufo');
  var ufoText = this.add.text(0, 10, '', { fontFamily: 'Pangolin', fontSize: '32px', fill: '#000' });
  ufoText.setOrigin(0.5, 0.5);
  var ufoShield = this.add.image(0,0, 'shield');
  ufoShield.visible = false;

  ufo = this.add.container(400, -50, [ufoBeam, ufoImg, ufoText, ufoShield]);
  ufo.setSize(ufoImg.width, ufoImg.height);
  this.physics.world.enable(ufo);

  // Tank
  var tankImg = this.add.image(0, 0, 'tank');
  var tankCannon = this.add.image(0, -30, 'cannon');
  tankCannon.setOrigin(0.5, 1);

  tank = this.add.container(400, 550, [tankCannon, tankImg]);
  this.physics.world.enable(tank);

  // Bullet
  tank.bullet = this.physics.add.image(400, -700, 'bullet');

  // Game Over
  var gameOverBackground = this.add.image(0, 0, 'gameOver');
  var gameOverText1 = this.add.text(80, -70, '- Your Score -', { fontFamily: 'Pangolin', fontSize: '40px', fill: '#fff' })
  gameOverText1.setOrigin(0.5, 0.5);
  var gameOverText2 = this.add.text(80, 0, '0', { fontFamily: 'Pangolin', fontSize: '32px', fill: '#fff' })
  gameOverText2.setOrigin(0.5, 0.5);
  var gameOverText3 = this.add.text(80, 50, '', { fontFamily: 'Pangolin', fontSize: '32px', fill: '#ff0000' })
  gameOverText3.setOrigin(0.5, 0.5);

  gameOver = this.add.container(400, -200, [gameOverBackground, gameOverText1, gameOverText2, gameOverText3]);
  gameOver.visible = false;

  // Answer buttons
  addBtn(this, 100);
  addBtn(this, 250);
  addBtn(this, 550);
  addBtn(this, 700);

  this.physics.add.overlap(ufo, tank.bullet, hit, null, this);

  // Set up background music
  theme = this.sound.add('theme');
  shoot = this.sound.add('shoot');
  shieldUp = this.sound.add('shieldUp');
  hitUFO = this.sound.add('hitUFO');
  captured = this.sound.add('captured');
  theme.play({ loop: true });

  // scene.sound.volume = 0;

  reset();
}

function clickedAnswer () {
  if (tank.bullet.answer === null) {
    console.log(this.choice);
    tank.bullet.answer = this.choice;
    var dirVec = new Phaser.Math.Vector2(ufo.x - tank.x, ufo.y - tank.y - 30).normalize();
    tank.bullet.x = tank.x + dirVec.x * 50;
    tank.bullet.y = tank.y - 30 + dirVec.y * 50;
    scene.physics.moveToObject(tank.bullet, ufo, BULLET_SPEED);
    shoot.play();
  }
}

function hit(ufo, bullet) {
  if (ufo.answer == tank.bullet.answer) {
    console.log('correct');

    score += 10;
    console.log(score);
    speed += 5 / 1000;

    tank.bullet.setVelocity(0, 0);
    tank.bullet.y = -700;

    state.setState(state.CORRECT);
    hitUFO.play();

  } else {
    console.log('wrong');

    state.setState(state.WRONG);
    shieldUp.play();
  }
}

function setQuestion() {
  var first, second, operator, largestNumber;
  const OPERATORS = ['+', '-', 'x', '/'];

  if (score < 50) {
    operator = Phaser.Math.Between(0,0);
    largestNumber = 9;

  } else if (score < 100) {
    operator = Phaser.Math.Between(0,1);
    largestNumber = 9;

  } else if (score < 200) {
    operator = Phaser.Math.Between(0,2);
    largestNumber = 9;

  } else if (score < 300) {
    operator = Phaser.Math.Between(0,2);
    largestNumber = 19;

  } else {
    operator = Phaser.Math.Between(0,3);
    largestNumber = 29;
  }

  if (operator == 0) {
    first = Phaser.Math.Between(1, largestNumber);
    second = Phaser.Math.Between(1, largestNumber);
    ufo.answer = first + second;
  } else if (operator == 1) {
    first = Phaser.Math.Between(Math.floor(largestNumber / 2), largestNumber);
    second = Phaser.Math.Between(1, first);
    ufo.answer = first - second;
  } else if (operator == 2) {
    first = Phaser.Math.Between(1, 9);
    second = Phaser.Math.Between(1, 9);
    ufo.answer = first * second;
  } else if (operator == 3) {
    ufo.answer = Phaser.Math.Between(1, 9);
    second = Phaser.Math.Between(1, 9);
    first = second * ufo.answer;
  }

  ufo.list[2].setText(first + OPERATORS[operator] + second);
}

function reset() {
  setQuestion();

  ufo.list[0].visible = false;
  ufo.body.setVelocity(0,0);
  ufo.angle = 0;

  ufo.x = Phaser.Math.Between(300, 500);
  ufo.baseX = ufo.x;
  ufo.y = -50;

  tank.bullet.y = -700;
  tank.bullet.answer = null;

  var choices = [ufo.answer];
  for (let i=0; i<3; i++) {
    do {
      var choice = ufo.answer + Phaser.Math.Between(-9, 9);
    } while (choices.includes(choice) || choice < 0);
    choices.push(choice);
  }
  Phaser.Actions.Shuffle(choices);

  for (let i=0; i<4; i++) {
    btns[i].choice = choices[i];
    btns[i].text.setText(choices[i])
  }

  answer = null;
}

function update (time, delta) {
  deltaTime += delta;
  var stateTime = deltaTime - state.stateStart;

  // Intro screen
  if (state.state == state.INTRO) {
    if (intro.y < 300) {
      intro.y += 20;
    }

  // UFO flying down
  } else if (state.state == state.AIM) {
    if (intro.y > -200) {
      intro.y -= 40;
    }
    ufo.y += speed * delta;
    ufo.x = ufo.baseX + Math.sin(deltaTime / 1000) * 150;

    var dir = Phaser.Math.Angle.BetweenPoints(tank, ufo);
    tank.list[0].setRotation(dir + Math.PI / 2);

    if (ufo.y >= LOSE_Y) {
      state.setState(state.CAPTURE);
    }

  // Hit with correct answer
  } else if (state.state == state.CORRECT) {
    ufo.angle += 5;
    scene.physics.moveTo(ufo, -200, -200, 500);

    if (ufo.x <= -200 && ufo.y <= -200) {
      reset();
      state.state = state.AIM;
    }

  // Hit with wrong answer
  } else if (state.state == state.WRONG) {
    scene.physics.moveTo(tank.bullet, -100, 1000, BULLET_SPEED);
    if (tank.bullet.y > 900) {
      tank.bullet.setVelocity(0,0);
    }

    if (stateTime < 200) {
      ufo.list[3].visible = true;
    } else {
      ufo.list[3].visible = false;
      state.setState(state.CAPTURE);
    }

  // UFO capturing tank
  } else if (state.state == state.CAPTURE) {
    if (Phaser.Math.Distance.Between(ufo.x, ufo.y, LOSE_X, LOSE_Y) > 5) {
      scene.physics.moveTo(ufo, LOSE_X, LOSE_Y, 250);
    } else {
      ufo.x = LOSE_X;
      ufo.y = LOSE_Y;
      ufo.body.setVelocity(0,0);
      ufo.list[0].visible = true;
      state.setState(state.ESCAPE);
      captured.play();
    }

  // UFO escape with tank
  } else if (state.state == state.ESCAPE) {
    if (stateTime > 300) {
      scene.physics.moveTo(ufo, 400, -500, 250);
      scene.physics.moveTo(tank, 400, -400, 250);
    }
    if (ufo.y <= -490) {
      ufo.body.setVelocity(0, 0);
      tank.body.setVelocity(0, 0);
      gameOver.visible = true;

      postResult({
        game: 'ufo',
        score: score
      });

      state.setState(state.GAME_OVER);
    }

  // Game Over screen
  } else {
    gameOver.visible = true;
    if (gameOver.y < 300) {
      gameOver.y += 20;
    } else {
      var current = parseInt(gameOver.list[2].text);
      if (current < score) {
        current++;
        gameOver.list[2].setText(current);
      } else {
        if (score > 400) {
          gameOver.list[3].setText('Out of this World!');
        } else if (score > 300) {
          gameOver.list[3].setText('Incredible!');
        } else if (score > 200) {
          gameOver.list[3].setText('Amazing!');
        } else if (score > 150) {
          gameOver.list[3].setText('Great Work!');
        } else if (score > 100) {
          gameOver.list[3].setText('Well Done!');
        } else if (score > 50) {
          gameOver.list[3].setText('Good Effort!');
        } else {
          gameOver.list[3].setText('Try Harder!');
        }
      }
    }
  }
}

