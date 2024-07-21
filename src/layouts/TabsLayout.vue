<script setup lang="ts">
import BaseIcon from '@/components/icon/BaseIcon.vue';
import BaseButton from '@/components/button/BaseButton.vue';
import { ButtonColor, ButtonForm, ButtonMode } from '@/components/button/BaseButton.types.ts';
import { IconSize } from '@/components/icon/BaseIcon.types.ts';

const tabs = [
	{
		icon: 'ion:library-outline',
		text: 'Biblioteca',
		route: '/',
	},
	{
		icon: 'mdi:book-search-outline',
		text: 'Buscar',
		route: '/search',
	},
	{
		icon: 'gg:profile',
		text: 'Perfil',
		route: '/profile',
	},
];
</script>

<template>
	<RouterView />

	<nav v-view-transition-name="`tabs`">
		<BaseButton
			v-for="(tab, index) in tabs"
			:key="index"
			:to="tab.route"
			:button-form="ButtonForm.INLINE"
			:mode="ButtonMode.CLEAR"
			:color="ButtonColor.GRAYSCALE"
		>
			<BaseIcon :icon="tab.icon" :size="IconSize.L" />
		</BaseButton>
	</nav>
</template>

<style>
:root {
	--tab-height: 42px;
}

::view-transition-group(tabs) {
	z-index: 100;
}
</style>

<style lang="scss" scoped>
nav {
	z-index: 100;
	position: fixed;
	bottom: 16px;
	align-self: center;
	padding: 0 16px;
	border-radius: 80px;
	height: calc(var(--tab-height) + 16px);
	background: var(--color-secondary-alpha);
	backdrop-filter: blur(4px);
	box-shadow: 0 -8px 8px -4px rgba(0, 0, 0, 0.2);
	display: flex;
	align-items: center;
	gap: 16px;

	a {
		flex: 1;
		height: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: 8px;
		font-weight: var(--font-weight-medium);

		&.router-link-exact-active {
			color: var(--color-primary) !important;
		}

		span {
			font-size: var(--font-size-small);
		}
	}
}
</style>
