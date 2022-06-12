import { Component, ComputedOptions, MethodOptions } from "vue";

export default interface IWidget {
	name: string,
	component: Component<any, any, any, ComputedOptions, MethodOptions>
}