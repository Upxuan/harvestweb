<template>
  <div id="harSubject">
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%"
      stripe
      row-key="subjectIndex"
      :expand-row-keys="expands"
      @row-click="rowClick"
      @expand-change="expandChange"
      @selection-change='handleSelectionChange'>
      <el-table-column type="selection" width="60" align="center"></el-table-column>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="专著题目：">
              <span>{{ props.row.subjectTitle }}</span>
            </el-form-item>
            <el-form-item label="丛书名称：">
              <span>{{ props.row.subjectBookName }}</span>
            </el-form-item>
            <el-form-item label="出版状态：">
              <span>{{ props.row.subjectStatus }}</span>
            </el-form-item>
            <el-form-item label="ISBN号：">
              <span>{{ props.row.subjectISBN }}</span>
            </el-form-item>
            <el-form-item label="出版社：">
              <span>{{ props.row.subjectPublish }}</span>
            </el-form-item>
            <el-form-item label="出版日期：">
              <span>{{ props.row.subjectPublishDate }}</span>
            </el-form-item>
            <el-form-item label="DOI：">
              <span>{{ props.row.subjectDOI }}</span>
            </el-form-item>
            <el-form-item label="作者：">
              <span>{{ props.row.subjectAuthors }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="subjectIndex" label="序号" width="60" align="center"></el-table-column>
      <el-table-column prop="subjectTitle" label="专著题目" width="600"></el-table-column>
      <el-table-column prop="subjectAuthors" label="作者" width="340"></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  import {getCookie,delCookie,setCookie} from '@/api/js/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default {
    name:'harSubject',
    inject: ['reload'],
    data () {
      return {
        currentPage: 1,
        pagesize: 5,
        // logining: false,
        tableData: [],
        selectionData: [],
        expands: []
      }
    },
    mounted () {
      this.$nextTick( function() {
        this.getHarSubject(0)
      })
    },
    methods: {
      handleSelectionChange (val) {
        this.selectionData = val
      },
      expandChange(row,expandedRows){
        if(expandedRows.length>1){
          expandedRows.shift()
        }
      },
      rowClick(row, event, column) {
        Array.prototype.remove = function (val) {
          let index = this.indexOf(val);
            if (index > -1) 
              this.splice(index, 1);
          };
          if (this.expands.indexOf(row.id) < 0){
            this.expands.push(row.id);
          } else {
            this.expands.remove(row.id);
          }
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
      }
    }
  }
</script>

<style scoped>
.el-pagination{
  margin-bottom:20px;
}
.el-table{
  cursor: pointer; 
}
.el-pagination{
  margin-top: 35px;
  margin-right: 14px;
  float: right;
}
.el-button{
  margin-right: 5px;
  float:right;
}
.demo-table-expand {
  font-size: 0;
  /*background: #EDEDED;*/
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-left: 10px;
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
  color: #9C9C9C;
}
</style>
