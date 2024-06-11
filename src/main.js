import { createApp } from "vue";

//import style
import "./assets/scss/main.scss";

//import vue root component
import App from "./App.vue";

//import router.js
import { router } from "./router";

//import font ubuntu
import "@fontsource/ubuntu";

//import fontawesome
import "@fortawesome/fontawesome-free/js/all.js";

//import bootstrap
import "bootstrap/dist/css/bootstrap.css";

//app mount
createApp(App).use(router).mount("#app");
