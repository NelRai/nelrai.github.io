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
import { createI18n } from 'vue-i18n'
const i18n = createI18n({
    locale: 'ja',
    fallbackLocale: 'en',
    messages: {
      en: {
        message: {
          hello: 'hello world'
        }
      },
      ja: {
        message: {
          hello: 'こんにちは、世界'
        }
      }
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




