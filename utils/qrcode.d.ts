import { QrCodeMetaData } from "../@types";
export declare const generateQRCodeString: ({ baseURL, businessId, meta, }: {
    baseURL: string;
    businessId: string;
    meta: QrCodeMetaData;
}, privateKey: string) => string;
export declare const parseQRCodeString: (qrCodeString: string, privateKey: string) => {
    isValidUrl: boolean;
    metaData: QrCodeMetaData | null;
};
export declare const parseURL: (url: string) => {
    pathname: string;
    query: {
        meta: string;
    };
};
