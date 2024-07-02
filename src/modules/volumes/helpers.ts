import type { ImageLinks } from '@/modules/volumes/models/VolumeInfo.ts';

export enum CoverSize {
	S = 'smallThumbnail',
	M = 'thumbnail',
	L = 'large',
	XL = 'extraLarge',
}

export function getCover(images?: ImageLinks, size: CoverSize = CoverSize.M): string {
	if (!images || !Object.keys(images).length) {
		return '';
	}

	const coverURL = images[size] || images.thumbnail || images.smallThumbnail || '';
	return coverURL
		.replace('&edge=curl', '')
		.replace('source=gbs_api', '');
}
