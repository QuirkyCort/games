gdjs.StartCode = {};
gdjs.StartCode.GDSeaObjects1= [];
gdjs.StartCode.GDSeaObjects2= [];
gdjs.StartCode.GDSeaObjects3= [];
gdjs.StartCode.GDExpandButtonObjects1= [];
gdjs.StartCode.GDExpandButtonObjects2= [];
gdjs.StartCode.GDExpandButtonObjects3= [];
gdjs.StartCode.GDtitleObjects1= [];
gdjs.StartCode.GDtitleObjects2= [];
gdjs.StartCode.GDtitleObjects3= [];
gdjs.StartCode.GDStartButtonObjects1= [];
gdjs.StartCode.GDStartButtonObjects2= [];
gdjs.StartCode.GDStartButtonObjects3= [];
gdjs.StartCode.GDNewObjectObjects1= [];
gdjs.StartCode.GDNewObjectObjects2= [];
gdjs.StartCode.GDNewObjectObjects3= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};
gdjs.StartCode.condition2IsTrue_0 = {val:false};


gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.StartCode.GDStartButtonObjects1});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDExpandButtonObjects1Objects = Hashtable.newFrom({"ExpandButton": gdjs.StartCode.GDExpandButtonObjects1});gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("fullscreen").setNumber(0);
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("fullscreen")) == 1;
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("fullscreen")) == 0;
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.StartCode.eventsList1 = function(runtimeScene) {

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


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs.StartCode.GDExpandButtonObjects1);
{for(var i = 0, len = gdjs.StartCode.GDExpandButtonObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDExpandButtonObjects1[i].setOpacity(100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs.StartCode.GDExpandButtonObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDExpandButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("fullscreen").setNumber(1);
}
{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDSeaObjects1.length = 0;
gdjs.StartCode.GDSeaObjects2.length = 0;
gdjs.StartCode.GDSeaObjects3.length = 0;
gdjs.StartCode.GDExpandButtonObjects1.length = 0;
gdjs.StartCode.GDExpandButtonObjects2.length = 0;
gdjs.StartCode.GDExpandButtonObjects3.length = 0;
gdjs.StartCode.GDtitleObjects1.length = 0;
gdjs.StartCode.GDtitleObjects2.length = 0;
gdjs.StartCode.GDtitleObjects3.length = 0;
gdjs.StartCode.GDStartButtonObjects1.length = 0;
gdjs.StartCode.GDStartButtonObjects2.length = 0;
gdjs.StartCode.GDStartButtonObjects3.length = 0;
gdjs.StartCode.GDNewObjectObjects1.length = 0;
gdjs.StartCode.GDNewObjectObjects2.length = 0;
gdjs.StartCode.GDNewObjectObjects3.length = 0;

gdjs.StartCode.eventsList1(runtimeScene);
return;

}

gdjs['StartCode'] = gdjs.StartCode;
