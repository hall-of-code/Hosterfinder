import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VWave from 'v-wave'
import { createI18n } from 'vue-i18n'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import AOS from 'aos'
import 'aos/dist/aos.css'
import Aos from 'aos'
AOS.init();

import en from '@/assets/translate.json'
const messages = Object.assign(en)


var i18n = new createI18n({
    locale: "de",
    fallbackLocale: 'de',
    messages
  })

const app = createApp(App);

app.use(router)
app.use(VWave)
app.use(i18n)

app.mount('#app')
