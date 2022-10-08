var core = {}
<<<<<<< HEAD
var callback = null;
=======
>>>>>>> d505fe136883bc091fe5bcd8e7b1fa285a0330d3

/**
* JavascriptInterface
* used to call function execute in Native Code
*/
var execute = function(key, param) {
<<<<<<< HEAD
    JavascriptInterface.execute(JSON.stringify({
=======
    JavaScriptInterface.execute(JSON.stringify({
>>>>>>> d505fe136883bc091fe5bcd8e7b1fa285a0330d3
        'key': key,
        'param': param
    }));
}

/**
* Event Listener
* used to listen response from Native
*/
<<<<<<< HEAD
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
=======
core.listener = function(result) {
    console.log("Listen result from native => " + result);
}

core.showToast = function(param) {
    execute('TOAST_MESSAGE_PLUGIN', {
       'message': param['message'],
       'duration': param['duration'],
   });
}

core.showCamera = function() {
    execute('CAMERA_PLUGIN', {});
}
>>>>>>> d505fe136883bc091fe5bcd8e7b1fa285a0330d3
