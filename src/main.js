import { createApp } from 'vue'
import App from './App.vue'
import Router from './routes/'
import { createPinia } from 'pinia'

import { library, dom } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

library.add(fas, far, fab)
dom.watch();

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(Router)
.use(createPinia())
.mount('#app')
