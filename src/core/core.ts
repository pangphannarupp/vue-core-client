export default class Core {

    execute(key: string, param: any) {
        (window as any).JavaScriptInterface.execute(JSON.stringify({
            key: key, 
            param: param
        }));
    }
   
    showToast(param: any) {
        this.execute('TOAST_MESSAGE_PLUGIN', {
            message: param['message'],
            duration: ['duration'],
            callback: function(result: any) {
             alert('Result => ' + JSON.stringify(result));
            }
        });
    }
   
    showCamera() {
        this.execute('CAMERA_PLUGIN', {});
    }
}