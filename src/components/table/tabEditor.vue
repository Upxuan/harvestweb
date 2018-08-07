<template>
  <div id="tabeditor">
    <table>
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
        <td>
          <el-checkbox v-model="checked1">第一作者</el-checkbox><br>
          <el-checkbox v-model="checked2">毕业条件归属人</el-checkbox><br>
        </td>
          <td><el-checkbox size="small" v-model="checked"></el-checkbox></td>
      </tr>
    </table><br>
    <el-button size="small" type="primary" onclick="add()">添加作者</el-button>
    <el-button size="small" type="danger" >删除</el-button>
  </div>
</template>

<script >
  export default{
    name:'tabeditor',
    data() {
      return {
        checked: true,
        radio:"1"
      }
  },
  methods:{
  }
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
</style>
