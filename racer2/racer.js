var canvas = document.getElementById('renderCanvas');
var engine = new BABYLON.Engine(canvas, true);
var advancedTexture;
var shadowGenerator;

var inputMap = {};

var roads = [];
var traffic = [];
var roadSide = [];
var roadArrowCounter = 0;
var speed = 0;
var targetSpeed = 0;
const ACCELERATION = 0.5 / 10000;
const DECELERATION = 0.005 / 10000;
const AUTO_STEER_SPEED = 1.5 / 1000;
const SLOW_DOWN_FACTOR = 0.1;
var distance = 0;
var time = 100 * 1000;
var trafficSpeedFactor = 0.3;
var roadSegmentsCount = 0;
var nextTraffic = 0;
var nextDeco = 0;
var correct = 0;
var wrong = 0;
var timeScale = 1;

var state = {
  state: 0,
  startTime: 0,
  firstRun: true,

  INTRO: 0,
  COUNT_DOWN: 10,
  RUN: 20,
  SLOW_DOWN: 30,
  COMPLETED: 40,

  setState: function (s) {
    this.state = s;
    this.firstRun = true;
  }
};

var startScreen, countDownScreen, hudScreen, questionScreen;

var FONT_SCALE = 0;

var createScene = function () {
  let vFontScale = document.getElementById('renderCanvas').height / 600;
  let hFontScale = document.getElementById('renderCanvas').width / 600;

  if (vFontScale < hFontScale) {
    FONT_SCALE = vFontScale;
  } else {
    FONT_SCALE = hFontScale;
  }

  // Create the scene space
  var scene = new BABYLON.Scene(engine);
  advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI');
  // var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
  // var physicsPlugin = new BABYLON.CannonJSPlugin();
  // scene.enablePhysics(gravityVector, physicsPlugin);

  // var options = new BABYLON.SceneOptimizerOptions(60, 50);
  // options.addOptimization(new BABYLON.HardwareScalingOptimization(0, 8));
  // // options.addOptimization(BABYLON.SceneOptimizerOptions.HighDegradationAllowed());
  // var optimizer = new BABYLON.SceneOptimizer(scene, options);
  // optimizer.start();

  // Load GUI
  startScreen = drawStartScreen();
  countDownScreen = drawCountDownScreen();
  hudScreen = drawHUD();
  endScreen = drawEndScreen();
  questionScreen = drawQuestion();
  questionResultScreen = drawQuestionResult();
  bang = drawBang();

  // Load Sound
  music = new BABYLON.Sound('Music', 'media/grasslands.mp3', scene, null, {
    loop: true,
    autoplay: false
  });
  beep1 = new BABYLON.Sound('Music', 'media/beep1.mp3', scene, null, {
    loop: false,
    autoplay: false
  });
  beep2 = new BABYLON.Sound('Music', 'media/beep2.mp3', scene, null, {
    loop: false,
    autoplay: false
  });

  // Add a camera to the scene and attach it to the canvas
  // var camera = new BABYLON.UniversalCamera('UniversalCamera', new BABYLON.Vector3(0, 3, -10), scene);
  var camera = new BABYLON.ArcRotateCamera('Camera', Math.PI / 2, Math.PI / 2.7, 7, new BABYLON.Vector3(0, 0, 0), scene);
  camera.wheelPrecision = 20;
  // camera.attachControl(canvas, true);

  // Add lights to the scene
  var lightHemi = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1, 1, 0), scene);
  lightHemi.groundColor = new BABYLON.Color3(0.1, 0.2, 0.1);
  lightHemi.intensity = 0.5;

  var lightDir = new BABYLON.DirectionalLight('DirectionalLight', new BABYLON.Vector3(-1, -1, -1), scene);
  lightDir.position.y = 10;
  lightDir.intensity = 0.8;

  // shadowGenerator = new BABYLON.ShadowGenerator(1024, lightDir);
  // shadowGenerator.bias =  0.000005;
  // // shadowGenerator.useExponentialShadowMap = false;
  // shadowGenerator.useBlurExponentialShadowMap = true;

  scene.shadowsEnabled = false;

  // sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {diameter: 0.2}, scene); //default sphere
  // sphere.position.x = 1;
  // sphere.position.y = 0.5;
  // shadowGenerator.addShadowCaster(sphere);

  // Add meshes in the scene
  engine.displayLoadingUI();

  // Invisible walls and floor
  // boxLeft = BABYLON.MeshBuilder.CreateBox('boxLeft', {height: 10, width: 1, depth: 50}, scene);
  // boxLeft.position.x = 1.6;
  // boxLeft.visibility = 0;
  // boxLeft.physicsImpostor = new BABYLON.PhysicsImpostor(
  //   boxLeft,
  //   BABYLON.PhysicsImpostor.BoxImpostor,
  //   {
  //     mass: 0,
  //     restitution: 0.9
  //   },
  //   scene
  // );
  // boxRight = BABYLON.MeshBuilder.CreateBox('boxRight', {height: 10, width: 1, depth: 50}, scene);
  // boxRight.position.x = -1.6;
  // boxRight.visibility = 0;
  // boxRight.physicsImpostor = new BABYLON.PhysicsImpostor(
  //   boxRight,
  //   BABYLON.PhysicsImpostor.BoxImpostor,
  //   {
  //     mass: 0,
  //     restitution: 0.9
  //   },
  //   scene
  // );
  ground = BABYLON.MeshBuilder.CreateGround('ground', {width: 50, height: 70, subdivisions: 2}, scene);
  ground.visibility = 1;
  ground.position.y = -0.02;
  // ground.physicsImpostor = new BABYLON.PhysicsImpostor(
  //   ground,
  //   BABYLON.PhysicsImpostor.PlaneImpostor,
  //   {},
  //   scene
  // );
  // ground.receiveShadows = true;
  var groundMat = new BABYLON.StandardMaterial('groundMat', scene);
  groundMat.diffuseColor = new BABYLON.Color3(0.19, 0.33, 0.24);
  ground.material = groundMat;

  Promise.all(getModelsList()).then(function() {
    // Setup starting positions of road
    var road;
    for (let z=0; z<20; z++) {
      if (z == 1) {
        road = roadStartPositions.clone();
      } else if (z == 2) {
        road = roadStart.clone();
      } else {
        road = getStraightRoad();
      }
      road.position.z = -z * 2 + 5;
      roads.push(road);
    }

    // pv = new BABYLON.PhysicsViewer(scene);

    signboard = BABYLON.MeshBuilder.CreatePlane("signboard", {width: 1.2, height: 0.6}, scene);
    signboard.parent = overhead;
    signboard.rotation.y = Math.PI;
    signboard.position.z = -0.51;
    signboard.position.y = 0.8
    signboard.setEnabled(true);

    textureQuestion = new BABYLON.DynamicTexture("question texture", {width:512, height:256}, scene);

    var mat = new BABYLON.StandardMaterial("Mat", scene);
    mat.diffuseTexture = textureQuestion;
    signboard.material = mat;


    // Handle events
    scene.actionManager = new BABYLON.ActionManager(scene);
    scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({
          trigger: BABYLON.ActionManager.OnEveryFrameTrigger
        },
        render
      )
    );
    // scene.actionManager.registerAction(
    //   new BABYLON.ExecuteCodeAction({
    //       trigger: BABYLON.ActionManager.OnKeyDownTrigger
    //     },
    //     function(evt) {
    //       inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == 'keydown';
    //     }
    //   )
    // );
    // scene.actionManager.registerAction(
    //   new BABYLON.ExecuteCodeAction({
    //       trigger: BABYLON.ActionManager.OnKeyUpTrigger
    //     },
    //     function(evt) {
    //       inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == 'keydown';
    //     }
    //   )
    // );
    engine.hideLoadingUI();
  });

  return scene;
};

var roadStartCount = 3;
/********* Render loop ***********/
function render() {
  var delta = scene.getEngine().getDeltaTime() * timeScale;

  stateHandler(delta);
  distance += speed * delta;

  // Move road
  roads.forEach(function(road, i) {
    road.position.z += speed * delta;
    if (road.position.z > 5) {
      if (roadStartCount > 0) {
        var tempRoad = getRoad();
        tempRoad.position.z = road.position.z -= 40;
        road.dispose();
        roads[i] = tempRoad;
        roadStartCount--;
      } else {
        road.position.z = road.position.z -= 40;
      }
      roadSegmentsCount++;
    }
    if (road.position.z < -30) {
      road.position.y = 0.5 * (-30 - road.position.z);
    } else {
      road.position.y = 0;
    }
  });

  // Add traffic
  if (roadSegmentsCount > nextTraffic) {
    nextTraffic = roadSegmentsCount + 10;
    addTraffic();
  }

  // Add deco
  if (roadSegmentsCount > nextDeco) {
    nextDeco = roadSegmentsCount + 3;
    addDeco();
  }

  // Move traffic
  traffic.forEach(function(vehicle, i) {
    if (vehicle == null) {
      return;
    }
    vehicle.position.z += speed * delta * trafficSpeedFactor;
    if (vehicle.position.z > 5 || vehicle.position.z < -41) {
      vehicle.dispose();
      traffic[i] = null;
    }
    if (vehicle.position.z < -28) {
      vehicle.position.y = 0.5 * (-28 - vehicle.position.z);
    } else {
      vehicle.position.y = 0;
    }
  });
  traffic = traffic.filter(function(vehicle) {
    return vehicle !== null;
  });

  // Move deco
  roadSide.forEach(function(deco, i) {
    deco.position.z += speed * delta;
    if (deco.position.z > 6) {
      deco.dispose();
      roadSide[i] = null;
    }
    if (deco.position.z < -30) {
      deco.position.y = 0.5 * (-30 - deco.position.z);
    } else {
      deco.position.y = 0;
    }
  });
  roadSide = roadSide.filter(function(deco) {
    return deco !== null;
  });

  // Move signboard
  overhead.position.z += speed * delta;
  if (overhead.position.z < -4) {
    timeScale = 1;
  } else if (overhead.position.z < 4) {
    timeScale = SLOW_DOWN_FACTOR;
  } else if (overhead.position.z < 20) {
    timeScale = 1;
  } else if (overhead.position.z < 50) {
    if (questionResultScreen.isVisible == false) {
      questionScreen.isVisible = true;
    }
  } else {
    questionScreen.isVisible = false;
    questionResultScreen.isVisible = false;
    showQuestion();
  }
  if (overhead.position.z < -30) {
    overhead.position.y = 0.5 * (-30 - overhead.position.z);
  } else {
    overhead.position.y = 0;
  }

  // Move car
  let SPEED = 0.0025;
  if (player.targetX == player.LEFT) {
    if (player.position.x < player.targetX) {
      player.position.x += delta * SPEED;
    }
    if (player.position.x > player.targetX) {
      player.position.x = player.targetX;
    }
  } else {
    if (player.position.x > player.targetX) {
      player.position.x -= delta * SPEED;
    }
    if (player.position.x < player.targetX) {
        player.position.x = player.targetX;
      }
    }

  // Check for collision
  traffic.forEach(function(vehicle, i) {
    if (vehicle.intersectsMesh(player)) {
      vehicle.dispose();
      traffic[i] = null;
      targetSpeed -= 5
      if (targetSpeed < 70 / 10000) {
        targetSpeed = 70 / 10000;
      }
      if (player.position.x > 0) {
        bang.left = bang.LEFT;
      } else {
        bang.left = bang.RIGHT;
      }
      bang.isVisible = true
    }
  });
  traffic = traffic.filter(function(vehicle) {
    return vehicle !== null;
  });

  // Animate bang
  if (bang.isVisible) {
    let scale = 1;
    if (bang.animateTime < 250) {
      scale = 1 + bang.animateTime / 250;
    } else if (bang.animateTime < 500) {
      scale = 1 + (500 - bang.animateTime) / 250;
    } else {
      bang.isVisible = false;
      bang.animateTime = 0;
    }
    bang.scaleX = scale;
    bang.scaleY = scale;
    bang.animateTime += delta;
  }
};

/******** Handle game logic based on current game state ********/
function stateHandler(delta) {
  if (state.state == state.INTRO) {
    if (state.firstRun) {
      state.firstRun = false;
      startScreen.isVisible = true;
    }
  } else if (state.state == state.COUNT_DOWN) {
    if (state.firstRun) {
      state.firstRun = false;
      startScreen.isVisible = false;
      countDownScreen.isVisible = true;
      // player.position.y = 3;
      player.setEnabled(true);
      countDownScreen.start();
    }
  } else if (state.state == state.RUN) {
    if (state.firstRun) {
      state.firstRun = false;
      countDownScreen.isVisible = false;
      hudScreen.isVisible = true;
      // questionScreen.nextQuestion();
      targetSpeed = 70 / 10000;
      setTimeout(function(){
        showQuestion();
      }, 3000);
    }

    if (speed < targetSpeed) {
      speed += ACCELERATION;
      if (speed > targetSpeed) {
        speed = targetSpeed;
      }
    } else if (speed > targetSpeed) {
      speed -= ACCELERATION;
      if (speed < targetSpeed) {
        speed = targetSpeed;
      }
    }

    hudScreen.setSpeed(speed*10000);
    hudScreen.setDistance(distance * 10);
    // hudScreen.setTime(time/1000);

  } else if (state.state == state.SLOW_DOWN) {
    targetSpeed = 0;
    if (speed > targetSpeed) {
      speed -= ACCELERATION;
    } else {
      speed = 0;
      state.setState(state.COMPLETED);
    }

    hudScreen.setSpeed(speed*10000);
    hudScreen.setDistance(distance * 10);

  } else if (state.state == state.COMPLETED) {
    if (state.firstRun) {
      state.firstRun = false;
      hudScreen.isVisible = false;
      endScreen.isVisible = true;
      endScreen.setDistance(distance/100);
      postResult({
        game: 'racer',
        score: 'Correct: ' + correct + ', Wrong: ' + wrong + ', Dist: ' + (distance/100).toFixed(1)
      });
    }
  }
}

function showQuestion() {
  if (state.state != state.RUN) {
    return;
  }
  if (questionIndex >= questionsBank.length) {
    state.setState(state.SLOW_DOWN);
    return;
  }

  let ctx = textureQuestion.getContext();
  ctx.fillStyle = "#000000";
  ctx.fillRect(0,0,512,256);
  ctx.fillStyle = "#ffffff";
  ctx.font = "30px Arial";
  wrapText(ctx, questionsBank[questionIndex][0], 10, 30, 492, 30);
  correctAnswer = questionsBank[questionIndex][1];
  var options = shuffle(questionsBank[questionIndex].slice(1));
  for (let i=0; i<4; i++) {
    answers[i].textBlock.text = options[i];
  }
  answer = null;

  textureQuestion.update();
  questionIndex++;
  overhead.position.z = -40;
}

function wrapText(context, text, x, y, maxWidth, lineHeight) {
  var words = text.split(' ');
  var line = '';

  for(var n = 0; n < words.length; n++) {
    var testLine = line + words[n] + ' ';
    var metrics = context.measureText(testLine);
    var testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      context.fillText(line, x, y);
      line = words[n] + ' ';
      y += lineHeight;
    }
    else {
      line = testLine;
    }
  }
  context.fillText(line, x, y);
}


/****** Add traffic to road ********/
function addTraffic() {
  let rand = BABYLON.Scalar.RandomRange(0, 100);
  var vehicle = null;

  if (rand > 80) {
    vehicle = taxi.clone();
  } else if (rand > 60) {
    vehicle = van.clone();
  } else if (rand > 40) {
    vehicle = tractor.clone();
  } else if (rand > 20) {
    vehicle = suv.clone();
  }
  if (vehicle) {
    vehicle.position.z = -40;
    rand = BABYLON.Scalar.RandomRange(0, 100);
    if (rand > 50) {
      vehicle.position.x = 0.5;
    } else {
      vehicle.position.x = -0.5;
    }
    traffic.push(vehicle);
    // vehicle.getChildMeshes().map(function(mesh) {
    //   shadowGenerator.addShadowCaster(mesh);
    // });
  }
};

/****** Add deco to roadside ********/
function addDeco() {
  let randL = Math.floor(BABYLON.Scalar.RandomRange(0, 9));
  let randR = Math.floor(BABYLON.Scalar.RandomRange(0, 9));
  var deco;

  if (typeof decos[randL] != 'undefined') {
    deco = decos[randL].clone();
    deco.rotate(BABYLON.Axis.Y, -Math.PI/2, BABYLON.Space.LOCAL);
    deco.position.x = 2;
    deco.position.z = -40;
    roadSide.push(deco);
    // deco.getChildMeshes().map(function(mesh) {
    //   shadowGenerator.addShadowCaster(mesh);
    // });
  }
  if (typeof decos[randR] != 'undefined') {
    deco = decos[randR].clone();
    deco.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.LOCAL);
    deco.position.x = -2;
    deco.position.z = -40;
    roadSide.push(deco);
    // deco.getChildMeshes().map(function(mesh) {
    //   shadowGenerator.addShadowCaster(mesh);
    // });
  }
};

/****** Get the next road segment ********/
function getRoad() {
  let rand = BABYLON.Scalar.RandomRange(0, 100);

  if (rand > 100) {
    return roadStart.clone();
  } else {
    return getStraightRoad();
  }
}

/******** Get a straight road segment, varying between plain and stripped **********/
function getStraightRoad() {
  roadArrowCounter = (roadArrowCounter + 1) % 3;
  if (roadArrowCounter % 3) {
    return roadStraight.clone();
  } else {
    return roadStraightMid.clone();
  }
}

/******* Run everything **************/
var scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
  scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener('resize', function () {
  engine.resize();
});