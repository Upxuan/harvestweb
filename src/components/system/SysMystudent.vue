<template>
  <div id="sysMyStudent">
    <div class="index-wrap1">
      <div class="all-title1">
        <p class="main-font">我的学生总数：<span class="msg-num">{{ count }}</span>人</p>
      </div>
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        stripe
        style="width: 100%">
        <el-table-column
          label="头像"
          width="100"
          prop="img">
          <template slot-scope="scope">
            <img :src="scope.row.img" width="40" height="40" class="head_pic"/>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120" align="center"></el-table-column>
        <el-table-column prop="jpaperNum" label="论文" width="100" align="center"></el-table-column>
        <el-table-column prop="mpaperNum" label="项目" width="100" align="center"></el-table-column>
        <el-table-column prop="patentNum" label="专利" width="100" align="center"></el-table-column>
        <el-table-column prop="projectNum" label="项目" width="100" align="center"></el-table-column>
        <el-table-column prop="subjectNum" label="学术专著" width="100" align="center"></el-table-column>
        <el-table-column prop="softwareNum" label="软件著作权" width="100" align="center"></el-table-column>
        <el-table-column prop="affairsNum" label="公共事务" width="100" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <router-link to="">
              <el-button size="mini" type="primary" @click="checkHarvest(scope.row.id)">查看成果</el-button>
            </router-link>
          </template>
        </el-table-column>
      </el-table><br>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="tableData.length">
          </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    name: 'sysMyStudent',
    components:{
    },
    data() {
      return {
        currentPage: 1,
        pagesize: 10,
        count: 0,
        tableData: []
      }
    },
    mounted () {
      this.$nextTick( function() {
        if(this.judgeLogin()){
          var _this = this
          var data = []
          var Params = { userId: _this.$userInfo.id }
          console.log(Params)
          this.$ajax.get('/api/myStudentCount', {params: Params}).then( res => {
            console.log(res)
            _this.count = res.data.length
            for(let i=0; i<res.data.length; i++) {
              var obj = {}
              obj.img = "../assets/hp.png"
              obj.id = res.data[i].stuId
              obj.name = res.data[i].stuName
              obj.jpaperNum = res.data[i].jpaperNum
              obj.mpaperNum = res.data[i].mpaperNum
              obj.patentNum = res.data[i].patentNum
              obj.projectNum = res.data[i].projectNum
              obj.subjectNum = res.data[i].subjectNum
              obj.softwareNum = res.data[i].softwareNum
              obj.affairsNum = res.data[i].affairsNum
              data[i] = obj
            }
            _this.tableData = data
          }).catch( error => {
            console.log(error)
          })
        }
      })
    },
    methods: {
      checkHarvest (row) {
        console.log(row)
        alert("跳转查看学生的个人简介页面")
        // api.$emit("checkStu", )
      },
      handleSizeChange: function (size) {
        this.pagesize = size;
      },
      handleCurrentChange: function (currentPage) {
       this.currentPage = currentPage;
      }
    }
  }
</script>

<style scoped>
.all-title1 {
  height:40px;
  border-bottom: 1px dashed #DCDFE6;
}
.main-font span{
  font-size:20px;
  color: #F56C6C;
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
