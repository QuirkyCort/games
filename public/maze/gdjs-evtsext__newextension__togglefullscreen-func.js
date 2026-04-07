gdjs.evtsExt__NewExtension__ToggleFullscreen = {};

gdjs.evtsExt__NewExtension__ToggleFullscreen.conditionTrue_0 = {val:false};
gdjs.evtsExt__NewExtension__ToggleFullscreen.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__NewExtension__ToggleFullscreen.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__NewExtension__ToggleFullscreen.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{runtimeScene.getVariables().get("fullscreen").setNumber(0);
}}

}


{


gdjs.evtsExt__NewExtension__ToggleFullscreen.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__NewExtension__ToggleFullscreen.condition0IsTrue_0.val = gdjs.evtTools.window.isFullScreen(runtimeScene);
}if (gdjs.evtsExt__NewExtension__ToggleFullscreen.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("fullscreen").setNumber(1);
}}

}


{


gdjs.evtsExt__NewExtension__ToggleFullscreen.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__NewExtension__ToggleFullscreen.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("fullscreen")) == 0;
}if (gdjs.evtsExt__NewExtension__ToggleFullscreen.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.evtsExt__NewExtension__ToggleFullscreen.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__NewExtension__ToggleFullscreen.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("fullscreen")) == 1;
}if (gdjs.evtsExt__NewExtension__ToggleFullscreen.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


};

gdjs.evtsExt__NewExtension__ToggleFullscreen.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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


gdjs.evtsExt__NewExtension__ToggleFullscreen.eventsList0(runtimeScene, eventsFunctionContext);
return;
}

