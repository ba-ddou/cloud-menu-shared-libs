import { QrCodeMetaData } from "../@types";
import Cryptr from "cryptr";
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

const encryptMetaData = (meta: QrCodeMetaData, privateKey: string): string => {
	const cryptr = new Cryptr(privateKey);
	const stringifiedData = JSON.stringify(meta);
	const encryptedData = cryptr.encrypt(stringifiedData);
	return encryptedData;
};

const decryptMetaData = (
	encryptedData: string,
	privateKey: string
): QrCodeMetaData => {
	const cryptr = new Cryptr(privateKey);
	const decryptedData = cryptr.decrypt(encryptedData);
	const parsedData = JSON.parse(decryptedData);
	return parsedData;
};

export const parseQRCodeString = (
	qrCodeString: string,
	privateKey: string
): QrCodeMetaData => {
	const {
		query: { meta },
	} = parseURL(qrCodeString);
	const metaData = decryptMetaData(meta, privateKey);
	return metaData;
};

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
