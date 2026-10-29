gdjs.evtsExt__NewExtension__CameraFollow = {};
gdjs.evtsExt__NewExtension__CameraFollow.stopDoWhile2 = false;

gdjs.evtsExt__NewExtension__CameraFollow.GDobjectObjects1= [];
gdjs.evtsExt__NewExtension__CameraFollow.GDobjectObjects2= [];

gdjs.evtsExt__NewExtension__CameraFollow.conditionTrue_0 = {val:false};
gdjs.evtsExt__NewExtension__CameraFollow.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__NewExtension__CameraFollow.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__NewExtension__CameraFollow.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__NewExtension__CameraFollow.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


{
gdjs.copyArray(eventsFunctionContext.getObjects("object"), gdjs.evtsExt__NewExtension__CameraFollow.GDobjectObjects1);
{runtimeScene.getVariables().get("tmp").setNumber(100);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.evtsExt__NewExtension__CameraFollow.GDobjectObjects1.length !== 0 ? gdjs.evtsExt__NewExtension__CameraFollow.GDobjectObjects1[0] : null), true, "", 0);
}}

}


{


gdjs.evtsExt__NewExtension__CameraFollow.stopDoWhile2 = false;
do {gdjs.copyArray(eventsFunctionContext.getObjects("object"), gdjs.evtsExt__NewExtension__CameraFollow.GDobjectObjects2);
gdjs.evtsExt__NewExtension__CameraFollow.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__NewExtension__CameraFollow.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("tmp")) != 1;
}if (gdjs.evtsExt__NewExtension__CameraFollow.condition0IsTrue_0.val) {
if (true) {
{runtimeScene.getVariables().get("tmp").sub(1);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.evtsExt__NewExtension__CameraFollow.GDobjectObjects2.length !== 0 ? gdjs.evtsExt__NewExtension__CameraFollow.GDobjectObjects2[0] : null), true, "Level " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("tmp")), 0);
}{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0) / 2, "Background", 0);
}{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) / 2, "Background", 0);
}
{ //Subevents: 
gdjs.evtsExt__NewExtension__CameraFollow.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else gdjs.evtsExt__NewExtension__CameraFollow.stopDoWhile2 = true; 
} while ( !gdjs.evtsExt__NewExtension__CameraFollow.stopDoWhile2 );

}


};

gdjs.evtsExt__NewExtension__CameraFollow.func = function(runtimeScene, object, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"object": object
},
  _objectArraysMap: {
"object": gdjs.objectsListsToArray(object)
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__NewExtension__CameraFollow.GDobjectObjects1.length = 0;
gdjs.evtsExt__NewExtension__CameraFollow.GDobjectObjects2.length = 0;

gdjs.evtsExt__NewExtension__CameraFollow.eventsList1(runtimeScene, eventsFunctionContext);
return;
}

