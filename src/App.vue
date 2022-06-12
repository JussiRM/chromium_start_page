<template>
	<div id="app">
		<div class="row">
			<div class="col-4">
				<WidgetPanel />
			</div>
			<div class="col-8">
				<ContentPanel />
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import WidgetPanel from "@/components/WidgetPanel.vue";
import ContentPanel from "@/components/ContentPanel.vue";

export default defineComponent({
	components: {
		WidgetPanel,
		ContentPanel
	}
})
</script>


<style lang="scss">
@import "./styles/bootstrap.scss";

html, body {
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	font-family: "Segoe UI", serif;
}

body {
	* {
		box-sizing: border-box;
	}
}

#app {
	width: 100%;
	height: 100%;
	background-image: url("../public/bg.jpg");
	background-size: cover;
	background-position: 50% 50%;

	> div.row {
		height: 100%;
		margin-left: 0;
		margin-right: 0;
		> div {
			height: 100%;
		}
	}
}
</style>
