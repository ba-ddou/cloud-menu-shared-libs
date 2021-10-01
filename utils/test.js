// export * from './qrcode'
const Cryptr = require("cryptr");
// import { QrCodeMetaData } from "../@types";

// const encryptMetaData = (meta: QrCodeMetaData, secret: string): string => {
// 	const cryptr = new Cryptr(secret);
// 	const stringifiedData = JSON.stringify(meta);
// 	const encryptedData = cryptr.encrypt(stringifiedData);
// 	return encryptedData;
// };

const meta = {
	businessId: "123",
	incrementScanCount: true,
	generatedAt: new Date(),
	version: "MVP",
};

// let decryptedString = encryptMetaData(
// 	,
// 	"secret"
// );

const cryptr = new Cryptr("secret");
const stringifiedData = JSON.stringify(meta);
console.log("🚀 ~ file: index.ts ~ line 26 ~ stringifiedData", stringifiedData);
const encryptedData = cryptr.encrypt(stringifiedData);
console.log("🚀 ~ file: index.ts ~ line 27 ~ encryptedData", encryptedData);
