import Vue from 'vue'
import VCalendar from 'v-calendar'
import VModal from 'vue-js-modal'
import VueLuxon from "vue-luxon";
import App from './App.vue'
import router from './router'
import store from './store'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { BootstrapVue } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(BootstrapVue)

Vue.use(VCalendar, {
  componentPrefix: 'vc'  // Use <vc-calendar /> instead of <v-calendar />
});

Vue.use(VModal, {
  dialog: true
});

Vue.use(VueLuxon, {
  input: {
    zone:'utc',
    format: 'iso'
  },
});
