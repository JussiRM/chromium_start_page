<template>
	<div id="widget-panel">
		<div class="content d-flex flex-column">
			<div class="add-widget">
				<span>ADD WIDGET <bs-icon icon="plus-circle" /></span>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
	
})
</script>

<style lang="scss">
	#widget-panel {
		padding: 10px;
		height: 100%;

		div.content {
			height: calc(100% - 20px);
			margin-top: 10px;
			backdrop-filter: blur(20px);
			background-color: rgba(255,255,255, 0.1);
			border-radius: 40px;
			box-shadow: 0px 0px 10px 2px rgba(255,255,255, 0.33);
			overflow: auto;

			div.add-widget {
				cursor: pointer;
				border: 2px solid rgba(255,255,255, 1);
				border-radius: 40px;
				margin: 10px;
				padding-top: 30px;
				padding-bottom: 30px;
				text-align: center;
				background-color: rgba(0,0,0, 0.4);
				transition: all 200ms ease;

				> span {
					color: #fff;
					font-size: 200%;
				}

				&:hover {
					background-color: rgba(0,0,0, 0.66);
				}
			}
		}
	}
</style>