<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import { ButtonMode } from '@/components/button/BaseButton.types.ts';
import BaseButton from '@/components/button/BaseButton.vue';

const props = withDefaults(defineProps<{
	mainClass?: string; /* The class name for the modal main element */
	disallowClosing?: boolean; /* Hides the close button */
	title?: string; /* The title of the modal */
	size?: number; /* The percentage of aperture from top of the screen. @defaults: 96 */
}>(),	{
	size: 96,
});

const emit = defineEmits<{
	/**
	 * Emitted when the modal is closed
	 */
	close: [];
}>();

const $modal = ref<HTMLElement>();

function setSize() {
	setTimeout(() => {
		if (!$modal.value) {
			return;
		}

		$modal.value.style.height = `${window.innerHeight * (props.size) / 100}px`;
		$modal.value.style.maxHeight = `${window.innerHeight * (props.size) / 100}px`;
	}, 100);
}

onMounted(() => {
	setSize();
	window.addEventListener('resize', setSize);
});
onBeforeUnmount(() => {
	window.removeEventListener('resize', setSize);
});

function close() {
	if (props.disallowClosing) {
		return;
	}

	$modal.value!.style.maxHeight = '0';
	setTimeout(() => emit('close'), 100);
}
</script>

<template>
	<Teleport to="body">
		<div
			class="overlay"
			@click="close()"
		/>

		<dialog
			v-bind="$attrs"
			ref="$modal"
			class="modal"
			:style="{ '--modal-height': `${size}dvh` }"
			open
		>
			<header>
				<!-- Close button -->
				<BaseButton
					v-if="!disallowClosing"
					class="btn-close"
					:mode="ButtonMode.CLEAR"
					@click="close()"
				>
					<!-- @slot Close button content -->
					<slot name="close-btn-content">
						{{ 'Cancelar' }}
					</slot>
				</BaseButton>

				<span
					v-if="title"
					class="title"
				>
					<span class="handler" />
					{{ title }}
				</span>

				<div class="header-action">
					<!-- @slot Main action of the modal -->
					<slot name="header-action" />
				</div>
			</header>

			<main :class="mainClass">
				<!-- @slot The main content of the modal -->
				<slot />
			</main>
		</dialog>
	</Teleport>
</template>

<style lang="scss">
html:has(.modal),
body:has(.modal) {
	background: black;

	#app {
		border-radius: 8px;
		position: fixed;
		overflow: hidden;
		transition: all .2s;
		transform: scale(.95, .97);
	}
}
</style>

<style scoped lang="scss">
.overlay {
	position: fixed;
	inset: 0;
	content: '';
	background: rgba(0, 0, 0, 0.5);
	z-index: 1999;
}

dialog {
	--header-height: 56px;
	--base-border-radius: 8px 8px 0 0;
	background: var(--color-secondary);
	color: var(--color-secondary-accent);
	position: absolute;
	width: 100%;
	bottom: 0;
	max-height: 0;
	transition: all .1s;
	border-radius: var(--base-border-radius);
	z-index: 2000;
	border: none;
	display: flex;
	flex-direction: column;

	header {
		max-height: var(--header-height);
		height: var(--header-height);
		min-height: var(--header-height);
		position: sticky;
		top: 0;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-radius: var(--base-border-radius);
		padding: 8px 4px 4px;
		z-index: 1000;
		background: rgba(43, 43, 43, 0.8);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);

		.btn-close {
			width: 104px;
			display: flex;
			justify-content: flex-start;
		}

		.title {
			flex: 1;
			text-align: center;
			position: relative;

			.handler {
				position: absolute;
				top: -12px;
				left: 50%;
				transform: translateX(-50%);
				height: 4px;
				width: 24px;
				border-radius: 8px;
				background: var(--color-gray-3);
			}
		}

		.header-action {
			width: 104px;
			display: flex;
			justify-content: flex-end;
		}
	}

	main {
		border-radius: 8px 8px 0 0;
		min-height: var(--modal-height);
		overflow-y: auto;
		margin-top: calc(var(--header-height) * -1);
		padding: var(--header-height) 16px 16px;
	}
}
</style>
