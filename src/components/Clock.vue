<template>
	<span class="clock">{{clockFormatted}}</span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { format } from "date-fns";
export default defineComponent({
	data() { return {
		clock: new Date(),
		myIntVal: 0
	}},

	beforeMount() {
		this.myIntVal = window.setInterval(() => {
			this.clock = new Date();
		}, 100);
	},

	beforeUnmount() {
		window.clearInterval(this.myIntVal);
	},

	computed: {
		clockFormatted() : string {
			return format(this.clock, "HH:mm:ss");
		}
	}
})
</script>

<style lang="scss">
	
</style>