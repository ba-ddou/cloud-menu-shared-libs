export interface QrCodeMetaData {
	businessId: string;
	incrementScanCount: boolean;
	generatedAt: Date;
    version: string;
	[key: string]: any;
}
