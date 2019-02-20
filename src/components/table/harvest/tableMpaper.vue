<template>
  <div id="harMpaper">
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      :loading="logining"
      style="width: 100%"
      stripe
      row-key="mpaperIndex"
      @expand-change="expandChange">
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="收录：">
              <span>{{ props.row.mpaperType }}</span>
            </el-form-item>
            <el-form-item label="标题：">
              <span>{{ props.row.mpaperTitle }}</span>
            </el-form-item>
            <el-form-item label="发表日期：">
              <span>{{ props.row.mpaperPublishDate }}</span>
            </el-form-item>
            <el-form-item label="起止页码：">
              <span>{{ props.row.mpaperPage }}</span>
            </el-form-item>
            <el-form-item label="会议名称：">
              <span>{{ props.row.mpaperMeetName }}</span>
            </el-form-item>
            <el-form-item label="会议日期：">
              <span>{{ props.row.mpaperMeetDate }}</span>
            </el-form-item>
            <el-form-item label="会议地点：">
              <span>{{ props.row.mpaperMeetPlace }}</span>
            </el-form-item>
            <el-form-item label="作者：">
              <span>{{ props.row.mpaperAuthors }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="mpaperIndex" label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="mpaperType" label="收录" width="160" align="center"></el-table-column>
      <el-table-column prop="mpaperTitle" label="标题" width="400"></el-table-column>
      <el-table-column prop="mpaperPublishDate" label="发表日期" width="100" align="center"></el-table-column>
      <el-table-column prop="mpaperAuthors" label="作者" width="160"></el-table-column>
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
    name:'harMpaper',
    inject: ['reload'],
    data () {
      return {
        currentPage: 1,
        pagesize: 5,
        logining: false,
        tableData: [],
        expands: []
      }
    },
    mounted () {
      this.$nextTick( function() {
        this.getHarMpaper(1)
      })
    },
    methods: {
      handleEdit(row) {
        // console.log(row);
        this.$router.push({ 
					name: 'Addmanual', 
					params: { row: row, harReturnRouter: 'HarMpaper' }
				})
      },
      handleDelete(row) {
        // console.log(row);
        let source = 0
        if(row.review != null) 
          source = 1
        this.delMyHarvest(2, row.id, source)
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
