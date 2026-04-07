gdjs.StartCode = {};
gdjs.StartCode.GDGroundObjects1= [];
gdjs.StartCode.GDGroundObjects2= [];
gdjs.StartCode.GDGroundObjects3= [];
gdjs.StartCode.GDGroundObjects4= [];
gdjs.StartCode.GDBluePlayerObjects1= [];
gdjs.StartCode.GDBluePlayerObjects2= [];
gdjs.StartCode.GDBluePlayerObjects3= [];
gdjs.StartCode.GDBluePlayerObjects4= [];
gdjs.StartCode.GDGreyPlayerObjects1= [];
gdjs.StartCode.GDGreyPlayerObjects2= [];
gdjs.StartCode.GDGreyPlayerObjects3= [];
gdjs.StartCode.GDGreyPlayerObjects4= [];
gdjs.StartCode.GDRedPlayerObjects1= [];
gdjs.StartCode.GDRedPlayerObjects2= [];
gdjs.StartCode.GDRedPlayerObjects3= [];
gdjs.StartCode.GDRedPlayerObjects4= [];
gdjs.StartCode.GDGreenPlayerObjects1= [];
gdjs.StartCode.GDGreenPlayerObjects2= [];
gdjs.StartCode.GDGreenPlayerObjects3= [];
gdjs.StartCode.GDGreenPlayerObjects4= [];
gdjs.StartCode.GDBrownPanelObjects1= [];
gdjs.StartCode.GDBrownPanelObjects2= [];
gdjs.StartCode.GDBrownPanelObjects3= [];
gdjs.StartCode.GDBrownPanelObjects4= [];
gdjs.StartCode.GDTitleObjects1= [];
gdjs.StartCode.GDTitleObjects2= [];
gdjs.StartCode.GDTitleObjects3= [];
gdjs.StartCode.GDTitleObjects4= [];
gdjs.StartCode.GDNewObjectObjects1= [];
gdjs.StartCode.GDNewObjectObjects2= [];
gdjs.StartCode.GDNewObjectObjects3= [];
gdjs.StartCode.GDNewObjectObjects4= [];
gdjs.StartCode.GDExpandButtonObjects1= [];
gdjs.StartCode.GDExpandButtonObjects2= [];
gdjs.StartCode.GDExpandButtonObjects3= [];
gdjs.StartCode.GDExpandButtonObjects4= [];

gdjs.StartCode.conditionTrue_0 = {val:false};
gdjs.StartCode.condition0IsTrue_0 = {val:false};
gdjs.StartCode.condition1IsTrue_0 = {val:false};
gdjs.StartCode.condition2IsTrue_0 = {val:false};


gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDBluePlayerObjects3Objects = Hashtable.newFrom({"BluePlayer": gdjs.StartCode.GDBluePlayerObjects3});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDGreyPlayerObjects3Objects = Hashtable.newFrom({"GreyPlayer": gdjs.StartCode.GDGreyPlayerObjects3});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDRedPlayerObjects3Objects = Hashtable.newFrom({"RedPlayer": gdjs.StartCode.GDRedPlayerObjects3});gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDGreenPlayerObjects2Objects = Hashtable.newFrom({"GreenPlayer": gdjs.StartCode.GDGreenPlayerObjects2});gdjs.StartCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.StartCode.GDBluePlayerObjects3);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDBluePlayerObjects3Objects, runtimeScene, true, false);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("BluePlayer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyPlayer"), gdjs.StartCode.GDGreyPlayerObjects3);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDGreyPlayerObjects3Objects, runtimeScene, true, false);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("GreyPlayer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedPlayer"), gdjs.StartCode.GDRedPlayerObjects3);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDRedPlayerObjects3Objects, runtimeScene, true, false);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("RedPlayer");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.StartCode.GDGreenPlayerObjects2);

gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDGreenPlayerObjects2Objects, runtimeScene, true, false);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("GreenPlayer");
}}

}


};gdjs.StartCode.eventsList1 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setString("none");
}{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect", false);
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if (gdjs.StartCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.StartCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) != "none";
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.enableLayerEffect(runtimeScene, "", "Effect", true);
}{runtimeScene.getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.camera.setLayerEffectDoubleParameter(runtimeScene, "", "Effect", "size", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)));
}}

}


{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) >= 60;
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Play", false);
}}

}


};gdjs.StartCode.mapOfGDgdjs_46StartCode_46GDExpandButtonObjects1Objects = Hashtable.newFrom({"ExpandButton": gdjs.StartCode.GDExpandButtonObjects1});gdjs.StartCode.eventsList2 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs.StartCode.GDExpandButtonObjects2);
{for(var i = 0, len = gdjs.StartCode.GDExpandButtonObjects2.length ;i < len;++i) {
    gdjs.StartCode.GDExpandButtonObjects2[i].setOpacity(100);
}
}}

}


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
{gdjs.evtsExt__NewExtension__ToggleFullscreen.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.StartCode.eventsList3 = function(runtimeScene) {

{


gdjs.StartCode.condition0IsTrue_0.val = false;
{
gdjs.StartCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.StartCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "summermemories.ogg", 0, true, 50, 1);
}}

}


{


gdjs.StartCode.eventsList1(runtimeScene);
}


{


gdjs.StartCode.eventsList2(runtimeScene);
}


};

gdjs.StartCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.StartCode.GDGroundObjects1.length = 0;
gdjs.StartCode.GDGroundObjects2.length = 0;
gdjs.StartCode.GDGroundObjects3.length = 0;
gdjs.StartCode.GDGroundObjects4.length = 0;
gdjs.StartCode.GDBluePlayerObjects1.length = 0;
gdjs.StartCode.GDBluePlayerObjects2.length = 0;
gdjs.StartCode.GDBluePlayerObjects3.length = 0;
gdjs.StartCode.GDBluePlayerObjects4.length = 0;
gdjs.StartCode.GDGreyPlayerObjects1.length = 0;
gdjs.StartCode.GDGreyPlayerObjects2.length = 0;
gdjs.StartCode.GDGreyPlayerObjects3.length = 0;
gdjs.StartCode.GDGreyPlayerObjects4.length = 0;
gdjs.StartCode.GDRedPlayerObjects1.length = 0;
gdjs.StartCode.GDRedPlayerObjects2.length = 0;
gdjs.StartCode.GDRedPlayerObjects3.length = 0;
gdjs.StartCode.GDRedPlayerObjects4.length = 0;
gdjs.StartCode.GDGreenPlayerObjects1.length = 0;
gdjs.StartCode.GDGreenPlayerObjects2.length = 0;
gdjs.StartCode.GDGreenPlayerObjects3.length = 0;
gdjs.StartCode.GDGreenPlayerObjects4.length = 0;
gdjs.StartCode.GDBrownPanelObjects1.length = 0;
gdjs.StartCode.GDBrownPanelObjects2.length = 0;
gdjs.StartCode.GDBrownPanelObjects3.length = 0;
gdjs.StartCode.GDBrownPanelObjects4.length = 0;
gdjs.StartCode.GDTitleObjects1.length = 0;
gdjs.StartCode.GDTitleObjects2.length = 0;
gdjs.StartCode.GDTitleObjects3.length = 0;
gdjs.StartCode.GDTitleObjects4.length = 0;
gdjs.StartCode.GDNewObjectObjects1.length = 0;
gdjs.StartCode.GDNewObjectObjects2.length = 0;
gdjs.StartCode.GDNewObjectObjects3.length = 0;
gdjs.StartCode.GDNewObjectObjects4.length = 0;
gdjs.StartCode.GDExpandButtonObjects1.length = 0;
gdjs.StartCode.GDExpandButtonObjects2.length = 0;
gdjs.StartCode.GDExpandButtonObjects3.length = 0;
gdjs.StartCode.GDExpandButtonObjects4.length = 0;

gdjs.StartCode.eventsList3(runtimeScene);
return;

}

gdjs['StartCode'] = gdjs.StartCode;
