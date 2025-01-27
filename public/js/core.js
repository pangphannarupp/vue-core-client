var core = {};
var callback = null;
var eventList = [];

/**
* JavascriptInterface
* used to call function execute in Native Code
*/
var execute = function(key, param) {
    param['isWebContent'] = true;
    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
        window.webkit.messageHandlers.JavascriptInterface.postMessage(JSON.stringify({
            'key': key,
            'param': param
        }));
    } else if (/android/i.test(navigator.userAgent)) {
        JavascriptInterface.execute(JSON.stringify({
            'key': key,
            'param': param
        }));
    }
}

core.sample = function(param) {
    callback = param['callback'] || null;
    execute('SAMPLE_PLUGIN', {
        message: 'Hello Vue'
    });
}

/**
* Event Listener
* used to listen response from Native
*/
core.onEventListener = function(eventType) {
    for(var i = 0; i < eventList.length; i++) {
        if(eventList[i].eventType == eventType) {
            eventList[i].function();
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

//APPLICATION_PLUGIN
core.appInfo = function(param) {
    callback = param['callback'] || null;
    execute('APPLICATION_PLUGIN', {
        type: 'app_info'
    });
}

core.exitApp = function() {
    execute('APPLICATION_PLUGIN', {
        type: 'exit',
        status: 0,
    });
}

//BIOMETRIC_PLUGIN
core.biometricAuthentication = function(param) {
    callback = param['callback'] || null;
    execute('BIOMETRIC_PLUGIN', param);
}

//DATE_PICKER_PLUGIN
core.showDatePicker = function(param) {
    callback = param['callback'] || null;
    execute('DATE_PICKER_PLUGIN', param);
}

//EXTERNAL_BROWSER_PLUGIN
core.externalBrowser = function(param) {
    execute('EXTERNAL_BROWSER_PLUGIN', param);
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

core.speechToText = function(param) {
    callback = param['callback'] || null;
    execute('SPEECH_TO_TEXT_PLUGIN', param);
}

core.scanQRCode = function(param) {
    callback = param['callback'] || null;
    execute('QR_CODE_PLUGIN', {
        is_custom_ui: false,
        type: 'scan'
    });
}

core.browseQRCode = function(param) {
    callback = param['callback'] || null;
    execute('QR_CODE_PLUGIN', {
        type: 'browse'
    });
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
