gdjs.LobbyCode = {};
gdjs.LobbyCode.GDServerIDObjects1= [];
gdjs.LobbyCode.GDServerIDObjects2= [];
gdjs.LobbyCode.GDServerIDObjects3= [];
gdjs.LobbyCode.GDStartBtnObjects1= [];
gdjs.LobbyCode.GDStartBtnObjects2= [];
gdjs.LobbyCode.GDStartBtnObjects3= [];
gdjs.LobbyCode.GDStatusObjects1= [];
gdjs.LobbyCode.GDStatusObjects2= [];
gdjs.LobbyCode.GDStatusObjects3= [];

gdjs.LobbyCode.conditionTrue_0 = {val:false};
gdjs.LobbyCode.condition0IsTrue_0 = {val:false};
gdjs.LobbyCode.condition1IsTrue_0 = {val:false};


gdjs.LobbyCode.eventsList0 = function(runtimeScene) {

{


gdjs.LobbyCode.condition0IsTrue_0.val = false;
{
gdjs.LobbyCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.LobbyCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ServerID"), gdjs.LobbyCode.GDServerIDObjects2);
{runtimeScene.getScene().getVariables().get("connected").setNumber(0);
}{for(var i = 0, len = gdjs.LobbyCode.GDServerIDObjects2.length ;i < len;++i) {
    gdjs.LobbyCode.GDServerIDObjects2[i].setString(gdjs.evtTools.p2p.getCurrentId());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("StartBtn"), gdjs.LobbyCode.GDStartBtnObjects2);

gdjs.LobbyCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.LobbyCode.GDStartBtnObjects2.length;i<l;++i) {
    if ( gdjs.LobbyCode.GDStartBtnObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.LobbyCode.condition0IsTrue_0.val = true;
        gdjs.LobbyCode.GDStartBtnObjects2[k] = gdjs.LobbyCode.GDStartBtnObjects2[i];
        ++k;
    }
}
gdjs.LobbyCode.GDStartBtnObjects2.length = k;}if (gdjs.LobbyCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


gdjs.LobbyCode.condition0IsTrue_0.val = false;
{
gdjs.LobbyCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnClientConnect.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.LobbyCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("connected").add(1);
}}

}


{


gdjs.LobbyCode.condition0IsTrue_0.val = false;
{
gdjs.LobbyCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__OnClientDisconnect.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.LobbyCode.condition0IsTrue_0.val) {
{runtimeScene.getScene().getVariables().get("connected").sub(1);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("Status"), gdjs.LobbyCode.GDStatusObjects1);
{for(var i = 0, len = gdjs.LobbyCode.GDStatusObjects1.length ;i < len;++i) {
    gdjs.LobbyCode.GDStatusObjects1[i].setString("Connected Clients: " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("connected")));
}
}}

}


};gdjs.LobbyCode.eventsList1 = function(runtimeScene) {

{


gdjs.LobbyCode.condition0IsTrue_0.val = false;
{
gdjs.LobbyCode.condition0IsTrue_0.val = gdjs.evtsExt__THNK__StartServerCode.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.LobbyCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.LobbyCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.LobbyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LobbyCode.GDServerIDObjects1.length = 0;
gdjs.LobbyCode.GDServerIDObjects2.length = 0;
gdjs.LobbyCode.GDServerIDObjects3.length = 0;
gdjs.LobbyCode.GDStartBtnObjects1.length = 0;
gdjs.LobbyCode.GDStartBtnObjects2.length = 0;
gdjs.LobbyCode.GDStartBtnObjects3.length = 0;
gdjs.LobbyCode.GDStatusObjects1.length = 0;
gdjs.LobbyCode.GDStatusObjects2.length = 0;
gdjs.LobbyCode.GDStatusObjects3.length = 0;

gdjs.LobbyCode.eventsList1(runtimeScene);

return;

}

gdjs['LobbyCode'] = gdjs.LobbyCode;
