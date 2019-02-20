<template>
  <div id="texUserInfo">
    <div class="user-img">
      <img src="@/assets/user-blue.png">
    </div>
    <div class="index-usermsg">
      <div class="namefont"><span>{{ $userInfo.name }}</span></div>
      <div class="elsefont">
        <div v-if="$type === '1'">
          <span>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称： {{ $userInfo.title }}</span><br>
          <span>组&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别： {{ $userInfo.team }}</span><br>
          <span>联系方式： {{ $userInfo.tel }}</span><br>
          <span>电子邮箱： {{ $userInfo.email }}</span><br>
          <span>研究方向： {{ $userInfo.direction }}</span><br>
          <span>个人主页： {{ $userInfo.link }}</span><br>
        </div>
        <div v-else-if="$type === '2'">
          <span>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位： {{ $userInfo.degree }}</span><br>
          <span>组&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别： {{ $userInfo.team }}</span><br>
          <span>第一导师： {{ $userInfo.first }}</span><br>
          <span>指导老师： {{ $userInfo.second }}</span><br>
          <span>联系方式： {{ $userInfo.tel }}</span><br>
          <span>电子邮箱： {{ $userInfo.email }}</span><br>
          <span>研究方向： {{ $userInfo.direction }}</span><br>
        </div>
        <div v-else>欢迎来到管理员端！</div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCookie,delCookie,setCookie} from '@/api/js/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default {
    name:'texUserInfo',
    data () {
      return {
        userType: 0
      }
    },
    mounted () {
      var _this = this;
      // var self = this;
      // myapi.$on("userInfo", function(msg){
      //   self.msg = msg;
      //   console.log("msg:"+self.msg);
      // })
    }
  }
</script>

<style>
#sysuserinfo{
  height: 240px;
}
.user-img {
  float: left;
  margin: 40px 50px 80px 50px;
}
.user-img img {
  width: 100px;
  background-repeat: no-repeat;
}
.elsefont{
  font-size: 16px;
  color: #424242;
}
.elsefont span {
  color: #424242;
  line-height: 30px;
  font-family: microsoft yahei;
  font-weight: normal;
  font-size: 15px;
}
.namefont{
  font-size: 21px;
  margin-bottom: 10px;
  /*font-weight: bold;*/
}
.index-usermsg {
  height: 190px;
  margin: 20px 180px;
}
</style>
