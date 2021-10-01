"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.parseURL = exports.parseQRCodeString = exports.generateQRCodeString = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var UrlParse = require("url-parse");
var generateQRCodeString = function (_a, privateKey) {
    var baseURL = _a.baseURL, businessId = _a.businessId, meta = _a.meta;
    var encryptedMetaData = encryptMetaData(meta, privateKey);
    return baseURL + "/business/" + businessId + "?meta=" + encryptedMetaData;
};
exports.generateQRCodeString = generateQRCodeString;
var encryptMetaData = function (meta, privateKey) {
    var encryptedData = jsonwebtoken_1["default"].sign(meta, privateKey);
    return encryptedData;
};
var decryptMetaData = function (encryptedData, privateKey) {
    var decryptedData = jsonwebtoken_1["default"].verify(encryptedData, privateKey);
    return decryptedData;
};
var parseQRCodeString = function (qrCodeString, privateKey) {
    var meta = exports.parseURL(qrCodeString).query.meta;
    var metaData = decryptMetaData(meta, privateKey);
    return metaData;
};
exports.parseQRCodeString = parseQRCodeString;
var parseURL = function (url) {
    var parsedUrl = new UrlParse(url, true);
    return {
        pathname: parsedUrl.pathname,
        query: parsedUrl.query
    };
};
exports.parseURL = parseURL;
