<template>
  <div id="harPatent">
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%"
      stripe
      row-key="patentIndex"
      @expand-change="expandChange">
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
      <el-table-column prop="patentIndex" label="序号" width="50" align="center"></el-table-column>
      <el-table-column prop="patentType" label="专利类别" width="100" align="center"></el-table-column>
      <el-table-column prop="patentTitle" label="专利名称" width="320"></el-table-column>
      <el-table-column prop="patentEffectDate" label="生效日期" width="210" align="center"></el-table-column>
      <el-table-column prop="patentAuthors" label="作者" width="190"></el-table-column>
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
    name:'harPatent',
    inject: ['reload'],
    data () {
      return {
        currentPage: 1,
        pagesize: 5,
        // logining: false,
        tableData: [],
        expands: []
      }
    },
    mounted () {
      this.$nextTick( function() {
        this.getHarPatent(1)
      })
    },
    methods: {
      handleEdit(row) {
        // console.log(row);
        this.$router.push({ 
					name: 'Addmanual', 
					params: { row: row, harReturnRouter: 'HarPatent' }
				})
      },
      handleDelete(row) {
        // console.log(row);
        let source = 0
        if(row.review != null) 
          source = 1
        this.delMyHarvest(3, row.id, source)
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
