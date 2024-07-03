<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import BaseInput from '@/components/input/BaseInput.vue';
import type { Volume } from '@/modules/volumes/models/Volume.ts';
import { SearchQueryOptions, useGoogleBooksAPI } from '@/modules/app/composables/useGoogleBooksAPI.ts';
import BaseButton from '@/components/button/BaseButton.vue';
import BaseIcon from '@/components/icon/BaseIcon.vue';
import { InputForm } from '@/components/input/BaseInput.types.ts';
import { ButtonForm } from '@/components/button/BaseButton.types.ts';
import BookShowcase from '@/modules/volumes/components/BookShowcase.vue';
import { useVolumeStore } from '@/modules/volumes/composables/useVolumeStore.ts';

const { searchQuery, searchResults, currentVolume } = useVolumeStore();

const searched = ref(false);
const searching = ref(false);
const error = ref();
async function search() {
	if (!searchQuery.value) {
		return;
	}

	searched.value = true;
	searching.value = true;
	try {
		searchResults.value = await useGoogleBooksAPI().searchBooks({
			q: {
				options: {
					[SearchQueryOptions.TITLE]: searchQuery.value,
				},
			},
		});
	} catch (e) {
		error.value = e;
	}
	searching.value = false;
}

const isFiltersModalOpen = ref(false);

const applyViewTransitionName = ref(false);
const router = useRouter();
async function openBook(book: Volume) {
	applyViewTransitionName.value = true;
	await nextTick();
	currentVolume.value = book;
	await router.push(`/books/${book.id}`);
}

onMounted(async () => {
	applyViewTransitionName.value = true;
	setTimeout(() => applyViewTransitionName.value = false, 0);
});
</script>

<template>
	<main>
		<form @submit.prevent="search()">
			<BaseInput
				v-model="searchQuery"
				:form="InputForm.NOTCHED_RIGHT"
			>
				Buscar libros...
			</BaseInput>

			<BaseButton
				type="button"
				:button-form="ButtonForm.CIRCLE"
				@click="isFiltersModalOpen = true"
			>
				<BaseIcon icon="eva:options-outline" />
			</BaseButton>
		</form>

		<!-- ❌ Error state -->
		<section v-if="error">
			<p>Error al buscar libros</p>
		</section>

		<!-- ✅ No error state -->
		<template v-else>
			<!-- ⏳ Loading state -->
			<section v-if="searching">
				<p>Cargando...</p>
			</section>

			<!-- ⚠️ No data state -->
			<template v-else-if="!searchResults.length">
				<!-- 🔍 No search query -->
				<section v-if="!searchQuery">
					<p>Escribe el título de algún libro para buscarlo</p>
				</section>

				<!-- 📭 Empty state -->
				<section v-else-if="searched">
					<p>No se encontraron resultados</p>
				</section>
			</template>

			<!-- ✅ Data state -->
			<section v-else>
				<div
					v-for="book in searchResults"
					:key="book.id"
					class="book-container"
				>
					<BookShowcase
						:style="{ '--view-transition-name': applyViewTransitionName ? `book-${book.id}` : 'none' }"
						:book
						width="100%"
						class="book"
						@click="openBook(book)"
					/>

					<span class="isbn">
						<BaseIcon icon="fluent:number-symbol-16-filled" />
						{{ book.volumeInfo.industryIdentifiers?.find(({ type }) => type === 'ISBN_13')?.identifier || 'No disponible' }}
					</span>
				</div>
			</section>
		</template>
	</main>
</template>

<style scoped lang="scss">
main {
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-bottom: var(--tab-height);

	form {
		position: sticky;
		top: 0;
		z-index: 1;
		display: flex;
		align-items: center;
		gap: 8px;
		background: var(--color-secondary-alpha);
		backdrop-filter: blur(4px);
		padding: 16px;
	}

	section {
		padding: 0 16px 16px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 8px;

		.book-container {
			width: calc(33% - 6px);
			display: flex;
			flex-direction: column;
			gap: 4px;

			.book {
				view-transition-name: var(--view-transition-name);
			}

			.isbn {
				display: flex;
				align-items: center;
				gap: 4px;
				font-size: 10px;
				color: var(--color-secondary-accent-alpha);
			}
		}
	}
}
</style>
