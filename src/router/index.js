import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/index'
import PageOne from '@/pages/pageOne/index'
import weekendGoWhere from '@/pages/weekendGoWhere/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Index
    },
    {
    	path: '/pageOne',
      component: PageOne
    },
    {
    	path: '/weekendGoWhere/:city',
      component: weekendGoWhere
    }
  ]
})
