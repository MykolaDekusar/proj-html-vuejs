import { createApp } from "vue";

//import style
import "./assets/scss/main.scss";

//import vue root component
import App from "./App.vue";

//import router.js
import { router } from "./router";

//app mount
createApp(App).use(router).mount("#app");
