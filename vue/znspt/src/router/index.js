import Vue         from 'vue'
import Router      from 'vue-router'
import AdminLogin  from '@/components/AdminLogin'
import Index       from '@/admin/Index'
import Management  from "@/admin/Management"
import Role        from "@/admin/Role"
import AddManagement  from "@/admin/AddManagement"

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 后台首页
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        keepAlive: true
      }

    },
    {
      //角色管理
      path: '/role',
      name:'Role',
      component:Role,
      meta: {
        keepAlive: true
      }
    },
    {
      // 管理员登录页
      path: '/login',
      name: 'AdminLogin',
      component: AdminLogin,
      meta: {
        keepAlive: false
      }
    },
    {
      // 管理员
      path:'/management',
      name:'Management',
      component:Management,
      meta: {
        keepAlive: true
      }
    },
    {
      // 新增管理员
      path:'/addmanagement',
      name:'AddManagement',
      component:AddManagement,
      meta: {
        keepAlive: true
      }
    }


  ]
})
