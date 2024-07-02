import type { Volume } from '@/modules/volumes/models/Volume.ts';

export interface VolumesSearch {
	kind: string;
	totalItems: number;
	items: Volume[];
}
