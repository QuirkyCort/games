gdjs.EndCode = {};
gdjs.EndCode.GDGameOverObjects1= [];
gdjs.EndCode.GDGameOverObjects2= [];
gdjs.EndCode.GDBuffArrow3Objects1= [];
gdjs.EndCode.GDBuffArrow3Objects2= [];
gdjs.EndCode.GDScoreObjects1= [];
gdjs.EndCode.GDScoreObjects2= [];

gdjs.EndCode.conditionTrue_0 = {val:false};
gdjs.EndCode.condition0IsTrue_0 = {val:false};
gdjs.EndCode.condition1IsTrue_0 = {val:false};
gdjs.EndCode.condition2IsTrue_0 = {val:false};


gdjs.EndCode.mapOfGDgdjs_46EndCode_46GDBuffArrow3Objects1Objects = Hashtable.newFrom({"BuffArrow3": gdjs.EndCode.GDBuffArrow3Objects1});gdjs.EndCode.eventsList0 = function(runtimeScene) {

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
}}

}


{


gdjs.EndCode.condition0IsTrue_0.val = false;
{
gdjs.EndCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.EndCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Halloween Theme 1.aac", false, 100, 1);
}}

}


};

gdjs.EndCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.EndCode.GDGameOverObjects1.length = 0;
gdjs.EndCode.GDGameOverObjects2.length = 0;
gdjs.EndCode.GDBuffArrow3Objects1.length = 0;
gdjs.EndCode.GDBuffArrow3Objects2.length = 0;
gdjs.EndCode.GDScoreObjects1.length = 0;
gdjs.EndCode.GDScoreObjects2.length = 0;

gdjs.EndCode.eventsList0(runtimeScene);
return;

}

gdjs['EndCode'] = gdjs.EndCode;
