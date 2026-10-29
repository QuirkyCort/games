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
var distance = 0;
var time = 100 * 1000;
var trafficSpeedFactor = 0.2;
var roadSegmentsCount = 0;
var nextTraffic = 0;
var nextDeco = 0;
var score = 0;
var wrong = 0;

var state = {
  state: 0,
  startTime: 0,
  firstRun: true,

  INTRO: 0,
  COUNT_DOWN: 10,
  RUN: 20,
  COMPLETED: 30,

  setState: function (s) {
    this.state = s;
    this.firstRun = true;
  }
};

var startScreen, countDownScreen, hudScreen, questionScreen;

var createScene = function () {
  // Create the scene space
  var scene = new BABYLON.Scene(engine);
  advancedTexture = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI('UI');
  var gravityVector = new BABYLON.Vector3(0,-9.81, 0);
  var physicsPlugin = new BABYLON.CannonJSPlugin();
  scene.enablePhysics(gravityVector, physicsPlugin);

  // Load GUI
  startScreen = drawStartScreen();
  countDownScreen = drawCountDownScreen();
  hudScreen = drawHUD();
  endScreen = drawEndScreen();
  questionScreen = drawQuestion();

  // Load Sound
  music = new BABYLON.Sound('Music', 'media/fight.mp3', scene, null, {
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

  shadowGenerator = new BABYLON.ShadowGenerator(1024, lightDir);
  shadowGenerator.bias =  0.000005;
  // shadowGenerator.useExponentialShadowMap = false;
  shadowGenerator.useBlurExponentialShadowMap = true;

  // sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {diameter: 0.2}, scene); //default sphere
  // sphere.position.x = 1;
  // sphere.position.y = 0.5;
  // shadowGenerator.addShadowCaster(sphere);

  // Add meshes in the scene
  engine.displayLoadingUI();

  // Invisible walls and floor
  boxLeft = BABYLON.MeshBuilder.CreateBox('boxLeft', {height: 10, width: 1, depth: 50}, scene);
  boxLeft.position.x = 1.6;
  boxLeft.visibility = 0;
  boxLeft.physicsImpostor = new BABYLON.PhysicsImpostor(
    boxLeft,
    BABYLON.PhysicsImpostor.BoxImpostor,
    {
      mass: 0,
      restitution: 0.9
    },
    scene
  );
  boxRight = BABYLON.MeshBuilder.CreateBox('boxRight', {height: 10, width: 1, depth: 50}, scene);
  boxRight.position.x = -1.6;
  boxRight.visibility = 0;
  boxRight.physicsImpostor = new BABYLON.PhysicsImpostor(
    boxRight,
    BABYLON.PhysicsImpostor.BoxImpostor,
    {
      mass: 0,
      restitution: 0.9
    },
    scene
  );
  ground = BABYLON.MeshBuilder.CreateGround('ground', {width: 50, height: 70, subdivisions: 2}, scene);
  ground.visibility = 1;
  ground.position.y = -0.02;
  ground.physicsImpostor = new BABYLON.PhysicsImpostor(
    ground,
    BABYLON.PhysicsImpostor.PlaneImpostor,
    {},
    scene
  );
  ground.receiveShadows = true;
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

    pv = new BABYLON.PhysicsViewer(scene);

    // Handle events
    scene.actionManager = new BABYLON.ActionManager(scene);
    scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({
          trigger: BABYLON.ActionManager.OnEveryFrameTrigger
        },
        render
      )
    );
    scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({
          trigger: BABYLON.ActionManager.OnKeyDownTrigger
        },
        function(evt) {
          inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == 'keydown';
        }
      )
    );
    scene.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({
          trigger: BABYLON.ActionManager.OnKeyUpTrigger
        },
        function(evt) {
          inputMap[evt.sourceEvent.key] = evt.sourceEvent.type == 'keydown';
        }
      )
    );
    engine.hideLoadingUI();
  });

  return scene;
};


/********* Render loop ***********/
function render() {
  var delta = scene.getEngine().getDeltaTime();

  stateHandler(delta);

  // Move road
  roads.forEach(function(road, i) {
    road.position.z += speed * delta;
    distance += speed * delta;
    if (road.position.z > 5) {
      var tempRoad = getRoad();
      tempRoad.position.z = road.position.z -= 40;
      road.dispose();
      roads[i] = tempRoad;
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

  // Move car
  autoDrive(delta);
  // var forceDirection = new BABYLON.Vector3(1, 0, 0);
  // var forceMagnitude = 0;
  // var contactLocalRefPoint = new BABYLON.Vector3(0, -0.05, 0);
  // var vel = player.physicsImpostor.getLinearVelocity();

  // if(inputMap['ArrowLeft']){
  //   vel.x = 2;
  //   forceMagnitude = 50;
  // } else if(inputMap['ArrowRight']){
  //   vel.x = -2;
  //   forceMagnitude = -50;
  // } else {
  //   vel.x = 0;
  // }

  // player.physicsImpostor.applyForce(forceDirection.scale(forceMagnitude), player.getAbsolutePosition().add(contactLocalRefPoint))
  // player.physicsImpostor.setLinearVelocity(vel);

  // player.rotationQuaternion.x = 0;
  // player.rotationQuaternion.y = 0;
  // player.rotationQuaternion.z = 0;
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
      player.position.y = 3;
      player.setEnabled(true);
      countDownScreen.start();
    }
  } else if (state.state == state.RUN) {
    if (state.firstRun) {
      state.firstRun = false;
      countDownScreen.isVisible = false;
      hudScreen.isVisible = true;
      questionScreen.nextQuestion();
      targetSpeed = 50 / 10000;
    }

    time -= delta;
    if (time <= 0) {
      questionScreen.isVisible = false;
      time = 0;
      targetSpeed = 0;
      if (speed == 0) {
        state.setState(state.COMPLETED);
      }
    } else {
      if (speed >= 50 / 10000) {
        questionScreen.isVisible = true;
      }
      targetSpeed -= DECELERATION;
      if (targetSpeed < 50 / 10000) {
        targetSpeed = 50 / 10000;
      }
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
    hudScreen.setDistance(distance/100);
    hudScreen.setTime(time/1000);

  } else if (state.state == state.COMPLETED) {
    if (state.firstRun) {
      state.firstRun = false;
      hudScreen.isVisible = false;
      endScreen.isVisible = true;
      endScreen.setDistance(distance/100);
      postResult({
        game: 'racer',
        score: 'Correct: ' + score/10 + ', Wrong: ' + wrong + ', Dist: ' + (distance/100).toFixed(1)
      });
    }
  }
}

/****** Automatically avoid traffic ********/
function autoDrive(delta) {
  var first, second;
  var targetX = null;

  if (typeof traffic[0] == 'undefined') {
    return;
  }

  for (let i=0; i<traffic.length; i++) {
    if (traffic[i].position.z < 3) {
      first = traffic[i];
      if (traffic[i+1]) {
        second = traffic[i+1];
      }
      break;
    }
  }

  if (first.position.z < -6) {
    return;
  }

  if (second && first.position.z == second.position.z) {
    targetX = 0;
  } else if (first.position.x > 0) {
    targetX = -0.5;
  } else if (first.position.x < 0) {
    targetX = 0.5;
  } else if (first.position.x == 0) {
    if (player.position.x >= 0) {
      targetX = 0.5;
    } else {
      targetX = -0.5;
    }
  }

  if (player.position.x > targetX) {
    player.position.x -= AUTO_STEER_SPEED * delta;
    if (player.position.x < targetX) {
      player.position.x = targetX;
    }
  } else if (player.position.x < targetX) {
    player.position.x += AUTO_STEER_SPEED * delta;
    if (player.position.x > targetX) {
      player.position.x = targetX;
    }
  }
};

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
    if (rand > 55) {
      vehicle.position.x = 0.5;
    } else if (rand > 10) {
      vehicle.position.x = -0.5;
    } else if (rand > 5) {
      let vehicle2 = vehicle.clone()
      vehicle2.position.x = 0.5;
      vehicle.position.x = -0.5;
      traffic.push(vehicle2);
      vehicle2.getChildMeshes().map(function(mesh) {
        shadowGenerator.addShadowCaster(mesh);
      });
    }
    traffic.push(vehicle);
    vehicle.getChildMeshes().map(function(mesh) {
      shadowGenerator.addShadowCaster(mesh);
    });
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
    deco.getChildMeshes().map(function(mesh) {
      shadowGenerator.addShadowCaster(mesh);
    });
  }
  if (typeof decos[randR] != 'undefined') {
    deco = decos[randR].clone();
    deco.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.LOCAL);
    deco.position.x = -2;
    deco.position.z = -40;
    roadSide.push(deco);
    deco.getChildMeshes().map(function(mesh) {
      shadowGenerator.addShadowCaster(mesh);
    });
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