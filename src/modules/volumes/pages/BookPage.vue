<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed, ref } from 'vue';
import type { Volume } from '@/modules/volumes/models/Volume.ts';
import { useGoogleBooksAPI } from '@/modules/app/composables/useGoogleBooksAPI.ts';
import BookShowcase from '@/modules/volumes/components/BookShowcase.vue';
import { CoverSize } from '@/modules/volumes/helpers.ts';

const route = useRoute();
const ID = computed(() => String(route.params.id));

const book = ref<Volume>();
const loading = ref(false);
const error = ref();
async function init() {
	error.value = undefined;
	loading.value = true;
	try {
		book.value = await useGoogleBooksAPI().getBook(ID.value);
	} catch (e) {
		error.value = e;
	}
	loading.value = false;
}
init();
</script>

<template>
	<main>
		<!-- ❌ Error state -->
		<section v-if="error">
			<p>Error al acceder al libro</p>
		</section>

		<!-- ✅ No error state -->
		<template v-else>
			<!-- ⏳ Loading state -->
			<section v-if="loading">
				<p>Cargando...</p>
			</section>

			<!-- 📭 Empty state -->
			<section v-else-if="!book">
				<p>No se ha encontrado el libro</p>
			</section>

			<!-- ✅ Data state -->
			<section v-else>
				<BookShowcase
					:book
					:cover-size="CoverSize.XL"
					width="75%"
				/>
			</section>
		</template>
	</main>
</template>

<style scoped lang="scss">

</style>
