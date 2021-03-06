import { QrCodeMetaData } from "../@types";
import jwt from "jsonwebtoken";
var UrlParse = require("url-parse");
export const generateQRCodeString = (
	{
		baseURL,
		businessId,
		meta,
	}: {
		baseURL: string;
		businessId: string;
		meta: QrCodeMetaData;
	},
	privateKey: string
) => {
	let encryptedMetaData = encryptMetaData(meta, privateKey);
	return `${baseURL}/business/${businessId}?meta=${encryptedMetaData}`;
};

export const encryptMetaData = (meta: QrCodeMetaData, privateKey: string): string => {
	const encryptedData = jwt.sign(meta, privateKey);
	return encryptedData;
};

export const decryptMetaData = (
	encryptedData: string,
	privateKey: string
): QrCodeMetaData | null => {
	try {
		const decryptedData = jwt.verify(encryptedData, privateKey);
		//@ts-ignore
		return decryptedData;
	} catch (error) {
		return null;
	}
};

/*
 *
 * The metaData is null when the scanned Qr code is not valid platform QR code
 *
 * */
export const parseQRCodeString = (
	qrCodeString: string,
	privateKey: string
): {
	isValidUrl: boolean;
	metaData: QrCodeMetaData | null;
	metaString: string;
} => {
	const isValidUrl = validURL(qrCodeString);
	const {
		query: { meta },
	} = parseURL(qrCodeString);
	const metaData = decryptMetaData(meta, privateKey);
	return { isValidUrl, metaData, metaString: meta };
};

export function validURL(str) {
	var pattern = new RegExp(
		"^(https?:\\/\\/)?" + // protocol
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
			"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
			"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
			"(\\#[-a-z\\d_]*)?$",
		"i"
	); // fragment locator
	return !!pattern.test(str);
}

export const parseURL = (
	url: string
): {
	pathname: string;
	query: {
		meta: string;
	};
} => {
	const parsedUrl = new UrlParse(url, true);
	return {
		pathname: parsedUrl.pathname,
		query: parsedUrl.query,
	};
};
