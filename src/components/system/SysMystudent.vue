<template>
  <div id="sysmystudent">
    <div class="index-wrap1">
      <div class="all-title1">
        <p class="main-font">我的学生总数: <span class="msg-num">{{num}}</span> 人 </p>
      </div>
      <el-table
        :data="data.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        stripe ref="singleTable"
        style="width: 100%" >
        <el-table-column 
          label="头像" 
          width="100"
          prop="img" >
          <template slot-scope="scope">
            <img :src="scope.row.img" width="40" height="40" class="head_pic"/>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="180"></el-table-column>
        <el-table-column prop="lunwen" label="论文" width="120"></el-table-column>
        <el-table-column prop="xiangmu" label="项目" width="120"></el-table-column>
        <el-table-column prop="zhuanli" label="专利" width="120"></el-table-column>
        <el-table-column prop="gonggongshiwu" label="公共事务" width="250" ></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <router-link to="/add">
              <el-button size="mini" type="primary" @click="open2">查看</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table><br>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 50, 100]"
         
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="data.length">
          </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name:'mystudent',
    components:{
    },
    data() {
      return {
        currentPage:1,
        pagesize:10,
        num:'10',
        data: [
          {
            img:'../assets/hp.png',
            grade: '研一',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
            lunwen:'1',
            xiangmu:'2',
            zhuanli:'3',
            gonggongshiwu:'4'
          },
          {
            img:'/assets/hp.png',
            grade: '研一',
            name: '王小虎',
            lunwen:'1',
            xiangmu:'2',
            zhuanli:'3',
            gonggongshiwu:'4'
          },
          {
            img:'/assets/hp.png',
            grade: '研一',
            name: '王小虎',
            lunwen:'1',
            xiangmu:'2',
            zhuanli:'3',
            gonggongshiwu:'4'
          },
          {
            img:'/assets/hp.png',
            grade: '研一',
            name: '王小虎',
            lunwen:'1',
            xiangmu:'2',
            zhuanli:'3',
            gonggongshiwu:'4'
          },
          {
            img:'/assets/hp.png',
            grade: '研一',
            name: '王小虎',
            lunwen:'1',
            xiangmu:'2',
            zhuanli:'3',
            gonggongshiwu:'4'
          },
          {
            img:'/assets/hp.png',
            grade: '研一',
            name: '王小虎',
            lunwen:'1',
            xiangmu:'2',
            zhuanli:'3',
            gonggongshiwu:'4'
          },
          {
            img:'/assets/hp.png',
            grade: '研一',
            name: '王小虎',
            lunwen:'1',
            xiangmu:'2',
            zhuanli:'3',
            gonggongshiwu:'4'
          },
          {
            img:'/assets/hp.png',
            grade: '研一',
            name: '王小虎',
            lunwen:'1',
            xiangmu:'2',
            zhuanli:'3',
            gonggongshiwu:'4'
          },
          {
            img:'/assets/hp.png',
            grade: '研一',
            name: '王小虎',
            lunwen:'1',
            xiangmu:'2',
            zhuanli:'3',
            gonggongshiwu:'4'
          },
          {
            img:'/assets/hp.png',
            grade: '研一',
            name: '王小虎',
            lunwen:'1',
            xiangmu:'2',
            zhuanli:'3',
            gonggongshiwu:'4'
          },
          {
            img:'/assets/hp.png',
            grade: '研一',
            name: '王小虎',
            lunwen:'1',
            xiangmu:'2',
            zhuanli:'3',
            gonggongshiwu:'4'
          }
        ]
      }
    },
    methods: {
      handleSizeChange: function (size) {
        this.pagesize = size;
      },
      handleCurrentChange: function (currentPage) {
       this.currentPage = currentPage;
      }
    }
  }
</script>

<style scopde>
.index-wrap1 {
  margin-right:100px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: -780px;
  margin-left:230px;
  font-family: Hiragino Sans GB;
}
.all-title1 {
  height:40px;
  border-bottom: 1px dashed #DCDFE6;
}
.msg-num{
  font-size:20px;
}
.el-pagination{
  margin-right:3px;
  margin-top:20px;
  float:right;
}
.msg_1{
  margin-top:-20px;
  margin-left:30px;
  margin-right:30px;
}
.ps-achieve{
  margin-left:30px;
  margin-top:30px;
}
.main-font{
  font-size: 17px;
  font-family: Hiragino Sans GB;
}
</style>
