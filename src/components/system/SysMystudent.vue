<template>
  <div id="sysMyStudent">
    <div class="index-wrap1">
      <div class="all-title1">
        <p class="main-font">我的学生总数：<span class="msg-num">{{ count }}</span>人</p>
        <el-dialog :title="tableTitle" :visible.sync="dialogTableVisible" v-if='dialogTableVisible' width="1000px" @close="closeTableDialog()">
          <harvest-list :harvestParams="harvestParams"></harvest-list>
        </el-dialog>
      </div>
      <el-table
        :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
        stripe
        style="width: 100%"
        :header-cell-style="{background:'#8DB6CD', color:'#FFF'}">
        <el-table-column label="头像" width="100" prop="img">
          <template slot-scope="props">
            <img :src="props.row.img" width="40" height="40" class="head_pic"/>
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
          <template slot-scope="props">
            <el-button size="mini" type="" @click="checkHarvest(props.row)">查看成果</el-button>
          </template>
        </el-table-column>
      </el-table><br>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-size="pagesize"
          layout="total, prev, pager, next, jumper"
          :total="tableData.length">
          </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import HarvestList from '@/components/tex/texHarvestList'
  export default{
    name: 'sysMyStudent',
    components: {
      HarvestList
    },
    data() {
      return {
        currentPage: 1,
        pagesize: 10,
        count: 0,
        tableData: [],
        dialogTableVisible: false,
        harvestParams: {},
        tableTitle: '',
      }
    },
    mounted () {
      this.$nextTick( function() {
        if(this.judgeLogin()){
          var _this = this
          var data = []
          var Params = { userId: _this.$userInfo.id }
          // console.log(Params)
          this.$ajax.get('/api/myStudentCount', {params: Params}).then( res => {
            // console.log(res)
            _this.count = res.data.length
            for(let i=0; i<res.data.length; i++) {
              var obj = {}
              obj.img = "../assets/hp.png"
              obj.id = res.data[i].stuId
              obj.name = res.data[i].stuName
              obj.username = res.data[i].username
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
            // console.log(error)
          })
        }
      })
    },
    methods: {
      checkHarvest (row) {
        var _this = this
        _this.tableTitle = row.name + " / 个人成果"
        _this.harvestParams = {
          userType: 2,
          username: row.username
        }
        _this.dialogTableVisible = true
      },
      closeTableDialog() {
        this.dialogTableVisible = false
      },
      handleSizeChange (size) {
        this.pagesize = size;
      },
      handleCurrentChange (currentPage) {
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
