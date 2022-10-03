var core = {}

core.execute = function(key, param) {
    Core.execute(JSON.stringify({
        'key': key,
        'param': param
    }));
}

core.listener = function(result) {
    console.log("Listen result from native => " + result);
}

core.showToast = function(message, duration) {
    core.execute('TOAST_MESSAGE_PLUGIN', {
       'message': message,
       'duration': duration,
   });
}

core.showCamera = function() {
    core.execute('CAMERA_PLUGIN', {});
}