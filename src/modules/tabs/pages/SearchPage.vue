<script setup lang="ts">
import { ref } from 'vue';
import BaseInput from '@/components/input/BaseInput.vue';
import type { Volume } from '@/modules/volumes/models/Volume.ts';
import { SearchQueryOptions, useGoogleBooksAPI } from '@/modules/app/composables/useGoogleBooksAPI.ts';
import BaseButton from '@/components/button/BaseButton.vue';
import BaseIcon from '@/components/icon/BaseIcon.vue';
import { InputForm } from '@/components/input/BaseInput.types.ts';
import { ButtonForm } from '@/components/button/BaseButton.types.ts';
import BookShowcase from '@/modules/volumes/components/BookShowcase.vue';

const results = ref<Volume[]>([]);

const searched = ref(false);
const searching = ref(false);
const error = ref();
const query = ref('');
async function search() {
	if (!query.value) {
		return;
	}

	searched.value = true;
	searching.value = true;
	try {
		results.value = await useGoogleBooksAPI().searchBooks({
			q: {
				options: {
					[SearchQueryOptions.TITLE]: query.value,
				},
			},
		});
	} catch (e) {
		error.value = e;
	}
	searching.value = false;
}

const isFiltersModalOpen = ref(false);
</script>

<template>
	<main>
		<form @submit.prevent="search()">
			<BaseInput
				v-model="query"
				:form="InputForm.NOTCHED_RIGHT"
			>
				Buscar libros...
			</BaseInput>

			<BaseButton
				type="button"
				:button-form="ButtonForm.CIRCLE"
				@click="isFiltersModalOpen = true"
			>
				<BaseIcon icon="mdi:filter-variant" />
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
			<template v-else-if="!results.length">
				<!-- 🔍 No search query -->
				<section v-if="!query">
					<p>Escribe el título de algún libro para buscarlo</p>
				</section>

				<!-- 📭 Empty state -->
				<section v-else-if="searched">
					<p>No se encontraron resultados</p>
				</section>
			</template>

			<!-- ✅ Data state -->
			<section v-else>
				<BookShowcase
					v-for="book in results"
					:key="book.id"
					:book
					width="calc(33% - 6px)"
				/>
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
	}
}
</style>
