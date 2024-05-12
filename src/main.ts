import { createApp } from 'vue'
import App from './App.vue'
import './style.css'

import PrimeVue from 'primevue/config';
//@ts-ignore
import Lara from './presets/lara';  //import preset


const app = createApp(App);
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara                            //apply preset        
});
app.mount('#app');
// createApp(App).mount('#app')
