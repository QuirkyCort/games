gdjs.PlayCode = {};
gdjs.PlayCode.GDGenericCharacter3Objects1= [];
gdjs.PlayCode.GDGenericCharacter3Objects2= [];
gdjs.PlayCode.GDGenericCharacter3Objects3= [];
gdjs.PlayCode.GDGenericCharacter3Objects4= [];
gdjs.PlayCode.GDTopArrowButtonObjects1= [];
gdjs.PlayCode.GDTopArrowButtonObjects2= [];
gdjs.PlayCode.GDTopArrowButtonObjects3= [];
gdjs.PlayCode.GDTopArrowButtonObjects4= [];
gdjs.PlayCode.GDBottomArrowButtonObjects1= [];
gdjs.PlayCode.GDBottomArrowButtonObjects2= [];
gdjs.PlayCode.GDBottomArrowButtonObjects3= [];
gdjs.PlayCode.GDBottomArrowButtonObjects4= [];
gdjs.PlayCode.GDLeftArrowButtonObjects1= [];
gdjs.PlayCode.GDLeftArrowButtonObjects2= [];
gdjs.PlayCode.GDLeftArrowButtonObjects3= [];
gdjs.PlayCode.GDLeftArrowButtonObjects4= [];
gdjs.PlayCode.GDRightArrowButtonObjects1= [];
gdjs.PlayCode.GDRightArrowButtonObjects2= [];
gdjs.PlayCode.GDRightArrowButtonObjects3= [];
gdjs.PlayCode.GDRightArrowButtonObjects4= [];
gdjs.PlayCode.GDGroundObjects1= [];
gdjs.PlayCode.GDGroundObjects2= [];
gdjs.PlayCode.GDGroundObjects3= [];
gdjs.PlayCode.GDGroundObjects4= [];
gdjs.PlayCode.GDWallObjects1= [];
gdjs.PlayCode.GDWallObjects2= [];
gdjs.PlayCode.GDWallObjects3= [];
gdjs.PlayCode.GDWallObjects4= [];
gdjs.PlayCode.GDWizardMaleObjects1= [];
gdjs.PlayCode.GDWizardMaleObjects2= [];
gdjs.PlayCode.GDWizardMaleObjects3= [];
gdjs.PlayCode.GDWizardMaleObjects4= [];
gdjs.PlayCode.GDGreenPanelObjects1= [];
gdjs.PlayCode.GDGreenPanelObjects2= [];
gdjs.PlayCode.GDGreenPanelObjects3= [];
gdjs.PlayCode.GDGreenPanelObjects4= [];
gdjs.PlayCode.GDDialogObjects1= [];
gdjs.PlayCode.GDDialogObjects2= [];
gdjs.PlayCode.GDDialogObjects3= [];
gdjs.PlayCode.GDDialogObjects4= [];
gdjs.PlayCode.GDPrincessObjects1= [];
gdjs.PlayCode.GDPrincessObjects2= [];
gdjs.PlayCode.GDPrincessObjects3= [];
gdjs.PlayCode.GDPrincessObjects4= [];
gdjs.PlayCode.GDDoorObjects1= [];
gdjs.PlayCode.GDDoorObjects2= [];
gdjs.PlayCode.GDDoorObjects3= [];
gdjs.PlayCode.GDDoorObjects4= [];
gdjs.PlayCode.GDGoldKeyObjects1= [];
gdjs.PlayCode.GDGoldKeyObjects2= [];
gdjs.PlayCode.GDGoldKeyObjects3= [];
gdjs.PlayCode.GDGoldKeyObjects4= [];
gdjs.PlayCode.GDGoblinObjects1= [];
gdjs.PlayCode.GDGoblinObjects2= [];
gdjs.PlayCode.GDGoblinObjects3= [];
gdjs.PlayCode.GDGoblinObjects4= [];
gdjs.PlayCode.GDmoveUpObjects1= [];
gdjs.PlayCode.GDmoveUpObjects2= [];
gdjs.PlayCode.GDmoveUpObjects3= [];
gdjs.PlayCode.GDmoveUpObjects4= [];
gdjs.PlayCode.GDmoveDownObjects1= [];
gdjs.PlayCode.GDmoveDownObjects2= [];
gdjs.PlayCode.GDmoveDownObjects3= [];
gdjs.PlayCode.GDmoveDownObjects4= [];
gdjs.PlayCode.GDmoveLeftObjects1= [];
gdjs.PlayCode.GDmoveLeftObjects2= [];
gdjs.PlayCode.GDmoveLeftObjects3= [];
gdjs.PlayCode.GDmoveLeftObjects4= [];
gdjs.PlayCode.GDmoveRightObjects1= [];
gdjs.PlayCode.GDmoveRightObjects2= [];
gdjs.PlayCode.GDmoveRightObjects3= [];
gdjs.PlayCode.GDmoveRightObjects4= [];
gdjs.PlayCode.GDLavishSwordObjects1= [];
gdjs.PlayCode.GDLavishSwordObjects2= [];
gdjs.PlayCode.GDLavishSwordObjects3= [];
gdjs.PlayCode.GDLavishSwordObjects4= [];
gdjs.PlayCode.GDAButtonObjects1= [];
gdjs.PlayCode.GDAButtonObjects2= [];
gdjs.PlayCode.GDAButtonObjects3= [];
gdjs.PlayCode.GDAButtonObjects4= [];
gdjs.PlayCode.GDPlayerDialogObjects1= [];
gdjs.PlayCode.GDPlayerDialogObjects2= [];
gdjs.PlayCode.GDPlayerDialogObjects3= [];
gdjs.PlayCode.GDPlayerDialogObjects4= [];
gdjs.PlayCode.GDExpandButtonObjects1= [];
gdjs.PlayCode.GDExpandButtonObjects2= [];
gdjs.PlayCode.GDExpandButtonObjects3= [];
gdjs.PlayCode.GDExpandButtonObjects4= [];

gdjs.PlayCode.conditionTrue_0 = {val:false};
gdjs.PlayCode.condition0IsTrue_0 = {val:false};
gdjs.PlayCode.condition1IsTrue_0 = {val:false};
gdjs.PlayCode.condition2IsTrue_0 = {val:false};
gdjs.PlayCode.condition3IsTrue_0 = {val:false};
gdjs.PlayCode.conditionTrue_1 = {val:false};
gdjs.PlayCode.condition0IsTrue_1 = {val:false};
gdjs.PlayCode.condition1IsTrue_1 = {val:false};
gdjs.PlayCode.condition2IsTrue_1 = {val:false};
gdjs.PlayCode.condition3IsTrue_1 = {val:false};


gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDTopArrowButtonObjects3Objects = Hashtable.newFrom({"TopArrowButton": gdjs.PlayCode.GDTopArrowButtonObjects3});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDBottomArrowButtonObjects3Objects = Hashtable.newFrom({"BottomArrowButton": gdjs.PlayCode.GDBottomArrowButtonObjects3});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDLeftArrowButtonObjects3Objects = Hashtable.newFrom({"LeftArrowButton": gdjs.PlayCode.GDLeftArrowButtonObjects3});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDRightArrowButtonObjects2Objects = Hashtable.newFrom({"RightArrowButton": gdjs.PlayCode.GDRightArrowButtonObjects2});gdjs.PlayCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TopArrowButton"), gdjs.PlayCode.GDTopArrowButtonObjects3);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDTopArrowButtonObjects3Objects, runtimeScene, true, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.PlayCode.GDGenericCharacter3Objects2, gdjs.PlayCode.GDGenericCharacter3Objects3);

{for(var i = 0, len = gdjs.PlayCode.GDGenericCharacter3Objects3.length ;i < len;++i) {
    gdjs.PlayCode.GDGenericCharacter3Objects3[i].getBehavior("TopDownMovement").simulateUpKey();
}
}{for(var i = 0, len = gdjs.PlayCode.GDGenericCharacter3Objects3.length ;i < len;++i) {
    gdjs.PlayCode.GDGenericCharacter3Objects3[i].setAnimation(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BottomArrowButton"), gdjs.PlayCode.GDBottomArrowButtonObjects3);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDBottomArrowButtonObjects3Objects, runtimeScene, true, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.PlayCode.GDGenericCharacter3Objects2, gdjs.PlayCode.GDGenericCharacter3Objects3);

{for(var i = 0, len = gdjs.PlayCode.GDGenericCharacter3Objects3.length ;i < len;++i) {
    gdjs.PlayCode.GDGenericCharacter3Objects3[i].getBehavior("TopDownMovement").simulateDownKey();
}
}{for(var i = 0, len = gdjs.PlayCode.GDGenericCharacter3Objects3.length ;i < len;++i) {
    gdjs.PlayCode.GDGenericCharacter3Objects3[i].setAnimation(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowButton"), gdjs.PlayCode.GDLeftArrowButtonObjects3);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDLeftArrowButtonObjects3Objects, runtimeScene, true, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.PlayCode.GDGenericCharacter3Objects2, gdjs.PlayCode.GDGenericCharacter3Objects3);

{for(var i = 0, len = gdjs.PlayCode.GDGenericCharacter3Objects3.length ;i < len;++i) {
    gdjs.PlayCode.GDGenericCharacter3Objects3[i].getBehavior("TopDownMovement").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.PlayCode.GDGenericCharacter3Objects3.length ;i < len;++i) {
    gdjs.PlayCode.GDGenericCharacter3Objects3[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowButton"), gdjs.PlayCode.GDRightArrowButtonObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDRightArrowButtonObjects2Objects, runtimeScene, true, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDGenericCharacter3Objects2 */
{for(var i = 0, len = gdjs.PlayCode.GDGenericCharacter3Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGenericCharacter3Objects2[i].getBehavior("TopDownMovement").simulateRightKey();
}
}{for(var i = 0, len = gdjs.PlayCode.GDGenericCharacter3Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGenericCharacter3Objects2[i].setAnimation(2);
}
}}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGenericCharacter3Objects2Objects = Hashtable.newFrom({"GenericCharacter3": gdjs.PlayCode.GDGenericCharacter3Objects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.PlayCode.GDWallObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDWallObjects2Objects = Hashtable.newFrom({"Wall": gdjs.PlayCode.GDWallObjects2});gdjs.PlayCode.eventsList1 = function(runtimeScene) {

{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("GenericCharacter3"), gdjs.PlayCode.GDGenericCharacter3Objects2);
{for(var i = 0, len = gdjs.PlayCode.GDGenericCharacter3Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGenericCharacter3Objects2[i].playAnimation();
}
}
{ //Subevents
gdjs.PlayCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GenericCharacter3"), gdjs.PlayCode.GDGenericCharacter3Objects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDGenericCharacter3Objects2.length;i<l;++i) {
    if ( !(gdjs.PlayCode.GDGenericCharacter3Objects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDGenericCharacter3Objects2[k] = gdjs.PlayCode.GDGenericCharacter3Objects2[i];
        ++k;
    }
}
gdjs.PlayCode.GDGenericCharacter3Objects2.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDGenericCharacter3Objects2 */
{for(var i = 0, len = gdjs.PlayCode.GDGenericCharacter3Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGenericCharacter3Objects2[i].pauseAnimation();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GenericCharacter3"), gdjs.PlayCode.GDGenericCharacter3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.PlayCode.GDWallObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGenericCharacter3Objects2Objects, gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDWallObjects2Objects, false, runtimeScene, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDGenericCharacter3Objects2 */
/* Reuse gdjs.PlayCode.GDWallObjects2 */
{for(var i = 0, len = gdjs.PlayCode.GDGenericCharacter3Objects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGenericCharacter3Objects2[i].separateFromObjectsList(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDWallObjects2Objects, false);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("GenericCharacter3"), gdjs.PlayCode.GDGenericCharacter3Objects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.PlayCode.GDGenericCharacter3Objects1.length !== 0 ? gdjs.PlayCode.GDGenericCharacter3Objects1[0] : null), true, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.PlayCode.GDGenericCharacter3Objects1.length !== 0 ? gdjs.PlayCode.GDGenericCharacter3Objects1[0] : null), true, "Background", 0);
}}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGenericCharacter3Objects2Objects = Hashtable.newFrom({"GenericCharacter3": gdjs.PlayCode.GDGenericCharacter3Objects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDWizardMaleObjects2Objects = Hashtable.newFrom({"WizardMale": gdjs.PlayCode.GDWizardMaleObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDAButtonObjects2Objects = Hashtable.newFrom({"AButton": gdjs.PlayCode.GDAButtonObjects2});gdjs.PlayCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.PlayCode.GDWizardMaleObjects2, gdjs.PlayCode.GDWizardMaleObjects3);


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDWizardMaleObjects3.length;i<l;++i) {
    if ( gdjs.PlayCode.GDWizardMaleObjects3[i].getVariableNumber(gdjs.PlayCode.GDWizardMaleObjects3[i].getVariables().get("dialogState")) == 0 ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDWizardMaleObjects3[k] = gdjs.PlayCode.GDWizardMaleObjects3[i];
        ++k;
    }
}
gdjs.PlayCode.GDWizardMaleObjects3.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.PlayCode.GDDialogObjects2, gdjs.PlayCode.GDDialogObjects3);

gdjs.copyArray(gdjs.PlayCode.GDPlayerDialogObjects2, gdjs.PlayCode.GDPlayerDialogObjects3);

{for(var i = 0, len = gdjs.PlayCode.GDDialogObjects3.length ;i < len;++i) {
    gdjs.PlayCode.GDDialogObjects3[i].setString("Hero! Please help!");
}
}{for(var i = 0, len = gdjs.PlayCode.GDPlayerDialogObjects3.length ;i < len;++i) {
    gdjs.PlayCode.GDPlayerDialogObjects3[i].setString("A) Who... Me?");
}
}}

}


{

gdjs.copyArray(gdjs.PlayCode.GDWizardMaleObjects2, gdjs.PlayCode.GDWizardMaleObjects3);


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDWizardMaleObjects3.length;i<l;++i) {
    if ( gdjs.PlayCode.GDWizardMaleObjects3[i].getVariableNumber(gdjs.PlayCode.GDWizardMaleObjects3[i].getVariables().get("dialogState")) == 1 ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDWizardMaleObjects3[k] = gdjs.PlayCode.GDWizardMaleObjects3[i];
        ++k;
    }
}
gdjs.PlayCode.GDWizardMaleObjects3.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.PlayCode.GDDialogObjects2, gdjs.PlayCode.GDDialogObjects3);

gdjs.copyArray(gdjs.PlayCode.GDPlayerDialogObjects2, gdjs.PlayCode.GDPlayerDialogObjects3);

{for(var i = 0, len = gdjs.PlayCode.GDDialogObjects3.length ;i < len;++i) {
    gdjs.PlayCode.GDDialogObjects3[i].setString("Our princess has gone missing! The vile goblins infesting this cave must have abducted her.");
}
}{for(var i = 0, len = gdjs.PlayCode.GDPlayerDialogObjects3.length ;i < len;++i) {
    gdjs.PlayCode.GDPlayerDialogObjects3[i].setString("A) Maybe she's just out for a walk...");
}
}}

}


{

gdjs.copyArray(gdjs.PlayCode.GDWizardMaleObjects2, gdjs.PlayCode.GDWizardMaleObjects3);


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDWizardMaleObjects3.length;i<l;++i) {
    if ( gdjs.PlayCode.GDWizardMaleObjects3[i].getVariableNumber(gdjs.PlayCode.GDWizardMaleObjects3[i].getVariables().get("dialogState")) == 2 ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDWizardMaleObjects3[k] = gdjs.PlayCode.GDWizardMaleObjects3[i];
        ++k;
    }
}
gdjs.PlayCode.GDWizardMaleObjects3.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.PlayCode.GDDialogObjects2, gdjs.PlayCode.GDDialogObjects3);

gdjs.copyArray(gdjs.PlayCode.GDPlayerDialogObjects2, gdjs.PlayCode.GDPlayerDialogObjects3);

{for(var i = 0, len = gdjs.PlayCode.GDDialogObjects3.length ;i < len;++i) {
    gdjs.PlayCode.GDDialogObjects3[i].setString("She has never been out of the castle before, and must be terrified to be in such a foul place. Please bring her back!");
}
}{for(var i = 0, len = gdjs.PlayCode.GDPlayerDialogObjects3.length ;i < len;++i) {
    gdjs.PlayCode.GDPlayerDialogObjects3[i].setString("I guess I could take a look around for you...");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AButton"), gdjs.PlayCode.GDAButtonObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
gdjs.PlayCode.condition1IsTrue_0.val = false;
gdjs.PlayCode.condition2IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PlayCode.condition0IsTrue_0.val ) {
{
gdjs.PlayCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDAButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.PlayCode.condition1IsTrue_0.val ) {
{
{gdjs.PlayCode.conditionTrue_1 = gdjs.PlayCode.condition2IsTrue_0;
gdjs.PlayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8285476);
}
}}
}
if (gdjs.PlayCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDWizardMaleObjects2 */
{for(var i = 0, len = gdjs.PlayCode.GDWizardMaleObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDWizardMaleObjects2[i].returnVariable(gdjs.PlayCode.GDWizardMaleObjects2[i].getVariables().get("dialogState")).add(1);
}
}}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGenericCharacter3Objects1Objects = Hashtable.newFrom({"GenericCharacter3": gdjs.PlayCode.GDGenericCharacter3Objects1});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDPrincessObjects1Objects = Hashtable.newFrom({"Princess": gdjs.PlayCode.GDPrincessObjects1});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDAButtonObjects1Objects = Hashtable.newFrom({"AButton": gdjs.PlayCode.GDAButtonObjects1});gdjs.PlayCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.PlayCode.GDPrincessObjects1, gdjs.PlayCode.GDPrincessObjects2);


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDPrincessObjects2.length;i<l;++i) {
    if ( gdjs.PlayCode.GDPrincessObjects2[i].getVariableNumber(gdjs.PlayCode.GDPrincessObjects2[i].getVariables().get("dialogState")) == 0 ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDPrincessObjects2[k] = gdjs.PlayCode.GDPrincessObjects2[i];
        ++k;
    }
}
gdjs.PlayCode.GDPrincessObjects2.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.PlayCode.GDDialogObjects1, gdjs.PlayCode.GDDialogObjects2);

gdjs.copyArray(gdjs.PlayCode.GDPlayerDialogObjects1, gdjs.PlayCode.GDPlayerDialogObjects2);

{for(var i = 0, len = gdjs.PlayCode.GDDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDDialogObjects2[i].setString("Hey! How did you get in here?");
}
}{for(var i = 0, len = gdjs.PlayCode.GDPlayerDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDPlayerDialogObjects2[i].setString("A) Well... There was a goblin with a key...");
}
}}

}


{

gdjs.copyArray(gdjs.PlayCode.GDPrincessObjects1, gdjs.PlayCode.GDPrincessObjects2);


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDPrincessObjects2.length;i<l;++i) {
    if ( gdjs.PlayCode.GDPrincessObjects2[i].getVariableNumber(gdjs.PlayCode.GDPrincessObjects2[i].getVariables().get("dialogState")) == 1 ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDPrincessObjects2[k] = gdjs.PlayCode.GDPrincessObjects2[i];
        ++k;
    }
}
gdjs.PlayCode.GDPrincessObjects2.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.PlayCode.GDDialogObjects1, gdjs.PlayCode.GDDialogObjects2);

gdjs.copyArray(gdjs.PlayCode.GDPlayerDialogObjects1, gdjs.PlayCode.GDPlayerDialogObjects2);

{for(var i = 0, len = gdjs.PlayCode.GDDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDDialogObjects2[i].setString("That must be little Mibo. Always playing with my keys. But she's just too adorable for me to get mad at her!😍");
}
}{for(var i = 0, len = gdjs.PlayCode.GDPlayerDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDPlayerDialogObjects2[i].setString("A) Uh... Anyway... I'm here to rescue you!");
}
}}

}


{

gdjs.copyArray(gdjs.PlayCode.GDPrincessObjects1, gdjs.PlayCode.GDPrincessObjects2);


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDPrincessObjects2.length;i<l;++i) {
    if ( gdjs.PlayCode.GDPrincessObjects2[i].getVariableNumber(gdjs.PlayCode.GDPrincessObjects2[i].getVariables().get("dialogState")) == 2 ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDPrincessObjects2[k] = gdjs.PlayCode.GDPrincessObjects2[i];
        ++k;
    }
}
gdjs.PlayCode.GDPrincessObjects2.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.PlayCode.GDDialogObjects1, gdjs.PlayCode.GDDialogObjects2);

gdjs.copyArray(gdjs.PlayCode.GDPlayerDialogObjects1, gdjs.PlayCode.GDPlayerDialogObjects2);

{for(var i = 0, len = gdjs.PlayCode.GDDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDDialogObjects2[i].setString("From what?");
}
}{for(var i = 0, len = gdjs.PlayCode.GDPlayerDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDPlayerDialogObjects2[i].setString("A) ... The goblins?");
}
}}

}


{

gdjs.copyArray(gdjs.PlayCode.GDPrincessObjects1, gdjs.PlayCode.GDPrincessObjects2);


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDPrincessObjects2.length;i<l;++i) {
    if ( gdjs.PlayCode.GDPrincessObjects2[i].getVariableNumber(gdjs.PlayCode.GDPrincessObjects2[i].getVariables().get("dialogState")) == 3 ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDPrincessObjects2[k] = gdjs.PlayCode.GDPrincessObjects2[i];
        ++k;
    }
}
gdjs.PlayCode.GDPrincessObjects2.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.PlayCode.GDDialogObjects1, gdjs.PlayCode.GDDialogObjects2);

gdjs.copyArray(gdjs.PlayCode.GDPlayerDialogObjects1, gdjs.PlayCode.GDPlayerDialogObjects2);

{for(var i = 0, len = gdjs.PlayCode.GDDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDDialogObjects2[i].setString("You mean the orphan goblins children that I've been secretly taking care of in this cave?");
}
}{for(var i = 0, len = gdjs.PlayCode.GDPlayerDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDPlayerDialogObjects2[i].setString("A) Taking care of them?");
}
}}

}


{

gdjs.copyArray(gdjs.PlayCode.GDPrincessObjects1, gdjs.PlayCode.GDPrincessObjects2);


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDPrincessObjects2.length;i<l;++i) {
    if ( gdjs.PlayCode.GDPrincessObjects2[i].getVariableNumber(gdjs.PlayCode.GDPrincessObjects2[i].getVariables().get("dialogState")) == 4 ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDPrincessObjects2[k] = gdjs.PlayCode.GDPrincessObjects2[i];
        ++k;
    }
}
gdjs.PlayCode.GDPrincessObjects2.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.PlayCode.GDDialogObjects1, gdjs.PlayCode.GDDialogObjects2);

gdjs.copyArray(gdjs.PlayCode.GDPlayerDialogObjects1, gdjs.PlayCode.GDPlayerDialogObjects2);

{for(var i = 0, len = gdjs.PlayCode.GDDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDDialogObjects2[i].setString("Yeah. Ever since their parents were interned for demanding political autonomy from the exploitative rule of my father.");
}
}{for(var i = 0, len = gdjs.PlayCode.GDPlayerDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDPlayerDialogObjects2[i].setString("A) Ah... I guess you don't need help then?");
}
}}

}


{

gdjs.copyArray(gdjs.PlayCode.GDPrincessObjects1, gdjs.PlayCode.GDPrincessObjects2);


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDPrincessObjects2.length;i<l;++i) {
    if ( gdjs.PlayCode.GDPrincessObjects2[i].getVariableNumber(gdjs.PlayCode.GDPrincessObjects2[i].getVariables().get("dialogState")) == 5 ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDPrincessObjects2[k] = gdjs.PlayCode.GDPrincessObjects2[i];
        ++k;
    }
}
gdjs.PlayCode.GDPrincessObjects2.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.PlayCode.GDDialogObjects1, gdjs.PlayCode.GDDialogObjects2);

gdjs.copyArray(gdjs.PlayCode.GDPlayerDialogObjects1, gdjs.PlayCode.GDPlayerDialogObjects2);

{for(var i = 0, len = gdjs.PlayCode.GDDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDDialogObjects2[i].setString("If you want to help, you could check on the goblin children for me. They are usually so noisy playing around this time of the day, but it seems rather quiet right now.");
}
}{for(var i = 0, len = gdjs.PlayCode.GDPlayerDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDPlayerDialogObjects2[i].setString("Uhm... Yeah. I'll do that...");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AButton"), gdjs.PlayCode.GDAButtonObjects1);

gdjs.PlayCode.condition0IsTrue_0.val = false;
gdjs.PlayCode.condition1IsTrue_0.val = false;
gdjs.PlayCode.condition2IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PlayCode.condition0IsTrue_0.val ) {
{
gdjs.PlayCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDAButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.PlayCode.condition1IsTrue_0.val ) {
{
{gdjs.PlayCode.conditionTrue_1 = gdjs.PlayCode.condition2IsTrue_0;
gdjs.PlayCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8300228);
}
}}
}
if (gdjs.PlayCode.condition2IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDPrincessObjects1 */
{for(var i = 0, len = gdjs.PlayCode.GDPrincessObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDPrincessObjects1[i].returnVariable(gdjs.PlayCode.GDPrincessObjects1[i].getVariables().get("dialogState")).add(1);
}
}}

}


};gdjs.PlayCode.eventsList4 = function(runtimeScene) {

{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.PlayCode.GDDialogObjects2);
{for(var i = 0, len = gdjs.PlayCode.GDDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDDialogObjects2[i].setWrapping(true);
}
}{for(var i = 0, len = gdjs.PlayCode.GDDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDDialogObjects2[i].setWrappingWidth(600);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.PlayCode.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("GreenPanel"), gdjs.PlayCode.GDGreenPanelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerDialog"), gdjs.PlayCode.GDPlayerDialogObjects2);
{for(var i = 0, len = gdjs.PlayCode.GDGreenPanelObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPanelObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.PlayCode.GDDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDDialogObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.PlayCode.GDPlayerDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDPlayerDialogObjects2[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GenericCharacter3"), gdjs.PlayCode.GDGenericCharacter3Objects2);
gdjs.copyArray(runtimeScene.getObjects("WizardMale"), gdjs.PlayCode.GDWizardMaleObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGenericCharacter3Objects2Objects, gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDWizardMaleObjects2Objects, false, runtimeScene, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.PlayCode.GDDialogObjects2);
gdjs.copyArray(runtimeScene.getObjects("GreenPanel"), gdjs.PlayCode.GDGreenPanelObjects2);
gdjs.copyArray(runtimeScene.getObjects("PlayerDialog"), gdjs.PlayCode.GDPlayerDialogObjects2);
{for(var i = 0, len = gdjs.PlayCode.GDGreenPanelObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPanelObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.PlayCode.GDDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDDialogObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.PlayCode.GDPlayerDialogObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDPlayerDialogObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.PlayCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GenericCharacter3"), gdjs.PlayCode.GDGenericCharacter3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Princess"), gdjs.PlayCode.GDPrincessObjects1);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGenericCharacter3Objects1Objects, gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDPrincessObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Dialog"), gdjs.PlayCode.GDDialogObjects1);
gdjs.copyArray(runtimeScene.getObjects("GreenPanel"), gdjs.PlayCode.GDGreenPanelObjects1);
gdjs.copyArray(runtimeScene.getObjects("PlayerDialog"), gdjs.PlayCode.GDPlayerDialogObjects1);
{for(var i = 0, len = gdjs.PlayCode.GDGreenPanelObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDGreenPanelObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.PlayCode.GDDialogObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDDialogObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.PlayCode.GDPlayerDialogObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDPlayerDialogObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.PlayCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGenericCharacter3Objects1Objects = Hashtable.newFrom({"GenericCharacter3": gdjs.PlayCode.GDGenericCharacter3Objects1});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGoldKeyObjects1Objects = Hashtable.newFrom({"GoldKey": gdjs.PlayCode.GDGoldKeyObjects1});gdjs.PlayCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GenericCharacter3"), gdjs.PlayCode.GDGenericCharacter3Objects1);
gdjs.copyArray(runtimeScene.getObjects("GoldKey"), gdjs.PlayCode.GDGoldKeyObjects1);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGenericCharacter3Objects1Objects, gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGoldKeyObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDGoldKeyObjects1 */
{for(var i = 0, len = gdjs.PlayCode.GDGoldKeyObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDGoldKeyObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getVariables().get("key").setNumber(1);
}}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGenericCharacter3Objects1Objects = Hashtable.newFrom({"GenericCharacter3": gdjs.PlayCode.GDGenericCharacter3Objects1});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.PlayCode.GDDoorObjects1});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDDoorObjects1Objects = Hashtable.newFrom({"Door": gdjs.PlayCode.GDDoorObjects1});gdjs.PlayCode.eventsList6 = function(runtimeScene) {

{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("key")) == 1;
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.PlayCode.GDDoorObjects1, gdjs.PlayCode.GDDoorObjects2);

{for(var i = 0, len = gdjs.PlayCode.GDDoorObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDDoorObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = !(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("key")) == 1);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDDoorObjects1 */
/* Reuse gdjs.PlayCode.GDGenericCharacter3Objects1 */
{for(var i = 0, len = gdjs.PlayCode.GDGenericCharacter3Objects1.length ;i < len;++i) {
    gdjs.PlayCode.GDGenericCharacter3Objects1[i].separateFromObjectsList(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDDoorObjects1Objects, false);
}
}}

}


};gdjs.PlayCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Door"), gdjs.PlayCode.GDDoorObjects1);
gdjs.copyArray(runtimeScene.getObjects("GenericCharacter3"), gdjs.PlayCode.GDGenericCharacter3Objects1);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGenericCharacter3Objects1Objects, gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDDoorObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.PlayCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGoblinObjects2Objects = Hashtable.newFrom({"Goblin": gdjs.PlayCode.GDGoblinObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDmoveUpObjects2Objects = Hashtable.newFrom({"moveUp": gdjs.PlayCode.GDmoveUpObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGoblinObjects2Objects = Hashtable.newFrom({"Goblin": gdjs.PlayCode.GDGoblinObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDmoveDownObjects2Objects = Hashtable.newFrom({"moveDown": gdjs.PlayCode.GDmoveDownObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGoblinObjects2Objects = Hashtable.newFrom({"Goblin": gdjs.PlayCode.GDGoblinObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDmoveLeftObjects2Objects = Hashtable.newFrom({"moveLeft": gdjs.PlayCode.GDmoveLeftObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGoblinObjects2Objects = Hashtable.newFrom({"Goblin": gdjs.PlayCode.GDGoblinObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDmoveRightObjects2Objects = Hashtable.newFrom({"moveRight": gdjs.PlayCode.GDmoveRightObjects2});gdjs.PlayCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Goblin"), gdjs.PlayCode.GDGoblinObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDGoblinObjects2.length;i<l;++i) {
    if ( gdjs.PlayCode.GDGoblinObjects2[i].getVariableString(gdjs.PlayCode.GDGoblinObjects2[i].getVariables().get("direction")) == "up" ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDGoblinObjects2[k] = gdjs.PlayCode.GDGoblinObjects2[i];
        ++k;
    }
}
gdjs.PlayCode.GDGoblinObjects2.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDGoblinObjects2 */
{for(var i = 0, len = gdjs.PlayCode.GDGoblinObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGoblinObjects2[i].addPolarForce(270, 200, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Goblin"), gdjs.PlayCode.GDGoblinObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDGoblinObjects2.length;i<l;++i) {
    if ( gdjs.PlayCode.GDGoblinObjects2[i].getVariableString(gdjs.PlayCode.GDGoblinObjects2[i].getVariables().get("direction")) == "down" ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDGoblinObjects2[k] = gdjs.PlayCode.GDGoblinObjects2[i];
        ++k;
    }
}
gdjs.PlayCode.GDGoblinObjects2.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDGoblinObjects2 */
{for(var i = 0, len = gdjs.PlayCode.GDGoblinObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGoblinObjects2[i].addPolarForce(90, 200, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Goblin"), gdjs.PlayCode.GDGoblinObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDGoblinObjects2.length;i<l;++i) {
    if ( gdjs.PlayCode.GDGoblinObjects2[i].getVariableString(gdjs.PlayCode.GDGoblinObjects2[i].getVariables().get("direction")) == "left" ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDGoblinObjects2[k] = gdjs.PlayCode.GDGoblinObjects2[i];
        ++k;
    }
}
gdjs.PlayCode.GDGoblinObjects2.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDGoblinObjects2 */
{for(var i = 0, len = gdjs.PlayCode.GDGoblinObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGoblinObjects2[i].addPolarForce(180, 200, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Goblin"), gdjs.PlayCode.GDGoblinObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDGoblinObjects2.length;i<l;++i) {
    if ( gdjs.PlayCode.GDGoblinObjects2[i].getVariableString(gdjs.PlayCode.GDGoblinObjects2[i].getVariables().get("direction")) == "right" ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDGoblinObjects2[k] = gdjs.PlayCode.GDGoblinObjects2[i];
        ++k;
    }
}
gdjs.PlayCode.GDGoblinObjects2.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDGoblinObjects2 */
{for(var i = 0, len = gdjs.PlayCode.GDGoblinObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGoblinObjects2[i].addPolarForce(0, 200, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Goblin"), gdjs.PlayCode.GDGoblinObjects2);
gdjs.copyArray(runtimeScene.getObjects("moveUp"), gdjs.PlayCode.GDmoveUpObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGoblinObjects2Objects, gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDmoveUpObjects2Objects, false, runtimeScene, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDGoblinObjects2 */
{for(var i = 0, len = gdjs.PlayCode.GDGoblinObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGoblinObjects2[i].returnVariable(gdjs.PlayCode.GDGoblinObjects2[i].getVariables().get("direction")).setString("up");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Goblin"), gdjs.PlayCode.GDGoblinObjects2);
gdjs.copyArray(runtimeScene.getObjects("moveDown"), gdjs.PlayCode.GDmoveDownObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGoblinObjects2Objects, gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDmoveDownObjects2Objects, false, runtimeScene, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDGoblinObjects2 */
{for(var i = 0, len = gdjs.PlayCode.GDGoblinObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGoblinObjects2[i].returnVariable(gdjs.PlayCode.GDGoblinObjects2[i].getVariables().get("direction")).setString("down");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Goblin"), gdjs.PlayCode.GDGoblinObjects2);
gdjs.copyArray(runtimeScene.getObjects("moveLeft"), gdjs.PlayCode.GDmoveLeftObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGoblinObjects2Objects, gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDmoveLeftObjects2Objects, false, runtimeScene, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDGoblinObjects2 */
{for(var i = 0, len = gdjs.PlayCode.GDGoblinObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGoblinObjects2[i].returnVariable(gdjs.PlayCode.GDGoblinObjects2[i].getVariables().get("direction")).setString("left");
}
}{for(var i = 0, len = gdjs.PlayCode.GDGoblinObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGoblinObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Goblin"), gdjs.PlayCode.GDGoblinObjects2);
gdjs.copyArray(runtimeScene.getObjects("moveRight"), gdjs.PlayCode.GDmoveRightObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGoblinObjects2Objects, gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDmoveRightObjects2Objects, false, runtimeScene, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDGoblinObjects2 */
{for(var i = 0, len = gdjs.PlayCode.GDGoblinObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGoblinObjects2[i].returnVariable(gdjs.PlayCode.GDGoblinObjects2[i].getVariables().get("direction")).setString("right");
}
}{for(var i = 0, len = gdjs.PlayCode.GDGoblinObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDGoblinObjects2[i].flipX(false);
}
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("moveDown"), gdjs.PlayCode.GDmoveDownObjects1);
gdjs.copyArray(runtimeScene.getObjects("moveLeft"), gdjs.PlayCode.GDmoveLeftObjects1);
gdjs.copyArray(runtimeScene.getObjects("moveRight"), gdjs.PlayCode.GDmoveRightObjects1);
gdjs.copyArray(runtimeScene.getObjects("moveUp"), gdjs.PlayCode.GDmoveUpObjects1);
{for(var i = 0, len = gdjs.PlayCode.GDmoveUpObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDmoveUpObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlayCode.GDmoveDownObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDmoveDownObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlayCode.GDmoveLeftObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDmoveLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.PlayCode.GDmoveRightObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDmoveRightObjects1[i].hide();
}
}}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDAButtonObjects2Objects = Hashtable.newFrom({"AButton": gdjs.PlayCode.GDAButtonObjects2});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDLavishSwordObjects2Objects = Hashtable.newFrom({"LavishSword": gdjs.PlayCode.GDLavishSwordObjects2});gdjs.PlayCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GenericCharacter3"), gdjs.PlayCode.GDGenericCharacter3Objects3);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDGenericCharacter3Objects3.length;i<l;++i) {
    if ( gdjs.PlayCode.GDGenericCharacter3Objects3[i].getAnimation() == 0 ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDGenericCharacter3Objects3[k] = gdjs.PlayCode.GDGenericCharacter3Objects3[i];
        ++k;
    }
}
gdjs.PlayCode.GDGenericCharacter3Objects3.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("playerDirection").setNumber(90);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GenericCharacter3"), gdjs.PlayCode.GDGenericCharacter3Objects3);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDGenericCharacter3Objects3.length;i<l;++i) {
    if ( gdjs.PlayCode.GDGenericCharacter3Objects3[i].getAnimation() == 1 ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDGenericCharacter3Objects3[k] = gdjs.PlayCode.GDGenericCharacter3Objects3[i];
        ++k;
    }
}
gdjs.PlayCode.GDGenericCharacter3Objects3.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("playerDirection").setNumber(180);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GenericCharacter3"), gdjs.PlayCode.GDGenericCharacter3Objects3);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDGenericCharacter3Objects3.length;i<l;++i) {
    if ( gdjs.PlayCode.GDGenericCharacter3Objects3[i].getAnimation() == 2 ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDGenericCharacter3Objects3[k] = gdjs.PlayCode.GDGenericCharacter3Objects3[i];
        ++k;
    }
}
gdjs.PlayCode.GDGenericCharacter3Objects3.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("playerDirection").setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GenericCharacter3"), gdjs.PlayCode.GDGenericCharacter3Objects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.PlayCode.GDGenericCharacter3Objects2.length;i<l;++i) {
    if ( gdjs.PlayCode.GDGenericCharacter3Objects2[i].getAnimation() == 3 ) {
        gdjs.PlayCode.condition0IsTrue_0.val = true;
        gdjs.PlayCode.GDGenericCharacter3Objects2[k] = gdjs.PlayCode.GDGenericCharacter3Objects2[i];
        ++k;
    }
}
gdjs.PlayCode.GDGenericCharacter3Objects2.length = k;}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("playerDirection").setNumber(270);
}}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDLavishSwordObjects1Objects = Hashtable.newFrom({"LavishSword": gdjs.PlayCode.GDLavishSwordObjects1});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGoblinObjects1Objects = Hashtable.newFrom({"Goblin": gdjs.PlayCode.GDGoblinObjects1});gdjs.PlayCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AButton"), gdjs.PlayCode.GDAButtonObjects2);

gdjs.PlayCode.condition0IsTrue_0.val = false;
gdjs.PlayCode.condition1IsTrue_0.val = false;
gdjs.PlayCode.condition2IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.PlayCode.condition0IsTrue_0.val ) {
{
gdjs.PlayCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDAButtonObjects2Objects, runtimeScene, true, false);
}if ( gdjs.PlayCode.condition1IsTrue_0.val ) {
{
gdjs.PlayCode.condition2IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.6, "swordDelay");
}}
}
if (gdjs.PlayCode.condition2IsTrue_0.val) {
gdjs.PlayCode.GDLavishSwordObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDLavishSwordObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.PlayCode.GDLavishSwordObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDLavishSwordObjects2[i].setScale(2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "swordDelay");
}
{ //Subevents
gdjs.PlayCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("GenericCharacter3"), gdjs.PlayCode.GDGenericCharacter3Objects2);
gdjs.copyArray(runtimeScene.getObjects("LavishSword"), gdjs.PlayCode.GDLavishSwordObjects2);
{for(var i = 0, len = gdjs.PlayCode.GDLavishSwordObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDLavishSwordObjects2[i].putAroundObject((gdjs.PlayCode.GDGenericCharacter3Objects2.length !== 0 ? gdjs.PlayCode.GDGenericCharacter3Objects2[0] : null), 50, gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("playerDirection")));
}
}{for(var i = 0, len = gdjs.PlayCode.GDLavishSwordObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDLavishSwordObjects2[i].setAngle(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getVariables().get("playerDirection")) + 90);
}
}}

}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.3, "swordDelay");
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("LavishSword"), gdjs.PlayCode.GDLavishSwordObjects2);
{for(var i = 0, len = gdjs.PlayCode.GDLavishSwordObjects2.length ;i < len;++i) {
    gdjs.PlayCode.GDLavishSwordObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Goblin"), gdjs.PlayCode.GDGoblinObjects1);
gdjs.copyArray(runtimeScene.getObjects("LavishSword"), gdjs.PlayCode.GDLavishSwordObjects1);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDLavishSwordObjects1Objects, gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGoblinObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
/* Reuse gdjs.PlayCode.GDGoblinObjects1 */
{for(var i = 0, len = gdjs.PlayCode.GDGoblinObjects1.length ;i < len;++i) {
    gdjs.PlayCode.GDGoblinObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGenericCharacter3Objects1Objects = Hashtable.newFrom({"GenericCharacter3": gdjs.PlayCode.GDGenericCharacter3Objects1});gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGoblinObjects1Objects = Hashtable.newFrom({"Goblin": gdjs.PlayCode.GDGoblinObjects1});gdjs.PlayCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GenericCharacter3"), gdjs.PlayCode.GDGenericCharacter3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Goblin"), gdjs.PlayCode.GDGoblinObjects1);

gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGenericCharacter3Objects1Objects, gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDGoblinObjects1Objects, false, runtimeScene, false);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Over", false);
}}

}


};gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDExpandButtonObjects1Objects = Hashtable.newFrom({"ExpandButton": gdjs.PlayCode.GDExpandButtonObjects1});gdjs.PlayCode.eventsList12 = function(runtimeScene) {

{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.window.isFullScreen(runtimeScene);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("fullscreen").setNumber(1);
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


};gdjs.PlayCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ExpandButton"), gdjs.PlayCode.GDExpandButtonObjects1);

gdjs.PlayCode.condition0IsTrue_0.val = false;
gdjs.PlayCode.condition1IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.PlayCode.condition0IsTrue_0.val ) {
{
gdjs.PlayCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.PlayCode.mapOfGDgdjs_46PlayCode_46GDExpandButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.PlayCode.condition1IsTrue_0.val) {
{runtimeScene.getVariables().get("fullscreen").setNumber(0);
}
{ //Subevents
gdjs.PlayCode.eventsList12(runtimeScene);} //End of subevents
}

}


};gdjs.PlayCode.eventsList14 = function(runtimeScene) {

{


gdjs.PlayCode.eventsList1(runtimeScene);
}


{


gdjs.PlayCode.eventsList4(runtimeScene);
}


{


gdjs.PlayCode.eventsList5(runtimeScene);
}


{


gdjs.PlayCode.eventsList7(runtimeScene);
}


{


gdjs.PlayCode.eventsList8(runtimeScene);
}


{


gdjs.PlayCode.eventsList10(runtimeScene);
}


{


gdjs.PlayCode.eventsList11(runtimeScene);
}


{


gdjs.PlayCode.eventsList13(runtimeScene);
}


{


gdjs.PlayCode.condition0IsTrue_0.val = false;
{
gdjs.PlayCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.PlayCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "Night in the Castle.aac", true, 100, 1);
}}

}


};

gdjs.PlayCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PlayCode.GDGenericCharacter3Objects1.length = 0;
gdjs.PlayCode.GDGenericCharacter3Objects2.length = 0;
gdjs.PlayCode.GDGenericCharacter3Objects3.length = 0;
gdjs.PlayCode.GDGenericCharacter3Objects4.length = 0;
gdjs.PlayCode.GDTopArrowButtonObjects1.length = 0;
gdjs.PlayCode.GDTopArrowButtonObjects2.length = 0;
gdjs.PlayCode.GDTopArrowButtonObjects3.length = 0;
gdjs.PlayCode.GDTopArrowButtonObjects4.length = 0;
gdjs.PlayCode.GDBottomArrowButtonObjects1.length = 0;
gdjs.PlayCode.GDBottomArrowButtonObjects2.length = 0;
gdjs.PlayCode.GDBottomArrowButtonObjects3.length = 0;
gdjs.PlayCode.GDBottomArrowButtonObjects4.length = 0;
gdjs.PlayCode.GDLeftArrowButtonObjects1.length = 0;
gdjs.PlayCode.GDLeftArrowButtonObjects2.length = 0;
gdjs.PlayCode.GDLeftArrowButtonObjects3.length = 0;
gdjs.PlayCode.GDLeftArrowButtonObjects4.length = 0;
gdjs.PlayCode.GDRightArrowButtonObjects1.length = 0;
gdjs.PlayCode.GDRightArrowButtonObjects2.length = 0;
gdjs.PlayCode.GDRightArrowButtonObjects3.length = 0;
gdjs.PlayCode.GDRightArrowButtonObjects4.length = 0;
gdjs.PlayCode.GDGroundObjects1.length = 0;
gdjs.PlayCode.GDGroundObjects2.length = 0;
gdjs.PlayCode.GDGroundObjects3.length = 0;
gdjs.PlayCode.GDGroundObjects4.length = 0;
gdjs.PlayCode.GDWallObjects1.length = 0;
gdjs.PlayCode.GDWallObjects2.length = 0;
gdjs.PlayCode.GDWallObjects3.length = 0;
gdjs.PlayCode.GDWallObjects4.length = 0;
gdjs.PlayCode.GDWizardMaleObjects1.length = 0;
gdjs.PlayCode.GDWizardMaleObjects2.length = 0;
gdjs.PlayCode.GDWizardMaleObjects3.length = 0;
gdjs.PlayCode.GDWizardMaleObjects4.length = 0;
gdjs.PlayCode.GDGreenPanelObjects1.length = 0;
gdjs.PlayCode.GDGreenPanelObjects2.length = 0;
gdjs.PlayCode.GDGreenPanelObjects3.length = 0;
gdjs.PlayCode.GDGreenPanelObjects4.length = 0;
gdjs.PlayCode.GDDialogObjects1.length = 0;
gdjs.PlayCode.GDDialogObjects2.length = 0;
gdjs.PlayCode.GDDialogObjects3.length = 0;
gdjs.PlayCode.GDDialogObjects4.length = 0;
gdjs.PlayCode.GDPrincessObjects1.length = 0;
gdjs.PlayCode.GDPrincessObjects2.length = 0;
gdjs.PlayCode.GDPrincessObjects3.length = 0;
gdjs.PlayCode.GDPrincessObjects4.length = 0;
gdjs.PlayCode.GDDoorObjects1.length = 0;
gdjs.PlayCode.GDDoorObjects2.length = 0;
gdjs.PlayCode.GDDoorObjects3.length = 0;
gdjs.PlayCode.GDDoorObjects4.length = 0;
gdjs.PlayCode.GDGoldKeyObjects1.length = 0;
gdjs.PlayCode.GDGoldKeyObjects2.length = 0;
gdjs.PlayCode.GDGoldKeyObjects3.length = 0;
gdjs.PlayCode.GDGoldKeyObjects4.length = 0;
gdjs.PlayCode.GDGoblinObjects1.length = 0;
gdjs.PlayCode.GDGoblinObjects2.length = 0;
gdjs.PlayCode.GDGoblinObjects3.length = 0;
gdjs.PlayCode.GDGoblinObjects4.length = 0;
gdjs.PlayCode.GDmoveUpObjects1.length = 0;
gdjs.PlayCode.GDmoveUpObjects2.length = 0;
gdjs.PlayCode.GDmoveUpObjects3.length = 0;
gdjs.PlayCode.GDmoveUpObjects4.length = 0;
gdjs.PlayCode.GDmoveDownObjects1.length = 0;
gdjs.PlayCode.GDmoveDownObjects2.length = 0;
gdjs.PlayCode.GDmoveDownObjects3.length = 0;
gdjs.PlayCode.GDmoveDownObjects4.length = 0;
gdjs.PlayCode.GDmoveLeftObjects1.length = 0;
gdjs.PlayCode.GDmoveLeftObjects2.length = 0;
gdjs.PlayCode.GDmoveLeftObjects3.length = 0;
gdjs.PlayCode.GDmoveLeftObjects4.length = 0;
gdjs.PlayCode.GDmoveRightObjects1.length = 0;
gdjs.PlayCode.GDmoveRightObjects2.length = 0;
gdjs.PlayCode.GDmoveRightObjects3.length = 0;
gdjs.PlayCode.GDmoveRightObjects4.length = 0;
gdjs.PlayCode.GDLavishSwordObjects1.length = 0;
gdjs.PlayCode.GDLavishSwordObjects2.length = 0;
gdjs.PlayCode.GDLavishSwordObjects3.length = 0;
gdjs.PlayCode.GDLavishSwordObjects4.length = 0;
gdjs.PlayCode.GDAButtonObjects1.length = 0;
gdjs.PlayCode.GDAButtonObjects2.length = 0;
gdjs.PlayCode.GDAButtonObjects3.length = 0;
gdjs.PlayCode.GDAButtonObjects4.length = 0;
gdjs.PlayCode.GDPlayerDialogObjects1.length = 0;
gdjs.PlayCode.GDPlayerDialogObjects2.length = 0;
gdjs.PlayCode.GDPlayerDialogObjects3.length = 0;
gdjs.PlayCode.GDPlayerDialogObjects4.length = 0;
gdjs.PlayCode.GDExpandButtonObjects1.length = 0;
gdjs.PlayCode.GDExpandButtonObjects2.length = 0;
gdjs.PlayCode.GDExpandButtonObjects3.length = 0;
gdjs.PlayCode.GDExpandButtonObjects4.length = 0;

gdjs.PlayCode.eventsList14(runtimeScene);
return;

}

gdjs['PlayCode'] = gdjs.PlayCode;
