import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Layout from '@/components/Layout'
import Index from '@/components/system/SysIndex'
import Mystudent from '@/components/system/SysMystudent'
import Audit from '@/components/system/SysAudit'
import Addmanual from '@/components/system/SysAddmanual'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/Layout',
      component:Layout,
      children:[
        {
          path:'/',
          name:'Index',
          component:Index
        },
        {
          path:'/Index',
          name:'Index',
          component:Index
        },
        {
          path:'/Mystudent',
          name:'Mystudent',
          component:Mystudent
        },
        {
          path:'/Audit',
          name:'Audit',
          component:Audit
        },
        {
          path:'/Addmanual',
          name:'Addmanual',
          component:Addmanual
        }
        // {
        //   path:'/Addauto',
        //   name:'Addauto'
        //   component:Addauto
        // }
      ]
    }
  ]
})
