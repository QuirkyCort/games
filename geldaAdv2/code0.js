gdjs.StartCode = {};
gdjs.StartCode.GDLegendOfObjects1= [];
gdjs.StartCode.GDLegendOfObjects2= [];
gdjs.StartCode.GDLegendOfObjects3= [];
gdjs.StartCode.GDTitleObjects1= [];
gdjs.StartCode.GDTitleObjects2= [];
gdjs.StartCode.GDTitleObjects3= [];
gdjs.StartCode.GDStartButtonObjects1= [];
gdjs.StartCode.GDStartButtonObjects2= [];
gdjs.StartCode.GDStartButtonObjects3= [];
gdjs.StartCode.GDSwordObjects1= [];
gdjs.StartCode.GDSwordObjects2= [];
gdjs.StartCode.GDSwordObjects3= [];
gdjs.StartCode.GDGoldenEmeraldSwordObjects1= [];
gdjs.StartCode.GDGoldenEmeraldSwordObjects2= [];
gdjs.StartCode.GDGoldenEmeraldSwordObjects3= [];
gdjs.StartCode.GDBlueJewelObjects1= [];
gdjs.StartCode.GDBlueJewelObjects2= [];
gdjs.StartCode.GDBlueJewelObjects3= [];
gdjs.StartCode.GDExpandButtonObjects1= [];
gdjs.StartCode.GDExpandButtonObjects2= [];
gdjs.StartCode.GDExpandButtonObjects3= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};
gdjs.StartCode.condition2IsTrue_0 = {val:false};


gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartButtonObjects1Objects = Hashtable.newFrom({"StartButton": gdjs.StartCode.GDStartButtonObjects1});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDExpandButtonObjects1Objects = Hashtable.newFrom({"ExpandButton": gdjs.StartCode.GDExpandButtonObjects1});gdjs.StartCode.eventsList0 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.window.isFullScreen(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("fullscreen").setNumber(1);
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

gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs.StartCode.GDExpandButtonObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDExpandButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("fullscreen").setNumber(0);
}
{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.StartCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("StartButton"), gdjs.StartCode.GDStartButtonObjects1);

gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDStartButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Play");
}{runtimeScene.getVariables().get("pixelateSize").setNumber(5);
}{runtimeScene.getVariables().get("volume").setNumber(100);
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Adventure2.aac", 0, true, 100, 1);
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
gdjs.StartCode.condition1IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.05, "Play");
}if ( gdjs.StartCode.condition0IsTrue_0.val ) {
{
gdjs.StartCode.condition1IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("pixelateSize")) > 0;
}}
if (gdjs.StartCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Title"), gdjs.StartCode.GDTitleObjects1);
{runtimeScene.getVariables().get("pixelateSize").add(1);
}{for(var i = 0, len = gdjs.StartCode.GDTitleObjects1.length ;i < len;++i) {
    gdjs.StartCode.GDTitleObjects1[i].setEffectDoubleParameter("Effect", "size", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("pixelateSize")));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Play");
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("pixelateSize")) > 50;
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Play", false);
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("volume")) > 0;
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.setSoundOnChannelVolume(runtimeScene, 0, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("volume")));
}{runtimeScene.getVariables().get("volume").sub(1);
}}

}


{


gdjs.StartCode.eventsList1(runtimeScene);
}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDLegendOfObjects1.length = 0;
gdjs.StartCode.GDLegendOfObjects2.length = 0;
gdjs.StartCode.GDLegendOfObjects3.length = 0;
gdjs.StartCode.GDTitleObjects1.length = 0;
gdjs.StartCode.GDTitleObjects2.length = 0;
gdjs.StartCode.GDTitleObjects3.length = 0;
gdjs.StartCode.GDStartButtonObjects1.length = 0;
gdjs.StartCode.GDStartButtonObjects2.length = 0;
gdjs.StartCode.GDStartButtonObjects3.length = 0;
gdjs.StartCode.GDSwordObjects1.length = 0;
gdjs.StartCode.GDSwordObjects2.length = 0;
gdjs.StartCode.GDSwordObjects3.length = 0;
gdjs.StartCode.GDGoldenEmeraldSwordObjects1.length = 0;
gdjs.StartCode.GDGoldenEmeraldSwordObjects2.length = 0;
gdjs.StartCode.GDGoldenEmeraldSwordObjects3.length = 0;
gdjs.StartCode.GDBlueJewelObjects1.length = 0;
gdjs.StartCode.GDBlueJewelObjects2.length = 0;
gdjs.StartCode.GDBlueJewelObjects3.length = 0;
gdjs.StartCode.GDExpandButtonObjects1.length = 0;
gdjs.StartCode.GDExpandButtonObjects2.length = 0;
gdjs.StartCode.GDExpandButtonObjects3.length = 0;

gdjs.StartCode.eventsList2(runtimeScene);
return;

}

gdjs['StartCode'] = gdjs.StartCode;
