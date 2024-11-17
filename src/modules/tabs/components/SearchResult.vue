<script setup lang="ts">
import BookShowcase from '@/modules/volumes/components/BookShowcase.vue';
import type { Volume } from '@/modules/volumes/models/Volume.ts';

defineProps<{
	book?: Volume;
	applyViewTransitionName?: boolean;
}>();
</script>

<template>
	<div class="book-container">
		<BookShowcase
			v-if="book"
			:style="{ '--view-transition-name': applyViewTransitionName ? `book-${book.id}` : 'none' }"
			:book
			width="100%"
			class="book"
		/>
		<div
			v-else
			class="book skeleton-item"
			:style="{
				height: '100%',
				aspectRatio: 1 / 1.55,
				borderRadius: '4px',
			}"
		/>

		<span
			v-if="book"
			class="title"
		>
			{{ book.volumeInfo.title || '???' }}
		</span>
		<template v-else>
			<span class="title skeleton-item" />
			<span class="title skeleton-item" />
		</template>

		<span
			v-if="book"
			class="author"
		>
			{{ book.volumeInfo.authors?.join(' • ') || '???' }}
		</span>
		<span v-else class="author skeleton-item" />
	</div>
</template>

<style scoped lang="scss">
.book-container {
	width: calc(33% - 10px);
	display: flex;
	flex-direction: column;
	gap: 4px;

	.book {
		view-transition-name: var(--view-transition-name);
	}

	.title {
		font-size: var(--font-size-legal);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: initial;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		line-clamp: 2;
		-webkit-box-orient: vertical;
	}

	.author {
		font-size: 10px;
		color: var(--color-secondary-accent-alpha);
	}
}
</style>
