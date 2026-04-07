gdjs.PlayCode = {};
gdjs.PlayCode.GDGreenPlayerObjects1= [];
gdjs.PlayCode.GDGreenPlayerObjects2= [];
gdjs.PlayCode.GDGreenPlayerObjects3= [];
gdjs.PlayCode.GDTopArrowRoundButtonObjects1= [];
gdjs.PlayCode.GDTopArrowRoundButtonObjects2= [];
gdjs.PlayCode.GDTopArrowRoundButtonObjects3= [];
gdjs.PlayCode.GDBottomArrowRoundButtonObjects1= [];
gdjs.PlayCode.GDBottomArrowRoundButtonObjects2= [];
gdjs.PlayCode.GDBottomArrowRoundButtonObjects3= [];
gdjs.PlayCode.GDLeftArrowRoundButtonObjects1= [];
gdjs.PlayCode.GDLeftArrowRoundButtonObjects2= [];
gdjs.PlayCode.GDLeftArrowRoundButtonObjects3= [];
gdjs.PlayCode.GDRightArrowRoundButtonObjects1= [];
gdjs.PlayCode.GDRightArrowRoundButtonObjects2= [];
gdjs.PlayCode.GDRightArrowRoundButtonObjects3= [];
gdjs.PlayCode.GDSwimmingEnemyObjects1= [];
gdjs.PlayCode.GDSwimmingEnemyObjects2= [];
gdjs.PlayCode.GDSwimmingEnemyObjects3= [];
gdjs.PlayCode.GDScoreObjects1= [];
gdjs.PlayCode.GDScoreObjects2= [];
gdjs.PlayCode.GDScoreObjects3= [];

gdjs.PlayCode.conditionTrue_0 = {val:false};
gdjs.PlayCode.condition0IsTrue_0 = {val:false};
gdjs.PlayCode.condition1IsTrue_0 = {val:false};


gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDTopArrowRoundButtonObjects2Objects = Hashtable.newFrom({"TopArrowRoundButton": gdjs.PlayCode.GDTopArrowRoundButtonObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDBottomArrowRoundButtonObjects2Objects = Hashtable.newFrom({"BottomArrowRoundButton": gdjs.PlayCode.GDBottomArrowRoundButtonObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDLeftArrowRoundButtonObjects2Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.PlayCode.GDLeftArrowRoundButtonObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDRightArrowRoundButtonObjects1Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.PlayCode.GDRightArrowRoundButtonObjects1});gdjs.PlayCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TopArrowRoundButton"), gdjs.PlayCode.GDTopArrowRoundButtonObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDTopArrowRoundButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.PlayCode.GDGreenPlayerObjects2);
{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects2[i].setAnimationName("up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BottomArrowRoundButton"), gdjs.PlayCode.GDBottomArrowRoundButtonObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDBottomArrowRoundButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.PlayCode.GDGreenPlayerObjects2);
{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects2[i].setAnimationName("fall");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.PlayCode.GDLeftArrowRoundButtonObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDLeftArrowRoundButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.PlayCode.GDGreenPlayerObjects2);
{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects2[i].setAnimationName("swim");
}
}{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.PlayCode.GDRightArrowRoundButtonObjects1);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDRightArrowRoundButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.PlayCode.GDGreenPlayerObjects1);
{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects1[i].setAnimationName("swim");
}
}{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects1[i].flipX(false);
}
}}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDSwimmingEnemyObjects2Objects = Hashtable.newFrom({"SwimmingEnemy": gdjs.PlayCode.GDSwimmingEnemyObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDSwimmingEnemyObjects2Objects = Hashtable.newFrom({"SwimmingEnemy": gdjs.PlayCode.GDSwimmingEnemyObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDSwimmingEnemyObjects2Objects = Hashtable.newFrom({"SwimmingEnemy": gdjs.PlayCode.GDSwimmingEnemyObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDSwimmingEnemyObjects1Objects = Hashtable.newFrom({"SwimmingEnemy": gdjs.PlayCode.GDSwimmingEnemyObjects1});gdjs.PlayCode.eventsList1 = function(runtimeScene) {

{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("side")) == 1;
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.PlayCode.GDSwimmingEnemyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDSwimmingEnemyObjects2Objects, gdjs.randomInRange(0, 800), 0, "");
}{for(var i = 0, len = gdjs.PlayCode.GDSwimmingEnemyObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDSwimmingEnemyObjects2[i].setAngle(90);
}
}{for(var i = 0, len = gdjs.PlayCode.GDSwimmingEnemyObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDSwimmingEnemyObjects2[i].addForce(0, 200, 1);
}
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("side")) == 2;
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.PlayCode.GDSwimmingEnemyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDSwimmingEnemyObjects2Objects, gdjs.randomInRange(0, 800), 600, "");
}{for(var i = 0, len = gdjs.PlayCode.GDSwimmingEnemyObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDSwimmingEnemyObjects2[i].setAngle(-(90));
}
}{for(var i = 0, len = gdjs.PlayCode.GDSwimmingEnemyObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDSwimmingEnemyObjects2[i].addForce(0, -(200), 1);
}
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("side")) == 3;
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.PlayCode.GDSwimmingEnemyObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDSwimmingEnemyObjects2Objects, 0, gdjs.randomInRange(0, 600), "");
}{for(var i = 0, len = gdjs.PlayCode.GDSwimmingEnemyObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDSwimmingEnemyObjects2[i].setAngle(0);
}
}{for(var i = 0, len = gdjs.PlayCode.GDSwimmingEnemyObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDSwimmingEnemyObjects2[i].addForce(200, 0, 1);
}
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("side")) == 4;
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.PlayCode.GDSwimmingEnemyObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDSwimmingEnemyObjects1Objects, 800, gdjs.randomInRange(0, 600), "");
}{for(var i = 0, len = gdjs.PlayCode.GDSwimmingEnemyObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDSwimmingEnemyObjects1[i].setAngle(180);
}
}{for(var i = 0, len = gdjs.PlayCode.GDSwimmingEnemyObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDSwimmingEnemyObjects1[i].addForce(-(200), 0, 1);
}
}}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGreenPlayerObjects1Objects = Hashtable.newFrom({"GreenPlayer": gdjs.PlayCode.GDGreenPlayerObjects1});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDSwimmingEnemyObjects1Objects = Hashtable.newFrom({"SwimmingEnemy": gdjs.PlayCode.GDSwimmingEnemyObjects1});gdjs.PlayCode.eventsList2 = function(runtimeScene) {

{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.PlayCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PlayCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.PlayCode.GDGreenPlayerObjects1);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDGreenPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.PlayCode.GDGreenPlayerObjects1[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDGreenPlayerObjects1[k] = gdjs.PlayCode.GDGreenPlayerObjects1[i];
        ++k;
    }
}
gdjs.PlayCode.GDGreenPlayerObjects1.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDGreenPlayerObjects1 */
{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects1[i].setAnimationName("stand");
}
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("enemy delay")), "enemy timer");
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "enemy timer");
}{runtimeScene.getVariables().get("side").setNumber(gdjs.randomInRange(1, 4));
}
{ //Subevents
gdjs.PlayCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.PlayCode.GDGreenPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("SwimmingEnemy"), gdjs.PlayCode.GDSwimmingEnemyObjects1);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGreenPlayerObjects1Objects, gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDSwimmingEnemyObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "End", false);
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("score").setNumber(0);
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 1, "score timer");
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Score"), gdjs.PlayCode.GDScoreObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "score timer");
}{runtimeScene.getGame().getVariables().get("score").add(1);
}{for(var i = 0, len = gdjs.PlayCode.GDScoreObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDScoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("score")));
}
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Monsters in Hotel.aac", true, 100, 1);
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("enemy delay").setNumber(1);
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 5, "difficulty timer");
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "difficulty timer");
}{runtimeScene.getVariables().get("enemy delay").mul(0.9);
}}

}


};

gdjs.PlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlayCode.GDGreenPlayerObjects1.length = 0;
gdjs.PlayCode.GDGreenPlayerObjects2.length = 0;
gdjs.PlayCode.GDGreenPlayerObjects3.length = 0;
gdjs.PlayCode.GDTopArrowRoundButtonObjects1.length = 0;
gdjs.PlayCode.GDTopArrowRoundButtonObjects2.length = 0;
gdjs.PlayCode.GDTopArrowRoundButtonObjects3.length = 0;
gdjs.PlayCode.GDBottomArrowRoundButtonObjects1.length = 0;
gdjs.PlayCode.GDBottomArrowRoundButtonObjects2.length = 0;
gdjs.PlayCode.GDBottomArrowRoundButtonObjects3.length = 0;
gdjs.PlayCode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.PlayCode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.PlayCode.GDLeftArrowRoundButtonObjects3.length = 0;
gdjs.PlayCode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.PlayCode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.PlayCode.GDRightArrowRoundButtonObjects3.length = 0;
gdjs.PlayCode.GDSwimmingEnemyObjects1.length = 0;
gdjs.PlayCode.GDSwimmingEnemyObjects2.length = 0;
gdjs.PlayCode.GDSwimmingEnemyObjects3.length = 0;
gdjs.PlayCode.GDScoreObjects1.length = 0;
gdjs.PlayCode.GDScoreObjects2.length = 0;
gdjs.PlayCode.GDScoreObjects3.length = 0;

gdjs.PlayCode.eventsList2(runtimeScene);
return;

}

gdjs['PlayCode'] = gdjs.PlayCode;
