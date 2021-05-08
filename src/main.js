import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind.css'
import VueAxios from "vue-axios";
import axios from "axios";
import Navibar from "./components/Navibar.vue";
import Grid from "./components/Grid.vue";

const app = createApp(App);
app.use(router);
app.use(VueAxios,axios);
app.component('NavBar',Navibar);
app.component('Grid',Grid);
app.mount('#app');


