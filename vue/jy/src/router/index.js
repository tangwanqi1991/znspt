import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Charts from '@/components/Charts'
import Bfb from '@/components/Bfb'
import Uyx from '@/components/Uyx'
import HelloWorld from '@/components/HelloWorld'



Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/Charts',
      name: 'Charts',
      component: Charts
    },
    {
      path: '/Bfb',
      name: 'Bfb',
      component: Bfb
    },
    {
      path: '/Uyx',
      name: 'Uyx',
      component: Uyx
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }

  ]
})
