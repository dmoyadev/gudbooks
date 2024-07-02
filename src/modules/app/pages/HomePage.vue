<script setup lang="ts">
import { ref } from 'vue';
import type { Volume } from '@/modules/volumes/models/Volume.ts';
import { SearchQueryOptions, useGoogleBooksAPI } from '@/modules/app/composables/useGoogleBooksAPI.ts';
import BaseInput from '@/components/input/BaseInput.vue';
import BookShowcase from '@/modules/volumes/components/BookShowcase.vue';

const results = ref<Volume[]>([]);

async function search(query: string) {
	results.value = await useGoogleBooksAPI().searchBooks({
		q: {
			options: {
				[SearchQueryOptions.TITLE]: query,
			},
		},
	});
}
</script>

<template>
	<BaseInput @change="search($event.target.value)" />

	<div>
		<BookShowcase
			v-for="book in results"
			:key="book.id"
			:book
			:size="250"
		/>
	</div>
</template>

<style lang="scss" scoped>
div {
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
	gap: 8px;
}
</style>
