import Vue from 'vue'
import Router from 'vue-router'
import Index from "../components/Index";

Vue.use(Router)

export default new Router({
  //去掉浏览时的#号
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }
  ]
})
