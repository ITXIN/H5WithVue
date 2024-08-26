// 简单桥的实现

let callbackId = 0;
const callbackMap = {};

class WebJSBridge {
    static call(name, params, callback) {
        console.log('window.WebJSBridge call', name, params, callback);
        // 生成callbackId
        const cbId = this.genCallbackId();
        // 添加到callbackMap
        this.add(cbId, callback);

        // 组装方法和参数
        const config = { name, params, callbackId: cbId };
        const string = JSON.stringify(config);
        window.webkit.messageHandlers.bridgeTest.postMessage(string);
    }

    // 生成callbackId
    static genCallbackId() {
        return `Webview_callback_${callbackId++}`;
    }

    // 添加callback
    static add(callbackId, callback) {
        callbackMap[callbackId] = {
            callback,
        };
    }
}
console.log('window.WebJSBridge');
window.WebJSBridge = WebJSBridge;
// 注入全局方法，用于Native向h5回调
window.bridgeCallback = function (callbackId, res) {
    const cb = callbackMap[callbackId];
    const callback = cb.callback;
    if (callback) {
        callback(res);
    }
    delete callbackMap.callbackId;
};
