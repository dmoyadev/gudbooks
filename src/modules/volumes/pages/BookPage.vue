<script setup lang="ts">
import { onBeforeRouteLeave, useRoute } from 'vue-router';
import { computed, onMounted, ref } from 'vue';
import type { Volume } from '@/modules/volumes/models/Volume.ts';
import { useGoogleBooksAPI } from '@/modules/app/composables/useGoogleBooksAPI.ts';
import BookShowcase from '@/modules/volumes/components/BookShowcase.vue';
import { CoverSize } from '@/modules/volumes/helpers.ts';
import { useVolumeStore } from '@/modules/volumes/composables/useVolumeStore.ts';
import BaseButton from '@/components/button/BaseButton.vue';
import BaseIcon from '@/components/icon/BaseIcon.vue';
import { ButtonColor, ButtonForm, ButtonMode } from '@/components/button/BaseButton.types.ts';
import { IconSize } from '@/components/icon/BaseIcon.types.ts';
import { capitalizeAll } from '@/utils/helpers.ts';

const route = useRoute();
const ID = computed(() => String(route.params.id));
const { currentVolume } = useVolumeStore();

const book = ref<Volume>();

const error = ref();
async function init() {
	book.value = currentVolume.value;

	error.value = undefined;
	try {
		book.value = await useGoogleBooksAPI().getBook(ID.value);
		currentVolume.value = book.value;
	} catch (e) {
		error.value = e;
	}
}
init();

const bookPages = computed<string>(() => {
	if (!book.value) {
		return 'No hay información';
	}

	return `${book.value.volumeInfo.printedPageCount} páginas`
		|| `${book.value.volumeInfo.pageCount} páginas`
		|| 'No hay información';
});

const bookPublishDate = computed<string>(() => {
	if (!book.value) {
		return 'No hay información';
	}

	if (book.value.volumeInfo.publishedDate) {
		return `Publicado en ${(new Date(book.value.volumeInfo.publishedDate)).getFullYear()}`;
	}

	return 'No hay información';
});

const bookLanguage = computed<string>(() => {
	if (!book.value) {
		return 'No hay información';
	}

	return book.value.volumeInfo.language || 'No hay información';
});

const bookTitle = computed<string>(() => capitalizeAll(book.value?.volumeInfo.title || ''));
const bookAuthors = computed<string>(() => book.value?.volumeInfo.authors?.join(' • ') || '');
const bookISBN = computed<string>(() => book.value?.volumeInfo.industryIdentifiers?.find(({ type }) => type === 'ISBN_13')?.identifier || 'No disponible');
const bookPublisher = computed<string>(() => book.value?.volumeInfo.publisher ? capitalizeAll(book.value?.volumeInfo.publisher) : 'Editorial no disponible');

const applyViewTransitionName = ref(false);
onMounted(async () => {
	applyViewTransitionName.value = true;
	setTimeout(() => applyViewTransitionName.value = false, 0);
});

onBeforeRouteLeave(() => {
	applyViewTransitionName.value = true;
});
</script>

<template>
	<header>
		<BaseButton
			:button-form="ButtonForm.CIRCLE"
			:mode="ButtonMode.CLEAR"
			:color="ButtonColor.GRAYSCALE"
			class="btn-back"
			@click="$router.back()"
		>
			<BaseIcon icon="mdi:arrow-left" />
		</BaseButton>
	</header>

	<main>
		<!-- ❌ Error state -->
		<section v-if="error">
			<p>Error al acceder al libro</p>
		</section>

		<!-- ✅ No error state -->
		<template v-else>
			<!-- ⏳ Loading state -->
			<section v-if="!book">
				<p>Cargando...</p>
			</section>

			<!-- 📭 Empty state -->
			<section v-else-if="error">
				<p>No se ha encontrado el libro</p>
			</section>

			<!-- ✅ Data state -->
			<template v-else>
				<section class="title">
					<h1>{{ bookTitle }}</h1>
					<h2>{{ bookAuthors }}</h2>
				</section>

				<section class="book-info">
					<BookShowcase
						:style="{ '--view-transition-name': applyViewTransitionName ? `book-${book.id}` : 'none' }"
						do-animation-on-load
						:book
						:cover-size="CoverSize.XL"
						class="book"
						width="calc(75% - 16px)"
					/>

					<aside>
						<div class="info-block">
							<BaseIcon icon="pepicons-print:book" :size="IconSize.XL" />
							{{ bookPages }}
						</div>

						<div class="info-block">
							<BaseIcon icon="pepicons-print:calendar" :size="IconSize.XL" />
							{{ bookPublishDate }}
						</div>

						<div class="info-block">
							<BaseIcon icon="pepicons-print:internet" :size="IconSize.XL" />
							{{ bookLanguage }}
						</div>
					</aside>
				</section>

				<h2>{{ bookPublisher }}</h2>

				<section class="metadata">
					<div class="isbn">
						<BaseIcon icon="fluent:number-symbol-16-filled" />
						ISBN:
						{{ bookISBN }}
					</div>

					<div class="tags">
						<div
							v-for="category in book?.volumeInfo.categories || []"
							class="tag"
						>
							<span>{{ category }}</span>
						</div>
					</div>
				</section>

				<p
					v-if="book"
					class="description"
					v-html="book.volumeInfo.description"
				/>
			</template>
		</template>
	</main>
</template>

<style scoped lang="scss">
header {
	padding: 16px 16px 0 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;

	.btn-bookmark {
		display: flex;
		align-items: center;
		gap: 8px;
	}
}

main {
	padding: 0 16px 16px;
	display: flex;
	flex-direction: column;
	gap: 24px;

	.title {
		h1 {
			font-size: var(--font-size-title);
		}

		h2 {
			color: var(--color-secondary-accent-dark);
		}
	}

	.book-info {
		display: flex;
		gap: 16px;

		.book {
			flex-shrink: 0;
			view-transition-name: var(--view-transition-name);
		}

		aside {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			gap: 4px;

			.info-block {
				height: 100px;
				padding: 8px;
				border-radius: 16px;
				background: var(--color-primary-alpha);
				color: var(--color-primary);
				display: flex;
				flex-direction: column;
				align-items: center;
				text-align: center;
				justify-content: center;
				gap: 8px;
				font-size: var(--font-size-legal);
				text-transform: uppercase;
			}
		}
	}

	.metadata {
		display: flex;
		flex-direction: column;
		gap: 8px;

		.isbn {
			display: flex;
			align-items: center;
			gap: 4px;
			font-weight: var(--font-weight-bold);
			color: var(--color-secondary-accent);
			white-space: nowrap;
		}

		.tags {
			display: flex;
			gap: 8px;
			overflow: auto;
			padding-bottom: 8px;

			.tag {
				display: flex;
				align-items: center;
				gap: 4px;
				font-size: var(--font-size-legal);
				font-weight: var(--font-weight-bold);
				color: var(--color-primary);
				padding: 4px 8px;
				background: var(--color-primary-alpha);
				border-radius: 16px;
				white-space: nowrap;

				&.isbn {
					color: var(--color-secondary-accent);
					background: var(--color-secondary-accent-alpha);
				}
			}
		}
	}

	.description {
		:deep(p) {
			margin-bottom: 8px;
		}
	}
}
</style>
