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

//https://vue-i18n.intlify.dev/guide/installation.html
import { createI18n } from 'vue-i18n';
import de from "./locales/de.json";
import en from "./locales/as.json";

const i18n = createI18n({
    locale: 'en',
    fallbackLocale: 'de',
    globalInjection: true,
    legacy: false,
    messages: {
      en,
      de
    }
  })
  


const pinia = createPinia()


const app = createApp(App);

app.use(
    PrimeVue, {
    ripple: true,
    unstyled: true,
    pt: Lara                            //apply preset        
    }
    
);
app.use(pinia);
app.use(ConfirmationService);
app.use(i18n);

app.directive('tooltip', Tooltip);
app.directive('ripple', Ripple);


app.mount('#app');
// createApp(App).mount('#app')




