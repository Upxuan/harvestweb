import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/teacher/HelloWorld'
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
			name:'HelloWorld',
			component:HelloWorld
		},
		{
			path:'/HelloWorld',
			name:'HelloWorld',
			component:HelloWorld
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

