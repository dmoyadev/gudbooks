<script setup lang="ts">
import { computed } from 'vue';
import type { Volume } from '@/modules/volumes/models/Volume.ts';
import { getCover } from '@/modules/volumes/helpers.ts';

const props = withDefaults(defineProps<{
	book: Volume;
	size?: number;
}>(), {
	size: 400,
});

const bookCover = computed<string>(() => getCover(props.book.volumeInfo.imageLinks));
</script>

<template>
	<article
		:style="{
			'--book-height': `${size}px`,
			'--book-cover': `url(${bookCover})`,
		}"
	>
		<div class="front">
			<img
				v-if="bookCover"
				:src="bookCover"
				:alt="book.volumeInfo.title"
			>

			<h2 v-else>
				<span>{{ book.volumeInfo.title }}</span>
				<span
					v-if="book.volumeInfo.authors?.length"
					class="authors"
				>
					{{ book.volumeInfo.authors?.join('•') }}
				</span>
			</h2>
		</div>

		<div class="back">
			<img
				:src="bookCover"
				:alt="book.volumeInfo.title"
			>
		</div>

		<div class="pages" />

		<div class="spine">
			<img
				:src="bookCover"
				:alt="book.volumeInfo.title"
			>

			<h2>
				<span>{{ book.volumeInfo.title }}</span>
				<span
					v-if="book.volumeInfo.authors?.length"
					class="authors"
				>
					{{ book.volumeInfo.authors?.join('•') }}
				</span>
			</h2>
		</div>
	</article>
</template>

<style scoped lang="scss">
article {
	--book-width: calc(var(--book-height) * 0.66);
	--book-depth: 40px;
	--book-color: rgb(0, 0, 0, 1);

	height: var(--book-height);
	width: var(--book-width);
	position: relative;
	transform-style: preserve-3d;
	transform: rotate3d(0, 1, 0, 0);
	transition: transform 3s;

	&:hover {
		transform: rotate3d(0, 1, 0, 360deg);
	}

	.front {
		position: absolute;
		height: var(--book-height);
		width: var(--book-width);
		transform-style: preserve-3d;
		transform-origin: 0 50%;
		transition: transform .5s;
		transform: translate3d(0, 0, 20px);
		z-index: 10;
		border-radius: 0 3px 3px 0;
		box-shadow: inset 4px 0 10px rgba(0, 0, 0, 0.1);
		background: var(--book-color);

		img {
			height: 100%;
			max-width: 100%;
			max-height: 100%;
			object-fit: cover;
			border-radius: 0 3px 3px 0;
		}

		h2 {
			padding: 8px 16px 8px 24px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100%;
			text-align: center;

			.authors {
				font-size: var(--font-size-legal);
				font-weight: var(--font-weight-thin);
			}
		}

		&:after {
			left: 8px;
		}
	}

	.back {
		position: absolute;
		transform: rotate3d(0, 1, 0, -180deg) translate3d(0, 0, 19px);
		box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.3);
		border-radius: 3px 0 0 3px;
		background: var(--book-color);
		height: var(--book-height);
		max-height: var(--book-height);
		width: var(--book-width);
		overflow: hidden;

		img {
			filter: blur(15px);
			z-index: -1;
			position: absolute;
			inset: 0;
			height: 100%;
			max-width: 100%;
			max-height: 100%;
			object-fit: cover;
			border-radius: 0 3px 3px 0;
		}

		&:after {
			right: 8px;
		}
	}

	/* Book mark next to the spine */
	.front,
	.back {
		&:after {
			content: '';
			position: absolute;
			top: 0;
			bottom: 0;
			width: 4px;
			background: rgba(0, 0, 0, 0.06);
			box-shadow: 1px 0 3px rgba(255, 255, 255, 0.1);
		}
	}

	.pages {
		position: absolute;
		top: 4px;
		left: calc(var(--book-width) - 8px);
		height: calc(100% - 8px);
		width: calc(var(--book-depth) - 1px);
		background: white;
		transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, calc(var(--book-depth) - 60px));
	}

	.spine {
		position: absolute;
		left: -20px;
		height: 100%;
		width: calc(var(--book-depth) - 1px);
		background: var(--book-color);
		transform: rotate3d(0, 1, 0, -90deg);
		overflow: hidden;

		img {
			filter: blur(15px);
			z-index: -1;
			position: absolute;
			inset: 0;
			height: 100%;
			max-width: 100%;
			max-height: 100%;
			object-fit: cover;
			border-radius: 0 3px 3px 0;
		}

		h2 {
			padding: 8px 16px;
			width: var(--book-height);
			height: var(--book-depth);
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 8px;
			transform-origin: 0 0;
			transform: rotate(90deg) translateY(-40px);
			overflow: hidden;

			span {
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
			}
		}
	}
}
</style>
