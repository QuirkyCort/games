gdjs.StartCode = {};
gdjs.StartCode.GDtitleObjects1= [];
gdjs.StartCode.GDtitleObjects2= [];
gdjs.StartCode.GDStartButtonObjects1= [];
gdjs.StartCode.GDStartButtonObjects2= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};
gdjs.StartCode.condition2IsTrue_0 = {val:false};


gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.StartCode.GDStartButtonObjects1});gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StartCode.GDStartButtonObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Play", false);
}}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDtitleObjects1.length = 0;
gdjs.StartCode.GDtitleObjects2.length = 0;
gdjs.StartCode.GDStartButtonObjects1.length = 0;
gdjs.StartCode.GDStartButtonObjects2.length = 0;

gdjs.StartCode.eventsList0(runtimeScene);
return;

}

gdjs['StartCode'] = gdjs.StartCode;
