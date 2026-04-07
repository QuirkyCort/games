gdjs.evtsExt__NewExtension__EnableEFfects = {};
gdjs.evtsExt__NewExtension__EnableEFfects.stopDoWhile2 = false;


gdjs.evtsExt__NewExtension__EnableEFfects.conditionTrue_0 = {val:false};
gdjs.evtsExt__NewExtension__EnableEFfects.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__NewExtension__EnableEFfects.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__NewExtension__EnableEFfects.conditionTrue_1 = {val:false};
gdjs.evtsExt__NewExtension__EnableEFfects.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__NewExtension__EnableEFfects.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__NewExtension__EnableEFfects.eventsList0 = function(runtimeScene, eventsFunctionContext) {

};gdjs.evtsExt__NewExtension__EnableEFfects.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__NewExtension__EnableEFfects.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__NewExtension__EnableEFfects.conditionTrue_1 = gdjs.evtsExt__NewExtension__EnableEFfects.condition0IsTrue_0;
gdjs.evtsExt__NewExtension__EnableEFfects.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8831652);
}
}if (gdjs.evtsExt__NewExtension__EnableEFfects.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("tmp").setNumber(100);
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect", true);
}}

}


{


gdjs.evtsExt__NewExtension__EnableEFfects.stopDoWhile2 = false;
do {gdjs.evtsExt__NewExtension__EnableEFfects.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__NewExtension__EnableEFfects.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("tmp")) != 1;
}if (gdjs.evtsExt__NewExtension__EnableEFfects.condition0IsTrue_0.val) {
if (true) {
{runtimeScene.getVariables().get("tmp").sub(1);
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "Level " + gdjs.evtTools.variable.getVariableString(runtimeScene.getVariables().get("tmp")), "Effect", true);
}
{ //Subevents: 
gdjs.evtsExt__NewExtension__EnableEFfects.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
} else gdjs.evtsExt__NewExtension__EnableEFfects.stopDoWhile2 = true; 
} while ( !gdjs.evtsExt__NewExtension__EnableEFfects.stopDoWhile2 );

}


};

gdjs.evtsExt__NewExtension__EnableEFfects.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__NewExtension__EnableEFfects.eventsList1(runtimeScene, eventsFunctionContext);
return;
}

