import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import "quill/dist/quill.core.css";

import PrimeVue from 'primevue/config';
//@ts-ignore
import Lara from './presets/lara';  //import preset
import Tooltip from 'primevue/tooltip';


const app = createApp(App);

app.use(PrimeVue, {
    unstyled: true,
    pt: Lara                            //apply preset        
});
app.directive('tooltip', Tooltip);

app.mount('#app');
// createApp(App).mount('#app')




