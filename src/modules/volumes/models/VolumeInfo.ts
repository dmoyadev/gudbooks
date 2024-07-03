export interface VolumeInfo {
	title: string;
	authors: string[];
	publisher?: string;
	publishedDate: string;
	description?: string;
	dimensions?: Dimensions;
	industryIdentifiers: IndustryIdentifier[];
	readingModes: ReadingModes;
	pageCount?: number;
	printedPageCount?: number;
	printType: string;
	categories?: string[];
	averageRating?: number;
	ratingsCount?: number;
	maturityRating: string;
	allowAnonLogging: boolean;
	contentVersion: string;
	panelizationSummary?: PanelizationSummary;
	imageLinks?: ImageLinks;
	language: string;
	previewLink: string;
	infoLink: string;
	canonicalVolumeLink: string;
	subtitle?: string;
}

interface Dimensions {
	height: string;
	width: string;
}

interface IndustryIdentifier {
	type: string;
	identifier: string;
}

interface ReadingModes {
	text: boolean;
	image: boolean;
}

interface PanelizationSummary {
	containsEpubBubbles: boolean;
	containsImageBubbles: boolean;
}

export interface ImageLinks {
	smallThumbnail: string;
	thumbnail: string;
	small?: string;
	medium?: string;
	large?: string;
	extraLarge?: string;
}
