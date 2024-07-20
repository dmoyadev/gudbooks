<script setup lang="ts">
import * as pkg from '@/../package.json';
import BaseButton from '@/components/button/BaseButton.vue';
import { ButtonMode } from '@/components/button/BaseButton.types.ts';
import BaseIcon from '@/components/icon/BaseIcon.vue';
import { IconSize } from '@/components/icon/BaseIcon.types.ts';
import { useAuth } from '@/modules/auth/composables/useAuth.ts';
import BaseAvatar from '@/components/avatar/BaseAvatar.vue';

const { user, logout } = useAuth();
</script>

<template>
	<main>
		<div class="card-user">
			<BaseAvatar :alt="user?.email || 'Usuario'" />
			<h2>{{ user?.providerData?.[0].displayName }}</h2>
			<h3>{{ user?.providerData?.[0].email }}</h3>
		</div>
	</main>

	<footer>
		<BaseButton
			:mode="ButtonMode.OUTLINE"
			class="btn-logout"
			@click="logout()"
		>
			<BaseIcon icon="mdi:logout" flip="horizontal" />
			Cerrar sesión
		</BaseButton>

		<small>
			v.{{ pkg.version }}
			<br>
			Hecho con 💚 por <a href="https://danimoya.es">Dani Moya</a>
			<br>
			<br>
			<span>
				<a href="https://github.com/dmoyadev/gudbooks">
					<BaseIcon icon="mdi:github" :size="IconSize.S" />
					Github
				</a>
				-
				<BaseIcon icon="logos:vue" :size="IconSize.S" />
				-
				<BaseIcon icon="logos:vitejs" :size="IconSize.S" />
				-
				<BaseIcon icon="logos:webstorm" :size="IconSize.S" />
			</span>
		</small>
	</footer>
</template>

<style scoped lang="scss">
main {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 16px;

	.card-user {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		padding: 16px;
		border-radius: 8px;

		/* Glass effect */
		background: transparent;
		box-shadow: var(--shadow-base);
		backdrop-filter: blur(4px);
		-webkit-backdrop-filter: blur(4px);

		h2 {
			font-size: var(--font-size-title);
			font-weight: bold;
		}

		h3 {
			font-size: var(--font-size-subtitle);
		}
	}
}

footer {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	padding: 16px;

	.btn-logout {
		display: flex;
		align-items: center;
		gap: 8px;
	}

	small {
		margin-top: auto;
		align-self: center;
		display: block;
		font-size: var(--font-size-legal);
		color: var(--color-primary);
		text-align: center;

		a {
			color: var(--color-secondary-accent);
			font-size: var(--font-size-legal);
			text-decoration: underline;
			display: inline-flex;
			align-items: center;
			gap: 4px;
		}

		span {
			display: inline-flex;
			align-items: center;
			gap: 4px;
		}
	}
}
</style>
