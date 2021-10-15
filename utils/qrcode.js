"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.parseURL = exports.validURL = exports.parseQRCodeString = exports.decryptMetaData = exports.encryptMetaData = exports.generateQRCodeString = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var UrlParse = require("url-parse");
var generateQRCodeString = function (_a, privateKey) {
    var baseURL = _a.baseURL, businessId = _a.businessId, meta = _a.meta;
    var encryptedMetaData = exports.encryptMetaData(meta, privateKey);
    return baseURL + "/business/" + businessId + "?meta=" + encryptedMetaData;
};
exports.generateQRCodeString = generateQRCodeString;
var encryptMetaData = function (meta, privateKey) {
    var encryptedData = jsonwebtoken_1["default"].sign(meta, privateKey);
    return encryptedData;
};
exports.encryptMetaData = encryptMetaData;
var decryptMetaData = function (encryptedData, privateKey) {
    try {
        var decryptedData = jsonwebtoken_1["default"].verify(encryptedData, privateKey);
        //@ts-ignore
        return decryptedData;
    }
    catch (error) {
        return null;
    }
};
exports.decryptMetaData = decryptMetaData;
/*
 *
 * The metaData is null when the scanned Qr code is not valid platform QR code
 *
 * */
var parseQRCodeString = function (qrCodeString, privateKey) {
    var isValidUrl = validURL(qrCodeString);
    var meta = exports.parseURL(qrCodeString).query.meta;
    var metaData = exports.decryptMetaData(meta, privateKey);
    return { isValidUrl: isValidUrl, metaData: metaData, metaString: meta };
};
exports.parseQRCodeString = parseQRCodeString;
function validURL(str) {
    var pattern = new RegExp("^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$", "i"); // fragment locator
    return !!pattern.test(str);
}
exports.validURL = validURL;
var parseURL = function (url) {
    var parsedUrl = new UrlParse(url, true);
    return {
        pathname: parsedUrl.pathname,
        query: parsedUrl.query
    };
};
exports.parseURL = parseURL;
