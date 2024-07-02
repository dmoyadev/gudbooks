export interface VolumeAccessInfo {
	country: string;
	viewability: string;
	embeddable: boolean;
	publicDomain: boolean;
	textToSpeechPermission: string;
	epub: Epub;
	pdf: Pdf;
	webReaderLink: string;
	accessViewStatus: string;
	quoteSharingAllowed: boolean;
}

interface Epub {
	isAvailable: boolean;
	acsTokenLink?: string;
}

interface Pdf {
	isAvailable: boolean;
	acsTokenLink?: string;
}
