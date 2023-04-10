import { createApp } from 'vue'
import App from './App.vue'
import router from "@/router";
import '@/assets/style.css'
import appHeader from '@/components/Shered/appHeader.vue'
import AppBookmarkList from "@/components/Shered/appBookmarkList/index.vue";

import {appAxios} from "@/utils/appAxios";
import store from "@/store";
const app =createApp(App)
app.component('appHeader', appHeader)
app.component('AppBookmarkList', AppBookmarkList)
app.use(store)
app.use(router);
app.config.globalProperties.$appAxios =appAxios;
    app.mount('#app')
