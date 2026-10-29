gdjs.LocalTestCode = {};

gdjs.LocalTestCode.conditionTrue_0 = {val:false};
gdjs.LocalTestCode.condition0IsTrue_0 = {val:false};
gdjs.LocalTestCode.condition1IsTrue_0 = {val:false};


gdjs.LocalTestCode.eventsList0 = function(runtimeScene) {

{


gdjs.LocalTestCode.condition0IsTrue_0.val = false;
{
gdjs.LocalTestCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LocalTestCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__THNK_Local__StartServer.func(runtimeScene, "Game", 2, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};

gdjs.LocalTestCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.LocalTestCode.eventsList0(runtimeScene);

return;

}

gdjs['LocalTestCode'] = gdjs.LocalTestCode;
