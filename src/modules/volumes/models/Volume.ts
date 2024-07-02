import type { VolumeInfo } from '@/modules/volumes/models/VolumeInfo.ts';
import type { VolumeLayerInfo } from '@/modules/volumes/models/VolumeLayerInfo.ts';
import type { VolumeSaleInfo } from '@/modules/volumes/models/VolumeSaleInfo.ts';
import type { VolumeAccessInfo } from '@/modules/volumes/models/VolumeAccessInfo.ts';

export interface Volume {
	kind: string;
	id: string;
	etag: string;
	selfLink: string;
	volumeInfo: VolumeInfo;
	layerInfo: VolumeLayerInfo;
	saleInfo: VolumeSaleInfo;
	accessInfo: VolumeAccessInfo;
}
