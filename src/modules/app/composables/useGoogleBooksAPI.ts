import type { Volume } from '@/modules/volumes/models/Volume.ts';
import type { VolumesSearch } from '@/modules/volumes/models/VolumesSearch.ts';

interface GoogleBooksSearchOptions {
	download?: 'epub'; /** Restrict to volumes by download availability. */
	filter?: 'ebooks' | 'free-ebooks' | 'full' | 'paid-ebooks' | 'partial'; /** Filter by volume type and availability. */
	langRestrict?: string; /** Restrict results to books with this ISO-639-1 language ('en', 'es', 'pt'...). */
	orderBy?: 'newest' | 'relevance'; /** Sort search results. */
	printType?: 'all' | 'books' | 'magazines'; /** Restrict to books or magazines. */
	projection?: 'full' | 'lite'; /** Restrict information returned to a set of selected fields. */
	startIndex?: number; /** Index of the first result to return (starts at 0). */
	maxResults?: number; /** Maximum number of results to return. */
	q?: {
		text?: string; /** Full-text search query string. */
		options?: { [key in SearchQueryOptions]?: string }; /** Search in a specific field. */
	};
}

export enum SearchQueryOptions {
	TITLE = 'intitle', /** Returns results where the text following this keyword is found in the title. */
	AUTHOR = 'inauthor', /** Returns results where the text following this keyword is found in the author. */
	PUBLISHER = 'inpublisher', /** Returns results where the text following this keyword is found in the publisher. */
	CATEGORY = 'subject', /** Returns results where the text following this keyword is listed in the category list of the volume. */
	ISBN = 'isbn', /** Returns results where the text following this keyword is the ISBN. */
	LCCN = 'lccn', /** Returns results where the text following this keyword is the Library of Congress Control Number. */
	OCLC = 'oclc', /** Returns results where the text following this keyword is the Online Computer Library Center number. */
}

/**
 * Custom hook to interact with the Google Books API
 * @info https://developers.google.com/books/docs/v1/using
 */
export function useGoogleBooksAPI() {
	async function doCall<T>(url: string): Promise<T> {
		return fetch(`https://www.googleapis.com/books/v1${url}`)
			.then(async (res: Response) => res.json())
			.catch(async (err: Error) => {
				console.error('🔴 Something went wrong: ', err);
				throw err;
			}) as Promise<T>;
	}

	async function searchBooks(searchOptions: GoogleBooksSearchOptions): Promise<{ items: Volume[]; total: number }> {
		if (!searchOptions.q) {
			throw new Error('Search query is required');
		}

		if (!searchOptions.maxResults) {
			searchOptions.maxResults = 12;
		}

		let query = searchOptions.q.text
			? (`"${searchOptions.q.text.replaceAll(' ', '+')}"`)
			: '';
		if (searchOptions.q.options) {
			delete searchOptions.q.text;
			if (query) {
				query += '+';
			}
			// Construct the query string as 'key:value+key:value+...'
			query += Object.entries(searchOptions.q.options)
				.map(([key, value]) => `${key}:"${value.replaceAll(' ', '+')}"`)
				.join('+');
		}

		delete searchOptions.q;
		const searchParams = Object.keys(searchOptions).length
			? `&${String(new URLSearchParams(searchOptions as Record<string, string>))}`
			: '';

		return doCall<VolumesSearch>(`/volumes?q=${query}${searchParams}`)
			.then((res: VolumesSearch) => {
				if (res.totalItems) {
					return {
						items: res.items,
						total: res.totalItems,
					};
				}

				return {
					items: [],
					total: res.totalItems,
				};
			});
	}

	async function getBook(id: string): Promise<Volume> {
		return doCall<Volume>(`/volumes/${id}`);
	}

	return {
		getBook,
		searchBooks,
	};
}
