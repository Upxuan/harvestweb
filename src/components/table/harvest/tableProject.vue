<template>
  <div id="harProject">
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      :loading="logining"
      style="width: 100%"
      stripe
      row-key="projectIndex"
      @expand-change="expandChange">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="类别：">
              <span>{{ props.row.projectType }}</span>
            </el-form-item>
            <el-form-item label="标题：">
              <span>{{ props.row.projectTitle }}</span>
            </el-form-item>
            <el-form-item label="编号：">
              <span>{{ props.row.projectNum }}</span>
            </el-form-item>
            <el-form-item label="起止日期：">
              <span>{{ props.row.projectDate }}</span>
            </el-form-item>
            <el-form-item label="金额：">
              <span>{{ props.row.projectMoney }}</span>
            </el-form-item>
            <el-form-item label="作者：">
              <span>{{ props.row.projectAuthors }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="projectIndex" label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="projectType" label="类别" width="130"></el-table-column>
      <el-table-column prop="projectTitle" label="标题" width="340"></el-table-column>
      <el-table-column prop="projectDate" label="起止日期" width="210" align="center"></el-table-column>
      <el-table-column prop="projectAuthors" label="作者" width="130"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="props">
          <el-button 
            size="mini"
            type="danger"
            @click="handleDelete(props.row)">删除</el-button>
          <el-button
            size="mini"
            type="primary"
            @click="handleEdit(props.row)">编辑</el-button>
        </template>
      </el-table-column>
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
    name:'harProject',
    inject: ['reload'],
    data () {
      return {
        currentPage: 1,
        pagesize: 5,
        logining: false,
        tableData: [],
        options: [],
        expands: []
      }
    },
    mounted () {
      this.$nextTick( function() {
        this.getHarProject(1)
      })
    },
    methods: {
      handleEdit(row) {
        // console.log(row);
        this.$router.push({ 
					name: 'Addmanual', 
					params: { row: row, harReturnRouter: 'HarProject' }
				})
      },
      handleDelete(row) {
        // console.log(row);
        let source = 0
        if(row.review != null) 
          source = 1
        this.delMyHarvest(4, row.id, source)
      },
      //一次展开一行
      expandChange(row,expandedRows){
        if(expandedRows.length>1){
          expandedRows.shift()
        }
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
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
