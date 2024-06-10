import { createApp } from "vue";

//import style
import "./assets/scss/main.scss";

//import vue root component
import App from "./App.vue";

//import router.js
import { router } from "./router";

//import font ubuntu
import "@fontsource/ubuntu";

//app mount
createApp(App).use(router).mount("#app");
