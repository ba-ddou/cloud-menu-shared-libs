"use strict";
exports.__esModule = true;
var qrcode_1 = require("./qrcode");
var meta = {
    businessId: "123",
    incrementScanCount: true,
    generatedAt: new Date(),
    version: "MVP"
};
var privareKey = "secret";
var qrcodeString = qrcode_1.generateQRCodeString({
    businessId: meta.businessId,
    baseURL: "https://www.cloudmenu.com",
    meta: meta
}, privareKey);
console.log("🚀 ~ file: index.ts ~ line 18 ~ qrcodeString", qrcodeString);
var decodedQrCodeMetaData = qrcode_1.parseQRCodeString(qrcodeString, privareKey);
console.log("🚀 ~ file: index.ts ~ line 26 ~ decodedQrCodeMetaData", decodedQrCodeMetaData);
