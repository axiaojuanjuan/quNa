import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import PageOne from '@/pages/pageOne/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
    	path: '/pageOne',
      name: 'pageOne',
      component: PageOne
    }
  ]
})
