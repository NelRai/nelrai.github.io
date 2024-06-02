import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import './style.css'
import "quill/dist/quill.core.css";

import PrimeVue from 'primevue/config';
//@ts-ignore
import Lara from './presets/lara';  //import preset
import Tooltip from 'primevue/tooltip';
import Ripple from 'primevue/ripple';
import ConfirmPopup from 'primevue/confirmpopup';
import ConfirmationService from 'primevue/confirmationservice';


const pinia = createPinia()


const app = createApp(App);

app.use(
    PrimeVue, {
    ripple: true,
    unstyled: true,
    pt: Lara                            //apply preset        
    }, 
    pinia
    
);
app.use(pinia)
app.use(ConfirmationService)


app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);


app.mount('#app');
// createApp(App).mount('#app')




