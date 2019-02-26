<template>
  <div id="resume">
    <div class="main-content">
      <div style="margin-bottom: 60px;">
        <user-info></user-info>
      </div>
      <div class="line-isolation"></div>
      <div class="mychart">
        <div class="col-md-1">
          <p><el-progress type="circle" :percentage="circle.jpaperPercent" color="rgb(79,184,238)" :stroke-width="strokeWidth" :width="circleWidth"></el-progress></p>
          <p style="font-size:12px">期刊论文</p>
        </div>
        <div class="col-md-2">
          <p><el-progress type="circle" :percentage="circle.mpaperPercent" color="rgb(79,184,238)" :stroke-width="strokeWidth" :width="circleWidth"></el-progress></p>
          <p style="font-size:12px">会议论文</p>
        </div>
        <div class="col-md-3">
          <p><el-progress type="circle" :percentage="circle.subjectPercent" color="rgb(79,184,238)" :stroke-width="strokeWidth" :width="circleWidth"></el-progress></p>
          <p style="font-size:12px">学术专著</p>
        </div>
        <div class="col-md-4">
            <p><el-progress type="circle" :percentage="circle.othersPercent" color="rgb(79,184,238)" :stroke-width="strokeWidth" :width="circleWidth"></el-progress></p>
            <p style="font-size:12px">其他</p>
        </div>
        <div class="col-md-5">
          <br>
          <p>总计</p>
          <p style="font-size:25px">{{ number.count }}篇</p>
        </div>
      </div>
      <!-- <div class="line-isolation"></div> -->
      <div style="margin:10px 0 40px 0;">
        <p class="main-font">
            <!-- <span>个人成果</span> -->
            <!-- <el-dropdown @command="handleCommand">
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
            </el-dropdown> -->
        </p>
        <harvest-list @numberEvent="getNumber"></harvest-list>
      </div>
      <div class="line-isolation"></div>
      <div class="text-rewards">
        <p>获得奖励</p>
        <pre >{{ textarea.rewards }}</pre>
      </div>
      <div class="line-isolation"></div>
      <div class="text-academicwork">
        <p>学术兼职</p>
        <pre >{{ textarea.academicwork }}</pre>
      </div>
    </div>
  </div>
</template>

<script>
  import UserInfo from '@/components/tex/texUserinfo'
  import HarvestList from '@/components/tex/texHarvestList'
  import myapi from '@/api/myapi.js'
  export default {
    name: 'resume',
    components:{
      UserInfo,
      HarvestList
    },
    data () {
      return {
        username: '',
        number: {},
        strokeWidth: 8,
        circleWidth: 120,
        circle: {
          jpaperPercent: 0.0,
          mpaperPercent: 0.0,
          subjectPercent: 0.0,
          othersPercent: 0.0,
          patentPercent: 0.0,
          projectPercent: 0.0,
          softwarePercent: 0.0,
        },
        textarea: {
          rewards: '',
          academicwork: ''
        }
      }
    },
    mounted () {
      var _this = this
      _this.username = this.$route.query.username
      this.getThreeMsg(_this.username)
    },
    methods: {
      getNumber (data) {
        var _this = this
        _this.number = data
        // console.log(data)
        _this.circle.jpaperPercent = Math.round(_this.number.jpaperCount / _this.number.count * 10000) / 100.00
        _this.circle.mpaperPercent = Math.round(_this.number.mpaperCount / _this.number.count * 10000) / 100.00
        _this.circle.subjectPercent = Math.round(_this.number.subjectCount / _this.number.count * 10000) / 100.00
        _this.number.othersCount = _this.number.patentCount + _this.number.projectCount + _this.number.softwareCount
        _this.circle.othersPercent = Math.round(_this.number.othersCount / _this.number.count * 10000) / 100.00
      },
      handleCommand(command) {
        this.$message('click on item ' + command);
      }
    }
  }
</script>

<style scoped>
.main-content {
  margin: 80px auto;
  width: 1200px;
}
.line-isolation {
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
.mychart:before, .mychart:after {
    content: "";
    display: block;
    visibility: hidden;
    clear: both;
    *zoom: 1;
}
[class*="text-"] {
    margin: 20px 0;
}
[class*="text-"] p {
  color: #545454;
  font-weight: bold;
}
[class*="text-"] pre {
  color: #666;
  font-size:14px;
}
[class*="col-"] {
    float: left;
    min-height: 1px;
    width: 15%;
    padding: 12px;
}
[class*="col-"] p {
  text-align: center;
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
