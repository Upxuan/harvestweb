import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/teacher/index'
import Login from '../login'
import mystudent from '@/teacher/mystudent'
import audit from '@/teacher/audit'
import add from '@/teacher/add'
import layout from '@/layout'
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
      path:'/layout',
      component:layout,
      children:[
        {
          path:'/',
          name:'index',
          component:Index
        },
        {
          path:'/index',
          name:'index',
          component:Index
        },
        {
          path:'/mystudent',
          name:'mystudent',
          component:mystudent
        },
        {
          path:'/audit',
          name:'audit',
          component:audit
        },
        {
          path:'/addManual',
          component:add
        }
      ]
    }
  ]
})
