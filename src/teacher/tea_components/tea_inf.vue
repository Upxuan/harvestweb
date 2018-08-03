<template>
	<div>
		

      
      <div class="index-usermsg">

         <div class="namefont"> {{ name }}<br>
       </div><br>
        <div class="elsefont">
        联系方式: <span class="msg-content-font">{{tel}}</span>
		<br>
  		电子邮箱: <span class="msg-content-font">{{Email}}</span>
  		<br>
        个人主页: <span class="msg-content-font">{{introduction}}</span>
        <br>
        研究方向: <span class="msg-content-font">{{field}}</span>
   </div>
	</div>
</div>
</template>

<script type="text/javascript">
	export default{
		name:'tea_inf',
		data()
		{
			return {
		      name: '殷昱煜',
		      university: '杭州电子科技大学',
		      tel:'12345678903',
		      field: '服务计算、业务流程管理、推荐系统、形式化方法、软件工程',
		      Email:'234351qq.com',
		      introduction: 'fedsvf.com'
    		}
		}
	}
</script>
<style>
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