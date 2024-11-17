<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import BaseInput from '@/components/input/BaseInput.vue';
import type { Volume } from '@/modules/volumes/models/Volume.ts';
import { SearchQueryOptions, useGoogleBooksAPI } from '@/modules/app/composables/useGoogleBooksAPI.ts';
import BaseButton from '@/components/button/BaseButton.vue';
import BaseIcon from '@/components/icon/BaseIcon.vue';
import { InputForm } from '@/components/input/BaseInput.types.ts';
import { ButtonColor, ButtonForm, ButtonMode } from '@/components/button/BaseButton.types.ts';
import { useVolumeStore } from '@/modules/volumes/composables/useVolumeStore.ts';
import SearchResult from '@/modules/tabs/components/SearchResult.vue';

const {
	searchQuery,
	searchResults,
	currentVolume,
	searchScrollOffset,
	searchStartIndex,
	searchTotal,
	searchType,
} = useVolumeStore();

const searched = ref(searchResults.value.length ? searchQuery.value : '');
const searching = ref(false);
const error = ref();
async function search(resetSearch = false) {
	searchScrollOffset.value = 0;
	if (resetSearch || searchQuery.value !== searched.value) {
		searchResults.value = [];
		searchTotal.value = 0;
		searchStartIndex.value = 0;
	} else {
		searchStartIndex.value += 12;
	}

	if (!searchQuery.value) {
		searched.value = '';
		return;
	}

	searched.value = searchQuery.value;
	searching.value = true;
	try {
		const query = {} as { text?: string; options?: { [key in SearchQueryOptions]?: string } };
		if (searchType.value === 'both') {
			query.text = searchQuery.value;
		} else if (searchType.value === 'title') {
			query.options = { [SearchQueryOptions.TITLE]: searchQuery.value };
		} else if (searchType.value === 'author') {
			query.options = { [SearchQueryOptions.AUTHOR]: searchQuery.value };
		}

		const { items, total } = await useGoogleBooksAPI().searchBooks({
			q: query,
			...(searchStartIndex.value > 0 && { startIndex: searchStartIndex.value - 1 }),
		});
		searchResults.value.push(...items);
		searchTotal.value = total;
	} catch (e) {
		error.value = e;
	}
	searching.value = false;
}
watch(searchType, () => search(true));

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

function shouldApplyViewTransitionName(book: Volume) {
	/*
		There is an error with Google Books API that returns same books when paginating, so we must
		patch this behaviour to don't duplicate view-transition-name properties in the page
	 */
	const count = searchResults.value.filter(b => b.id === book.id).length;
	return count > 1 ? false : applyViewTransitionName.value;
}
</script>

<template>
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

	<main>
		<div class="search-tabs">
			<div
				:class="{ active: searchType === 'title' }"
				@click="searchType = 'title'"
			>
				Solo título
			</div>

			<div
				:class="{ active: searchType === 'both' }"
				@click="searchType = 'both'"
			>
				Título y autor
			</div>

			<div
				:class="{ active: searchType === 'author' }"
				@click="searchType = 'author'"
			>
				Solo autor
			</div>
		</div>

		<!-- ❌ Error state -->
		<section v-if="error">
			<p>Error al buscar libros</p>
		</section>

		<template v-else>
			<!-- ⚠️ No data state -->
			<section v-if="!searched || !searchQuery">
				<p v-if="searchType === 'both'">
					Escribe el título de algún libro o el nombre de algún autor para buscar sus libros
				</p>
				<p v-if="searchType === 'author'">
					Escribe el nombre de algún autor para buscar sus libros
				</p>
				<p v-if="searchType === 'title'">
					Escribe el título de algún libro para buscarlo
				</p>
			</section>

			<template v-else>
				<!-- 📭 Empty state -->
				<section v-if="!searching && !searchResults.length">
					<p>No se encontraron resultados</p>
				</section>

				<!-- ✅ Data state -->
				<section v-else-if="searchResults.length">
					<SearchResult
						v-for="book in searchResults"
						:key="book.id"
						:book
						:apply-view-transition-name="shouldApplyViewTransitionName(book)"
						@click="openBook(book)"
					/>
				</section>

				<!-- ⏳ Loading state -->
				<section v-if="searching">
					<SearchResult
						v-for="i in 9"
						:key="i"
						loading
					/>
				</section>

				<!-- 🔄 Load more state -->
				<section>
					<BaseButton
						v-if="searchResults.length && searchTotal > searchResults.length"
						:color="ButtonColor.GRAYSCALE"
						:mode="ButtonMode.OUTLINE"
						:loading="searching"
						@click="search()"
					>
						Cargar más resultados
					</BaseButton>
				</section>
			</template>
		</template>
	</main>
</template>

<style scoped lang="scss">
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

main {
	display: flex;
	flex-direction: column;
	gap: 16px;
	margin-bottom: var(--tab-height);

	.search-tabs {
		display: flex;
		justify-content: center;
		align-items: center;
		background: var(--color-secondary-accent-dark-alpha);
		margin: 0 auto;
		padding: 4px;
		border-radius: 4px;

		div {
			flex: 1;
			text-align: center;
			white-space: nowrap;
			font-size: var(--font-size-small);
			cursor: pointer;
			padding: 8px 16px;
			border-radius: 50px;

			&.active {
				background: var(--color-primary);
				color: var(--color-primary-accent);
			}
		}

	}

	section {
		padding: 0 16px;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		gap: 32px 16px;

		p {
			text-align: center;
		}

		&:last-child {
			padding-bottom: calc(var(--tab-height) + 16px);
		}
	}
}
</style>
