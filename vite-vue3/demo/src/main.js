import { createApp } from "vue";
// import App from "./App.vue";
import "./index.css";
// import store from "./store/index";
// import Composition from "./Composition.vue";
// import LifeCycle from "./LifeCycle.vue";
// import HomeView from "./views/HomeView.vue";
import HomeView from "./views/PiniaViewTest.vue";

import { createPinia } from "pinia";
// createApp(App).mount("#app");
const pinia = createPinia();
const app = createApp(HomeView);
// app.use(store);
app.use(pinia);
console.log("🚀 ~ app:", app);
app.mount("#homeview");
// app.mount("#composition");
// createApp(LifeCycle).mount("#lifecycle");
