<template>
	<div>
		<el-table
	    :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
	    style="width: 100%" stripe @row-click="handleachieve">
    		<el-table-column prop="date" label="日期" width="80"></el-table-column>
   			<el-table-column prop="title" label="题目" width="440"></el-table-column>
			<el-table-column prop="author" label="作者" width="240"></el-table-column>
    		<el-table-column label="操作">
      			<template slot-scope="scope">
     				<el-button size="mini" type="danger"  @click="open3">删除</el-button>
       				<el-button size="mini" type="primary"  @click="open1">编辑</el-button>
       			</template>
			</el-table-column>
  		</el-table>
   		<div class="block">
		    <el-pagination
		   @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
		     :page-sizes="[5, 10, 15, 20]"
		    :page-size="pagesize"
		    layout="total, sizes, prev, pager, next, jumper"
		    :total="tableData.length"></el-pagination>
		</div>
	</div>
</template>

<script>
export default {
  name:'qikanAchieve',
  // components: {
  //   EntrytypeDialog
  // },
  data () {
    return {

      tableData: [{
          date:'2018',
          title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author: '全奕诺，本可能发生的心，地方工本费',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date:'2017',
          title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author: '全奕诺',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date:'2016',
          title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author: '全奕诺',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date:'2016',
          title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author: '全奕诺',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date:'2016',
          title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author: '全奕诺',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date:'2016',
          title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author: '全奕诺',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date:'2016',
          title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author: '全奕诺',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date:'2016',
          title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author: '全奕诺',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date:'2016',
          title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author: '全奕诺',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date:'2016',
          title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author: '全奕诺',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date:'2015',
          title: 'Network Location-Aware Service Recommendation with Random Walk in Cyber-Physical Systems',
          author: '全奕诺',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
      isShowDialogType: false,
      achievemsg: [
        {
          name: '成果',
          data: 55
        },
        {
          name: '引用',
          data: 20
        },
        {
          name: '专利',
          data: 16
        }
      ],
      amount: {
        name: '专利交易金额',
        data: 0
      },
      currentPage:1,
        pagesize:5,
      
    }
  },
  methods: {
    typeClick () {
      this.isShowDialogType = true
    },
    closeDialog () {
      this.isShowDialogType = false
    },
    handleSizeChange: function (size) {
        this.pagesize = size;
    },
    handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
    },
    // 分页
    
    open3() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      open1(){
      	this.$router.replace('')
      }
    }
  }

</script>

<style scoped>
.el-pagination{
  margin-bottom:20px;
}
.el-table{
  cursor:pointer; 
}
.el-pagination{
  margin-top:35px;
  margin-right:14px;
  float:right;
}
.el-button{
  margin-right:30px;
  float:right;
}
.achieve-wrap {
  /*height: 452px;*/
  /*width: 1200px;*/
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10px;
}
.achieve-msg1 {
  width: 100%;
  height: 34px;
  /*background: #FFEBCD;*/
  padding: 3px 2px;
}
.achieve-msg1-left li, .achieve-msg1-money {
  float: left;
  padding: 5px 0;
}
.orange-font {
  color: rgb(202,81,0);
  font-weight: bold;
}
.achieve-msg1-right {
  float: right;
}
.achieve-msg1-right button{
  color: #fff;
  background: rgb(233,93,0);
  display: inline-block;
  padding: 5px 10px;
  border:none;
  margin-left: 10px;
  border-radius:7px;
}
.achieve-msg2 {
  width: 100%;
  height: 30px;
  padding: 7px;
  background: #FFEBCD;
  font-size: 15px;
  font-weight: bold;
  color: rgb(121,119,119);
}
.achieve-contents {
  margin-top: 30px;
}
.content-demo {
  height: 82px;
  margin-top: 7px;
  border-bottom: 2px dashed #E0E0E0;
}
.achieve-content .content-demo h3{
  float: left;
  color: blue;
  /*font-weight: bold;*/
}
.demo-img {
  float: left;
  height: 75px;
}
.demo-content {
  height: 100%;
  float: left;
  margin: 5px 0 0 10px;
}
.demo-content-font {
  font-size: 12px;
  margin-top: 25px;
}
.demo-content-font p{
  margin-top: 10px;
}
/*.demo-button button{
  width: 92px;
  /*float: right;*/
  /*background: transparent;
  color: rgb(255,119,0);
  padding: 5px 20px;
  border: 1px solid rgb(255,119,0);
}
.demo-button {
  float: right;
  height: 100%;
  width: 110px;
  padding: 8px 20px;
}*/*/
/*.demo-button1 {
  float: right;
}
.demo-button2 {
  float: right;
  margin-top: 8px;
}*/
.demo-content a:hover{
  color: blue;
  text-decoration: underline;
}
</style>
