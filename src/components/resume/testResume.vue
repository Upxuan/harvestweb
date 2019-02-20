<template>
  <div id="testResume">
    <div class="main-content">
      <user-info></user-info>
        <div class="all-title"></div>
        <div class="row">
          <div class="col-md-1">
              <p>&nbsp;&nbsp;&nbsp;<el-progress type="circle" :percentage="58.7" color="pink" stroke-width="8" width="120"></el-progress></p>
              <p style="text-align:center;font-size:12px">期刊</p>
            </div>
          <div class="col-md-2">
              <p>&nbsp;&nbsp;&nbsp;<el-progress type="circle" :percentage="17.4" stroke-width="8" width="120"></el-progress></p>
              <p style="text-align:center;font-size:12px">会议</p>
            </div>
          <div class="col-md-3">
              <p>&nbsp;&nbsp;&nbsp;<el-progress type="circle" :percentage="2.2" color="#8e71c7" stroke-width="8" width="120"></el-progress></p>
              <p style="text-align:center;font-size:12px">专著</p>
            </div>
          <div class="col-md-4">
             <p>&nbsp;&nbsp;&nbsp;<el-progress type="circle" :percentage="21.7" color="yellow" stroke-width="8" width="120"></el-progress></p>
             <p style="text-align:center;font-size:12px">其他</p>
          </div>
          <div class="col-md-5">
            <br>
            <p style="text-align:center">总计</p>
            <p style="text-align:center;font-size:25px">46篇</p>
          </div>
        </div>
        <div class="all-title1"></div>
        <p class="main-font">
            <!-- <span>个人成果</span> -->
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                全部年份<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a" disabled>全部年份</el-dropdown-item>
                <el-dropdown-item command="b" divided>2018-至今</el-dropdown-item>
                <el-dropdown-item command="c">2017</el-dropdown-item>
                <el-dropdown-item command="d">2016</el-dropdown-item>
                <el-dropdown-item command="e">2015</el-dropdown-item>
                <el-dropdown-item command="f">2014及以前</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                全部类型<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a" disabled>全部类型</el-dropdown-item>
                <el-dropdown-item command="b" divided>期刊</el-dropdown-item>
                <el-dropdown-item command="c">会议</el-dropdown-item>
                <el-dropdown-item command="d">专著</el-dropdown-item>
                <el-dropdown-item command="e">其它</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                全部作者<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a" disabled>全部作者</el-dropdown-item>
                <el-dropdown-item command="b" divided>第一作者</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown @command="handleCommand">
              <span class="el-dropdown-link">
                按时间降序<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="a" disabled>按时间降序</el-dropdown-item>
                <el-dropdown-item command="b" divided>按被引降序</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
        </p>
      <!-- <my-harvest></my-harvest> -->  
      <img src="@/assets/testHarvest.jpg">
    </div>
  </div>
</template>

<script>
  import UserInfo from '@/components/tex/texUserinfo'
  import MyHarvest from '@/components/table/tableHarvest'
  import myapi from '@/api/myapi.js'
  export default {
    name: 'testResume',
    components:{
      UserInfo,
      MyHarvest
    },
    data () {
      return {
        
      }
    },
    methods: {
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>

<style scoped>
.main-content {
  margin: 80px 500px;
}
.all-title {
  height: 40px;
  border-bottom: 1px dashed #DCDFE6;
}
.all-title1 {
  border-bottom: 1px dashed #DCDFE6;
}
.main-font {
  font-size: 17px;
  color: #000;
  font-family: Hiragino Sans GB;
}
.el-button{
  float: right;
} 
.grid-container {
    width: 100%;
    max-width: 1200px;
}
.grid-container * {
    box-sizing: border-box;
}
.row:before, .row:after {
    content: "";
    display: block;
    visibility: hidden;
    clear: both;
    *zoom: 1;
}
[class*="col-"] {
    float: left;
    min-height: 1px;
    width: 15%;
    padding: 12px;
}
@media all and (min-width: 768px) {
    .col-md-1 {
        width: 17%;
    }
    .col-md-2 {
        width: 17%;
    }
    .col-md-3 {
        width: 17%;
    }
    .col-md-4 {
        width: 17%;
    }
    .col-md-5 {
        width: 17%;
        padding: 10px;
    }
}
.el-dropdown-link {
    cursor: pointer;
    color: #999;
    height: 27px;
    line-height: 27px;
    padding: 0 0 10px 20px;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
</style>
