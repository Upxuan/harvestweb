<template>
  <div id="tabeditor">
    <div class = "all-title">
      <p class="main-font">
        作者详情(非空)
        <el-button size="small" type="primary" @click="addRow()">添加作者</el-button>
        <el-button
        size="small"
        type="danger"
        @click="delRow()"
        :disabled="this.selectionData.length === 0"
        style="margin-right: 15px;">删除</el-button>
      </p>
    </div><br>
    <el-table
      :data="tableData"
      @selection-change='handleSelectionChange'>
      <el-table-column type="selection" width="60" align="center"></el-table-column>
      <el-table-column prop="id" label="序号" type="index" width="60" align="center"></el-table-column>
      <el-table-column prop="name" label="文章中的作者姓名" align="center">
        <template slot-scope="scope">
          <el-input placeholder="请输入内容" size="small" v-model="scope.row.name" :disabled="disabledName"></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="degree" align="center" label="文章中的作者身份">
        <template slot-scope="scope">
          <el-select size="small" v-model="scope.row.degree" placeholder="请选择" :disabled="disabledDegree">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        </template>
      </el-table-column>
      <el-table-column prop="nature" align="center" label="作者属性">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.nature1">第一作者</el-checkbox><br>
          <el-checkbox v-model="scope.row.nature2" style="margin-left: 41px" :disabled="scope.row.degree == '教师' || scope.row.degree == '非实验室人员'">毕业条件归属人</el-checkbox>
        </template>
      </el-table-column>
    </el-table>
    <!-- <p>authors: {{ authors }}</p> -->
    <!-- <button @click="increment()">+1</button> -->
    <br><br><br><br><br>
  </div>
</template>

<script>
  import myapi from '@/api/myapi.js'
  export default {
    name:'tabeditor',
    props: ["row"],
    data () {
      return {
        // row: {},
        // authorsModel: [],
        tableData: [],//表格中的所有数据
        selectionData: [],//表格选中时的数据
        deleteIds: [],
        options: [
          { value: '教师', label: '教师' },
          { value: '学生', label: '学生' },
          { value: '非实验室人员', label: '非实验室人员' }
        ],
        disabledDegree: false,
        disabledName: false
      }
    },
    created () {
      var _this = this
      // console.log(_this.row)
      if(_this.row != null) {//更新时有row带过来
        _this.disabledName = true
        _this.disabledDegree = true
        _this.tableData = _this.row.authorsList
        for(let i=0; i<_this.tableData.length; i++){
          if(_this.tableData[i].degree === 1)
            _this.tableData[i].degree = "教师"
          else if(_this.tableData[i].degree === 2)
            _this.tableData[i].degree = "学生"
          else if(_this.tableData[i].degree === 3)
            _this.tableData[i].degree = "非实验室人员"
        }
        // console.log(_this.tableData)
      }
    },
    methods: {
      // selectChange (row) {
      //   console.log(row)
      //   if(row.degree == "教师" || eow.degree == "非实验室人员")
      //     this.disableNature2 = true
      // },
      outAuthors () {
        var _this = this
        var data = []
        for(let i=0; i<_this.tableData.length; i++){
          if(_this.tableData[i].name == null && _this.tableData[i].degree == null){
            this.$message({ type: 'error', message: '请填写完整的作者姓名和身份，或删除填写错误的作者信息' });
          }else {
            var obj = {}
            obj.name = _this.tableData[i].name
            if(_this.tableData[i].degree == "教师"){
              obj.degree = 1
            }else if(_this.tableData[i].degree == "学生"){
              obj.degree = 2
            }else if(_this.tableData[i].degree == "非实验室人员"){
              obj.degree = 3
            }else{
              obj.degree = 0
            }
            obj.nature1 = _this.tableData[i].nature1
            obj.nature2 = _this.tableData[i].nature2
            if(!_this.tableData[i].nature1) obj.nature1 = false
            if(!_this.tableData[i].nature2) obj.nature2 = false
            console.log(obj)
            data[i] = obj
          }
        }
        return data;
      },
      // 获取表格选中时的数据
      handleSelectionChange (val) {
        this.selectionData = val
      },
      addRow () {
        this.tableData.push({
          id: null,
          checked: null,
          name: null,
          degree: null,
          check1: null,
          check2: null
        })
      },
      delRow () {
        this.selectionData.forEach(element => {//从已选数据中逐个检索element
          if (element.id && this.deleteIds.indexOf(element.id) === -1) {//在已删除id中未找到element.id，就放入
            this.deleteIds.push(element.id);
          }
          this.tableData.splice(this.tableData.indexOf(element), 1)//在所有的数据中寻找element并删除
        });
        // 删除完数据之后清除勾选框
        // this.$refs.tableData.clearSelection()
      }
    }
  }
</script>

<style scoped>
.check {
  float: right;
  margin-bottom: 20px;
}
.all-title {
  height:40px;
  border-bottom: 1px dashed #DCDFE6;
}
.main-font {
  font-size: 17px;
  color: #000;
  font-family: Hiragino Sans GB;
}
.el-button{
  float:right;
}
</style>
