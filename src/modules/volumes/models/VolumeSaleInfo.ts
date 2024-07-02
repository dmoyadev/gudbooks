export interface VolumeSaleInfo {
	country: string;
	saleability: string;
	isEbook: boolean;
	listPrice?: ListPrice;
	retailPrice?: RetailPrice;
	buyLink?: string;
	offers?: Offer[];
}

interface ListPrice {
	amount: number;
	currencyCode: string;
}

interface RetailPrice {
	amount: number;
	currencyCode: string;
}

interface Offer {
	finskyOfferType: number;
	listPrice: ListPriceWithMicros;
	retailPrice: RetailPriceWithMicros;
	giftable: boolean;
}

interface ListPriceWithMicros {
	amountInMicros: number;
	currencyCode: string;
}

interface RetailPriceWithMicros {
	amountInMicros: number;
	currencyCode: string;
}
