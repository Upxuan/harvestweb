<template>
	<div>
	 <div class = "all-title">
        <p class="main-font">作者详情</p>
       
      </div><br>
    <!-- </div> -->
    <div class="top">
    <el-alert
    title="请按照成果中的作者顺序填写人员信息"
    type="warning"
     :closable="false" show-icon>
  </el-alert>
</div>
<br><br>
    <!-- <Add_Table></Add_Table> -->
   <!-- <table >
  <tr>

    <th>选择</th>
    <th>文章中的作者姓名</th>
    <th>文章中的作者单位</th>
    <th>电子邮箱</th>
    <th>作者属性</th>
    <th>本人</th>
  </tr>
  <tr>
    <td> <el-radio v-model="radio" ></el-radio></td>
    <td><el-input size="small" v-model="input" placeholder="请输入内容"></el-input></td>
     <td><el-input size="small" v-model="input" placeholder="请输入内容"></el-input></td>
      <td><el-input size="small" v-model="input" placeholder="请输入内容"></el-input></td>
       <td><el-checkbox v-model="checked1">第一作者</el-checkbox><br>
       	<el-checkbox v-model="checked2">毕业条件归属人</el-checkbox><br>
       	<el-checkbox v-model="checked3">指导老师: <el-input
    size="mini"
    v-model="input9" length:30px>
  </el-input></el-checkbox><br>
       	<el-checkbox v-model="checked4">第一导师</el-checkbox></td>
      <td> <el-checkbox size="small" v-model="checked"></el-checkbox></td>
  </tr>
 
</table> -->
    <br>
    <div class = "all-title">
        <p class="main-font">附件</p>
       
      </div>
       <el-alert
    title="在上传附件时，请确认您已经从版权所有人得到使用该文件的授权，文件大小不能超过3MB，(允许上传的文件格式包括）"
    type="warning"
     :closable="false" show-icon>
  </el-alert>
  <br>
  <el-upload
  class="upload-demo"
  drag
  action="https://jsonplaceholder.typicode.com/posts/"
  multiple>
  <i class="el-icon-upload"></i>
  <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
  <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
</el-upload>
  

</div>
</template>

<script >
	// import Add_Table from './add_table'
	export default{
		name:'zuozhexiangqing',
		components:Add_Table
	}

</script>

<style type="text/css">
.table-radious
{
	
	border-radius:40px;
}
table,td,th
{
	border:1px solid #DCDFE6;
	font-weight: normal;
	color:#606266;
	
}

table
{
	width:100%;
	border-collapse: collapse;
	border-radius:20px;

}
th
{
	height:50px;
	font-size:14px;
}
td{
	text-align: center;
}
.all-title {
 height:40px;
  border-bottom: 1px dashed #DCDFE6;
}
</style>
