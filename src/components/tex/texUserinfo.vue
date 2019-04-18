<template>
  <div id="texUserInfo">
    <div class="user-img">
      <img v-if="imgurl != '' && imgurl != null" :src="imgurl">
      <img v-else src="../../../static/images/user-blue.png">
    </div>
    <div class="index-usermsg">
      <div class="namefont"><span>{{ myInfo.name }}</span></div>
      <div class="elsefont">
        <div v-if="UserName == 'Admin'">欢迎来到管理员端！</div>
        <div v-else-if="UserName.length === 5">
          <span>职&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;称： {{ myInfo.title }}</span><br>
          <span>组&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别： {{ myInfo.team }}</span><br>
          <span>联系方式： {{ myInfo.tel }}</span><br>
          <span>电子邮箱： {{ myInfo.email }}</span><br>
          <span>研究方向： {{ myInfo.direction }}</span><br>
          <span>个人主页： {{ myInfo.link }}</span><br>
        </div>
        <div v-else-if="UserName.length === 9">
          <span>学&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;位： {{ myInfo.degree }}</span><br>
          <span>组&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别： {{ myInfo.team }}</span><br>
          <span>第一导师： {{ myInfo.first }}</span><br>  
          <span>指导老师： {{ myInfo.second }}</span><br>
          <span>联系方式： {{ myInfo.tel }}</span><br>
          <span>电子邮箱： {{ myInfo.email }}</span><br>
          <span>研究方向： {{ myInfo.direction }}</span><br>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {getCookie,delCookie,setCookie} from '@/api/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default {
    name: 'texUserInfo',
    props: ["username"],
    data () {
      return {
        UserName: '',
        imgurl: this.$userInfo.imgurl,
        myInfo: {}
      }
    },
    created () {
      var _this = this;
      // console.log("this.$route.path:" + this.$route.path)
      _this.UserName = _this.username
      if(this.$route.path == '/resume'){
        this.getTeacherMsg(_this.UserName, 1)
      }else {
         _this.UserName = this.$userInfo.username,
         _this.myInfo.name = this.$userInfo.name,
         _this.myInfo.first = this.$userInfo.first,
         _this.myInfo.second = this.$userInfo.second,
         _this.myInfo.tel = this.$userInfo.tel,
         _this.myInfo.email = this.$userInfo.email,
         _this.myInfo.title = this.$userInfo.title,
         _this.myInfo.degree = this.$userInfo.degree,
         _this.myInfo.team = this.$userInfo.team,
         _this.myInfo.link = this.$userInfo.link,
         _this.myInfo.direction = this.$userInfo.direction
      }
      // console.log(_this.UserName.length)
    },
    mounted () {
      if(this.imgurl != '' && this.imgurl != null) {
        this.imgurl = '../../../static/images/avatar/' + this.$userInfo.imgurl;
      }
    }
  }
</script>

<style>
div#texUserInfo{
  height: 240px;
  width: 600px;
  /* margin: 0px; */
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
  float: left;
  margin: 20px 10px;
}
</style>
