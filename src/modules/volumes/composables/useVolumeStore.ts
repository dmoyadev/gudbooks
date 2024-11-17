import { ref } from 'vue';
import type { Volume } from '@/modules/volumes/models/Volume.ts';
import { useStorage } from '@/modules/app/composables/useStorage.ts';

const currentVolume = ref<Volume>();
const searchQuery = useStorage('searchQuery', '');
const searchResults = useStorage<Volume[]>('searchResults', []);
const searchScrollOffset = useStorage<number>('searchScrollOffset', 0);
const searchStartIndex = useStorage<number>('searchStartIndex', 0);
const searchTotal = useStorage<number>('searchTotal', 0);
const searchType = useStorage<'both' | 'title' | 'author'>('searchType', 'both');
export function useVolumeStore() {
	return {
		currentVolume,
		searchQuery,
		searchResults,
		searchScrollOffset,
		searchStartIndex,
		searchTotal,
		searchType,
	};
}
