gdjs.EndCode = {};
gdjs.EndCode.GDSeaObjects1= [];
gdjs.EndCode.GDSeaObjects2= [];
gdjs.EndCode.GDSeaObjects3= [];
gdjs.EndCode.GDExpandButtonObjects1= [];
gdjs.EndCode.GDExpandButtonObjects2= [];
gdjs.EndCode.GDExpandButtonObjects3= [];
gdjs.EndCode.GDGameOverObjects1= [];
gdjs.EndCode.GDGameOverObjects2= [];
gdjs.EndCode.GDGameOverObjects3= [];
gdjs.EndCode.GDBuffArrow3Objects1= [];
gdjs.EndCode.GDBuffArrow3Objects2= [];
gdjs.EndCode.GDBuffArrow3Objects3= [];
gdjs.EndCode.GDScoreObjects1= [];
gdjs.EndCode.GDScoreObjects2= [];
gdjs.EndCode.GDScoreObjects3= [];

gdjs.EndCode.conditionTrue_0 = {val:false};
gdjs.EndCode.condition0IsTrue_0 = {val:false};
gdjs.EndCode.condition1IsTrue_0 = {val:false};
gdjs.EndCode.condition2IsTrue_0 = {val:false};


gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDBuffArrow3Objects1Objects = Hashtable.newFrom({"BuffArrow3": gdjs.EndCode.GDBuffArrow3Objects1});gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDExpandButtonObjects1Objects = Hashtable.newFrom({"ExpandButton": gdjs.EndCode.GDExpandButtonObjects1});gdjs.EndCode.eventsList0 = function(runtimeScene) {

{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
}if (gdjs.EndCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("fullscreen").setNumber(0);
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("fullscreen")) == 1;
}if (gdjs.EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("fullscreen")) == 0;
}if (gdjs.EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.EndCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BuffArrow3"), gdjs.EndCode.GDBuffArrow3Objects1);

gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDBuffArrow3Objects1Objects, runtimeScene, true, false);
}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
gdjs.EndCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.EndCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Start", false);
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.EndCode.GDScoreObjects1);
{for(var i = 0, len = gdjs.EndCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDScoreObjects1[i].setString(gdjs.EndCode.GDScoreObjects1[i].getString() + (gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score"))));
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "Halloween Theme 1.aac", false, 100, 1);
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs.EndCode.GDExpandButtonObjects1);
{for(var i = 0, len = gdjs.EndCode.GDExpandButtonObjects1.length ;i < len;++i) {
    gdjs.EndCode.GDExpandButtonObjects1[i].setOpacity(100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs.EndCode.GDExpandButtonObjects1);

gdjs.EndCode.condition0IsTrue_0.val = false;
gdjs.EndCode.condition1IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDExpandButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.EndCode.condition0IsTrue_0.val ) {
{
gdjs.EndCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.EndCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("fullscreen").setNumber(1);
}
{ //Subevents
gdjs.EndCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDSeaObjects1.length = 0;
gdjs.EndCode.GDSeaObjects2.length = 0;
gdjs.EndCode.GDSeaObjects3.length = 0;
gdjs.EndCode.GDExpandButtonObjects1.length = 0;
gdjs.EndCode.GDExpandButtonObjects2.length = 0;
gdjs.EndCode.GDExpandButtonObjects3.length = 0;
gdjs.EndCode.GDGameOverObjects1.length = 0;
gdjs.EndCode.GDGameOverObjects2.length = 0;
gdjs.EndCode.GDGameOverObjects3.length = 0;
gdjs.EndCode.GDBuffArrow3Objects1.length = 0;
gdjs.EndCode.GDBuffArrow3Objects2.length = 0;
gdjs.EndCode.GDBuffArrow3Objects3.length = 0;
gdjs.EndCode.GDScoreObjects1.length = 0;
gdjs.EndCode.GDScoreObjects2.length = 0;
gdjs.EndCode.GDScoreObjects3.length = 0;

gdjs.EndCode.eventsList1(runtimeScene);
return;

}

gdjs['EndCode'] = gdjs.EndCode;
