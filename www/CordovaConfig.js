var AudioPermission = {};
AudioPermission.checkAudioPermission = function(str, callback) {
    cordova.exec(callback, function(error) {
        console.log('error get permission: ', error);
    }, 'CordovaConfig', 'checkAudioPermission');
}
AudioPermission.getAudioPermission = function(str, callback) {
    cordova.exec(callback, function(error) {
        console.log('error get permission: ', error);
    }, 'CordovaConfig', 'getAudioPermission');
}
module.exports = AudioPermission;