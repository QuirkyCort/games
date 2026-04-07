
if (typeof gdjs.evtsExt__THNK__OnRSJoinRequest !== "undefined") {
  gdjs.evtsExt__THNK__OnRSJoinRequest.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__THNK__OnRSJoinRequest = {};

gdjs.evtsExt__THNK__OnRSJoinRequest.conditionTrue_0 = {val:false};
gdjs.evtsExt__THNK__OnRSJoinRequest.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__THNK__OnRSJoinRequest.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__THNK__OnRSJoinRequest.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__THNK__OnRSJoinRequest.condition0IsTrue_0.val = false;
{
/* Unknown instruction - skipped. */}if (gdjs.evtsExt__THNK__OnRSJoinRequest.condition0IsTrue_0.val) {
{/* Unknown instruction - skipped. */}{gdjs.evtTools.debuggerTools.log("", "info", "Dedicated server");
}{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__THNK__OnRSJoinRequest.func = function(runtimeScene, remote_scene_name, parentEventsFunctionContext) {
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
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
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
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "remote_scene_name") return remote_scene_name;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__THNK__OnRSJoinRequest.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__THNK__OnRSJoinRequest.registeredGdjsCallbacks = [];