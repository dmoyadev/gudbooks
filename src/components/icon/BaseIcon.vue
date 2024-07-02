<script setup lang="ts">
import { IconSize } from '@/components/icon/BaseIcon.types.ts';

withDefaults(defineProps<{
	icon?: string; /* The icon to display. */
	size?: IconSize | number; /* The size of the icon. @defaults: IconSize.M */
}>(),	{
	size: IconSize.M,
});
</script>

<template>
	<iconify-icon
		:icon="icon"
		:width="`${size}px`"
		:height="`${size}px`"
	/>
</template>
