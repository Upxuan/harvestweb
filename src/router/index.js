import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Layout from '@/components/Layout'
import TestResume from '@/components/resume/testResume'
import Index from '@/components/system/SysIndex'
import Addmanual from '@/components/system/SysAddmanual'
import Addauto from '@/components/system/SysAddauto'
import Mystudent from '@/components/system/SysMystudent'
import Audit from '@/components/system/SysAudit'
import Manageinfo from '@/components/system/SysManageinfo'
import Managepwd from '@/components/system/SysManagepwd'
import Myaudit from '@/components/system/SysMyaudit'
import Mteacher from '@/components/system/SysMteacher'
import Mstudent from '@/components/system/SysMstudent'
import Mharvest from '@/components/system/SysMharvest'
import Mharvestcopy from '@/components/system/SysMharvestcopy'
import CheckCount from '@/components/system/SysCheckCount'
import OutputResume from '@/components/system/SysOutputResume'
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
      path: '/TestResume',
      name: 'TestResume',
      component: TestResume
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
        },
        {
          path:'/Addauto',
          name:'Addauto',
          component:Addauto
        },
        {
          path:'/Manageinfo',
          name:'Manageinfo',
          component:Manageinfo
        },
        {
          path:'/Managepwd',
          name:'Managepwd',
          component:Managepwd
        },
        {
          path:'/Myaudit',
          name:'Myaudit',
          component:Myaudit
        },
        {
          path:'/Mteacher',
          name:'Mteacher',
          component:Mteacher
        },
        {
          path:'/Mstudent',
          name:'Mstudent',
          component:Mstudent
        },
        {
          path:'/Mharvest',
          name:'Mharvest',
          component:Mharvest
        },
        {
          path:'/Mharvestcopy',
          name:'Mharvestcopy',
          component:Mharvestcopy
        },
        {
          path:'/CheckCount',
          name:'CheckCount',
          component:CheckCount
        },
        {
          path:'/OutputResume',
          name:'OutputResume',
          component:OutputResume
        }
      ]
    }
  ]
})
