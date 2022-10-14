var core = {};
var callback = null;
var eventList = [];

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
core.onEventListener = function(eventType, status) {
    for(var i = 0; i < eventList.length; i++) {
        if(eventList[i].eventType == eventType) {
            if(eventType == "onNetworkChange") {
                eventList[i].function(status);
            } else {
                eventList[i].function();
            }
        }
    }
}

/**
* Add Event Listener
* used to add event at client
*/
core.addEventListener = function(eventType, func) {
    eventList.push({
        eventType: eventType,
        function: func
    });
}

/**
* Callback Listener
* used to listen response from Native
*/
core.callback = function(result) {
    if(callback != null) {
        callback(result);
    }
}

/**
* get app info
*/
core.appInfo = function(param) {
    callback = param['callback'] || null;
    execute('APPLICATION_PLUGIN', {
        type: 'app_info'
    });
}

/**
* exit app
*/
core.exitApp = function() {
    execute('APPLICATION_PLUGIN', {
        type: 'exit',
        status: 0,
    });
}

/**
* login by biometric
*/
core.biometricAuthentication = function(param) {
    callback = param['callback'] || null;
    execute('BIOMETRIC_PLUGIN', param);
}

/**
* open camera
*/
core.showCamera = function(param) {
    callback = param['callback'] || null;
    execute('CAMERA_PLUGIN', param);
}

/**
* alert date picker
*/
core.showDatePicker = function(param) {
    callback = param['callback'] || null;
    execute('DATE_PICKER_PLUGIN', param);
}

/**
* alert dialog
*/
core.dialog = function(param) {
    callback = param['callback'] || null;
    execute('DIALOG_PLUGIN', param);
}

/**
* open external browser
*/
core.externalBrowser = function(param) {
    execute('EXTERNAL_BROWSER_PLUGIN', param);
}

/**
* browse image qr
*/
core.browseQRCode = function(param) {
    callback = param['callback'] || null;
    execute('QR_CODE_PLUGIN', {
        type: 'browse'
    });
}

/**
* open qr code
*/
core.scanQRCode = function(param) {
    callback = param['callback'] || null;
    execute('QR_CODE_PLUGIN', {
        is_custom_ui: false,
        type: 'scan'
    });
}

/**
* open speech to text
*/
core.speechToText = function(param) {
    callback = param['callback'] || null;
    execute('SPEECH_TO_TEXT_PLUGIN', param);
}

/**
* show toast
*/
core.showToast = function(param) {
    callback = param['callback'] || null;
    execute('TOAST_MESSAGE_PLUGIN', param);
}

/**
* alert dialog
*/
core.alertDialog = function(message) {
    core.dialog({
        type: 'alert',
        text_title: 'Result',
        text_message: message,
        text_ok: 'OK',
    });
}
