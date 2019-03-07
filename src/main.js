import Vue from 'vue'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import axios from 'axios'
import qs from 'qs'
import App from '@/App'
import router from '@/router'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import $ from 'jquery'
import 'animate.css'
// import 'lib-flexible'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'bootstrap/dist/js/bootstrap.min'
import Harvest from '@/api/harvest.js'
import Common from '@/api/common.js'
import JudgeLogin from '@/api/judgelogin.js'
import Data from '@/data/data.js'
import {getCookie,delCookie,setCookie} from './api/Cookie.js'
// import '@/api/js/frame/jquery.simple-text-rotator.js'
// import '@/api/js/frame/smoothscroll.js'
// import '@/api/js/frame/wow.min.js'
// import '@/api/js/frame/jquery.flexslider.js'
// import '@/api/css/frame/animate.min.css'
// import '@/api/css/frame/templatemo-style.css'
import Home from '@/data/home.js'
import Teacher from '@/data/teacher.js'
import Achievement from '@/data/achievement.js'
import Exchange from '@/data/exchange.js'
import Student from '@/data/student.js'
import Team from '@/data/team.js'
Vue.use(Home)
Vue.use(Teacher)
Vue.use(Achievement)
Vue.use(Exchange)
Vue.use(Student)
Vue.use(Team)


Vue.use(ElementUI)
Vue.use(Harvest)
Vue.use(Common)
Vue.use(JudgeLogin)
Vue.use(Data)
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts 
Vue.prototype.$ajax = axios
Vue.prototype.$qs = qs

let bus = new Vue()
Vue.prototype.bus = bus

router.beforeEach((to, from, next) => {

  if(!Vue.prototype.$userInfo){
    var user = getCookie('userInfo');
    var type = getCookie('type');
    if(user&&user!="") Vue.prototype.$userInfo = JSON.parse(user);
    if(type&&type!=-1) Vue.prototype.$type = type;

    // 不可见
    // console.log('before route:');
    // console.log("userInfo: " + Vue.prototype.$userInfo);
    // console.log("type: " + Vue.prototype.$type);
  }

  //用cookie生存时间到期清除cookie 代替 到主页就清除cookie的操作
  //只有“切换账户”的时候才主动清除
  if(to.path == '/login'){
    delete Vue.prototype.$userInfo;
    delete Vue.prototype.$type;
    delCookie('userInfo');
    delCookie('type');
  }
  
  // console.log(to.path)
  //url: /resume?username=18501
  // console.log(to.path.substring(0,7) === "/system")
  // if((to.path != '/login' && to.path != '/resume' && to.path != '/') && getCookie('userInfo') == "")
  if(to.path.substring(0,7) === "/system" && getCookie('userInfo') == "")
    next({ path: '/login' }) 
  else
    next()
})

router.afterEach(transition => {
// NProgress.done();
});

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
