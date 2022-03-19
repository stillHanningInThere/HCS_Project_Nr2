import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueGoogleMaps from "@fawmi/vue-google-maps";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMountainSun } from '@fortawesome/free-solid-svg-icons';

const app = createApp(App)

app.use(VueGoogleMaps, {
    load: {
        key: '',
        libraries: "places"
    }
})
app.use(router)

app.mount('#app')

library.add(faMountainSun)

app.component('font-awesome-icon', FontAwesomeIcon)
