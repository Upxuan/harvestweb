import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/cloud/home'
import Team from '@/cloud/team'
import Research from '@/cloud/research'
import News from '@/cloud/news'
import Development from '@/cloud/development'
import JoinUs from '@/cloud/joinus'
import Login from '@/components/Login'
import System from '@/components/Layout'
import Resume from '@/components/resumes/resume'
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
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          name: 'Home', 
          component: Home
        },
        {
          path: '/team',
          name: 'Team',
          component: Team
        },
        {
          path: '/research',
          name: 'Research',
          component: Research
        },
        {
          path: '/news',
          name: 'News',
          component: News
        },
        {
          path: '/development',
          name: 'Development',
          component: Development
        },
        {
          path: '/joinus',
          name: 'JoinUs',
          component: JoinUs
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/resume',
      name: 'Resume',
      component: Resume
    },
    {
      path: '/system',
      name: 'System',
      component: System,
      children: [
        {
          path: '/',
          name: 'Index',
          component: Index
        },
        {
          path: 'index',
          name: 'Index',
          component: Index
        },
        {
          path: 'mystudent',
          name: 'Mystudent',
          component: Mystudent
        },
        {
          path: 'audit',
          name: 'Audit',
          component: Audit
        },
        {
          path: 'addmanual',
          name: 'Addmanual',
          component: Addmanual
        },
        {
          path: 'addauto',
          name: 'Addauto',
          component: Addauto
        },
        {
          path: 'manageinfo',
          name: 'Manageinfo',
          component: Manageinfo
        },
        {
          path: 'managepwd',
          name: 'Managepwd',
          component: Managepwd
        },
        {
          path: 'myaudit',
          name: 'Myaudit',
          component: Myaudit
        },
        {
          path: 'mteacher',
          name: 'Mteacher',
          component: Mteacher
        },
        {
          path: 'mstudent',
          name: 'Mstudent',
          component: Mstudent
        },
        {
          path: 'mharvest',
          name: 'Mharvest',
          component: Mharvest
        },
        {
          path: 'mharvestcopy',
          name: 'Mharvestcopy',
          component: Mharvestcopy
        },
        {
          path: 'checkCount',
          name: 'CheckCount',
          component: CheckCount
        },
        {
          path: 'outputResume',
          name: 'OutputResume',
          component: OutputResume
        }
      ]
    }
  ]
})
