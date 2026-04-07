gdjs.PlayCode = {};
gdjs.PlayCode.GDSeaObjects1= [];
gdjs.PlayCode.GDSeaObjects2= [];
gdjs.PlayCode.GDSeaObjects3= [];
gdjs.PlayCode.GDExpandButtonObjects1= [];
gdjs.PlayCode.GDExpandButtonObjects2= [];
gdjs.PlayCode.GDExpandButtonObjects3= [];
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
gdjs.PlayCode.GDEnemy0Objects1= [];
gdjs.PlayCode.GDEnemy0Objects2= [];
gdjs.PlayCode.GDEnemy0Objects3= [];
gdjs.PlayCode.GDScoreObjects1= [];
gdjs.PlayCode.GDScoreObjects2= [];
gdjs.PlayCode.GDScoreObjects3= [];
gdjs.PlayCode.GDEnemy1Objects1= [];
gdjs.PlayCode.GDEnemy1Objects2= [];
gdjs.PlayCode.GDEnemy1Objects3= [];
gdjs.PlayCode.GDParticleTrailObjects1= [];
gdjs.PlayCode.GDParticleTrailObjects2= [];
gdjs.PlayCode.GDParticleTrailObjects3= [];

gdjs.PlayCode.conditionTrue_0 = {val:false};
gdjs.PlayCode.condition0IsTrue_0 = {val:false};
gdjs.PlayCode.condition1IsTrue_0 = {val:false};
gdjs.PlayCode.condition2IsTrue_0 = {val:false};


gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDTopArrowRoundButtonObjects2Objects = Hashtable.newFrom({"TopArrowRoundButton": gdjs.PlayCode.GDTopArrowRoundButtonObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDBottomArrowRoundButtonObjects2Objects = Hashtable.newFrom({"BottomArrowRoundButton": gdjs.PlayCode.GDBottomArrowRoundButtonObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDLeftArrowRoundButtonObjects2Objects = Hashtable.newFrom({"LeftArrowRoundButton": gdjs.PlayCode.GDLeftArrowRoundButtonObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDRightArrowRoundButtonObjects1Objects = Hashtable.newFrom({"RightArrowRoundButton": gdjs.PlayCode.GDRightArrowRoundButtonObjects1});gdjs.PlayCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TopArrowRoundButton"), gdjs.PlayCode.GDTopArrowRoundButtonObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDTopArrowRoundButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.PlayCode.GDGreenPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("ParticleTrail"), gdjs.PlayCode.GDParticleTrailObjects2);
{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects2[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects2[i].setAnimationName("up");
}
}{for(var i = 0, len = gdjs.PlayCode.GDParticleTrailObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDParticleTrailObjects2[i].setAngle(90);
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
gdjs.copyArray(runtimeScene.getObjects("ParticleTrail"), gdjs.PlayCode.GDParticleTrailObjects2);
{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects2[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects2[i].setAnimationName("fall");
}
}{for(var i = 0, len = gdjs.PlayCode.GDParticleTrailObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDParticleTrailObjects2[i].setAngle(-(90));
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
gdjs.copyArray(runtimeScene.getObjects("ParticleTrail"), gdjs.PlayCode.GDParticleTrailObjects2);
{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects2[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects2[i].setAnimationName("swim");
}
}{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects2[i].flipX(true);
}
}{for(var i = 0, len = gdjs.PlayCode.GDParticleTrailObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDParticleTrailObjects2[i].setAngle(0);
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
gdjs.copyArray(runtimeScene.getObjects("ParticleTrail"), gdjs.PlayCode.GDParticleTrailObjects1);
{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects1[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects1[i].setAnimationName("swim");
}
}{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects1[i].flipX(false);
}
}{for(var i = 0, len = gdjs.PlayCode.GDParticleTrailObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDParticleTrailObjects1[i].setAngle(180);
}
}}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDEnemy0Objects2ObjectsGDgdjs_46PlayCode_46GDEnemy1Objects2Objects = Hashtable.newFrom({"Enemy0": gdjs.PlayCode.GDEnemy0Objects2, "Enemy1": gdjs.PlayCode.GDEnemy1Objects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDEnemy0Objects2ObjectsGDgdjs_46PlayCode_46GDEnemy1Objects2Objects = Hashtable.newFrom({"Enemy0": gdjs.PlayCode.GDEnemy0Objects2, "Enemy1": gdjs.PlayCode.GDEnemy1Objects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDEnemy0Objects2ObjectsGDgdjs_46PlayCode_46GDEnemy1Objects2Objects = Hashtable.newFrom({"Enemy0": gdjs.PlayCode.GDEnemy0Objects2, "Enemy1": gdjs.PlayCode.GDEnemy1Objects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDEnemy0Objects1ObjectsGDgdjs_46PlayCode_46GDEnemy1Objects1Objects = Hashtable.newFrom({"Enemy0": gdjs.PlayCode.GDEnemy0Objects1, "Enemy1": gdjs.PlayCode.GDEnemy1Objects1});gdjs.PlayCode.eventsList1 = function(runtimeScene) {

{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("side")) == 1;
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.PlayCode.GDEnemy0Objects2.length = 0;

gdjs.PlayCode.GDEnemy1Objects2.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDEnemy0Objects2ObjectsGDgdjs_46PlayCode_46GDEnemy1Objects2Objects, "Enemy" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 1)), gdjs.randomInRange(0, 800), 0, "");
}{runtimeScene.getVariables().get("deltaAngle").setNumber(gdjs.randomInRange(-(45), 45) + 90);
}{for(var i = 0, len = gdjs.PlayCode.GDEnemy0Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy0Objects2[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")));
}
for(var i = 0, len = gdjs.PlayCode.GDEnemy1Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy1Objects2[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")));
}
}{for(var i = 0, len = gdjs.PlayCode.GDEnemy0Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy0Objects2[i].addPolarForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")), 200 + gdjs.randomInRange(-(50), 100), 1);
}
for(var i = 0, len = gdjs.PlayCode.GDEnemy1Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy1Objects2[i].addPolarForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")), 200 + gdjs.randomInRange(-(50), 100), 1);
}
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("side")) == 2;
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.PlayCode.GDEnemy0Objects2.length = 0;

gdjs.PlayCode.GDEnemy1Objects2.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDEnemy0Objects2ObjectsGDgdjs_46PlayCode_46GDEnemy1Objects2Objects, "Enemy" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 1)), gdjs.randomInRange(0, 800), 600, "");
}{runtimeScene.getVariables().get("deltaAngle").setNumber(gdjs.randomInRange(-(45), 45) - 90);
}{for(var i = 0, len = gdjs.PlayCode.GDEnemy0Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy0Objects2[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")));
}
for(var i = 0, len = gdjs.PlayCode.GDEnemy1Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy1Objects2[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")));
}
}{for(var i = 0, len = gdjs.PlayCode.GDEnemy0Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy0Objects2[i].addPolarForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")), 200 + gdjs.randomInRange(-(50), 100), 1);
}
for(var i = 0, len = gdjs.PlayCode.GDEnemy1Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy1Objects2[i].addPolarForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")), 200 + gdjs.randomInRange(-(50), 100), 1);
}
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("side")) == 3;
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.PlayCode.GDEnemy0Objects2.length = 0;

gdjs.PlayCode.GDEnemy1Objects2.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDEnemy0Objects2ObjectsGDgdjs_46PlayCode_46GDEnemy1Objects2Objects, "Enemy" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 1)), 0, gdjs.randomInRange(0, 600), "");
}{runtimeScene.getVariables().get("deltaAngle").setNumber(gdjs.randomInRange(-(45), 45));
}{for(var i = 0, len = gdjs.PlayCode.GDEnemy0Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy0Objects2[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")));
}
for(var i = 0, len = gdjs.PlayCode.GDEnemy1Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy1Objects2[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")));
}
}{for(var i = 0, len = gdjs.PlayCode.GDEnemy0Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy0Objects2[i].addPolarForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")), 200 + gdjs.randomInRange(-(50), 100), 1);
}
for(var i = 0, len = gdjs.PlayCode.GDEnemy1Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy1Objects2[i].addPolarForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")), 200 + gdjs.randomInRange(-(50), 100), 1);
}
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("side")) == 4;
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.PlayCode.GDEnemy0Objects1.length = 0;

gdjs.PlayCode.GDEnemy1Objects1.length = 0;

{gdjs.evtTools.object.createObjectFromGroupOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDEnemy0Objects1ObjectsGDgdjs_46PlayCode_46GDEnemy1Objects1Objects, "Enemy" + gdjs.evtTools.common.toString(gdjs.randomInRange(0, 1)), 800, gdjs.randomInRange(0, 600), "");
}{runtimeScene.getVariables().get("deltaAngle").setNumber(gdjs.randomInRange(-(45), 45) + 180);
}{for(var i = 0, len = gdjs.PlayCode.GDEnemy0Objects1.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy0Objects1[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")));
}
for(var i = 0, len = gdjs.PlayCode.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy1Objects1[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")));
}
}{for(var i = 0, len = gdjs.PlayCode.GDEnemy0Objects1.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy0Objects1[i].addPolarForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")), 200 + gdjs.randomInRange(-(50), 100), 1);
}
for(var i = 0, len = gdjs.PlayCode.GDEnemy1Objects1.length ;i < len;++i) {
    gdjs.PlayCode.GDEnemy1Objects1[i].addPolarForce(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("deltaAngle")), 200 + gdjs.randomInRange(-(50), 100), 1);
}
}}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGreenPlayerObjects1Objects = Hashtable.newFrom({"GreenPlayer": gdjs.PlayCode.GDGreenPlayerObjects1});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDEnemy0Objects1ObjectsGDgdjs_46PlayCode_46GDEnemy1Objects1Objects = Hashtable.newFrom({"Enemy0": gdjs.PlayCode.GDEnemy0Objects1, "Enemy1": gdjs.PlayCode.GDEnemy1Objects1});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDExpandButtonObjects1Objects = Hashtable.newFrom({"ExpandButton": gdjs.PlayCode.GDExpandButtonObjects1});gdjs.PlayCode.eventsList2 = function(runtimeScene) {

{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = !(gdjs.evtTools.window.isFullScreen(runtimeScene));
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("fullscreen").setNumber(0);
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("fullscreen")) == 1;
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("fullscreen")) == 0;
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


};gdjs.PlayCode.eventsList3 = function(runtimeScene) {

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
gdjs.copyArray(runtimeScene.getObjects("ParticleTrail"), gdjs.PlayCode.GDParticleTrailObjects1);
{for(var i = 0, len = gdjs.PlayCode.GDGreenPlayerObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPlayerObjects1[i].setAnimationName("stand");
}
}{for(var i = 0, len = gdjs.PlayCode.GDParticleTrailObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDParticleTrailObjects1[i].setPosition(-(100),-(100));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.PlayCode.GDGreenPlayerObjects1);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDGreenPlayerObjects1.length;i<l;++i) {
    if ( gdjs.PlayCode.GDGreenPlayerObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDGreenPlayerObjects1[k] = gdjs.PlayCode.GDGreenPlayerObjects1[i];
        ++k;
    }
}
gdjs.PlayCode.GDGreenPlayerObjects1.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDGreenPlayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("ParticleTrail"), gdjs.PlayCode.GDParticleTrailObjects1);
{for(var i = 0, len = gdjs.PlayCode.GDParticleTrailObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDParticleTrailObjects1[i].putAroundObject((gdjs.PlayCode.GDGreenPlayerObjects1.length !== 0 ? gdjs.PlayCode.GDGreenPlayerObjects1[0] : null), 0, 0);
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

gdjs.copyArray(runtimeScene.getObjects("Enemy0"), gdjs.PlayCode.GDEnemy0Objects1);
gdjs.copyArray(runtimeScene.getObjects("Enemy1"), gdjs.PlayCode.GDEnemy1Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenPlayer"), gdjs.PlayCode.GDGreenPlayerObjects1);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGreenPlayerObjects1Objects, gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDEnemy0Objects1ObjectsGDgdjs_46PlayCode_46GDEnemy1Objects1Objects, false, runtimeScene, false);
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


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("BottomArrowRoundButton"), gdjs.PlayCode.GDBottomArrowRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs.PlayCode.GDExpandButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.PlayCode.GDLeftArrowRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.PlayCode.GDRightArrowRoundButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("TopArrowRoundButton"), gdjs.PlayCode.GDTopArrowRoundButtonObjects1);
{for(var i = 0, len = gdjs.PlayCode.GDTopArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDTopArrowRoundButtonObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.PlayCode.GDBottomArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDBottomArrowRoundButtonObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.PlayCode.GDLeftArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDLeftArrowRoundButtonObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.PlayCode.GDRightArrowRoundButtonObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDRightArrowRoundButtonObjects1[i].setOpacity(100);
}
}{for(var i = 0, len = gdjs.PlayCode.GDExpandButtonObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDExpandButtonObjects1[i].setOpacity(100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs.PlayCode.GDExpandButtonObjects1);

gdjs.PlayCode.condition0IsTrue_0.val = false;
gdjs.PlayCode.condition1IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDExpandButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PlayCode.condition0IsTrue_0.val ) {
{
gdjs.PlayCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}}
if (gdjs.PlayCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("fullscreen").setNumber(1);
}
{ //Subevents
gdjs.PlayCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.PlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlayCode.GDSeaObjects1.length = 0;
gdjs.PlayCode.GDSeaObjects2.length = 0;
gdjs.PlayCode.GDSeaObjects3.length = 0;
gdjs.PlayCode.GDExpandButtonObjects1.length = 0;
gdjs.PlayCode.GDExpandButtonObjects2.length = 0;
gdjs.PlayCode.GDExpandButtonObjects3.length = 0;
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
gdjs.PlayCode.GDEnemy0Objects1.length = 0;
gdjs.PlayCode.GDEnemy0Objects2.length = 0;
gdjs.PlayCode.GDEnemy0Objects3.length = 0;
gdjs.PlayCode.GDScoreObjects1.length = 0;
gdjs.PlayCode.GDScoreObjects2.length = 0;
gdjs.PlayCode.GDScoreObjects3.length = 0;
gdjs.PlayCode.GDEnemy1Objects1.length = 0;
gdjs.PlayCode.GDEnemy1Objects2.length = 0;
gdjs.PlayCode.GDEnemy1Objects3.length = 0;
gdjs.PlayCode.GDParticleTrailObjects1.length = 0;
gdjs.PlayCode.GDParticleTrailObjects2.length = 0;
gdjs.PlayCode.GDParticleTrailObjects3.length = 0;

gdjs.PlayCode.eventsList3(runtimeScene);
return;

}

gdjs['PlayCode'] = gdjs.PlayCode;
