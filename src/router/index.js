import Vue from 'vue'
import Router from 'vue-router'
import Icon from 'vue-awesome/components/Icon'
import PhotoGrid from 'vue-photo-grid'
import HomeView from '@/components/HomeView'
import PhotographyView from '@/components/PhotographyView'
import CV from '@/components/CV'

Vue.use(Router)
Vue.component('icon', Icon)
Vue.use(PhotoGrid)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/photography',
      name: 'Photography',
      component: PhotographyView
    },
    {
      path: '/cv',
      name: 'CV',
      component: CV
    }
  ]
})
