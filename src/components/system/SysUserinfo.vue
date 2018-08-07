<template>
  <div id="sysuserinfo">
    <div class="index-usermsg">
      <div class="namefont"><span>{{ name }}</span></div><br>
      <div class="elsefont">
        联系方式： <span class="msg-content-font">{{ tel }}</span><br>
        电子邮箱： <span class="msg-content-font">{{ Email }}</span><br>
        研究方向： <span class="msg-content-font">{{ field }}</span><br>
        个人主页： <span class="msg-content-font">{{ introduction }}</span><br>
    </div>
  </div>
</div>
</template>

<script>
  export default{
    name:'sysuserinfo',
    data () {
      return {
        name: 'teacherA',
        tel: '12345678903',
        Email: '234351qq.com',
        field: '服务计算、业务流程管理、推荐系统、形式化方法、软件工程',
        introduction: 'fedsvf.com'
      }
    }
  }
</script>

<style scopde>
.msg-content-font {
  color: #333;
  line-height: 25px;
  font-family: microsoft yahei;
  font-weight: normal;
  font-size:14px;
}
.main-font {
  font-size: 17px;
  
  color: #000;
  font-family: Hiragino Sans GB;

}

.elsefont{
	font-size:16px;
}
.namefont{
	font-size:21px;
}
	.index-wrap p {
  float: left;
  font-family: Hiragino Sans GB;
  /*text-align: left;*/
 
}
.index-wrap {
 
  margin-right:100px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: -750px;
  margin-left:230px;
  font-family: Hiragino Sans GB;
  /*background-color: #123456;*/
}
.index-usermsg {
	/*width:1000px;*/
  height:200px;
  
  margin-left: 160px;

  /*border-bottom: 1px dashed #969696;
  font-size:14px;
  /*rgb(227,227,227);*/
  /*background-color: #567465;*/
}



</style>