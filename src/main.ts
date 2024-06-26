import 'virtual:uno.css'
import './assets/main.css'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'

import App from './App.vue'

const app = createApp(App)

import { createPinia } from 'pinia'
app.use(createPinia())

import router from './router'
app.use(router)

import PrimeVue from 'primevue/config'
import Aura from '@primevue/themes/aura'
import { definePreset } from '@primevue/themes'

import Ripple from 'primevue/ripple'
app.directive('ripple', Ripple)

app.use(PrimeVue, {
  theme: {
    preset: definePreset(Aura, {
      semantic: {
        primary: {
          50: '{violet.50}',
          100: '{violet.100}',
          200: '{violet.200}',
          300: '{violet.300}',
          400: '{violet.400}',
          500: '{violet.500}',
          600: '{violet.600}',
          700: '{violet.700}',
          800: '{violet.800}',
          900: '{violet.900}',
          950: '{violet.950}'
        }
      }
    })
  }
})

app.mount('#app')
