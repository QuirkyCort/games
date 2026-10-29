gdjs.GameCode = {};
gdjs.GameCode.stopDoWhile3 = false;

gdjs.GameCode.stopDoWhile4 = false;

gdjs.GameCode.GDBluePlayerObjects1= [];
gdjs.GameCode.GDBluePlayerObjects2= [];
gdjs.GameCode.GDBluePlayerObjects3= [];
gdjs.GameCode.GDBluePlayerObjects4= [];

gdjs.GameCode.conditionTrue_0 = {val:false};
gdjs.GameCode.condition0IsTrue_0 = {val:false};
gdjs.GameCode.condition1IsTrue_0 = {val:false};
gdjs.GameCode.condition2IsTrue_0 = {val:false};
gdjs.GameCode.conditionTrue_1 = {val:false};
gdjs.GameCode.condition0IsTrue_1 = {val:false};
gdjs.GameCode.condition1IsTrue_1 = {val:false};
gdjs.GameCode.condition2IsTrue_1 = {val:false};


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9349500);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__THNK__SendMessage.func(runtimeScene, "Right", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9370156);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__THNK__SendMessage.func(runtimeScene, "Left", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9371028);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__THNK__SendMessage.func(runtimeScene, "Up", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9372164);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__THNK__SendMessage.func(runtimeScene, "Down", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Right");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9372892);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__THNK__SendMessage.func(runtimeScene, "RightReleased", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Left");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9373700);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__THNK__SendMessage.func(runtimeScene, "LeftReleased", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Up");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9374484);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__THNK__SendMessage.func(runtimeScene, "UpReleased", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Down");
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
{gdjs.GameCode.conditionTrue_1 = gdjs.GameCode.condition1IsTrue_0;
gdjs.GameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9375268);
}
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
{gdjs.evtsExt__THNK__SendMessage.func(runtimeScene, "DownReleased", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.GameCode.eventsList1 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects3Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects3Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects3});
gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects2Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects2});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnClientConnect.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.GDBluePlayerObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects3Objects, gdjs.randomFloatInRange(0, 1000), gdjs.randomFloatInRange(0, 600), "");
}{gdjs.evtsExt__THNK__LinkObjectToPlayer.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
gdjs.GameCode.condition1IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnClientDisconnect.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if ( gdjs.GameCode.condition0IsTrue_0.val ) {
{
gdjs.GameCode.condition1IsTrue_0.val = gdjs.evtsExt__THNK__UseLinkedObjects.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects2Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}
if (gdjs.GameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBluePlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects4Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects4});
gdjs.GameCode.eventsList3 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects4Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects4});
gdjs.GameCode.eventsList4 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects4Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects4});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects4Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects4});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects4Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects4});
gdjs.GameCode.eventsList7 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects4Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects4});
gdjs.GameCode.eventsList8 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects4Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects4});
gdjs.GameCode.eventsList9 = function(runtimeScene) {

};gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects3Objects = Hashtable.newFrom({"BluePlayer": gdjs.GameCode.GDBluePlayerObjects3});
gdjs.GameCode.eventsList10 = function(runtimeScene) {

};gdjs.GameCode.eventsList11 = function(runtimeScene) {

{


gdjs.GameCode.stopDoWhile4 = false;
do {gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects4);
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnMessage.func(runtimeScene, "Right", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__UseLinkedObjects.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects4[i].setVariableBoolean(gdjs.GameCode.GDBluePlayerObjects4[i].getVariables().get("Right"), true);
}
}
{ //Subevents: 
gdjs.GameCode.eventsList3(runtimeScene);} //Subevents end.
}
} else gdjs.GameCode.stopDoWhile4 = true; 
} while ( !gdjs.GameCode.stopDoWhile4 );

}


{


gdjs.GameCode.stopDoWhile4 = false;
do {gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects4);
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnMessage.func(runtimeScene, "Left", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__UseLinkedObjects.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects4[i].setVariableBoolean(gdjs.GameCode.GDBluePlayerObjects4[i].getVariables().get("Left"), true);
}
}
{ //Subevents: 
gdjs.GameCode.eventsList4(runtimeScene);} //Subevents end.
}
} else gdjs.GameCode.stopDoWhile4 = true; 
} while ( !gdjs.GameCode.stopDoWhile4 );

}


{


gdjs.GameCode.stopDoWhile4 = false;
do {gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects4);
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnMessage.func(runtimeScene, "Up", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__UseLinkedObjects.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects4[i].setVariableBoolean(gdjs.GameCode.GDBluePlayerObjects4[i].getVariables().get("Up"), true);
}
}
{ //Subevents: 
gdjs.GameCode.eventsList5(runtimeScene);} //Subevents end.
}
} else gdjs.GameCode.stopDoWhile4 = true; 
} while ( !gdjs.GameCode.stopDoWhile4 );

}


{


gdjs.GameCode.stopDoWhile4 = false;
do {gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects4);
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnMessage.func(runtimeScene, "Down", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__UseLinkedObjects.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects4[i].setVariableBoolean(gdjs.GameCode.GDBluePlayerObjects4[i].getVariables().get("Down"), true);
}
}
{ //Subevents: 
gdjs.GameCode.eventsList6(runtimeScene);} //Subevents end.
}
} else gdjs.GameCode.stopDoWhile4 = true; 
} while ( !gdjs.GameCode.stopDoWhile4 );

}


{


gdjs.GameCode.stopDoWhile4 = false;
do {gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects4);
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnMessage.func(runtimeScene, "RightReleased", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__UseLinkedObjects.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects4[i].setVariableBoolean(gdjs.GameCode.GDBluePlayerObjects4[i].getVariables().get("Right"), false);
}
}
{ //Subevents: 
gdjs.GameCode.eventsList7(runtimeScene);} //Subevents end.
}
} else gdjs.GameCode.stopDoWhile4 = true; 
} while ( !gdjs.GameCode.stopDoWhile4 );

}


{


gdjs.GameCode.stopDoWhile4 = false;
do {gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects4);
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnMessage.func(runtimeScene, "LeftReleased", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__UseLinkedObjects.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects4[i].setVariableBoolean(gdjs.GameCode.GDBluePlayerObjects4[i].getVariables().get("Left"), false);
}
}
{ //Subevents: 
gdjs.GameCode.eventsList8(runtimeScene);} //Subevents end.
}
} else gdjs.GameCode.stopDoWhile4 = true; 
} while ( !gdjs.GameCode.stopDoWhile4 );

}


{


gdjs.GameCode.stopDoWhile4 = false;
do {gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects4);
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnMessage.func(runtimeScene, "UpReleased", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__UseLinkedObjects.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects4Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects4.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects4[i].setVariableBoolean(gdjs.GameCode.GDBluePlayerObjects4[i].getVariables().get("Up"), false);
}
}
{ //Subevents: 
gdjs.GameCode.eventsList9(runtimeScene);} //Subevents end.
}
} else gdjs.GameCode.stopDoWhile4 = true; 
} while ( !gdjs.GameCode.stopDoWhile4 );

}


{


gdjs.GameCode.stopDoWhile3 = false;
do {gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects3);
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnMessage.func(runtimeScene, "DownReleased", gdjs.VariablesContainer.badVariable, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__UseLinkedObjects.func(runtimeScene, gdjs.GameCode.mapOfGDgdjs_46GameCode_46GDBluePlayerObjects3Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects3.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects3[i].setVariableBoolean(gdjs.GameCode.GDBluePlayerObjects3[i].getVariables().get("Down"), false);
}
}
{ //Subevents: 
gdjs.GameCode.eventsList10(runtimeScene);} //Subevents end.
}
} else gdjs.GameCode.stopDoWhile3 = true; 
} while ( !gdjs.GameCode.stopDoWhile3 );

}


};gdjs.GameCode.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects2[i].getVariableBoolean(gdjs.GameCode.GDBluePlayerObjects2[i].getVariables().get("Right"), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects2[k] = gdjs.GameCode.GDBluePlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBluePlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects2[i].addForce(100, 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects2[i].getVariableBoolean(gdjs.GameCode.GDBluePlayerObjects2[i].getVariables().get("Left"), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects2[k] = gdjs.GameCode.GDBluePlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBluePlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects2[i].addForce(-(100), 0, 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects2);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects2[i].getVariableBoolean(gdjs.GameCode.GDBluePlayerObjects2[i].getVariables().get("Up"), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects2[k] = gdjs.GameCode.GDBluePlayerObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects2.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBluePlayerObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects2[i].addForce(0, -(100), 0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BluePlayer"), gdjs.GameCode.GDBluePlayerObjects1);

gdjs.GameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.GameCode.GDBluePlayerObjects1.length;i<l;++i) {
    if ( gdjs.GameCode.GDBluePlayerObjects1[i].getVariableBoolean(gdjs.GameCode.GDBluePlayerObjects1[i].getVariables().get("Down"), true) ) {
        gdjs.GameCode.condition0IsTrue_0.val = true;
        gdjs.GameCode.GDBluePlayerObjects1[k] = gdjs.GameCode.GDBluePlayerObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDBluePlayerObjects1.length = k;}if (gdjs.GameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.GameCode.GDBluePlayerObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDBluePlayerObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBluePlayerObjects1[i].addForce(0, 100, 0);
}
}}

}


};gdjs.GameCode.eventsList13 = function(runtimeScene) {

{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList11(runtimeScene);
}


{


gdjs.GameCode.eventsList12(runtimeScene);
}


};gdjs.GameCode.eventsList14 = function(runtimeScene) {

{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__StartClientCode.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


gdjs.GameCode.condition0IsTrue_0.val = false;
{
gdjs.GameCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__StartServerCode.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.GameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.GameCode.eventsList13(runtimeScene);} //End of subevents
}

}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDBluePlayerObjects1.length = 0;
gdjs.GameCode.GDBluePlayerObjects2.length = 0;
gdjs.GameCode.GDBluePlayerObjects3.length = 0;
gdjs.GameCode.GDBluePlayerObjects4.length = 0;

gdjs.GameCode.eventsList14(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
