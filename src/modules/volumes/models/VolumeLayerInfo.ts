export interface VolumeLayerInfo {
	layers: Layer[];
}

interface Layer {
	layerId: string;
	volumeAnnotationsVersion: string;
}
