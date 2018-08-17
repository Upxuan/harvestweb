<!-- <template>
  <div id="tabeditor" class="editor">
    <table id="table1" >
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
      <el-button size="small" type="danger" @click="deleteItem(index)">删除</el-button>
      <el-button size="small" type="primary"  onclick="addRow()">添加作者</el-button>
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
        ],
        
      }
  },
  methods:{
     
$(eleId) {
        return document.getElementById(eleId);
    },
     addRow() {
        var table = $("table1");
        var row;  //创建表格的行
        row = table.insertRow();
        var cell0 = row.insertCell(0); //创建表格的列

        var e1 = document.createElement("input"); 
        e1.type = "text";
        e1.name = "cell1name"
        var e2 = document.createElement("input");
        e2.type = "text";
        e2.name = "cell2name"
        cell0.appendChild(e1);
        cell1.appendChild(e2);
    }
    
  }
}
</script>

<style scoped>
.editor {
  
  margin: 30px 0 100px 0;
}
.check {
  float: right;
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
</style> -->
<template>
  <div>
      <el-table
        :data="tableData"
        ref="table"
        border
        tooltip-effect="dark"
        @selection-change='selectRow' >
        <el-table-column type="selection" width="60" align="center"></el-table-column>
        <el-table-column label="序号"  type="index" width="60" align="center"></el-table-column>
        <el-table-column  align="center" label="文章中的作者姓名">
          <template slot-scope="scope">
            <el-input placeholder="请输入内容" size="small" v-model="scope.row.name"></el-input>
          </template>
        </el-table-column>
        <el-table-column align="center" label="文章中的作者身份">
          <template slot-scope="scope">
            <el-select size="small" v-model="scope.row.value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          </template>
        </el-table-column>
        <el-table-column align="center" label="作者属性">
          <template slot-scope="scope">
            
            <el-checkbox v-model="checked1" >第一作者</el-checkbox><br>
          <el-checkbox v-model="scope.row.checked" style="margin-left: 41px">毕业条件归属人</el-checkbox>
          </template>
        </el-table-column>
        
      </el-table>
      <br><br>
     <div class="check">
      <el-button size="small" type="danger" @click.prevent="delData()">删除</el-button>
      <el-button size="small" type="primary"  @click.prevent="addRow()">添加作者</el-button>
    </div>
  </div>
</template>
 
<script>


  export default {
    name:'tabeditor',
    data () {
      return {
        tableData: [{
          
        }],
        // optionCheck: ['第一作者', '毕业条件归属人'],
        
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
        ],
        selectlistRow: []
      }
    },
    methods: {
      // 获取表格选中时的数据
      selectRow (val) {
        this.selectlistRow = val
      },
      // 增加行
      addRow () {
        var list = {
          rowNum:'',
          name: this.name,
          value: this.value,
          checked: '',
          
          }

        this.tableData.unshift(list)
      },
      // 删除方法
      // 删除选中行
      delData () {
        for (let i = 0; i < this.selectlistRow.length; i++) {
          let val = this.selectlistRow
          // 获取选中行的索引的方法
          // 遍历表格中tableData数据和选中的val数据，比较它们的rowNum,相等则输出选中行的索引
          // rowNum的作用主要是为了让每一行有一个唯一的数据，方便比较，可以根据个人的开发需求从后台传入特定的数据
          val.forEach((val, index) => {
            this.tableData.forEach((v, i) => {
              if (val.rowNum === v.rowNum) {
                // i 为选中的索引
                this.tableData.splice(i, 1)
              }
            })
          })
        }
        // 删除完数据之后清除勾选框
        this.$refs.tableData.clearSelection()
      }
    }
  }
</script>

<style>
.check {
  float: right;
  margin-bottom:20px;
}
</style>


 
