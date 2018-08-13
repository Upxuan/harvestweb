<template>
  <div id="sysaddauto">
    <div class = "all-title1">
      <p class="main-font">自动录入<a href="/HelloWorld"></a></p>
    </div>
    <el-table
      ref="multipleTable"
      :data="tableData3"
      tooltip-effect="dark"
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="日期" width="120">
        <template slot-scope="scope">{{ scope.row.date }}</template>
      </el-table-column>
      <el-table-column prop="title" label="标题" width="200"></el-table-column>
      <el-table-column prop="author" label="作者" show-overflow-tooltip></el-table-column>
      <el-table-column prop="from" label="来源" show-overflow-tooltip></el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData3.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default{
    name:'sysaddauto',
     data() {
      return {
        tableData3: [
          {
            date: '2016-05-03',
            title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
            author: 'Y Yin;F Yu;Y Xu;L Yu;J Mu',
            address: '上海市普陀区金沙江路 1518 弄',
            from:'Sensors'
          },
          {
            date: '2016-05-02',
            title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
            author: 'Y Yin;F Yu;Y Xu;L Yu;J Mu',
            from:'Sensors'
          },
          {
            date: '2016-05-04',
            title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
            author: 'Y Yin;F Yu;Y Xu;L Yu;J Mu',
            from:'Sensors'
          },
          {
            date: '2016-05-01',
            title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
            author: 'Y Yin;F Yu;Y Xu;L Yu;J Mu',
            from:'Sensors'
          },
          {
            title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
            author: 'Y Yin;F Yu;Y Xu;L Yu;J Mu',
            from:'Sensors'
          },
          {
            date: '2016-05-06',
           title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
            author: 'Y Yin;F Yu;Y Xu;L Yu;J Mu',
            from:'Sensors'
          },
          {
            date: '2016-05-07',
            title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
            author: 'Y Yin;F Yu;Y Xu;L Yu;J Mu',
            from:'Sensors'
          }
        ],
        multipleSelection: [],
        currentPage:1,
        pagesize:10,
        num:'10'
      }
    },
    methods:{
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
  margin-right:3px;
  margin-top:30px;
  margin-bottom:30px;
  float:right;
  }
.ps-achieve{
  margin-left:30px;
  margin-top:20px;
  margin-right:30px;
}
.el-button{
  float:right;
  margin-right: 30px;
}
.all-title1 {
  height:40px;
  border-bottom: 1px dashed #DCDFE6;
}
.msg-num{
  font-size:20px;
  color: #F56C6C;
}
.main-font {
  font-size: 17px;
  font-family: Hiragino Sans GB;
}
.el-icon-search{
  float:right;
  margin-right:10px;
  margin-bottom:-20px;
}
.el-input{
  width:150px;
  float:right;
}
</style>
