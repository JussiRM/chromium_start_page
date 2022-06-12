<template>
	<div id="content-panel">
		<div class="content-panel-item clock-item">
			<div class="d-flex align-items-end">
				<div class="clock-container">
					<Clock />
				</div>
				<div class="date-container">
					<div class="dayAndMonth">
						<span>{{currentDateFormatted}}</span>
					</div>
					<div class="dayName">
						<span>{{currentDayName}}</span>
					</div>
				</div>
			</div>
			<div class="ruler"></div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Clock from "@/components/Clock.vue";
import { format as dateFormat } from "date-fns";
import { capitalize } from "lodash";

export default defineComponent({
	components: {
		Clock
	},

	data() { return {
		currentDate: new Date(),
		currDateUpdateIntVal: 0
	}},

	beforeMount() {
		this.currDateUpdateIntVal = window.setInterval(() => {
			let newDate = new Date();

			// Update only if nearing midnight (mega optimizations)
			let isMidnightHours = (
				(newDate.getHours() >= 23 && newDate.getHours() <= 24) || 
				(newDate.getHours() >= 0 && newDate.getHours() < 1)
			);
			let isMidnightMinutes = (
				(newDate.getMinutes() >= 59 && newDate.getMinutes() <= 60) ||
				(newDate.getMinutes() >= 0 && newDate.getMinutes() < 1)	
			);

			if (isMidnightHours && isMidnightMinutes) {
				this.currentDate = new Date();
			}
		}, 1000);
	},

	beforeUnmount() {
		window.clearInterval(this.currDateUpdateIntVal);
	},

	computed: {
		currentDateFormatted() : string {
			return dateFormat(this.currentDate, "dd.MM.");
		},

		currentDayName() : string {
			let dayName = this.currentDate.toLocaleDateString(window.navigator.language, { weekday: 'long' });
			return capitalize(dayName);
		}
	}
})
</script>

<style lang="scss">
	div#content-panel {
		padding: 10px;

		div.content-panel-item {
			margin-bottom: 10px;
		}

		div.ruler {
			height: 5px;
			background-color: white;
			box-shadow: 0px 0px 4px 1px rgba(0,0,0, 0.75);
		}
		
		div.clock-item {
			user-select: none;
			color: #fff;
			$textShadowColor: rgba(0,0,0, 0.75);
			text-shadow: 0px 0px 2px $textShadowColor,
				1px 1px 1px $textShadowColor,
				-1px -1px 1px $textShadowColor,
				-1px 1px 1px $textShadowColor,
				1px -1px 1px $textShadowColor;

			div.clock-container {
				font-size: 1000%;
				margin-top: -20px;
				line-height: 175px;
			}

			div.date-container {
				margin-left: 30px;
				div.dayAndMonth {
					font-size: 400%;
					line-height: 50px;
				}

				div.dayName {
					font-size: 200%;
					padding-left: 10px;
					padding-bottom: 10px;
				}
			}
		}
	}
</style>