gdjs.Game_32OverCode = {};
gdjs.Game_32OverCode.GDGameOverObjects1= [];
gdjs.Game_32OverCode.GDGameOverObjects2= [];
gdjs.Game_32OverCode.GDGameOverObjects3= [];
gdjs.Game_32OverCode.GDBlankButtonObjects1= [];
gdjs.Game_32OverCode.GDBlankButtonObjects2= [];
gdjs.Game_32OverCode.GDBlankButtonObjects3= [];
gdjs.Game_32OverCode.GDBackObjects1= [];
gdjs.Game_32OverCode.GDBackObjects2= [];
gdjs.Game_32OverCode.GDBackObjects3= [];
gdjs.Game_32OverCode.GDTombStone2Objects1= [];
gdjs.Game_32OverCode.GDTombStone2Objects2= [];
gdjs.Game_32OverCode.GDTombStone2Objects3= [];
gdjs.Game_32OverCode.GDExpandButtonObjects1= [];
gdjs.Game_32OverCode.GDExpandButtonObjects2= [];
gdjs.Game_32OverCode.GDExpandButtonObjects3= [];

gdjs.Game_32OverCode.conditionTrue_0 = {val:false};
gdjs.Game_32OverCode.condition0IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition1IsTrue_0 = {val:false};
gdjs.Game_32OverCode.condition2IsTrue_0 = {val:false};


gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExpandButtonObjects1Objects = Hashtable.newFrom({"ExpandButton": gdjs.Game_32OverCode.GDExpandButtonObjects1});gdjs.Game_32OverCode.eventsList0 = function(runtimeScene) {

{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.window.isFullScreen(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("fullscreen").setNumber(1);
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("fullscreen")) == 1;
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("fullscreen")) == 0;
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.Game_32OverCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs.Game_32OverCode.GDExpandButtonObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDExpandButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("fullscreen").setNumber(0);
}
{ //Subevents
gdjs.Game_32OverCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDBlankButtonObjects1Objects = Hashtable.newFrom({"BlankButton": gdjs.Game_32OverCode.GDBlankButtonObjects1});gdjs.Game_32OverCode.eventsList2 = function(runtimeScene) {

{


gdjs.Game_32OverCode.eventsList1(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("BlankButton"), gdjs.Game_32OverCode.GDBlankButtonObjects1);

gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
gdjs.Game_32OverCode.condition1IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.Game_32OverCode.condition0IsTrue_0.val ) {
{
gdjs.Game_32OverCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32OverCode.mapOfGDgdjs_46Game_9532OverCode_46GDBlankButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.Game_32OverCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


{


gdjs.Game_32OverCode.condition0IsTrue_0.val = false;
{
gdjs.Game_32OverCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Game_32OverCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Cold Journey.aac", true, 100, 1);
}}

}


};

gdjs.Game_32OverCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32OverCode.GDGameOverObjects1.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects2.length = 0;
gdjs.Game_32OverCode.GDGameOverObjects3.length = 0;
gdjs.Game_32OverCode.GDBlankButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDBlankButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDBlankButtonObjects3.length = 0;
gdjs.Game_32OverCode.GDBackObjects1.length = 0;
gdjs.Game_32OverCode.GDBackObjects2.length = 0;
gdjs.Game_32OverCode.GDBackObjects3.length = 0;
gdjs.Game_32OverCode.GDTombStone2Objects1.length = 0;
gdjs.Game_32OverCode.GDTombStone2Objects2.length = 0;
gdjs.Game_32OverCode.GDTombStone2Objects3.length = 0;
gdjs.Game_32OverCode.GDExpandButtonObjects1.length = 0;
gdjs.Game_32OverCode.GDExpandButtonObjects2.length = 0;
gdjs.Game_32OverCode.GDExpandButtonObjects3.length = 0;

gdjs.Game_32OverCode.eventsList2(runtimeScene);
return;

}

gdjs['Game_32OverCode'] = gdjs.Game_32OverCode;
