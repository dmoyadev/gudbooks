import { ref } from 'vue';
import type { Volume } from '@/modules/volumes/models/Volume.ts';
import { useStorage } from '@/modules/app/composables/useStorage.ts';

const currentVolume = ref<Volume>();
const searchQuery = useStorage('searchQuery', '');
const searchResults = useStorage<Volume[]>('searchResults', []);
export function useVolumeStore() {
	return {
		currentVolume,
		searchQuery,
		searchResults,
	};
}
