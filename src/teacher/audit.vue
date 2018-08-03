<template>
  <div>
      <div class="index-wrap1">
        <div class = "all-title1">
          <p class="main-font">待审核:&nbsp<span class="msg-num">{{num1}}</span> 项  &nbsp已通过:&nbsp<span class="msg-num">{{num2}}</span> 项  
          <el-select v-model="value" placeholder="请选择" size="small">
            <el-option
              v-for="item in options" :key="item.value" label="item.label" :value="item.value">
            </el-option>
           </el-select>
         </p>
        </div>
      <el-table :data="tableData1.slice((currentPage-1)*pagesize,currentPage*pagesize)" stripe
      style="width: 100%" @row-click="handle">
        <el-table-column  prop="date1" label="日期" width="60"></el-table-column>
        <el-table-column prop="type1" label="类别" width="100"></el-table-column>
        <el-table-column prop="title1" label="题目" width="380"></el-table-column>
        <el-table-column prop="author1" label="作者" width="220"></el-table-column>
        <el-table-column prop="state1" label="状态" width="80">
          <template slot-scope="scope1">
            <span v-if="scope1.row.state1==='审核通过'" style="color:#409EFF">审核通过</span>
            <span v-else-if="scope1.row.state1=== '2'" style="color:#E6A23C">待审核</span>
            <span v-else style="color: #F56C6C">未通过</span>
          </template>
        </el-table-column>
        <el-table-column label="操作">
            <template slot-scope="scope">
               <el-button size="mini" type="primary"  @click="open1">编辑</el-button>
            <el-button size="mini" type="danger"  @click="open3">删除</el-button>
            </template>
      </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
          :page-sizes="[10, 20, 50, 100]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper"
        :total="tableData1.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
 
  export default{
    name:'audit',
    components:
    {
      
  },
  data()
  {
    return{
      num1:'4',
      num2:'19',
      options: [{
          value: '选项1',
          label: '待审核'
        }, {
          value: '选项2',
          label: '已通过'
        }, {
          value: '选项3',
          label: '未通过'
        }],
        value:'',
        tableData1:[{
          date1:'2018',
          type1:'项目',
          title1:'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author1:'Y Yin;F Yu;Y Xu;L Yu;J Mu',
          state1:'审核通过'
        },
        {
          date1:'2017',
          type1:'期刊论文',
          title1:'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author1:'Y Yin;F Yu;Y Xu;L Yu;J Mu',
          state1:'1'
        },
        {
          date1:'2017',
          type1:'期刊论文',
          title1:'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author1:'Y Yin;F Yu;Y Xu;L Yu;J Mu',
          state1:'2'
        },
        {
          date1:'2017',
          type1:'期刊论文',
          title1:'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author1:'Y Yin;F Yu;Y Xu;L Yu;J Mu',
          state1:'1'
        },
        {
          date1:'2017',
          type1:'期刊论文',
          title1:'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author1:'Y Yin;F Yu;Y Xu;L Yu;J Mu',
          state1:'2'
        },
        {
          date1:'2017',
          type1:'期刊论文',
          title1:'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author1:'Y Yin;F Yu;Y Xu;L Yu;J Mu',
          state1:'1'
        },
        {
          date1:'2017',
          type1:'期刊论文',
          title1:'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author1:'Y Yin;F Yu;Y Xu;L Yu;J Mu',
          state1:'1'
        },
        {
          date1:'2017',
          type1:'软件著作权',
          title1:'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author1:'Y Yin;F Yu;Y Xu;L Yu;J Mu',
          state1:'1'
        },
        {
          date1:'2017',
          type1:'期刊论文',
          title1:'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author1:'Y Yin;F Yu;Y Xu;L Yu;J Mu',
          state1:'1'
        },
        {
          date1:'2017',
          type1:'期刊论文',
          title1:'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author1:'Y Yin;F Yu;Y Xu;L Yu;J Mu',
          state1:'1'
        },
        {
          date1:'2017',
          type1:'期刊论文',
          title1:'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author1:'Y Yin;F Yu;Y Xu;L Yu;J Mu',
          state1:'0'
        },
        {
          date1:'2017',
          type1:'期刊论文',
          title1:'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author1:'Y Yin;F Yu;Y Xu;L Yu;J Mu',
          state1:'2'
        }],
         currentPage:1,
        pagesize:10,
    }
  },
  methods:{
  handle(row, event, column) {
           this.$router.push({path:'/add'})
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

<style type="text/css">
.el-pagination{
  float:right;
  margin-top:35px;
  margin-bottom:35px;
}
.index-wrap1 {
 
  margin-right:100px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: -780px;
  margin-left:230px;
  font-family: Hiragino Sans GB;
  
  
}
.el-table{
  cursor:pointer; 
}
.el-select{
  float:right;
  margin-right: 30px;
}
.manual-wrap {
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10px;
  margin-left:30px;
  margin-right:30px;
  font-family: Hiragino Sans GB;
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

</style>