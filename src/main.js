// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Icon from 'vue-awesome/components/Icon'

Vue.config.productionTip = false
Vue.component('icon', Icon)

Vue.component('modal', {
  template: '#modal-template'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  show: 'asfc',
  myName: 'hellworld',
  template: '<App/>',
  data: {
    showModal: false
  },
  components: { App
  }
})
