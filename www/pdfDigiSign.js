var exec = require('cordova/exec');

var PLUGIN_NAME = PDFDigiSign;

var PDFDigiSign = {
    signWithAlias: function (path, alias, name, loc, reason, imageData, page, x, y, width, height, successCallback, errorCallback) {
        exec(successCallback, errorCallback, PLUGIN_NAME, "signWithAlias", [path, alias, name, loc, reason, imageData, page, x, y, width, height]);
    },
    validate: function (path, successCallback, errorCallback) {
        exec(successCallback, errorCallback, PLUGIN_NAME, "validate", [path]);
    }
};

module.exports = PDFDigiSign;
