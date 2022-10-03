var core = {}

/**
* JavascriptInterface
* used to call function execute in Native Code
*/
var execute = function(key, param) {
    Core.execute(JSON.stringify({
        'key': key,
        'param': param
    }));
}

/**
* Event Listener
* used to listen response from Native
*/
core.listener = function(result) {
    console.log("Listen result from native => " + result);
}

core.showToast = function(message, duration) {
    execute('TOAST_MESSAGE_PLUGIN', {
       'message': message,
       'duration': duration,
   });
}

core.showCamera = function() {
    execute('CAMERA_PLUGIN', {});
}