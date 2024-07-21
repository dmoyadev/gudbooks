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

const {
	searchQuery,
	searchResults,
	currentVolume,
	searchScrollOffset,
} = useVolumeStore();

const searched = ref(false);
const searching = ref(false);
const error = ref();
async function search() {
	searchScrollOffset.value = 0;
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

const applyViewTransitionName = ref(false);
const router = useRouter();
function openBook(book: Volume) {
	applyViewTransitionName.value = true;
	currentVolume.value = book;

	const $app = document.querySelector('#app') as HTMLElement;
	searchScrollOffset.value = $app.scrollTop;
	$app.scroll({ top: 0 });

	router.push(`/books/${book.id}`);
}

onMounted(async () => {
	applyViewTransitionName.value = true;
	setTimeout(() => applyViewTransitionName.value = false, 0);
	await nextTick();
	const $app = document.querySelector('#app') as HTMLElement;
	$app.scroll({ top: searchScrollOffset.value });
});
</script>

<template>
	<main>
		<form @submit.prevent="search()">
			<BaseInput
				v-model="searchQuery"
				:form="InputForm.NOTCHED_RIGHT"
				placeholder="Buscar libros..."
			/>

			<BaseButton :button-form="ButtonForm.CIRCLE">
				<BaseIcon icon="mdi:search" />
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

					<span class="title">
						{{ book.volumeInfo.title || '???' }}
					</span>

					<span class="author">
						{{ book.volumeInfo.authors?.join(' • ') || '???' }}
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
		padding: 0 16px calc(var(--tab-height) + 16px);
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 32px 16px;

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
	}
}
</style>
