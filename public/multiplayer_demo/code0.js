gdjs.P2PCode = {};
gdjs.P2PCode.GDStatusObjects1= [];
gdjs.P2PCode.GDStatusObjects2= [];
gdjs.P2PCode.GDStatusObjects3= [];
gdjs.P2PCode.GDServerBtnObjects1= [];
gdjs.P2PCode.GDServerBtnObjects2= [];
gdjs.P2PCode.GDServerBtnObjects3= [];
gdjs.P2PCode.GDp2pIDObjects1= [];
gdjs.P2PCode.GDp2pIDObjects2= [];
gdjs.P2PCode.GDp2pIDObjects3= [];
gdjs.P2PCode.GDConnectBtnObjects1= [];
gdjs.P2PCode.GDConnectBtnObjects2= [];
gdjs.P2PCode.GDConnectBtnObjects3= [];

gdjs.P2PCode.conditionTrue_0 = {val:false};
gdjs.P2PCode.condition0IsTrue_0 = {val:false};
gdjs.P2PCode.condition1IsTrue_0 = {val:false};


gdjs.P2PCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ServerBtn"), gdjs.P2PCode.GDServerBtnObjects2);

gdjs.P2PCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.P2PCode.GDServerBtnObjects2.length;i<l;++i) {
    if ( gdjs.P2PCode.GDServerBtnObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.P2PCode.condition0IsTrue_0.val = true;
        gdjs.P2PCode.GDServerBtnObjects2[k] = gdjs.P2PCode.GDServerBtnObjects2[i];
        ++k;
    }
}
gdjs.P2PCode.GDServerBtnObjects2.length = k;}if (gdjs.P2PCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__THNK_P2P__StartServer.func(runtimeScene, "Lobby", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ConnectBtn"), gdjs.P2PCode.GDConnectBtnObjects1);

gdjs.P2PCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.P2PCode.GDConnectBtnObjects1.length;i<l;++i) {
    if ( gdjs.P2PCode.GDConnectBtnObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.P2PCode.condition0IsTrue_0.val = true;
        gdjs.P2PCode.GDConnectBtnObjects1[k] = gdjs.P2PCode.GDConnectBtnObjects1[i];
        ++k;
    }
}
gdjs.P2PCode.GDConnectBtnObjects1.length = k;}if (gdjs.P2PCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("p2pID"), gdjs.P2PCode.GDp2pIDObjects1);
{gdjs.evtsExt__THNK_P2P__ConnectToServer.func(runtimeScene, (( gdjs.P2PCode.GDp2pIDObjects1.length === 0 ) ? "" :gdjs.P2PCode.GDp2pIDObjects1[0].getString()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.P2PCode.eventsList1 = function(runtimeScene) {

{


gdjs.P2PCode.condition0IsTrue_0.val = false;
{
gdjs.P2PCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.P2PCode.condition0IsTrue_0.val) {
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}}

}


{


gdjs.P2PCode.condition0IsTrue_0.val = false;
{
gdjs.P2PCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.isReady();
}if (gdjs.P2PCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.P2PCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.P2PCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.P2PCode.GDStatusObjects1.length = 0;
gdjs.P2PCode.GDStatusObjects2.length = 0;
gdjs.P2PCode.GDStatusObjects3.length = 0;
gdjs.P2PCode.GDServerBtnObjects1.length = 0;
gdjs.P2PCode.GDServerBtnObjects2.length = 0;
gdjs.P2PCode.GDServerBtnObjects3.length = 0;
gdjs.P2PCode.GDp2pIDObjects1.length = 0;
gdjs.P2PCode.GDp2pIDObjects2.length = 0;
gdjs.P2PCode.GDp2pIDObjects3.length = 0;
gdjs.P2PCode.GDConnectBtnObjects1.length = 0;
gdjs.P2PCode.GDConnectBtnObjects2.length = 0;
gdjs.P2PCode.GDConnectBtnObjects3.length = 0;

gdjs.P2PCode.eventsList1(runtimeScene);

return;

}

gdjs['P2PCode'] = gdjs.P2PCode;
