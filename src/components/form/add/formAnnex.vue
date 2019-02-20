<template>
  <div id="tabannex">
    <div class = "all-title">
      <p class="main-font">附件</p>
    </div>
    <el-alert
      title="在上传附件时，请确认您已经从版权所有人得到使用该文件的授权，文件大小不能超过3MB，(允许上传的文件格式包括）"
      type="warning"
      :closable="false" show-icon>
    </el-alert><br>
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
  export default{
    name:'tabannex'
  }
</script>

<style scoped>
.table-radious{
  border-radius:40px;
}
table,td,th{
  border:1px solid #DCDFE6;
  font-weight: normal;
  color:#606266;
}
table{
  width:100%;
  border-collapse: collapse;
  border-radius:20px;
}
th{
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
