<template>
  <div id="tabeditor" class="editor">
    <table id="table">
      <tr>
        <th>选择</th>
        <th>文章中的作者姓名</th>
        <th>文章中的作者身份</th>
        <th>作者属性</th>
      </tr>
      <tr>
        <td><el-radio v-model="radio" style="margin-left: 10px;"></el-radio></td>
        <td class="tdinput"><el-input size="small" v-model="input" placeholder="请输入内容" style="width: 260px;"></el-input></td>
        <td class="tdselect">
          <el-select size="small" v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </td>
        <td class="tdcheckbox">
          <el-checkbox v-model="checked1" style="margin: 10px 42px 10px 0;">第一作者</el-checkbox><br>
          <el-checkbox v-model="checked2" style="margin-bottom: 10px;">毕业条件归属人</el-checkbox><br>
        </td>
      </tr>
    </table><br>
    <div class="check">
      <el-button size="small" type="danger">删除</el-button>
      <el-button size="small" type="primary" onclick="add()">添加作者</el-button>
    </div>
    
  </div>
</template>

<script >
  export default{
    name:'tabeditor',
    data() {
      return {
        checked: true,
        radio:"1",
        value: '',
        options: [
          {
            value: 'option1',
            label: '教师'
          },
          {
            value: 'option2',
            label: '学生'
          },
          {
            value: 'option3',
            label: '非实验室人员'
          }
        ]
      }
  },
  methods:{
    add () {
      var getTable = document.getElementById("table");
      var addRow = getTable.insertRow();
      var addC1 = addRow.insertCell(0).innerHTML = "第三行第一列";
var addC2 = addRow.insertCell(1).innerHTML = "第三行第二列";
    }
  }
}
</script>

<style scoped>
.editor {
  width: 800px;
  margin: 50px 0 100px 70px;
}
.check {
  float: right;
}
.tdinput {

}
.tdselect {
  width: 30%;
}
.tdcheckbox {
  margin: auto;
  width:30%;
}
.table-radious {
  border-radius:40px;
}
table,td,th {
  border:1px solid #DCDFE6;
  font-weight: normal;
  color:#606266;
}
table {
  width:100%;
  border-collapse: collapse;
  border-radius:20px;
}
th {
  height:50px;
  font-size:14px;
}
td {
  text-align: center;
}
</style>
