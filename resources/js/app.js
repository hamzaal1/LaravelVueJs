import './bootstrap';
import { createApp } from "vue";
import router from "./router";
import App from "./Vue/App.vue";

createApp(App).use(router).mount("#app");
