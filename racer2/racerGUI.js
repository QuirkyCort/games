var FONT_SCALE;

function drawStartScreen() {
  var rect = new BABYLON.GUI.Rectangle();
  rect.adaptHeightToChildren = true;
  rect.width = '60%';
  rect.height = '50%';
  rect.cornerRadius = 20;
  rect.color = 'red';
  rect.thickness = 4;
  rect.background = 'grey';
  rect.paddingLeft = '10px';
  rect.paddingRight = '10px';

  var grid = new BABYLON.GUI.Grid();
  grid.addColumnDefinition(1);
  grid.addRowDefinition(0.7);
  grid.addRowDefinition(0.3);

  var text = new BABYLON.GUI.TextBlock();
  text.text = 'Complete all questions!\n\nAnswer correctly to speed up.\n\nA wrong answer or a collision will slow you down.';
  text.color = 'white';
  text.textWrapping = true;
  text.fontSize = 24 * FONT_SCALE;

  var button1 = BABYLON.GUI.Button.CreateSimpleButton('but1', 'Start');
  button1.width = '200px'
  button1.height = '60px';
  button1.color = 'white';
  button1.cornerRadius = 20;
  button1.background = 'green';
  button1.fontSize = 40;
  button1.onPointerClickObservable.add(function() {
      state.setState(state.COUNT_DOWN);
      BABYLON.Engine.audioEngine.unlock()
  });

  grid.addControl(text, 0, 0);
  grid.addControl(button1, 1, 0);
  rect.addControl(grid);

  advancedTexture.addControl(rect);
  rect.isVisible = false;
  return rect;
}

function drawCountDownScreen() {
  var rect = new BABYLON.GUI.Rectangle();
  rect.width = '480px';
  rect.height = '160px';
  rect.cornerRadius = 20;
  rect.color = 'white';
  rect.thickness = 4;
  rect.background = 'black';
  rect.paddingLeft = '10px';
  rect.paddingRight = '10px';

  var text = new BABYLON.GUI.TextBlock();
  text.text = 'Ready!';
  text.color = 'white';
  text.textWrapping = true;
  text.fontSize = 128;

  rect.addControl(text);

  var timer;
  rect.start = function() {
    timer = setInterval(function() {
      if (text.text == 'Ready!') {
        text.text = '3';
        rect.width = '160px';
        beep1.play();
      } else if (text.text == '3') {
        text.text = '2';
        beep1.play();
      } else if (text.text == '2') {
        text.text = '1';
        beep1.play();
      } else if (text.text == '1') {
        text.text = 'GO!';
        rect.background = 'green'
        rect.width = '300px';
        beep2.play();
      } else {
        clearInterval(timer);
        state.setState(state.RUN);
        music.play();
      }
    }, 1000)
  }

  advancedTexture.addControl(rect);
  rect.isVisible = false;
  return rect;
}

function drawHUD() {
  var rect = new BABYLON.GUI.Rectangle();
  rect.width = '100%';
  rect.height = '100%';

  speedo = new BABYLON.GUI.Rectangle();
  speedo.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
  speedo.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
  speedo.width = '130px';
  speedo.height = '53px';
  speedo.left = '0%';
  speedo.top = '2%';
  speedo.cornerRadius = 20;
  speedo.color = 'white';
  speedo.thickness = 4;
  speedo.background = 'black';
  speedo.paddingRight= '10px';

  var text = new BABYLON.GUI.TextBlock();
  text.text = '0';
  text.fontFamily = 'Roboto Mono';
  text.color = 'cyan';
  text.left = '-48px';
  text.fontSize = 32;
  text.textHorizontalAlignment = 1;

  var text2 = new BABYLON.GUI.TextBlock();
  text2.text = 'km/h';
  text2.fontFamily = 'Roboto Mono';
  text2.left = '30px';
  text2.top = '-5px';
  text2.color = 'cyan';
  text2.fontSize = 16;
  text2.textVerticalAlignment = 1;

  var odo = new BABYLON.GUI.Rectangle();
  odo.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_TOP;
  odo.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_LEFT;
  odo.width = '120px';
  odo.height = '40px';
  odo.left = '2%';
  odo.top = '2%';
  odo.cornerRadius = 20;
  odo.color = 'white';
  odo.thickness = 4;
  odo.background = 'black';
  odo.paddingRight= '10px';

  var text3 = new BABYLON.GUI.TextBlock();
  text3.text = '200.0 km';
  text3.fontFamily = 'Roboto Mono';
  text3.left = '-10px';
  text3.color = 'cyan';
  text3.fontSize = 16;
  text3.textHorizontalAlignment = 1;

  // var clock = new BABYLON.GUI.Rectangle();
  // clock.width = '160px';
  // clock.height = '80px';
  // clock.left = '-290px';
  // clock.top = '-170px';
  // clock.cornerRadius = 20;
  // clock.color = 'white';
  // clock.thickness = 4;
  // clock.background = 'black';
  // clock.paddingRight= '10px';

  // var text4 = new BABYLON.GUI.TextBlock();
  // text4.text = '100';
  // text4.fontFamily = 'Roboto Mono';
  // text4.color = 'white';
  // text4.fontSize = 48;

  left = BABYLON.GUI.Button.CreateSimpleButton('left', '<');
  left.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
  left.textBlock.fontSize = 36;
  left.left = '-100px';
  left.top = '-8%';
  left.width = '120px'
  left.height = '80px';
  left.color = 'white';
  left.cornerRadius = 24;
  left.background = 'green';
  left.onPointerClickObservable.add(function(pos, evt) {
    player.targetX = player.LEFT;
  });

  right = BABYLON.GUI.Button.CreateSimpleButton('right', '>');
  right.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
  right.textBlock.fontSize = 36;
  right.left = '100px';
  right.top = '-8%';
  right.width = '120px'
  right.height = '80px';
  right.color = 'white';
  right.cornerRadius = 24;
  right.background = 'green';
  right.onPointerClickObservable.add(function(pos, evt) {
    player.targetX = player.RIGHT;
  });

  speedo.addControl(text);
  speedo.addControl(text2);
  odo.addControl(text3);
  // clock.addControl(text4);
  rect.addControl(speedo);
  rect.addControl(odo);
  // rect.addControl(clock);
  rect.addControl(left);
  rect.addControl(right);

  rect.setSpeed = function(speed) {
    text.text = String(Math.round(speed));
  }
  rect.setDistance = function(dist) {
    dist = new Intl.NumberFormat('en-GB').format(Math.round(dist));
    text3.text = dist + ' m';
  }
  // rect.setTime = function(time) {
  //   time = Math.round(time);
  //   if (time <= 10) {
  //     text4.color = 'red';
  //   } else if (time <= 20) {
  //     text4.color = 'orange';
  //   } else {
  //     text4.color = 'white';
  //   }
  //   text4.text = String(time);
  // }

  advancedTexture.addControl(rect);
  rect.isVisible = false;
  return rect;
}

function drawEndScreen() {
  var rect = new BABYLON.GUI.Rectangle();
  rect.adaptHeightToChildren = true;
  rect.width = '400px';
  rect.height = '400px';
  rect.cornerRadius = 20;
  rect.color = 'green';
  rect.thickness = 4;
  rect.background = 'black';
  rect.paddingLeft = '10px';
  rect.paddingRight = '10px';

  var text = new BABYLON.GUI.TextBlock();
  text.text = '';
  text.color = 'white';
  text.textWrapping = true;
  text.fontSize = 48;

  rect.addControl(text);

  rect.setDistance = function(dist) {
    dist = new Intl.NumberFormat('en-GB').format(dist.toFixed(1));
    if (dist.indexOf('.') == -1) {
      dist += '.0';
    }
    let missed = questionsBank.length - correct - wrong;
    text.text = 'You travelled\n' + dist + ' km\n\n' + 'Correct: ' + correct + '\nIncorrect: ' + wrong + '\nMissed: ' + missed;
  }

  advancedTexture.addControl(rect);
  rect.isVisible = false;
  return rect;
}

function drawBang() {
  var rect = new BABYLON.GUI.Rectangle();
  rect.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
  rect.width = '100px';
  rect.height = '100px';
  rect.top = '-28%';
  let offset = 0.12 * document.getElementById('renderCanvas').height + 6.6;
  rect.LEFT = '-' + offset + 'px';
  rect.RIGHT = offset + 'px';

  rect.thickness = 0;
  var image = new BABYLON.GUI.Image("but", "media/bang.png");
  image.stretch = BABYLON.GUI.Image.STRETCH_UNIFORM;

  rect.addControl(image);
  advancedTexture.addControl(rect);
  rect.isVisible = false;
  rect.animateTime = 0;
  return rect;
}

function drawQuestionResult() {
  var question = new BABYLON.GUI.Rectangle();
  question.width = '300px';
  question.height = '100px';
  question.top = '-100px';
  question.cornerRadius = 20;
  question.color = 'white';
  question.background = 'black';
  question.thickness = 4;
  question.alpha = 0.5;
  question.isVisible = false;

  question.text = new BABYLON.GUI.TextBlock();
  question.text.width = '580px';
  question.text.textWrapping = true;
  question.text.fontFamily = 'Roboto Mono';
  question.text.fontSize = 36;
  question.text.color = 'white';

  question.text.text = 'Correct';

  question.addControl(question.text);
  advancedTexture.addControl(question);

  return question;
}

function drawQuestion() {
  var rect = new BABYLON.GUI.Rectangle();
  rect.width = '100%';
  rect.height = '400px';
  rect.top = '0px';
  rect.alpha = 0.5;
  rect.thickness = 0;
  // rect.background = 'white';

  let answersPos = [
    ['20%', '70px'],
    ['-20%', '70px'],
    ['20%', '-70px'],
    ['-20%', '-70px'],
  ];
  answers = [];
  for (let i=0; i<4; i++) {
    let answer = BABYLON.GUI.Button.CreateSimpleButton('answer', '');
    answer.textBlock.fontSize = 40;
    answer.left = answersPos[i][0];
    answer.top = answersPos[i][1];
    answer.width = '180px'
    answer.height = '90px';
    answer.color = 'white';
    answer.cornerRadius = 24;
    answer.background = 'green';
    answer.onPointerClickObservable.add(function(pos, evt) {
      if (correctAnswer == evt.currentTarget.textBlock.text) {
        questionResultScreen.text.text = 'Correct!';
        questionResultScreen.background = 'green';
        targetSpeed += 5 / 10000;
        questionResultScreen.isVisible = true;
        questionScreen.isVisible = false;

        correct += 1;
      } else {
        questionResultScreen.text.text = 'Wrong!';
        questionResultScreen.background = 'red';
        targetSpeed -= 5 / 10000;
        if (targetSpeed < 70 / 10000) {
          targetSpeed = 70 / 10000;
        }
        questionResultScreen.isVisible = true;
        questionScreen.isVisible = false;

        wrong += 1;
      }
    });
    answers.push(answer);
    rect.addControl(answer);
  }

  advancedTexture.addControl(rect);
  rect.isVisible = false;
  return rect;
}