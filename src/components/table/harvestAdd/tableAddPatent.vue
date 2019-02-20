<template>
  <div id="harPatent">
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%"
      stripe
      row-key="patentIndex"
      :expand-row-keys="expands"
      @row-click="rowClick"
      @expand-change="expandChange"
      @selection-change='handleSelectionChange'>
      <el-table-column type="selection" width="60" align="center"></el-table-column>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="专利名称：">
              <span>{{ props.row.patentTitle }}</span>
            </el-form-item>
            <el-form-item label="申请（专利）号：">
              <span>{{ props.row.patentNum }}</span>
            </el-form-item>
            <el-form-item label="公开（公告）号：">
              <span>{{ props.row.patentNoteNum }}</span>
            </el-form-item>
            <el-form-item label="发证单位：">
              <span>{{ props.row.patentUnit }}</span>
            </el-form-item>
            <el-form-item label="专利类别：">
              <span>{{ props.row.patentType }}</span>
            </el-form-item>
            <el-form-item label="专利状态：">
              <span>{{ props.row.patentStatus }}</span>
            </el-form-item>
            <el-form-item label="申请日期：">
              <span>{{ props.row.patentApplyDate }}</span>
            </el-form-item>
            <el-form-item label="生效日期：">
              <span>{{ props.row.patentEffectDate }}</span>
            </el-form-item>
            <el-form-item label="专利权人：">
              <span>{{ props.row.patentBelong }}</span>
            </el-form-item>
            <el-form-item label="作者：">
              <span>{{ props.row.patentAuthors }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="patentIndex" label="序号" width="60" align="center"></el-table-column>
      <el-table-column prop="patentType" label="专利类别" width="150" align="center"></el-table-column>
      <el-table-column prop="patentTitle" label="专利名称" width="520"></el-table-column>
      <el-table-column prop="patentAuthors" label="作者" width="270"></el-table-column>
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
    name:'harPatent',
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
        this.getHarPatent(0)
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
