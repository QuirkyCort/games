function drawStartScreen() {
  var rect = new BABYLON.GUI.Rectangle();
  rect.adaptHeightToChildren = true;
  rect.width = '400px';
  rect.height = '300px';
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
  text.text = 'Travel as far as you can before time runs out!\n\nAnswer correctly to speed up.\nA wrong answer will reduce your speed.';
  text.color = 'white';
  text.textWrapping = true;
  text.fontSize = 24;

  var button1 = BABYLON.GUI.Button.CreateSimpleButton('but1', 'Start');
  button1.width = '150px'
  button1.height = '40px';
  button1.color = 'white';
  button1.cornerRadius = 20;
  button1.background = 'green';
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

  var speedo = new BABYLON.GUI.Rectangle();
  speedo.width = '200px';
  speedo.height = '80px';
  speedo.left = '300px';
  speedo.top = '-240px';
  speedo.cornerRadius = 20;
  speedo.color = 'white';
  speedo.thickness = 4;
  speedo.background = 'black';
  speedo.paddingRight= '10px';

  var text = new BABYLON.GUI.TextBlock();
  text.text = '0';
  text.fontFamily = 'Roboto Mono';
  text.color = 'cyan';
  text.left = '-70px';
  text.fontSize = 48;
  text.textHorizontalAlignment = 1;

  var text2 = new BABYLON.GUI.TextBlock();
  text2.text = 'km/h';
  text2.fontFamily = 'Roboto Mono';
  text2.left = '50px';
  text2.top = '-10px';
  text2.color = 'cyan';
  text2.fontSize = 24;
  text2.textVerticalAlignment = 1;

  var odo = new BABYLON.GUI.Rectangle();
  odo.width = '200px';
  odo.height = '60px';
  odo.left = '-270px';
  odo.top = '-250px';
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
  text3.fontSize = 24;
  text3.textHorizontalAlignment = 1;

  var clock = new BABYLON.GUI.Rectangle();
  clock.width = '160px';
  clock.height = '80px';
  clock.left = '-290px';
  clock.top = '-170px';
  clock.cornerRadius = 20;
  clock.color = 'white';
  clock.thickness = 4;
  clock.background = 'black';
  clock.paddingRight= '10px';

  var text4 = new BABYLON.GUI.TextBlock();
  text4.text = '100';
  text4.fontFamily = 'Roboto Mono';
  text4.color = 'white';
  text4.fontSize = 48;

  speedo.addControl(text);
  speedo.addControl(text2);
  odo.addControl(text3);
  clock.addControl(text4);
  rect.addControl(speedo);
  rect.addControl(odo);
  rect.addControl(clock);

  rect.setSpeed = function(speed) {
    text.text = String(Math.round(speed));
  }
  rect.setDistance = function(dist) {
    dist = new Intl.NumberFormat('en-GB').format(dist.toFixed(1));
    if (dist.indexOf('.') == -1) {
      dist += '.0';
    }
    text3.text = dist + ' km';
  }
  rect.setTime = function(time) {
    time = Math.round(time);
    if (time <= 10) {
      text4.color = 'red';
    } else if (time <= 20) {
      text4.color = 'orange';
    } else {
      text4.color = 'white';
    }
    text4.text = String(time);
  }

  advancedTexture.addControl(rect);
  rect.isVisible = false;
  return rect;
}

function drawEndScreen() {
  var rect = new BABYLON.GUI.Rectangle();
  rect.adaptHeightToChildren = true;
  rect.width = '400px';
  rect.height = '300px';
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
    text.text = 'You travelled\n' + dist + ' km';
  }

  advancedTexture.addControl(rect);
  rect.isVisible = false;
  return rect;
}


function drawQuestion() {
  var rect = new BABYLON.GUI.Rectangle();
  rect.width = '100%';
  rect.height = '400px';
  rect.top = '95px';
  rect.alpha = 0.5;
  rect.thickness = 0;
  // rect.background = 'white';

  var question = new BABYLON.GUI.Rectangle();
  question.width = '600px';
  question.height = '160px';
  question.top = '-100px';
  question.cornerRadius = 20;
  question.color = 'white';
  question.thickness = 4;

  var text = new BABYLON.GUI.TextBlock();
  text.width = '580px';
  text.textWrapping = true;
  text.fontFamily = 'Roboto Mono';
  text.fontSize = 36;
  text.text = '';

  answers = [];
  for (let i=0; i<4; i++) {
    let answer = BABYLON.GUI.Button.CreateSimpleButton('answer', '');
    answer.textBlock.fontSize = 36;
    answer.left = (i * 150 - 225) + 'px';
    answer.top = '120px';
    answer.width = '140px'
    answer.height = '60px';
    answer.color = 'white';
    answer.cornerRadius = 24;
    answer.background = 'green';
    answer.onPointerClickObservable.add(function(pos, evt) {
      if (correctAnswer == evt.currentTarget.textBlock.text) {
        text.text = 'Correct!';
        text.color = 'white';
        question.background = 'green';
        targetSpeed += 10 / 10000;
        if (targetSpeed > 500 / 10000) {
          targetSpeed = 500 / 10000;
        }
        score += 10;
      } else {
        text.text = 'Wrong!';
        text.color = 'white';
        question.background = 'red';
        targetSpeed -= 10 / 10000;
        if (targetSpeed < 50 / 10000) {
          targetSpeed = 50 / 10000;
        }
        wrong += 1;
      }
      setTimeout(function() {
        questionScreen.nextQuestion();
      }, 1000)
    });
    answers.push(answer);
    rect.addControl(answer);
  }

  question.addControl(text);
  rect.addControl(question);

  rect.nextQuestion = function() {
    text.color = 'cyan';
    question.background = 'black';

    var currentSet;

    for (let i=questionsBank.length-1; i>=0; i--) {
      if (score >= questionsBank[i].level) {
        let index = questionsBank[i].i;
        questionsBank[i].i++;
        if (questionsBank[i].i >= questionsBank[i].questions.length) {
          questionsBank[i].i = 0;
        }
        currentSet = questionsBank[i].questions[index];
        break;
      }
    }

    correctAnswer = currentSet[1];
    var options = shuffle(currentSet.slice(1));

    text.text = currentSet[0];
    for (let i=0; i<4; i++) {
      answers[i].textBlock.text = options[i];
    }
    answer = null;
  }

  advancedTexture.addControl(rect);
  rect.isVisible = false;
  return rect;
}