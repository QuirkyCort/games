const ASSETS_ROOT = 'media/';

var decos = [];

function getModelsList(scene) {
  return [
    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'roadStraightLong.glb', scene).then(function (result) {
      roadStraight = result.meshes[0];
      roadStraight.setEnabled(false);
      roadStraight.position.x = 0.15;
      roadStraight.position.z = 1.65;
      roadStraight.bakeCurrentTransformIntoVertices();
      roadStraight.scaling.x = 3;
      roadStraight.getChildMeshes().map(function(mesh){
        mesh.receiveShadows = true;
      });
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'roadStraightLongMid.glb', scene).then(function (result) {
      roadStraightMid = result.meshes[0];
      roadStraightMid.setEnabled(false);
      roadStraightMid.position.x = 0.15;
      roadStraightMid.position.z = 1.65;
      roadStraightMid.bakeCurrentTransformIntoVertices();
      roadStraightMid.scaling.x = 3;
      roadStraightMid.getChildMeshes().map(function(mesh){
        mesh.receiveShadows = true;
      });
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'roadStartPositions.glb', scene).then(function (result) {
      roadStartPositions = result.meshes[0];
      roadStartPositions.setEnabled(false);
      roadStartPositions.position.x = 0.15;
      roadStartPositions.position.z = 1.65;
      roadStartPositions.bakeCurrentTransformIntoVertices();
      roadStartPositions.scaling.x = 3;
      roadStartPositions.getChildMeshes().map(function(mesh){
        mesh.receiveShadows = true;
      });
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'roadStart.glb', scene).then(function (result) {
      roadStart = result.meshes[0];
      roadStart.setEnabled(false);
      roadStart.position.x = 0.28;
      roadStart.position.z = 1.65;
      roadStart.bakeCurrentTransformIntoVertices();
      roadStart.scaling.x = 3;
      roadStart.getChildMeshes().map(function(mesh){
        mesh.receiveShadows = true;
      });
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'taxi.glb', scene).then(function (result) {
      taxi = result.meshes[0].getChildren()[0];
      taxi.setEnabled(false);
      taxi.scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'van.glb', scene).then(function (result) {
      van = result.meshes[0].getChildren()[0];
      van.setEnabled(false);
      van.scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'tractor.glb', scene).then(function (result) {
      tractor = result.meshes[0].getChildren()[0];
      tractor.setEnabled(false);
      tractor.scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'suv.glb', scene).then(function (result) {
      suv = result.meshes[0].getChildren()[0];
      suv.setEnabled(false);
      suv.scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'billboard.glb', scene).then(function (result) {
      var deco = result.meshes[0].getChildren()[0];
      deco.setEnabled(false);
      deco.scaling = new BABYLON.Vector3(2, 2, 2);
      decos.push(deco);
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'billboardLower.glb', scene).then(function (result) {
      var deco = result.meshes[0].getChildren()[0];
      deco.setEnabled(false);
      deco.scaling = new BABYLON.Vector3(3, 3, 3);
      deco.position.y = 0.05;
      decos.push(deco);
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'pitsGarage.glb', scene).then(function (result) {
      var deco = result.meshes[0].getChildren()[0];
      deco.setEnabled(false);
      deco.scaling = new BABYLON.Vector3(2, 2, 2);
      decos.push(deco);
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'pitsOffice.glb', scene).then(function (result) {
      var deco = result.meshes[0].getChildren()[0];
      deco.setEnabled(false);
      deco.scaling = new BABYLON.Vector3(2, 2, 2);
      decos.push(deco);
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'statue_head.glb', scene).then(function (result) {
      var deco = result.meshes[0];
      deco.setEnabled(false);
      deco.scaling = new BABYLON.Vector3(2, 2, 2);
      decos.push(deco);
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'tent_detailedOpen.glb', scene).then(function (result) {
      var deco = result.meshes[0].getChildren()[0];
      deco.setEnabled(false);
      deco.rotate(BABYLON.Axis.Y, Math.PI, BABYLON.Space.LOCAL);
      decos.push(deco);
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'tentRoof.glb', scene).then(function (result) {
      var deco = result.meshes[0].getChildren()[0];
      deco.setEnabled(false);
      deco.rotate(BABYLON.Axis.Y, Math.PI/2, BABYLON.Space.LOCAL);
      decos.push(deco);
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'tree_blocks.glb', scene).then(function (result) {
      var deco = result.meshes[0].getChildren()[0];
      deco.setEnabled(false);
      decos.push(deco);
    }),

    BABYLON.SceneLoader.ImportMeshAsync('', ASSETS_ROOT, 'sedanSports.glb', scene).then(function (result) {
      var car = result.meshes[0];
      shadowGenerator.addShadowCaster(result.meshes[0], true);
      car.position.y = -0.07;

      player = BABYLON.MeshBuilder.CreateBox('player', {height: 0.2, width: 1.3, depth: 1.5}, scene);
      player.scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
      player.visibility = 0;
      player.physicsImpostor = new BABYLON.PhysicsImpostor(
        player,
        BABYLON.PhysicsImpostor.BoxImpostor,
        {
          mass: 1,
          restitution: 0.9,
          friction: 0
        },
        scene
      );
      car.parent = player;

      player.scaling = new BABYLON.Vector3(0.3, 0.3, 0.3);
      player.position.z = 2.55;
      player.position.x = -0.52;
      player.position.y = 3;
      player.setEnabled(false);
    }),
  ];
};

function addRoadImpostor(scene, parent) {
  function addBox(scene, name, xPos, yPos, parent) {
    box = BABYLON.MeshBuilder.CreateBox(name, {height: 1, width: 1, depth: 2}, scene);
    // box.scaling = new BABYLON.Vector3(3, 1, 1);
    box.position.x = xPos;
    box.position.y = yPos;
    box.visibility = 1;
    box.parent = parent;

    box.physicsImpostor = new BABYLON.PhysicsImpostor(
      box,
      BABYLON.PhysicsImpostor.BoxImpostor,
      {
        mass: 0,
        restitution: 0.9
      },
      scene
    );
  }

  addBox(scene, 'bottom', 0, -0.5, parent);
  addBox(scene, 'left', 0.85, 0, parent);
  addBox(scene, 'right', -0.8, 0, parent);
  parent.physicsImpostor = new BABYLON.PhysicsImpostor(
    parent,
    BABYLON.PhysicsImpostor.BoxImpostor,
    {
      mass: 0,
      restitution: 0.9
    },
    scene
  );
}

var createPhysicsImpostor = function(scene, entity, impostorType, options, scale) {
  if (entity != null) {
    const parent = entity.parent;
    entity.parent = null;
    // entity.scaling = scale;
    entity.physicsImpostor = new BABYLON.PhysicsImpostor(entity, impostorType, options, scene);
    // entity.scaling = new BABYLON.Vector3(1,1,1);
    entity.parent = parent;
  }
};