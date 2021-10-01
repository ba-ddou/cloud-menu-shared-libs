import Cryptr from "cryptr";
import { QrCodeMetaData } from "../@types";
import { generateQRCodeString, parseQRCodeString } from "./qrcode";

const meta = {
	businessId: "123",
	incrementScanCount: true,
	generatedAt: new Date(),
	version: "MVP",
};

const privareKey = "secret";

let qrcodeString = generateQRCodeString(
	{
		businessId: meta.businessId,
		baseURL: "https://www.cloudmenu.com",
		meta,
	},
	privareKey
);
console.log("🚀 ~ file: index.ts ~ line 18 ~ qrcodeString", qrcodeString);

let decodedQrCodeMetaData = parseQRCodeString(qrcodeString, privareKey);
console.log(
	"🚀 ~ file: index.ts ~ line 26 ~ decodedQrCodeMetaData",
	decodedQrCodeMetaData
);
