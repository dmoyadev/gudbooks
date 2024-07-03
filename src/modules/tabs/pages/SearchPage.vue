<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from '@/components/input/BaseInput.vue';
import type { Volume } from '@/modules/volumes/models/Volume.ts';
import { SearchQueryOptions, useGoogleBooksAPI } from '@/modules/app/composables/useGoogleBooksAPI.ts';
import BaseButton from '@/components/button/BaseButton.vue';
import BaseIcon from '@/components/icon/BaseIcon.vue';
import { InputForm } from '@/components/input/BaseInput.types.ts';
import { ButtonForm } from '@/components/button/BaseButton.types.ts';
import BookShowcase from '@/modules/volumes/components/BookShowcase.vue';

const results = ref<Volume[]>([
	{
		kind: 'books#volume',
		id: '2gk0EAAAQBAJ',
		etag: 'lXpxKzcq2V4',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/2gk0EAAAQBAJ',
		volumeInfo: {
			title: 'Nacidos de la bruma (Trilogía Original Mistborn: edición ilustrada 1)',
			subtitle: 'El imperio final',
			authors: [
				'Brandon Sanderson',
			],
			publisher: 'NOVA',
			publishedDate: '2021-07-08',
			description: 'Nueva edición de El Imperio Final. El primer volumen de «Nacidos de la Bruma (Mistborn)», con 8 ilustraciones a color. Brandon Sanderson es el gran renovador de la fantasía del siglo XXI, con veinte millones de lectores en todo el mundo. La saga Nacidos de la Bruma (Mistborn) es una obra imprescindible del Cosmere, el universo destinado a dar forma a la serie más extensa y fascinante jamás escrita en el ámbito de la fantasía épica. Durante mil años han caído cenizas del cielo. Durante mil años nada ha florecido. Durante mil años los skaa han sido esclavizados y viven en la miseria, sumidos en un miedo inevitable. Durante mil años el Lord Legislador ha reinado con poder absoluto, dominando gracias al terror, a sus poderes y a su inmortalidad, ayudado por «obligadores» e «inquisidores», junto a la poderosa magia de la alomancia. Pero los nobles a menudo han tenido trato sexual con jóvenes skaa y, aunque la ley lo prohíbe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «Nacidos de la Bruma» (Mistborn). Ahora, Kelsier, el «superviviente», el único que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una pobre chica skaa con mucha suerte... Tal vez los dos, con el mejor equipo criminal jamás reunido, unidos a la rebelión que los skaa intentan desde hace mil años, logren cambiar el mundo y acabar con la atroz mano de hierro del Lord Legislador.',
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9788418037221',
				},
				{
					type: 'ISBN_10',
					identifier: '8418037229',
				},
			],
			readingModes: {
				text: true,
				image: true,
			},
			pageCount: 866,
			printType: 'BOOK',
			categories: [
				'Fiction',
			],
			averageRating: 5,
			ratingsCount: 1,
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: true,
			contentVersion: '1.12.10.0.preview.3',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail: 'http://books.google.com/books/content?id=2gk0EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail: 'http://books.google.com/books/content?id=2gk0EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'en',
			previewLink: 'http://books.google.es/books?id=2gk0EAAAQBAJ&printsec=frontcover&dq=intitle:%22mistborn%22&hl=&cd=1&source=gbs_api',
			infoLink: 'https://play.google.com/store/books/details?id=2gk0EAAAQBAJ&source=gbs_api',
			canonicalVolumeLink: 'https://play.google.com/store/books/details?id=2gk0EAAAQBAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'FOR_SALE',
			isEbook: true,
			listPrice: {
				amount: 10.99,
				currencyCode: 'EUR',
			},
			retailPrice: {
				amount: 10.44,
				currencyCode: 'EUR',
			},
			buyLink: 'https://play.google.com/store/books/details?id=2gk0EAAAQBAJ&rdid=book-2gk0EAAAQBAJ&rdot=1&source=gbs_api',
			offers: [
				{
					finskyOfferType: 1,
					listPrice: {
						amountInMicros: 10990000,
						currencyCode: 'EUR',
					},
					retailPrice: {
						amountInMicros: 10440000,
						currencyCode: 'EUR',
					},
					giftable: true,
				},
			],
		},
		accessInfo: {
			country: 'ES',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
			epub: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/Nacidos_de_la_bruma_Trilog%C3%ADa_Original_M-sample-epub.acsm?id=2gk0EAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/Nacidos_de_la_bruma_Trilog%C3%ADa_Original_M-sample-pdf.acsm?id=2gk0EAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			webReaderLink: 'http://play.google.com/books/reader?id=2gk0EAAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'El primer volumen de «Nacidos de la Bruma (Mistborn)», con 8 ilustraciones a color. Brandon Sanderson es el gran renovador de la fantasía del siglo XXI, con veinte millones de lectores en todo el mundo.',
		},
	},
	{
		kind: 'books#volume',
		id: '5YeKEAAAQBAJ',
		etag: 'MafID9Os3lM',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/5YeKEAAAQBAJ',
		volumeInfo: {
			title: 'El metal perdido (Wax & Wayne 4)',
			subtitle: 'Una novela de Mistborn',
			authors: [
				'Brandon Sanderson',
			],
			publisher: 'NOVA',
			publishedDate: '2022-11-17',
			description: 'MISTBORN La saga que ha convertido a Brandon Sanderson en el gran autor de fantasía del siglo XXI. Más de diez millones de ejemplares vendidos. EL FUTURO DE SCADRIAL PENDE DE UN HILO. ASÍ TERMINA LA SEGUNDA ERA. * Waxillium Ladrian, vigilante de la ley convertido en senador de la gran ciudad, lleva años intentando dar caza a la sombría organización conocida como el Grupo, desde que empezaron a secuestrar a personas con el poder de la alomancia. Cuando la detective Marasi Colms y su compañero Wayne encuentran un alijo de armas con destino a la ciudad exterior de Bilming, se abre ante ellos una nueva pista. Después de que Wax descubra un nuevo tipo de explosivo capaz de desatar una destrucción sin precedentes y comprenda que el Grupo ya debe de tenerlo en su poder, un kandra inmortal al servicio de Armonía, el dios de Scadrial, le revela que Bilming ha caído bajo la influencia de otro dios venerado por el Grupo: Trell. Pero esta divinidad no es el único elemento procedente del amplio Cosmere, puesto que Marasi es reclutada por unos individuos dotados de extrañas capacidades y que afirman que su objetivo es proteger Scadrial... a toda costa. Wax deberá decidir si deja a un lado las dificultades de su relación con Dios y se convierte de nuevo en la espada que Armonía lo ha estado preparando para ser. Si nadie da el paso y actúa como el héroe que Scadrial necesita, el planeta y sus millones de habitantes sufrirán una repentina y calamitosa ruina. «Un final trepidante y muy satisfactorio». Kirkus Reviews',
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9788418037740',
				},
				{
					type: 'ISBN_10',
					identifier: '8418037741',
				},
			],
			readingModes: {
				text: true,
				image: true,
			},
			pageCount: 736,
			printType: 'BOOK',
			categories: [
				'Fiction',
			],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: true,
			contentVersion: '2.13.12.0.preview.3',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail: 'http://books.google.com/books/content?id=5YeKEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail: 'http://books.google.com/books/content?id=5YeKEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=5YeKEAAAQBAJ&printsec=frontcover&dq=intitle:%22mistborn%22&hl=&cd=2&source=gbs_api',
			infoLink: 'https://play.google.com/store/books/details?id=5YeKEAAAQBAJ&source=gbs_api',
			canonicalVolumeLink: 'https://play.google.com/store/books/details?id=5YeKEAAAQBAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'FOR_SALE',
			isEbook: true,
			listPrice: {
				amount: 10.99,
				currencyCode: 'EUR',
			},
			retailPrice: {
				amount: 10.44,
				currencyCode: 'EUR',
			},
			buyLink: 'https://play.google.com/store/books/details?id=5YeKEAAAQBAJ&rdid=book-5YeKEAAAQBAJ&rdot=1&source=gbs_api',
			offers: [
				{
					finskyOfferType: 1,
					listPrice: {
						amountInMicros: 10990000,
						currencyCode: 'EUR',
					},
					retailPrice: {
						amountInMicros: 10440000,
						currencyCode: 'EUR',
					},
					giftable: true,
				},
			],
		},
		accessInfo: {
			country: 'ES',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
			epub: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/El_metal_perdido_Wax_Wayne_4-sample-epub.acsm?id=5YeKEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/El_metal_perdido_Wax_Wayne_4-sample-pdf.acsm?id=5YeKEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			webReaderLink: 'http://play.google.com/books/reader?id=5YeKEAAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'Mistborn. Wax &amp; Wayne - Libro 4 Mistborn es la saga que ha convertido a Brandon Sanderson en el gran autor de fantasía del siglo XXI.',
		},
	},
	{
		kind: 'books#volume',
		id: 'i4A6EAAAQBAJ',
		etag: 'hoI6i7v12go',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/i4A6EAAAQBAJ',
		volumeInfo: {
			title: 'El Pozo de la Ascensión (Nacidos de la Bruma-Mistborn [edición ilustrada] 2)',
			authors: [
				'Brandon Sanderson',
			],
			publisher: 'NOVA',
			publishedDate: '2021-09-30',
			description: 'Nueva edición de E l Pozo de la Ascensión. El segundo volumen de Nacidos de la Bruma (Mistborn), con 8 ilustraciones a color. Brandon Sanderson es el gran renovador de la fantasía del siglo XXI, con veinte millones de lectores en todo el mundo. La saga Nacidos de la Bruma (Mistborn) es una obra imprescindible del Cosmere, el universo destinado a dar forma a la serie más extensa y fascinante jamás escrita en el ámbito de la fantasía épica. Durante mil años nada ha cambiado: han caído las cenizas, los skaa han sido esclavizados y el Lord Legislador ha dominado el mundo. Pero lo imposible ha sucedido. El Lord Legislador ha muerto. Sin embargo, vencer y matarlo fue la parte sencilla. El verdadero desafío será sobrevivir a las consecuencias de su caída. Tomar el poder tal vez resultó fácil, pero ¿qué ocurre después?, ¿cómo se utiliza? La tarea de reconstruir el mundo, ahora que Kelsier no está, ha quedado en manos de Vin. Y las brumas, desde que el Lord Legislador cayó, se han vuelto cada vez más impredecibles... A medida que el asedio se intensifica, la antigua leyenda del Pozo de la Ascensión ofrece un único rayo de esperanza. En ese mundo de aventura épica, la estrategia política y religiosa debe lidiar con los siempre misteriosos poderes de la alomancia...',
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9788418037283',
				},
				{
					type: 'ISBN_10',
					identifier: '8418037288',
				},
			],
			readingModes: {
				text: true,
				image: true,
			},
			pageCount: 1012,
			printType: 'BOOK',
			categories: [
				'Fiction',
			],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: true,
			contentVersion: '1.4.4.0.preview.3',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail: 'http://books.google.com/books/content?id=i4A6EAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail: 'http://books.google.com/books/content?id=i4A6EAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=i4A6EAAAQBAJ&printsec=frontcover&dq=intitle:%22mistborn%22&hl=&cd=3&source=gbs_api',
			infoLink: 'https://play.google.com/store/books/details?id=i4A6EAAAQBAJ&source=gbs_api',
			canonicalVolumeLink: 'https://play.google.com/store/books/details?id=i4A6EAAAQBAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'FOR_SALE',
			isEbook: true,
			listPrice: {
				amount: 10.99,
				currencyCode: 'EUR',
			},
			retailPrice: {
				amount: 10.44,
				currencyCode: 'EUR',
			},
			buyLink: 'https://play.google.com/store/books/details?id=i4A6EAAAQBAJ&rdid=book-i4A6EAAAQBAJ&rdot=1&source=gbs_api',
			offers: [
				{
					finskyOfferType: 1,
					listPrice: {
						amountInMicros: 10990000,
						currencyCode: 'EUR',
					},
					retailPrice: {
						amountInMicros: 10440000,
						currencyCode: 'EUR',
					},
					giftable: true,
				},
			],
		},
		accessInfo: {
			country: 'ES',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
			epub: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/El_Pozo_de_la_Ascensi%C3%B3n_Nacidos_de_la_B-sample-epub.acsm?id=i4A6EAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/El_Pozo_de_la_Ascensi%C3%B3n_Nacidos_de_la_B-sample-pdf.acsm?id=i4A6EAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			webReaderLink: 'http://play.google.com/books/reader?id=i4A6EAAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'El segundo volumen de Nacidos de la Bruma (Mistborn), con 8 ilustraciones a color. Brandon Sanderson es el gran renovador de la fantasía del siglo XXI, con veinte millones de lectores en todo el mundo.',
		},
	},
	{
		kind: 'books#volume',
		id: 'e2qi0AEACAAJ',
		etag: 'NLFs7Jky3fs',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/e2qi0AEACAAJ',
		volumeInfo: {
			title: 'Nacidos de la Bruma: El Imperio Final / Mistborn: The Final Empire',
			authors: [
				'Brandon Sanderson',
			],
			publisher: 'NOVA',
			publishedDate: '2024-08-20',
			description: 'Mistborn. Trilogía Original - Libro 1 Mistborn es la saga que ha convertido a Brandon Sanderson en el gran autor de fantasía del siglo XXI. Más de diez millones de ejemplares vendidos en todo el mundo. «Una de las mejores obras de fantasía jamás escrita.» -Forbes Las brumas gobiernan la noche. El lord Legislador domina el mundo. En otros tiempos, un héroe se alzó para salvar la humanidad. Fracasó. Desde entonces, el mundo es un erial de ceniza y niebla gobernado por un emperador inmortal conocido como el lord Legislador. Pero la esperanza perdura. Una nueva revuelta cobra forma cimentándose en la treta definitiva: la astucia de un brillante genio del crimen y la determinación de una heroína insólita, una joven ladrona callejera que deberá aprender a controlar el poder de los nacidos de la bruma. ENGLISH DESCRIPTION Now with over 10 million copies sold, The Mistborn Series has the thrills of a heist story, the twistiness of political intrigue, and the epic scale of a landmark fantasy saga. For a thousand years, ash fell and no flowers bloomed. For a thousand years, the Skaa slaved in misery and lived in fear. For a thousand years, the Lord Ruler reigned with absolute power and ultimate terror, divinely invincible. Then, when all hope was lost, the scarred, heartbroken half-Skaa Kelsier found in himself the powers of a Mistborn. A brilliant thief and natural leader, Kelsier recruits the underworld\'s smartest and most trustworthy allomancers, who each share one of his many powers and relish a high-stakes challenge. Only then does he reveal his ultimate dream: not just the greatest heist in history, but the downfall of the divine despot.',
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '8419260444',
				},
				{
					type: 'ISBN_13',
					identifier: '9788419260444',
				},
			],
			readingModes: {
				text: false,
				image: false,
			},
			pageCount: 0,
			printType: 'BOOK',
			categories: [
				'Comics & Graphic Novels',
			],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			comicsContent: true,
			imageLinks: {
				smallThumbnail: 'http://books.google.com/books/content?id=e2qi0AEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
				thumbnail: 'http://books.google.com/books/content?id=e2qi0AEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=e2qi0AEACAAJ&dq=intitle:%22mistborn%22&hl=&cd=4&source=gbs_api',
			infoLink: 'http://books.google.es/books?id=e2qi0AEACAAJ&dq=intitle:%22mistborn%22&hl=&source=gbs_api',
			canonicalVolumeLink: 'https://books.google.com/books/about/Nacidos_de_la_Bruma_El_Imperio_Final_Mis.html?hl=&id=e2qi0AEACAAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'ES',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=e2qi0AEACAAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'ENGLISH DESCRIPTION Now with over 10 million copies sold, The Mistborn Series has the thrills of a heist story, the twistiness of political intrigue, and the epic scale of a landmark fantasy saga.',
		},
	},
	{
		kind: 'books#volume',
		id: 'XVG2AwAAQBAJ',
		etag: 'ZzRFc9y8VQ0',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/XVG2AwAAQBAJ',
		volumeInfo: {
			title: 'El Héroe de las Eras (Trilogía Original Mistborn 3)',
			authors: [
				'Brandon Sanderson',
			],
			publisher: 'NOVA',
			publishedDate: '2013-04-24',
			description: 'Mistborn. Trilogía Original - Libro 3 Mistborn es la saga que ha convertido a Brandon Sanderson en el gran autor de fantasía del siglo XXI. Más de diez millones de ejemplares vendidos en todo el mundo. «Un mundo absolutamente fascinante.» The Washington Post El apasionante cierre de la Trilogía Mistborn. Vin cumplió la profecía y liberó el poder acumulado en el Pozo de la Ascensión. Sin embargo, todo resultó ser una trampa, y ahora el ser divino llamado Ruina campa a sus anchas por el mundo decidido a arrasarlo con terremotos y ríos de fuego. Tras haber esquivado la muerte convirtiéndose en un nacido de la bruma, el emperador Elend Venture confía en que las pistas que dejó el lord Legislador les sirvan para contraatacar. Las profecías hablan de un héroe, pero ¿no estaban corrompidas? Vin deberá desenmarañar la verdad para compensar su error. Solo así llegará a ser el Héroe de las Eras antes de que Ruina aniquile toda la vida sobre el planeta. La crítica ha dicho... «Brandon Sanderson es una leyenda.» Alexelcapo, @EvilAFM «Sanderson es un escritor brillante.» Patrick Rothfuss «Sanderson es una bomba a punto de explotar.» Ernest Alós, El Periódico de Catalunya «Si te gusta la literatura fantástica, lee a Brandon Sanderson.» Chicote «Hace tiempo que George R.R. Martin tiene heredero.» Javier Blánquez, El Mundo',
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9788490193884',
				},
				{
					type: 'ISBN_10',
					identifier: '8490193886',
				},
			],
			readingModes: {
				text: true,
				image: true,
			},
			pageCount: 937,
			printType: 'BOOK',
			categories: [
				'Fiction',
			],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: true,
			contentVersion: '4.23.22.0.preview.3',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail: 'http://books.google.com/books/content?id=XVG2AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail: 'http://books.google.com/books/content?id=XVG2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=XVG2AwAAQBAJ&printsec=frontcover&dq=intitle:%22mistborn%22&hl=&cd=5&source=gbs_api',
			infoLink: 'https://play.google.com/store/books/details?id=XVG2AwAAQBAJ&source=gbs_api',
			canonicalVolumeLink: 'https://play.google.com/store/books/details?id=XVG2AwAAQBAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'FOR_SALE',
			isEbook: true,
			listPrice: {
				amount: 10.99,
				currencyCode: 'EUR',
			},
			retailPrice: {
				amount: 10.44,
				currencyCode: 'EUR',
			},
			buyLink: 'https://play.google.com/store/books/details?id=XVG2AwAAQBAJ&rdid=book-XVG2AwAAQBAJ&rdot=1&source=gbs_api',
			offers: [
				{
					finskyOfferType: 1,
					listPrice: {
						amountInMicros: 10990000,
						currencyCode: 'EUR',
					},
					retailPrice: {
						amountInMicros: 10440000,
						currencyCode: 'EUR',
					},
					giftable: true,
				},
			],
		},
		accessInfo: {
			country: 'ES',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
			epub: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/El_H%C3%A9roe_de_las_Eras_Trilog%C3%ADa_Original-sample-epub.acsm?id=XVG2AwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/El_H%C3%A9roe_de_las_Eras_Trilog%C3%ADa_Original-sample-pdf.acsm?id=XVG2AwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			webReaderLink: 'http://play.google.com/books/reader?id=XVG2AwAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'Mistborn. Trilogía Original - Libro 3 Mistborn es la saga que ha convertido a Brandon Sanderson en el gran autor de fantasía del siglo XXI.',
		},
	},
	{
		kind: 'books#volume',
		id: 'MQXUzgEACAAJ',
		etag: 'kjPnZUE1kdY',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/MQXUzgEACAAJ',
		volumeInfo: {
			title: 'El imperio final',
			authors: [
				'Brandon Sanderson',
			],
			publishedDate: '2021',
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '8418037210',
				},
				{
					type: 'ISBN_13',
					identifier: '9788418037214',
				},
			],
			readingModes: {
				text: false,
				image: false,
			},
			pageCount: 670,
			printType: 'BOOK',
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=MQXUzgEACAAJ&dq=intitle:%22mistborn%22&hl=&cd=6&source=gbs_api',
			infoLink: 'http://books.google.es/books?id=MQXUzgEACAAJ&dq=intitle:%22mistborn%22&hl=&source=gbs_api',
			canonicalVolumeLink: 'https://books.google.com/books/about/El_imperio_final.html?hl=&id=MQXUzgEACAAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'ES',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=MQXUzgEACAAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'Brandon Sanderson es el gran renovador de la fantasía del siglo XXI, con veinte millones de lectores en todo el mundo.La saga Nacidos de la Bruma (Mistborn) es una obra imprescindible del Cosmere, el universo destinado a dar forma a la ...',
		},
	},
	{
		kind: 'books#volume',
		id: 'PXokDQAAQBAJ',
		etag: 'VUgNF1DQAyo',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/PXokDQAAQBAJ',
		volumeInfo: {
			title: 'Sombras de identidad (Wax & Wayne 2)',
			subtitle: 'Una novela de Mistborn',
			authors: [
				'Brandon Sanderson',
			],
			publisher: 'NOVA',
			publishedDate: '2016-10-26',
			description: 'Sombras de identidad es el quinto libro de la saga «Nacidos de la Bruma [Mistborn]», una obra iniciada con El imperio final y parte imprescindible del Cosmere, el universo destinado a convertirse en la serie más extensa y fascinante jamás escrita en el ámbito de la fantasía épica. La sociedad de Nacidos de la Bruma ha evolucionado en una fusión de magia y tecnología en la que la economía se expande, la democracia se enfrenta a la corrupción y la religión se convierte en una potencia cultural cada vez más influyente, con cuatro fes distintas enfrentadas por la captación de conversos. Esta sociedad tan animada y optimista, aunque todavía tambaleante, se enfrenta ahora a su primera amenaza de terrorismo, crímenes cuyo objetivo es fomentar el descontento de la clase trabajadora y avivar las llamas de los conflictos religiosos. Wax y Wayne, con la asistencia de la adorable y brillante Marasi, deberán dar al traste con la conspiración antes de que las revueltas civiles frenen por completo el progreso de Scadrial. Desde 2006, y en solo diez años, Brandon Sanderson se ha consolidado como el gran renovador de la fantasía del siglo XXI y el autor del género más prolífico del mundo. Ha logrado ganarse a ocho millones de lectores, ser publicado en treinta países y convertirse en el heredero de todo un género. Reseñas: «Brandon Sanderson es una leyenda.» Alexelcapo, @EvilAFM «Una de las mejores obras de fantasía jamás escrita.» Forbes Magazine «Los fans de la fantasía disfrutarán con esta emocionante aventura.» Publishers Weekly',
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9788490695517',
				},
				{
					type: 'ISBN_10',
					identifier: '8490695512',
				},
			],
			readingModes: {
				text: true,
				image: true,
			},
			pageCount: 507,
			printType: 'BOOK',
			categories: [
				'Fiction',
			],
			averageRating: 5,
			ratingsCount: 1,
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: true,
			contentVersion: '2.10.10.0.preview.3',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail: 'http://books.google.com/books/content?id=PXokDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail: 'http://books.google.com/books/content?id=PXokDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=PXokDQAAQBAJ&printsec=frontcover&dq=intitle:%22mistborn%22&hl=&cd=7&source=gbs_api',
			infoLink: 'https://play.google.com/store/books/details?id=PXokDQAAQBAJ&source=gbs_api',
			canonicalVolumeLink: 'https://play.google.com/store/books/details?id=PXokDQAAQBAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'FOR_SALE',
			isEbook: true,
			listPrice: {
				amount: 10.99,
				currencyCode: 'EUR',
			},
			retailPrice: {
				amount: 10.44,
				currencyCode: 'EUR',
			},
			buyLink: 'https://play.google.com/store/books/details?id=PXokDQAAQBAJ&rdid=book-PXokDQAAQBAJ&rdot=1&source=gbs_api',
			offers: [
				{
					finskyOfferType: 1,
					listPrice: {
						amountInMicros: 10990000,
						currencyCode: 'EUR',
					},
					retailPrice: {
						amountInMicros: 10440000,
						currencyCode: 'EUR',
					},
					giftable: true,
				},
			],
		},
		accessInfo: {
			country: 'ES',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
			epub: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/Sombras_de_identidad_Wax_Wayne_2-sample-epub.acsm?id=PXokDQAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/Sombras_de_identidad_Wax_Wayne_2-sample-pdf.acsm?id=PXokDQAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			webReaderLink: 'http://play.google.com/books/reader?id=PXokDQAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'Mistborn. Wax &amp; Wayne - Libro 2 Mistborn es la saga que ha convertido a Brandon Sanderson en el gran autor de fantasía del siglo XXI.',
		},
	},
	{
		kind: 'books#volume',
		id: 'Xd04AwAAQBAJ',
		etag: 'Pa98XVRymhw',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/Xd04AwAAQBAJ',
		volumeInfo: {
			title: 'Aleación de ley (Wax & Wayne 1)',
			subtitle: 'Una novela de Mistborn',
			authors: [
				'Brandon Sanderson',
			],
			publisher: 'NOVA',
			publishedDate: '2012-09-18',
			description: 'MISTBORN La saga que ha convertido a Brandon Sanderson en el gran autor de fantasía del siglo XXI. Más de diez millones de ejemplares vendidos. REGRESA AL MUNDO DE MISTBORN. BIENVENIDO A LA SEGUNDA ERA. Han transcurrido trescientos años desde los acontecimientos de la Trilogía Mistborn. Kelsier y Vin han pasado a formar parte de la historia y la mitología, y el mundo de Scadrial se halla a las puertas de la modernidad. En las tierras fronterizas conocidas como los Áridos, las antiguas magias son una herramienta crucial para quienes defienden el orden y la justicia. Uno de esos vigilantes de la ley es Waxillium Ladrian, un excepcional nacidoble capaz de empujar metales con su alomancia y utilizar la feruquimia para volverse más ligero o pesado a voluntad. Tras veinte años en los Áridos, una tragedia hace que Wax regrese a la metrópolis de Elendel. Allí tendrá que renunciar a sus pistolas y asumir sus obligaciones como líder de una casa noble. Pero cuando una banda de alomantes comienza a asaltar trenes y secuestrar a personas, Wax tardará poco en descubrir que las mansiones y las elegantes avenidas arboladas de la ciudad pueden ser más peligrosas que las arenosas llanuras de los Áridos. «Una aventura efervescente». Publishers Weekly',
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9788490192214',
				},
				{
					type: 'ISBN_10',
					identifier: '8490192219',
				},
			],
			readingModes: {
				text: true,
				image: true,
			},
			pageCount: 399,
			printType: 'BOOK',
			categories: [
				'Fiction',
			],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: true,
			contentVersion: '2.15.15.0.preview.3',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail: 'http://books.google.com/books/content?id=Xd04AwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail: 'http://books.google.com/books/content?id=Xd04AwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=Xd04AwAAQBAJ&printsec=frontcover&dq=intitle:%22mistborn%22&hl=&cd=8&source=gbs_api',
			infoLink: 'https://play.google.com/store/books/details?id=Xd04AwAAQBAJ&source=gbs_api',
			canonicalVolumeLink: 'https://play.google.com/store/books/details?id=Xd04AwAAQBAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'FOR_SALE',
			isEbook: true,
			listPrice: {
				amount: 10.99,
				currencyCode: 'EUR',
			},
			retailPrice: {
				amount: 10.44,
				currencyCode: 'EUR',
			},
			buyLink: 'https://play.google.com/store/books/details?id=Xd04AwAAQBAJ&rdid=book-Xd04AwAAQBAJ&rdot=1&source=gbs_api',
			offers: [
				{
					finskyOfferType: 1,
					listPrice: {
						amountInMicros: 10990000,
						currencyCode: 'EUR',
					},
					retailPrice: {
						amountInMicros: 10440000,
						currencyCode: 'EUR',
					},
					giftable: true,
				},
			],
		},
		accessInfo: {
			country: 'ES',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
			epub: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/Aleaci%C3%B3n_de_ley_Wax_Wayne_1-sample-epub.acsm?id=Xd04AwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/Aleaci%C3%B3n_de_ley_Wax_Wayne_1-sample-pdf.acsm?id=Xd04AwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			webReaderLink: 'http://play.google.com/books/reader?id=Xd04AwAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'Mistborn. Wax &amp; Wayne - Libro 1 Mistborn es la saga que ha convertido a Brandon Sanderson en el gran autor de fantasía del siglo XXI.',
		},
	},
	{
		kind: 'books#volume',
		id: '245_tAEACAAJ',
		etag: 'r4quLbqNbks',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/245_tAEACAAJ',
		volumeInfo: {
			title: 'El imperio final',
			authors: [
				'Brandon Sanderson',
			],
			publisher: 'EDB FICCION',
			publishedDate: '2008-03',
			description: 'Durante mil años han caído las cenizas y nada florece. Durante mil años los skaa han sido esclavizados y viven sumidos en un miedo inevitable. Durante mil años, el Lord Legislador reina con un poder absoluto. Le ayudan los "obligadores" y los "inquisidores" junto a la poderosa magia de la "alomancia" que reside en los nobles. Algunos de ellos son capaces de "quemar" los metales que han tragado y que les otorgan poderes sobrenaturales. Diferentes metales, actuando en pares, otorgan poderes distintos. Pero los nobles, demasiado a menudo, han tenido trato sexual con jóvenes skaa y, aunque la ley lo prohibe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los "nacidos de la bruma", los mistborns...',
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '8466631992',
				},
				{
					type: 'ISBN_13',
					identifier: '9788466631990',
				},
			],
			readingModes: {
				text: false,
				image: false,
			},
			pageCount: 688,
			printType: 'BOOK',
			categories: [
				'Fiction',
			],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail: 'http://books.google.com/books/content?id=245_tAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
				thumbnail: 'http://books.google.com/books/content?id=245_tAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=245_tAEACAAJ&dq=intitle:%22mistborn%22&hl=&cd=9&source=gbs_api',
			infoLink: 'http://books.google.es/books?id=245_tAEACAAJ&dq=intitle:%22mistborn%22&hl=&source=gbs_api',
			canonicalVolumeLink: 'https://books.google.com/books/about/El_imperio_final.html?hl=&id=245_tAEACAAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'ES',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=245_tAEACAAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'Durante mil años han caído las cenizas y nada florece.',
		},
	},
	{
		kind: 'books#volume',
		id: 'm6NJEAAAQBAJ',
		etag: '6EGDyiGnxD4',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/m6NJEAAAQBAJ',
		volumeInfo: {
			title: 'El Héroe de las Eras (Nacidos de la Bruma-Mistborn [edición ilustrada] 3)',
			authors: [
				'Brandon Sanderson',
			],
			publisher: 'NOVA',
			publishedDate: '2021-11-25',
			description: 'Nueva edición de El Héroe de las Eras. El tercer volumen de «Nacidos de la Bruma (Mistborn)», con 8 ilustraciones a color. Brandon Sanderson es el gran renovador de la fantasía del siglo XXI, con veinte millones de lectores en todo el mundo. La saga Nacidos de la Bruma (Mistborn) es una obra imprescindible del Cosmere, el universo destinado a dar forma a la serie más extensa y fascinante jamás escrita en el ámbito de la fantasía épica. Durante mil años nada ha cambiado: han caído las cenizas, los skaa han sido esclavizados y el Lord Legislador ha dominado el mundo. Kelsier, el "superviviente", el único que ha logrado huir de los Pozos de Hathsin, junto a Vin, una pobre chica skaa, se une a la rebelión. Y por fin lo imposible sucede: por fin la revolución ha triunfado. Pero acabar con el Lord Legislador es la parte sencilla. El verdadero desafío consistirá en sobrevivir a las consecuencias de su caída... sin Kelsier. Vin y el Rey Elend buscan en los últimos escondites de recursos del Lord Legislador y, engañado, el Rey libera del Pozo de la Ascensión algo que debería haber quedado oculto para siempre. Un enorme peligro acecha a la humanidad, y la verdadera pregunta es si conseguirán detenerlo a tiempo. En El héroe de las eras se comprende el porqué de la niebla y las cenizas, las tenebrosas acciones del Lord Legislador y la naturaleza del Pozo de la Ascensión. Esta aventura lleva a la trilogía a un clímax dramático y sorprendente.',
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9788418037306',
				},
				{
					type: 'ISBN_10',
					identifier: '841803730X',
				},
			],
			readingModes: {
				text: true,
				image: true,
			},
			pageCount: 956,
			printType: 'BOOK',
			categories: [
				'Fiction',
			],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: true,
			contentVersion: '0.8.7.0.preview.3',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail: 'http://books.google.com/books/content?id=m6NJEAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail: 'http://books.google.com/books/content?id=m6NJEAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=m6NJEAAAQBAJ&printsec=frontcover&dq=intitle:%22mistborn%22&hl=&cd=10&source=gbs_api',
			infoLink: 'https://play.google.com/store/books/details?id=m6NJEAAAQBAJ&source=gbs_api',
			canonicalVolumeLink: 'https://play.google.com/store/books/details?id=m6NJEAAAQBAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'FOR_SALE',
			isEbook: true,
			listPrice: {
				amount: 10.99,
				currencyCode: 'EUR',
			},
			retailPrice: {
				amount: 10.44,
				currencyCode: 'EUR',
			},
			buyLink: 'https://play.google.com/store/books/details?id=m6NJEAAAQBAJ&rdid=book-m6NJEAAAQBAJ&rdot=1&source=gbs_api',
			offers: [
				{
					finskyOfferType: 1,
					listPrice: {
						amountInMicros: 10990000,
						currencyCode: 'EUR',
					},
					retailPrice: {
						amountInMicros: 10440000,
						currencyCode: 'EUR',
					},
					giftable: true,
				},
			],
		},
		accessInfo: {
			country: 'ES',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
			epub: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/El_H%C3%A9roe_de_las_Eras_Nacidos_de_la_Brum-sample-epub.acsm?id=m6NJEAAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/El_H%C3%A9roe_de_las_Eras_Nacidos_de_la_Brum-sample-pdf.acsm?id=m6NJEAAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			webReaderLink: 'http://play.google.com/books/reader?id=m6NJEAAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'El tercer volumen de «Nacidos de la Bruma (Mistborn)», con 8 ilustraciones a color. Brandon Sanderson es el gran renovador de la fantasía del siglo XXI, con veinte millones de lectores en todo el mundo.',
		},
	},
	{
		kind: 'books#volume',
		id: 'e1YlDwAAQBAJ',
		etag: 'Ei4L8cEMcxM',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/e1YlDwAAQBAJ',
		volumeInfo: {
			title: 'Brazales de Duelo (Wax & Wayne 3)',
			subtitle: 'Una novela de Mistborn',
			authors: [
				'Brandon Sanderson',
			],
			publisher: 'NOVA',
			publishedDate: '2017-06-21',
			description: 'Brazales de Duelo es el sexto libro de la saga «Nacidos de la Bruma [Mistborn]», una obra iniciada con El imperio final y parte imprescindible del Cosmere, el universo destinado a convertirse en la serie más extensa y fascinante jamás escrita en el ámbito de la fantasía épica. La cuenca de Elendel es un polvorín. El descontento de los trabajadores se suma a las diferencias irreconciliables entre la capital y las demás ciudades de la cuenca; Elendel asegura gobernarlas mientras sus habitantes denuncian la opresión a la que se sienten sometidos. De pronto, llega a oídos de Waxillium Ladrian que un académico kandra podría haber localizado los legendarios Brazales de Duelo, un arma capaz de sembrar la destrucción y dar al traste con el actual equilibrio de poder imperante en la cuenca. Pero perseguir mitos no se cuenta entre las atribulaciones de un representante de la ley como él, acuciado por problemas más inmediatos. Pero ¿qué puede hacer cuando sospecha que ha sido engañado por el mismísimo Dios? La revelación resultante sacudirá los cimientos de todo cuanto creías saber sobre el mundo de «Nacidos de la Bruma [Mistborn]». Desde 2006, y en solo diez años, Brandon Sanderson se ha consolidado como el gran renovador de la fantasía del siglo XXI y el autor del género más prolífico del mundo. Ha logrado ganarse a ocho millones de lectores, ser publicado en treinta países y convertirse en el heredero de todo un género. Reseñas: «Brandon Sanderson es una leyenda.» Alexelcapo, @EvilAFM «Una de las mejores obras de fantasía jamás escrita.» Forbes Magazine «Los fans de la fantasía disfrutarán con esta emocionante aventura.» Publishers Weekly',
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9788490697641',
				},
				{
					type: 'ISBN_10',
					identifier: '8490697647',
				},
			],
			readingModes: {
				text: true,
				image: true,
			},
			pageCount: 603,
			printType: 'BOOK',
			categories: [
				'Fiction',
			],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: true,
			contentVersion: '3.9.10.0.preview.3',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail: 'http://books.google.com/books/content?id=e1YlDwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail: 'http://books.google.com/books/content?id=e1YlDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=e1YlDwAAQBAJ&printsec=frontcover&dq=intitle:%22mistborn%22&hl=&cd=11&source=gbs_api',
			infoLink: 'https://play.google.com/store/books/details?id=e1YlDwAAQBAJ&source=gbs_api',
			canonicalVolumeLink: 'https://play.google.com/store/books/details?id=e1YlDwAAQBAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'FOR_SALE',
			isEbook: true,
			listPrice: {
				amount: 10.99,
				currencyCode: 'EUR',
			},
			retailPrice: {
				amount: 10.44,
				currencyCode: 'EUR',
			},
			buyLink: 'https://play.google.com/store/books/details?id=e1YlDwAAQBAJ&rdid=book-e1YlDwAAQBAJ&rdot=1&source=gbs_api',
			offers: [
				{
					finskyOfferType: 1,
					listPrice: {
						amountInMicros: 10990000,
						currencyCode: 'EUR',
					},
					retailPrice: {
						amountInMicros: 10440000,
						currencyCode: 'EUR',
					},
					giftable: true,
				},
			],
		},
		accessInfo: {
			country: 'ES',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED_FOR_ACCESSIBILITY',
			epub: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/Brazales_de_Duelo_Wax_Wayne_3-sample-epub.acsm?id=e1YlDwAAQBAJ&format=epub&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			pdf: {
				isAvailable: true,
				acsTokenLink: 'http://books.google.es/books/download/Brazales_de_Duelo_Wax_Wayne_3-sample-pdf.acsm?id=e1YlDwAAQBAJ&format=pdf&output=acs4_fulfillment_token&dl_type=sample&source=gbs_api',
			},
			webReaderLink: 'http://play.google.com/books/reader?id=e1YlDwAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'Mistborn. Wax &amp; Wayne - Libro 3 Mistborn es la saga que ha convertido a Brandon Sanderson en el gran autor de fantasía del siglo XXI.',
		},
	},
	{
		kind: 'books#volume',
		id: 'v_FsLwEACAAJ',
		etag: 'wfKcYC9ygaQ',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/v_FsLwEACAAJ',
		volumeInfo: {
			title: 'EL POZO DE LA ASCENSIÓN (NACIDOS DE LA BRUMA [MISTBORN] 2)',
			authors: [
				'Brandon Sanderson',
			],
			publishedDate: '2012-10-11',
			description: 'Durante los últimos mil años, han caído las cenizas y nada florece; los skaa han sido esclavizados y viven sumidos en un miedo inevitable; el Lord Legislador reina con un poder absoluto gracias al terror y a su divina invencibilidad. Le ayudan los obliga',
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '849872709X',
				},
				{
					type: 'ISBN_13',
					identifier: '9788498727098',
				},
			],
			readingModes: {
				text: false,
				image: false,
			},
			pageCount: 0,
			printType: 'BOOK',
			categories: [
				'Courts and courtiers',
			],
			averageRating: 5,
			ratingsCount: 1,
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail: 'http://books.google.com/books/content?id=v_FsLwEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
				thumbnail: 'http://books.google.com/books/content?id=v_FsLwEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=v_FsLwEACAAJ&dq=intitle:%22mistborn%22&hl=&cd=12&source=gbs_api',
			infoLink: 'http://books.google.es/books?id=v_FsLwEACAAJ&dq=intitle:%22mistborn%22&hl=&source=gbs_api',
			canonicalVolumeLink: 'https://books.google.com/books/about/EL_POZO_DE_LA_ASCENSI%C3%93N_NACIDOS_DE_LA_B.html?hl=&id=v_FsLwEACAAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'ES',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=v_FsLwEACAAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'Durante los últimos mil años, han caído las cenizas y nada florece; los skaa han sido esclavizados y viven sumidos en un miedo inevitable; el Lord Legislador reina con un poder absoluto gracias al terror y a su divina invencibilidad.',
		},
	},
	{
		kind: 'books#volume',
		id: 'FJB80AEACAAJ',
		etag: '0ea0lwG2/ts',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/FJB80AEACAAJ',
		volumeInfo: {
			title: 'Nacidos de la bruma ( Mistborn 1 )',
			authors: [
				'Brandon Sanderson',
			],
			publishedDate: '2024-02-15',
			description: 'LAS BRUMAS GOBIERNAN LA NOCHE. EL LORD LEGISLADOR DOMINA EL MUNDO.Durante mil años los skaa han sido esclavizados y viven sumidos en un miedo inevitable. Durante mil años el Lord Legislador reina con un poder absoluto gracias al terror, a sus poderes y a su inmortalidad. Le ayudan «obligadores» e «inquisidores», junto a la poderosa magia de la «alomancia». Pero los nobles han tenido a menudo trato sexual con jóvenes skaa y, aunque la ley lo prohíbe, algunos de sus bastardos han sobrevivido y heredado los poderes alománticos: son los «nacidos de la bruma» (mistborns). Ahora, Kelsier, el «superviviente», el único que ha logrado huir de los Pozos de Hathsin, ha encontrado a Vin, una pobre chica skaa con mucha suerte. Tal vez los dos unidos a la rebelión que los skaa intentan desde hace mil años puedan cambiar el mundo y la atroz dominación del Lord Legislador.«Una de las mejores obras de fantasía jamás escrita.» -Forbes',
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '6073841051',
				},
				{
					type: 'ISBN_13',
					identifier: '9786073841054',
				},
			],
			readingModes: {
				text: false,
				image: false,
			},
			pageCount: 0,
			printType: 'BOOK',
			categories: [
				'Fiction',
			],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=FJB80AEACAAJ&dq=intitle:%22mistborn%22&hl=&cd=13&source=gbs_api',
			infoLink: 'http://books.google.es/books?id=FJB80AEACAAJ&dq=intitle:%22mistborn%22&hl=&source=gbs_api',
			canonicalVolumeLink: 'https://books.google.com/books/about/Nacidos_de_la_bruma_Mistborn_1.html?hl=&id=FJB80AEACAAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'ES',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=FJB80AEACAAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'LAS BRUMAS GOBIERNAN LA NOCHE.',
		},
	},
	{
		kind: 'books#volume',
		id: 'i8XYzgEACAAJ',
		etag: 'BdMIhtJ8Hmg',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/i8XYzgEACAAJ',
		volumeInfo: {
			title: 'El pozo de la ascensión',
			authors: [
				'Brandon Sanderson',
			],
			publishedDate: '2021',
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '841803727X',
				},
				{
					type: 'ISBN_13',
					identifier: '9788418037276',
				},
			],
			readingModes: {
				text: false,
				image: false,
			},
			pageCount: 779,
			printType: 'BOOK',
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=i8XYzgEACAAJ&dq=intitle:%22mistborn%22&hl=&cd=14&source=gbs_api',
			infoLink: 'http://books.google.es/books?id=i8XYzgEACAAJ&dq=intitle:%22mistborn%22&hl=&source=gbs_api',
			canonicalVolumeLink: 'https://books.google.com/books/about/El_pozo_de_la_ascensi%C3%B3n.html?hl=&id=i8XYzgEACAAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'ES',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=i8XYzgEACAAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
	},
	{
		kind: 'books#volume',
		id: 'tGGREAAAQBAJ',
		etag: 'rIEx8yk0vjI',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/tGGREAAAQBAJ',
		volumeInfo: {
			title: 'El metal perdido / The Lost Metal: A Mistborn Novel',
			authors: [
				'Brandon Sanderson',
			],
			publisher: 'National Geographic Books',
			publishedDate: '2023-03-21',
			description: 'El metal perdido es el séptimo libro de «Nacidos de la Bruma» (Mistborn), la saga de fantasía épica que ha conquistado el mundo y que es parte imprescindible del Cosmere, universo destinado a convertirse en la serie más extensa y fascinante jamás escrita en cualquier género. Waxillium Ladrian, vigilante de la ley convertido en senador de la gran ciudad, lleva años intentando dar caza a la sombría organización llamada el Grupo –entre cuyos líderes se cuentan su difunto tío y su hermana—, que ha empezado a secuestrar a personas con el poder de la alomancia en su linaje. Cuando la detective Marasi Colms y su compañero Wayne encuentran un almacén ilegal de armas para la Ciudad Exterior de Bilming, se abre ante ellos una nueva pista. El conflicto entre Elendel y las ciudades exteriores favorece al Grupo, que ya extiende sus tentáculos hasta el Senado de Elendel –cuya corrupción pretenden destapar Wax y Steris. La ciudad de Bilming está más implicada de lo que creían. Después de que Wax descubra un nuevo tipo de explosivo capaz de desatar una destrucción sin precedentes y comprenda que el Grupo ya debe de tenerlo, un kandra inmortal al servicio del dios de Scadrial, Armonía, le revela que Bilming ha caído bajo la influencia de otro dios: Trell, venerado por el Grupo. Pero Trell no es el único factor que interviene procedente del amplio Cosmere, puesto que a Marasi la reclutan unas personas de fuera del planeta dotadas de extrañas capacidades, que afirman que su objetivo es proteger Scadrial... a toda costa. Wax deberá decidir si deja a un lado las dificultades de su relación con Dios y se convierte de nuevo en la espada que Armonía lo ha estado preparando para ser. Si nadie da el paso y actúa como el héroe que Scadrial necesita, el planeta y sus millones de habitantes sufrirán una repentina y calamitosa ruina. ENGLISH DESCRIPTION Return to #1 New York Times bestseller Brandon Sanderson’s Mistborn world of Scadrial as its second era, which began with The Alloy of Law, comes to its earth-shattering conclusion in The Lost Metal. For years, frontier lawman turned big-city senator Waxillium Ladrian has hunted the shadowy organization the Set—with his late uncle and his sister among their leaders—since they started kidnapping people with the power of Allomancy in their bloodlines. When Detective Marasi Colms and her partner Wayne find stockpiled weapons bound for the Outer City of Bilming, this opens a new lead. Conflict between Elendel and the Outer Cities only favors the Set, and their tendrils now reach to the Elendel Senate—whose corruption Wax and Steris have sought to expose—and Bilming is even more entangled. After Wax discovers a new type of explosive that can unleash unprecedented destruction and realizes that the Set must already have it, an immortal kandra serving Scadrial’s god, Harmony, reveals that Bilming has fallen under the influence of another god: Trell, worshipped by the Set. And Trell isn’t the only factor at play from the larger Cosmere—Marasi is recruited by offworlders with strange abilities who claim their goal is to protect Scadrial...at any cost. Wax must choose whether to set aside his rocky relationship with God and once again become the Sword that Harmony has groomed him to be. If no one steps forward to be the hero Scadrial needs, the planet and its millions of people will come to a sudden and calamitous ruin.',
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9788418037733',
				},
				{
					type: 'ISBN_10',
					identifier: '8418037733',
				},
			],
			readingModes: {
				text: true,
				image: false,
			},
			pageCount: 0,
			printType: 'BOOK',
			categories: [
				'Fiction',
			],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail: 'http://books.google.com/books/content?id=tGGREAAAQBAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api',
				thumbnail: 'http://books.google.com/books/content?id=tGGREAAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=tGGREAAAQBAJ&dq=intitle:%22mistborn%22&hl=&cd=15&source=gbs_api',
			infoLink: 'http://books.google.es/books?id=tGGREAAAQBAJ&dq=intitle:%22mistborn%22&hl=&source=gbs_api',
			canonicalVolumeLink: 'https://books.google.com/books/about/El_metal_perdido_The_Lost_Metal_A_Mistbo.html?hl=&id=tGGREAAAQBAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'ES',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=tGGREAAAQBAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'ENGLISH DESCRIPTION Return to #1 New York Times bestseller Brandon Sanderson’s Mistborn world of Scadrial as its second era, which began with The Alloy of Law, comes to its earth-shattering conclusion in The Lost Metal.',
		},
	},
	{
		kind: 'books#volume',
		id: 'qbSA0AEACAAJ',
		etag: 'uUvN0RXX6+g',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/qbSA0AEACAAJ',
		volumeInfo: {
			title: 'El pozo de la ascensión ( Mistborn 2 )',
			authors: [
				'Brandon Sanderson',
			],
			publishedDate: '2024-02-15',
			description: 'EL MAL HA SIDO DERROTADO. PERO LA GUERRA ACABA DE EMPEZAR.Lograron lo imposible y pusieron fin al reinado milenario del lord Legislador. Ahora Vin, que ha pasado de ser una ladronzuelaa una poderosa nacida de la bruma, y Elend Venture, el joven noble e idealista que la ama, deberán construir una sociedad nueva y próspera sobre las cenizas de ese imperio derrocado. Mientras las tensiones siguen creciendo tras la revuelta, una antigua leyenda ofrece un atisbo de esperanza para el pueblo. Sin embargo, incluso si las habladurías son ciertas, nadie sabe dónde se encuentra el Pozo de la Ascensión ni qué clase de poder otorga. Es muy posible que matar al lord Legislador fuera la parte fácil. Sobrevivir a las consecuencias de su caída será el verdadero desafío.«Un fenómeno de la fantasía literaria de dimensiones desconocidas.» -El País',
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '607384106X',
				},
				{
					type: 'ISBN_13',
					identifier: '9786073841061',
				},
			],
			readingModes: {
				text: false,
				image: false,
			},
			pageCount: 0,
			printType: 'BOOK',
			categories: [
				'Fiction',
			],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=qbSA0AEACAAJ&dq=intitle:%22mistborn%22&hl=&cd=16&source=gbs_api',
			infoLink: 'http://books.google.es/books?id=qbSA0AEACAAJ&dq=intitle:%22mistborn%22&hl=&source=gbs_api',
			canonicalVolumeLink: 'https://books.google.com/books/about/El_pozo_de_la_ascensi%C3%B3n_Mistborn_2.html?hl=&id=qbSA0AEACAAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'ES',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=qbSA0AEACAAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'EL MAL HA SIDO DERROTADO.',
		},
	},
	{
		kind: 'books#volume',
		id: 'FL9UzwEACAAJ',
		etag: 'ixZdF0ejtvU',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/FL9UzwEACAAJ',
		volumeInfo: {
			title: 'Trilogía Nacidos de la Bruma [Mistborn] (pack con: El imperio final | El pozo de la Ascensión | El héroe de las Eras)',
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '8413143187',
				},
				{
					type: 'ISBN_13',
					identifier: '9788413143187',
				},
			],
			readingModes: {
				text: false,
				image: false,
			},
			pageCount: 0,
			printType: 'BOOK',
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=FL9UzwEACAAJ&dq=intitle:%22mistborn%22&hl=&cd=17&source=gbs_api',
			infoLink: 'http://books.google.es/books?id=FL9UzwEACAAJ&dq=intitle:%22mistborn%22&hl=&source=gbs_api',
			canonicalVolumeLink: 'https://books.google.com/books/about/Trilog%C3%ADa_Nacidos_de_la_Bruma_Mistborn_p.html?hl=&id=FL9UzwEACAAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'ES',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=FL9UzwEACAAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'Su autor, Brandon Sanderson, es ya considerado el gran autor de fantasía del siglo XXI. Brandon Sanderson se ha consolidado como el gran renovador de la fantasía del siglo XXI y uno de los autores más más prolíficos del mundo.',
		},
	},
	{
		kind: 'books#volume',
		id: 'Q4hx0AEACAAJ',
		etag: 'oTcfxFE7rwg',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/Q4hx0AEACAAJ',
		volumeInfo: {
			title: 'Estuche Trilogía Mistborn (pack con: Nacidos de la bruma | El Pozo de la ascensión | El héroe de las eras)',
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '8419260231',
				},
				{
					type: 'ISBN_13',
					identifier: '9788419260239',
				},
			],
			readingModes: {
				text: false,
				image: false,
			},
			pageCount: 0,
			printType: 'BOOK',
			categories: [
				'Juvenile Fiction',
			],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=Q4hx0AEACAAJ&dq=intitle:%22mistborn%22&hl=&cd=18&source=gbs_api',
			infoLink: 'http://books.google.es/books?id=Q4hx0AEACAAJ&dq=intitle:%22mistborn%22&hl=&source=gbs_api',
			canonicalVolumeLink: 'https://books.google.com/books/about/Estuche_Trilog%C3%ADa_Mistborn_pack_con_Naci.html?hl=&id=Q4hx0AEACAAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'ES',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=Q4hx0AEACAAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
	},
	{
		kind: 'books#volume',
		id: 'rkX0zgEACAAJ',
		etag: 'V4suXuYwBQY',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/rkX0zgEACAAJ',
		volumeInfo: {
			title: 'El héroe de las eras',
			authors: [
				'Brandon Sanderson',
			],
			publishedDate: '2021',
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '8418037296',
				},
				{
					type: 'ISBN_13',
					identifier: '9788418037290',
				},
			],
			readingModes: {
				text: false,
				image: false,
			},
			printType: 'BOOK',
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=rkX0zgEACAAJ&dq=intitle:%22mistborn%22&hl=&cd=19&source=gbs_api',
			infoLink: 'http://books.google.es/books?id=rkX0zgEACAAJ&dq=intitle:%22mistborn%22&hl=&source=gbs_api',
			canonicalVolumeLink: 'https://books.google.com/books/about/El_h%C3%A9roe_de_las_eras.html?hl=&id=rkX0zgEACAAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'ES',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=rkX0zgEACAAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'El tercer volumen de Nacidos de la Bruma (Mistborn), con 8 ilustraciones a color. Brandon Sanderson es el gran renovador de la fantasía del siglo XXI, con veinte millones de lectores en todo el mundo.',
		},
	},
	{
		kind: 'books#volume',
		id: 't_ZYYXZq4RgC',
		etag: 'oEhg1ctW1yA',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/t_ZYYXZq4RgC',
		volumeInfo: {
			title: 'Mistborn',
			subtitle: 'The Final Empire',
			authors: [
				'Brandon Sanderson',
			],
			publisher: 'Macmillan',
			publishedDate: '2010-04-01',
			description: 'Now with over 10 million copies sold, The Mistborn Series has the thrills of a heist story, the twistiness of political intrigue, and the epic scale of a landmark fantasy saga. For a thousand years the ash fell and no flowers bloomed. For a thousand years the Skaa slaved in misery and lived in fear. For a thousand years the Lord Ruler, the "Sliver of Infinity," reigned with absolute power and ultimate terror, divinely invincible. Then, when hope was so long lost that not even its memory remained, a terribly scarred, heart-broken half-Skaa rediscovered it in the depths of the Lord Ruler\'s most hellish prison. Kelsier "snapped" and found in himself the powers of a Mistborn. A brilliant thief and natural leader, he turned his talents to the ultimate caper, with the Lord Ruler himself as the mark. Kelsier recruited the underworld\'s elite, the smartest and most trustworthy allomancers, each of whom shares one of his many powers, and all of whom relish a high-stakes challenge. Only then does he reveal his ultimate dream, not just the greatest heist in history, but the downfall of the divine despot. But even with the best criminal crew ever assembled, Kel\'s plan looks more like the ultimate long shot, until luck brings a ragged girl named Vin into his life. Like him, she\'s a half-Skaa orphan, but she\'s lived a much harsher life. Vin has learned to expect betrayal from everyone she meets, and gotten it. She will have to learn to trust, if Kel is to help her master powers of which she never dreamed. This saga dares to ask a simple question: What if the hero of prophecy fails? Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages Mistborn: The Wax and Wayne series Alloy of Law Shadows of Self Bands of Mourning Collection Arcanum Unbounded Other Cosmere novels Elantris Warbreaker The Alcatraz vs. the Evil Librarians series Alcatraz vs. the Evil Librarians The Scrivener\'s Bones The Knights of Crystallia The Shattered Lens The Dark Talent The Rithmatist series The Rithmatist Other books by Brandon Sanderson The Reckoners Steelheart Firefight Calamity At the Publisher\'s request, this title is being sold without Digital Rights Management Software (DRM) applied.',
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9781429914567',
				},
				{
					type: 'ISBN_10',
					identifier: '1429914564',
				},
			],
			readingModes: {
				text: true,
				image: false,
			},
			pageCount: 686,
			printType: 'BOOK',
			categories: [
				'Fiction',
			],
			averageRating: 4.5,
			ratingsCount: 78,
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: true,
			contentVersion: '14.44.38.0.preview.2',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail: 'http://books.google.com/books/content?id=t_ZYYXZq4RgC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail: 'http://books.google.com/books/content?id=t_ZYYXZq4RgC&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'en',
			previewLink: 'http://books.google.es/books?id=t_ZYYXZq4RgC&printsec=frontcover&dq=intitle:%22mistborn%22&hl=&cd=20&source=gbs_api',
			infoLink: 'https://play.google.com/store/books/details?id=t_ZYYXZq4RgC&source=gbs_api',
			canonicalVolumeLink: 'https://play.google.com/store/books/details?id=t_ZYYXZq4RgC',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'FOR_SALE',
			isEbook: true,
			listPrice: {
				amount: 8.07,
				currencyCode: 'EUR',
			},
			retailPrice: {
				amount: 8.07,
				currencyCode: 'EUR',
			},
			buyLink: 'https://play.google.com/store/books/details?id=t_ZYYXZq4RgC&rdid=book-t_ZYYXZq4RgC&rdot=1&source=gbs_api',
			offers: [
				{
					finskyOfferType: 1,
					listPrice: {
						amountInMicros: 8070000,
						currencyCode: 'EUR',
					},
					retailPrice: {
						amountInMicros: 8070000,
						currencyCode: 'EUR',
					},
					giftable: true,
				},
			],
		},
		accessInfo: {
			country: 'ES',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: true,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=t_ZYYXZq4RgC&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages Mistborn: The ...',
		},
	},
	{
		kind: 'books#volume',
		id: 'Suc90AEACAAJ',
		etag: 'IqrNfcXTaPM',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/Suc90AEACAAJ',
		volumeInfo: {
			title: 'Estuche Mistborn',
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '8413145503',
				},
				{
					type: 'ISBN_13',
					identifier: '9788413145501',
				},
			],
			readingModes: {
				text: false,
				image: false,
			},
			pageCount: 0,
			printType: 'BOOK',
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=Suc90AEACAAJ&dq=intitle:%22mistborn%22&hl=&cd=21&source=gbs_api',
			infoLink: 'http://books.google.es/books?id=Suc90AEACAAJ&dq=intitle:%22mistborn%22&hl=&source=gbs_api',
			canonicalVolumeLink: 'https://books.google.com/books/about/Estuche_Mistborn.html?hl=&id=Suc90AEACAAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'ES',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=Suc90AEACAAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'Su autor, Brandon Sanderson, es ya considerado el gran autor de fantasía del siglo XXI. Trilogía Nacidos de la bruma (Mistborn): El imperio final, El pozo de la Ascensión y El héroe de las eras.',
		},
	},
	{
		kind: 'books#volume',
		id: 'WyGG0AEACAAJ',
		etag: 'RsHG+Mw8Bxs',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/WyGG0AEACAAJ',
		volumeInfo: {
			title: 'El Héroe de las eras ( Mistborn 3 )',
			authors: [
				'Brandon Sanderson',
			],
			publishedDate: '2024-02-15',
			description: 'EL APASIONANTE CIERRE DE LA TRILOGÍA MISTBORN.Vin cumplió la profecía y liberó el poder acumulado en el Pozo de la Ascensión. Sin embargo, todo resultó ser una trampa, y ahora el ser divino llamado Ruina campa a sus anchas por el mundo decidido a arrasarlo con terremotos y ríos de fuego. Tras haber esquivado la muerte convirtiéndose en un nacido de la bruma, el emperador Elend Venture confía en que las pistas que dejó el lord Legislador les sirvan para contraatacar. Las profecías hablan de un héroe, pero ¿no estaban corrompidas? Vin deberá desenmarañar la verdad para compensar su error. Solo así llegará a ser el Héroe de las Eras antes de que Ruina aniquile toda la vida sobre el planeta. Alcatraz contra los bibliotecarios malvados; Aleación de ley; Calamity (Reckoners III); Camino de los reyes (Archivo de las tormentas I); El aliento de los dioses; El héroe de las eras (Nacidos de las bruma III); El imperio final (Nacidos de la bruma I); El pozo de la ascension (Nacidos de la bruma II); El rithmatista; Firefight (Reckoners II); Las lentes fragmentadas (Alcatraz vs. Los bibliotecarios malvados); Los caballeros de cristalia (Alcatraz vs. Los bibliotecarios malvados III); Los huesos del escriba (Alcatraz vs.Los bibliotecarios malvados II); Palabras radiantes (Archivo de las tormentas II); Redención (Infinity Blade II); Sombras de identidad (Nacidos de la bruma V); Steelheart (Reckoners I); Brandon Sanderson; historia novela de fantasía; libros en otro tiempo o mundo; autores de fantasía; libros de fantasía épica; libros de fantasía y magia; libros de fantasía sagas; una novela para emocionarse; [ Críticas/Reseñas] «Un mundo absolutamente fascinante.» -The Washington Post',
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '6073841078',
				},
				{
					type: 'ISBN_13',
					identifier: '9786073841078',
				},
			],
			readingModes: {
				text: false,
				image: false,
			},
			pageCount: 0,
			printType: 'BOOK',
			categories: [
				'Fiction',
			],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=WyGG0AEACAAJ&dq=intitle:%22mistborn%22&hl=&cd=22&source=gbs_api',
			infoLink: 'http://books.google.es/books?id=WyGG0AEACAAJ&dq=intitle:%22mistborn%22&hl=&source=gbs_api',
			canonicalVolumeLink: 'https://books.google.com/books/about/El_H%C3%A9roe_de_las_eras_Mistborn_3.html?hl=&id=WyGG0AEACAAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'ES',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=WyGG0AEACAAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'Los bibliotecarios malvados III); Los huesos del escriba (Alcatraz vs.Los bibliotecarios malvados II); Palabras radiantes (Archivo de las tormentas II); Redención (Infinity Blade II); Sombras de identidad (Nacidos de la bruma V); ...',
		},
	},
	{
		kind: 'books#volume',
		id: '6vlw0AEACAAJ',
		etag: 'WsM0/Q0gqv0',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/6vlw0AEACAAJ',
		volumeInfo: {
			title: 'Aleación de ley (Nacidos de la bruma [Mistborn] 4)',
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '841314843X',
				},
				{
					type: 'ISBN_13',
					identifier: '9788413148434',
				},
			],
			readingModes: {
				text: false,
				image: false,
			},
			pageCount: 0,
			printType: 'BOOK',
			categories: [
				'Juvenile Fiction',
			],
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=6vlw0AEACAAJ&dq=intitle:%22mistborn%22&hl=&cd=23&source=gbs_api',
			infoLink: 'http://books.google.es/books?id=6vlw0AEACAAJ&dq=intitle:%22mistborn%22&hl=&source=gbs_api',
			canonicalVolumeLink: 'https://books.google.com/books/about/Aleaci%C3%B3n_de_ley_Nacidos_de_la_bruma_Mis.html?hl=&id=6vlw0AEACAAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'ES',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=6vlw0AEACAAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
	},
	{
		kind: 'books#volume',
		id: 'is5LzQEACAAJ',
		etag: '5MxHRzKDl9s',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/is5LzQEACAAJ',
		volumeInfo: {
			title: 'Sombras de identidad',
			authors: [
				'Brandon Sanderson',
			],
			publishedDate: '2019',
			industryIdentifiers: [
				{
					type: 'ISBN_10',
					identifier: '8490708290',
				},
				{
					type: 'ISBN_13',
					identifier: '9788490708293',
				},
			],
			readingModes: {
				text: false,
				image: false,
			},
			pageCount: 438,
			printType: 'BOOK',
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: false,
			contentVersion: 'preview-1.0.0',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			language: 'es',
			previewLink: 'http://books.google.es/books?id=is5LzQEACAAJ&dq=intitle:%22mistborn%22&hl=&cd=24&source=gbs_api',
			infoLink: 'http://books.google.es/books?id=is5LzQEACAAJ&dq=intitle:%22mistborn%22&hl=&source=gbs_api',
			canonicalVolumeLink: 'https://books.google.com/books/about/Sombras_de_identidad.html?hl=&id=is5LzQEACAAJ',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'NOT_FOR_SALE',
			isEbook: false,
		},
		accessInfo: {
			country: 'ES',
			viewability: 'NO_PAGES',
			embeddable: false,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: false,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=is5LzQEACAAJ&hl=&source=gbs_api',
			accessViewStatus: 'NONE',
			quoteSharingAllowed: false,
		},
	},
	{
		kind: 'books#volume',
		id: 'uTt-H5MAGT0C',
		etag: 'CwgBYcAeOD4',
		selfLink: 'https://www.googleapis.com/books/v1/volumes/uTt-H5MAGT0C',
		volumeInfo: {
			title: 'The Hero of Ages',
			subtitle: 'Book Three of Mistborn',
			authors: [
				'Brandon Sanderson',
			],
			publisher: 'Tor Books',
			publishedDate: '2008-10-14',
			description: 'Now with over 10 million copies sold, The Mistborn Series has the thrills of a heist story, the twistiness of political intrigue, and the epic scale of a landmark fantasy saga. Who is the Hero of Ages? To end the Final Empire and restore freedom, Vin killed the Lord Ruler. But as a result, the Deepness--the lethal form of the ubiquitous mists--is back, along with increasingly heavy ashfalls and ever more powerful earthquakes. Humanity appears to be doomed. Having escaped death at the climax of The Well of Ascension only by becoming a Mistborn himself, Emperor Elend Venture hopes to find clues left behind by the Lord Ruler that will allow him to save the world. Vin is consumed with guilt at having been tricked into releasing the mystic force known as Ruin from the Well. Ruin wants to end the world, and its near omniscience and ability to warp reality make stopping it seem impossible. She can\'t even discuss it with Elend lest Ruin learn their plans! Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages Mistborn: The Wax and Wayne series Alloy of Law Shadows of Self Bands of Mourning Collection Arcanum Unbounded Other Cosmere novels Elantris Warbreaker The Alcatraz vs. the Evil Librarians series Alcatraz vs. the Evil Librarians The Scrivener\'s Bones The Knights of Crystallia The Shattered Lens The Dark Talent The Rithmatist series The Rithmatist Other books by Brandon Sanderson The Reckoners Steelheart Firefight Calamity At the Publisher\'s request, this title is being sold without Digital Rights Management Software (DRM) applied.',
			industryIdentifiers: [
				{
					type: 'ISBN_13',
					identifier: '9781429960304',
				},
				{
					type: 'ISBN_10',
					identifier: '1429960302',
				},
			],
			readingModes: {
				text: true,
				image: false,
			},
			pageCount: 788,
			printType: 'BOOK',
			categories: [
				'Fiction',
			],
			averageRating: 4.5,
			ratingsCount: 24,
			maturityRating: 'NOT_MATURE',
			allowAnonLogging: true,
			contentVersion: '1.25.25.0.preview.2',
			panelizationSummary: {
				containsEpubBubbles: false,
				containsImageBubbles: false,
			},
			imageLinks: {
				smallThumbnail: 'http://books.google.com/books/content?id=uTt-H5MAGT0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
				thumbnail: 'http://books.google.com/books/content?id=uTt-H5MAGT0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api',
			},
			language: 'en',
			previewLink: 'http://books.google.es/books?id=uTt-H5MAGT0C&printsec=frontcover&dq=intitle:%22mistborn%22&hl=&cd=25&source=gbs_api',
			infoLink: 'https://play.google.com/store/books/details?id=uTt-H5MAGT0C&source=gbs_api',
			canonicalVolumeLink: 'https://play.google.com/store/books/details?id=uTt-H5MAGT0C',
		},
		saleInfo: {
			country: 'ES',
			saleability: 'FOR_SALE',
			isEbook: true,
			listPrice: {
				amount: 9.68,
				currencyCode: 'EUR',
			},
			retailPrice: {
				amount: 9.68,
				currencyCode: 'EUR',
			},
			buyLink: 'https://play.google.com/store/books/details?id=uTt-H5MAGT0C&rdid=book-uTt-H5MAGT0C&rdot=1&source=gbs_api',
			offers: [
				{
					finskyOfferType: 1,
					listPrice: {
						amountInMicros: 9680000,
						currencyCode: 'EUR',
					},
					retailPrice: {
						amountInMicros: 9680000,
						currencyCode: 'EUR',
					},
					giftable: true,
				},
			],
		},
		accessInfo: {
			country: 'ES',
			viewability: 'PARTIAL',
			embeddable: true,
			publicDomain: false,
			textToSpeechPermission: 'ALLOWED',
			epub: {
				isAvailable: true,
			},
			pdf: {
				isAvailable: false,
			},
			webReaderLink: 'http://play.google.com/books/reader?id=uTt-H5MAGT0C&hl=&source=gbs_api',
			accessViewStatus: 'SAMPLE',
			quoteSharingAllowed: false,
		},
		searchInfo: {
			textSnippet: 'Other Tor books by Brandon Sanderson The Cosmere The Stormlight Archive The Way of Kings Words of Radiance Edgedancer (Novella) Oathbringer The Mistborn trilogy Mistborn: The Final Empire The Well of Ascension The Hero of Ages Mistborn: The ...',
		},
	},
]);

const searched = ref(false);
const searching = ref(false);
const error = ref();
const query = ref('');
async function search() {
	if (!query.value) {
		return;
	}

	searched.value = true;
	searching.value = true;
	try {
		results.value = await useGoogleBooksAPI().searchBooks({
			q: {
				options: {
					[SearchQueryOptions.TITLE]: query.value,
				},
			},
		});
	} catch (e) {
		error.value = e;
	}
	searching.value = false;
}

const isFiltersModalOpen = ref(false);
</script>

<template>
	<main>
		<form @submit.prevent="search()">
			<BaseInput
				v-model="query"
				:form="InputForm.NOTCHED_RIGHT"
			>
				Buscar libros...
			</BaseInput>

			<BaseButton
				type="button"
				:button-form="ButtonForm.CIRCLE"
				@click="isFiltersModalOpen = true"
			>
				<BaseIcon icon="mdi:filter-variant" />
			</BaseButton>
		</form>

		<!-- ❌ Error state -->
		<section v-if="error">
			<p>Error al buscar libros</p>
		</section>

		<!-- ✅ No error state -->
		<template v-else>
			<!-- ⏳ Loading state -->
			<section v-if="searching">
				<p>Cargando...</p>
			</section>

			<!-- ⚠️ No data state -->
			<template v-else-if="!results.length">
				<!-- 🔍 No search query -->
				<section v-if="!query">
					<p>Escribe el título de algún libro para buscarlo</p>
				</section>

				<!-- 📭 Empty state -->
				<section v-else-if="searched">
					<p>No se encontraron resultados</p>
				</section>
			</template>

			<!-- ✅ Data state -->
			<section v-else>
				<BookShowcase
					v-for="book in results"
					:key="book.id"
					:book
					width="calc(33% - 6px)"
					@click="$router.push(`/books/${book.id}`)"
				/>
			</section>
		</template>
	</main>
</template>

<style scoped lang="scss">
main {
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-bottom: var(--tab-height);

	form {
		position: sticky;
		top: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		gap: 8px;
		background: var(--color-secondary-alpha);
		backdrop-filter: blur(4px);
		padding: 16px;
	}

	section {
		padding: 0 16px 16px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 8px;
	}
}
</style>
