import Vue from 'vue'
import 'normalize.css'
import { CheckboxGroup, Checkbox, CellGroup, Cell, Button, ActionSheet, Icon, Search } from 'vant'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.use(CheckboxGroup)
Vue.use(Checkbox)
Vue.use(CellGroup)
Vue.use(Cell)
Vue.use(Button)
Vue.use(ActionSheet)
Vue.use(Icon)
Vue.use(Search)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
