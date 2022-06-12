import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BsIcon from "@/components/BsIcon.vue";

const app = createApp(App)
	.use(store);
	
app.component("BsIcon", BsIcon);
	
app.mount('#app')
