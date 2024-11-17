<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { capitalizeAll } from '@/utils/helpers.ts';
import type { Volume } from '@/modules/volumes/models/Volume.ts';
import type { CoverSize } from '@/modules/volumes/helpers.ts';
import { getCover } from '@/modules/volumes/helpers.ts';

const props = withDefaults(defineProps<{
	book: Volume;
	doAnimationOnLoad?: boolean;
	coverSize?: CoverSize;
	width?: number | string;
}>(), {
	width: '200px',
});

const bookCover = computed<string>(() => getCover(props.book.volumeInfo.imageLinks, props.coverSize));
const bookTitle = computed<string>(() => capitalizeAll(props.book.volumeInfo.title));
const bookAuthors = computed<string>(() => props.book.volumeInfo.authors?.join(' • ') || '');

const rotation = ref(0);
const $book = ref<HTMLElement>();
const height = ref(0);
onMounted(() => {
	if (!$book.value) {
		return;
	}

	height.value = $book.value.clientWidth * 1.55;
	if (props.doAnimationOnLoad) {
		rotation.value = -385;
	}
});

// Calculate rotation on drag
const isDragging = ref(false);
const previousTouch = ref<Touch>();

function handleStartDrag() {
	isDragging.value = true;
	$book.value!.style.transitionDuration = '0s';
}

function handleEndDrag() {
	isDragging.value = false;
	previousTouch.value = undefined;
	$book.value!.style.transitionDuration = '2s';
}

function handleMouseMove(e: MouseEvent) {
	// This event should trigger only when isDragging === true
	if (!isDragging.value) {
		return;
	}

	// If the user releases the mouse button, stop dragging
	// This is useful when the user releases the mouse button outside the window
	if (e.buttons !== 1) {
		isDragging.value = false;
		return;
	}

	rotation.value += e.movementX;
}

function handleTouchMove(e: TouchEvent) {
	// Handle dragging
	if (e.touches.length === 1) {
		const touch = e.touches[0];
		if (!previousTouch.value) {
			previousTouch.value = touch;
			return;
		}

		rotation.value += touch.pageX - previousTouch.value?.pageX;

		// Update the previous touch point after calculating the offset
		previousTouch.value = touch;
	}
}
</script>

<template>
	<article
		:id="`book-${book.id}`"
		ref="$book"
		:style="{
			'--book-height': `${height}px`,
			'--book-width': isNaN(+width) ? width : (`${width}px`),
			'--book-cover': `url(${bookCover})`,
			'--book-rotation': `${rotation}deg`,
		}"
		@click="rotation = rotation === 0 ? 360 : 0"
		@mousedown.passive="handleStartDrag()"
		@touchstart.passive="handleStartDrag()"
		@mouseup.passive="handleEndDrag()"
		@touchend.passive="handleEndDrag()"
		@mousemove.passive="handleMouseMove($event)"
		@touchmove.passive="handleTouchMove($event)"
	>
		<div class="front">
			<img
				v-if="bookCover"
				:src="bookCover"
				:alt="bookTitle"
			>

			<h2 v-else>
				<span>{{ bookTitle }}</span>
				<span
					v-if="bookAuthors?.length"
					class="authors"
				>
					{{ bookAuthors }}
				</span>
			</h2>
		</div>

		<div class="back">
			<img
				v-if="bookCover"
				:src="bookCover"
				:alt="bookTitle"
			>

			<h2>
				<span>{{ bookTitle }}</span>
				<span
					v-if="bookAuthors?.length"
					class="authors"
				>
					{{ bookAuthors }}
				</span>
			</h2>
		</div>

		<div class="pages" />

		<div class="spine">
			<img
				v-if="bookCover"
				:src="bookCover"
				:alt="bookTitle"
			>

			<h2>
				<span>{{ bookTitle }}</span>
				<span
					v-if="bookAuthors?.length"
					class="authors"
				>
					{{ bookAuthors }}
				</span>
			</h2>
		</div>
	</article>
</template>

<style scoped lang="scss">
article {
	--book-depth: 40px;
	--book-color: rgb(0, 0, 0, 1);

	aspect-ratio: 1 / 1.55;
	width: var(--book-width);
	position: relative;
	transform-style: preserve-3d;
	transform: rotate3d(0, 1, 0, var(--book-rotation));
	transition: transform 2s;

	.front,
	.back,
	.spine,
	.pages {
		position: absolute;
		aspect-ratio: 1 / 1.55;
		width: 100%;
		background: var(--book-color);
		box-shadow: 0 0 10px rgba(0, 0, 0, 1);
		border-radius: 0 3px 3px 0;
		overflow: hidden;

		img {
			height: 100%;
			max-height: 100%;
			width: 100%;
			max-width: 100%;
			object-fit: cover;
			border-radius: 0 3px 3px 0;
		}
	}

	.back,
	.spine {
		img {
			filter: blur(15px);
			z-index: -1;
			position: absolute;
			inset: 0;
		}
	}

	.front {
		transform-origin: 0 50%;
		transform: translate3d(0, 0, 20px);

		&:after {
			left: 8px;
		}
	}

	.back {
		transform: rotate3d(0, 1, 0, -180deg) translate3d(0, 0, 19px);
		border-radius: 3px 0 0 3px;

		&:after {
			right: 8px;
		}
	}

	/* Spìne mark next to the spine, to give a bookish feeling */
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

		h2 {
			padding: 8px 16px 8px 24px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			height: 100%;
			text-align: center;

			span {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: initial;
				display: -webkit-box;
				-webkit-line-clamp: 4;
				line-clamp: 4;
				-webkit-box-orient: vertical;
			}

			.authors {
				font-size: var(--font-size-legal);
				font-weight: var(--font-weight-thin);

				overflow: hidden;
				text-overflow: ellipsis;
				white-space: initial;
				display: -webkit-box;
				-webkit-line-clamp: 3;
				line-clamp: 3;
				-webkit-box-orient: vertical;
			}
		}
	}

	.pages {
		top: 4px;
		left: calc(100% - 8px);
		height: calc(100% - 8px);
		width: calc(var(--book-depth) - 2px);
		background: var(--color-secondary-accent);
		box-shadow: none;
		transform: rotate3d(0, 1, 0, 90deg) translate3d(0, 0, calc(var(--book-depth) - 60px));
	}

	.spine {
		left: -20px;
		height: 100%;
		width: calc(var(--book-depth) - 1px);
		transform: rotate3d(0, 1, 0, -90deg);

		h2 {
			padding: 8px 16px;
			width: var(--book-height);
			height: var(--book-depth);
			display: flex;
			align-items: center;
			justify-content: flex-end;
			gap: 8px;
			font-size: var(--font-size-legal);
			transform-origin: 0 0;
			transform: rotate(90deg) translateY(-40px);
			overflow: hidden;

			span {
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;

				&.authors {
					font-size: 8px;
					text-transform: uppercase;
				}
			}
		}
	}
}
</style>
