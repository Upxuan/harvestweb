<template>
  <div id="sysuserinfo">
    <div class="user-img">
      <img src="@/assets/user-blue.png">
    </div>
    <div class="index-usermsg">
      <div class="namefont"><span>{{ name }}</span></div>
      <div class="elsefont">
        联系方式： <span>{{ tel }}</span><br>
        电子邮箱： <span>{{ Email }}</span><br>
        研究方向： <span>{{ field }}</span><br>
        个人主页： <span>{{ introduction }}</span><br>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'sysuserinfo',
    data () {
      return {
        name: '殷昱煜',
        tel: '12345678903',
        Email: '234351qq.com',
        field: '服务计算、业务流程管理、推荐系统、形式化方法、软件工程',
        introduction: 'fedsvf.com'
      }
    }
  }
</script>

<style scopde>
.user-img {
  float: left;
  margin: 30px 50px;
}
.user-img img {
  width: 100px;
  background-repeat: no-repeat;
}
.elsefont{
  font-size:16px;
  color: #424242;
}
.elsefont span {
  color: #424242;
  line-height: 30px;
  font-family: microsoft yahei;
  font-weight: normal;
  font-size:15px;
}
.namefont{
  font-size:21px;
  margin-bottom: 10px;
  /*font-weight: bold;*/
}
.index-usermsg {
  height: 180px;
  margin: 20px 180px;
}
</style>
