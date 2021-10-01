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

const encryptMetaData = (meta: QrCodeMetaData, privateKey: string): string => {
	const encryptedData = jwt.sign(meta, privateKey);
	return encryptedData;
};

const decryptMetaData = (
	encryptedData: string,
	privateKey: string
): QrCodeMetaData => {
	const decryptedData = jwt.verify(encryptedData, privateKey);
	return decryptedData;
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
