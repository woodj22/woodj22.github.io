import Vue from 'vue'
import Router from 'vue-router'
import AboutView from '@/components/AboutView'
import PhotographyView from '@/components/PhotographyView'
import CV from '@/components/CV'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: AboutView
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
