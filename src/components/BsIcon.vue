<template>
	<!--<img :src="iconSrc" :alt="icon" />-->

	<!--<svg class="bi" width="32" height="32" fill="currentColor">
		<use :xlink:href="svgHref"/>
	</svg>-->

	<i :class="iconClass"></i>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
export default defineComponent({
	props: {
		icon: {
			type: String as PropType<string>,
			required: true
		}
	},

	computed: {
		iconSrc() : string {
			return "/bootstrap-icons/" + this.icon + ".svg";
		},

		svgHref() : string {
			return `/bootstrap-icons/bootstrap-icons.svg#${this.icon}`;
		},

		iconClass() : string {
			return `bi-${this.icon}`
		}
	}
})
</script>

<style lang="scss">
	.bi {
		font-size: 100%;
	}
</style>