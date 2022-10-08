var core = {}
var callback = null;

/**
* JavascriptInterface
* used to call function execute in Native Code
*/
var execute = function(key, param) {
    JavascriptInterface.execute(JSON.stringify({
        'key': key,
        'param': param
    }));
}

/**
* Event Listener
* used to listen response from Native
*/
core.callback = function(result) {
    if(callback != null) {
        callback(result);
    }
}

core.dialog = function(param) {
    callback = param['callback'] || null;
    execute('DIALOG_PLUGIN', param);
}

core.showToast = function(param) {
    callback = param['callback'] || null;
    execute('TOAST_MESSAGE_PLUGIN', param);
}

core.showCamera = function(param) {
    callback = param['callback'] || null;
    execute('CAMERA_PLUGIN', param);
}

// Alert Result
core.alertDialog = function(message) {
    core.dialog({
        type: 'alert',
        text_title: 'Result',
        text_message: message,
        text_ok: 'OK',
    });
}
