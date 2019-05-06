import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/cloud/index'
import Home from '@/cloud/home'
import Teacher from '@/cloud/teacher'
import Student from '@/cloud/student'
import Team from '@/cloud/team'
import Result from '@/cloud/result'
import Achievement from '@/cloud/achievement'
import Exchange from '@/cloud/exchange'
import JoinUs from '@/cloud/joinus'
import Login from '@/components/Login'
import System from '@/components/Layout'
import Resume from '@/components/resumes/resume'
import SysIndex from '@/components/system/SysIndex'
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
import Search from '@/components/system/SysSearch'
import OutputResume from '@/components/system/SysOutputResume'
import WebMaintain from '@/components/system/SysWebMaintain'
import Graduation from '@/components/system/SysGraduation'
Vue.use(Router)

export default new Router({
  mode:'history',
  base:'/lab/',
  routes: [
    {
      path: '/',
      // name: 'Index',
      component: Index,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: 'teacher',
          name: 'Teacher',
          component: Teacher
        },
        {
          path: '/student',
          name: 'Student',
          component: Student
        },
        {
          path: '/team',
          name: 'Team',
          component: Team
        },
        {
          path: '/result',
          name: 'Result',
          component: Result
        },
        {
          path: '/achievement',
          name: 'Achievement',
          component: Achievement
        },
        {
          path: '/exchange',
          name: 'Exchange',
          component: Exchange
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
          path: 'index',
          name: 'SysIndex',
          component: SysIndex
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
          path: 'search',
          name: 'Search',
          component: Search
        },
        {
          path: 'outputResume',
          name: 'OutputResume',
          component: OutputResume
        },
        {
          path: 'webMaintain',
          name: 'WebMaintain',
          component: WebMaintain
        },
        {
          path: 'graduation',
          name: 'graduation',
          component: Graduation
        },
      ]
    }
  ]
})
