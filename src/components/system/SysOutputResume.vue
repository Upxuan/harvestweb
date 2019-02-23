<template>
  <div id="sysOutputResume">
    <div class="userinfo">
      <div class="all-title">
        <p class="main-font">
          <span>个人信息</span>
          <el-button type="primary" size="small" @click="generateResume()">生成简历</el-button>
        </p>
      </div>
      <user-info></user-info>
    </div>
    <div class="texHarvestList">
      <div class="all-title">
        <p class="main-font">
          <span>个人成果</span>
        </p>
      </div>
      <harvest-list></harvest-list>
    </div>
    <div class="texRewards">
      <div class="all-title">
        <p class="main-font">
          <span>获得奖励</span>
        </p>
      </div>
      <my-rewards></my-rewards>
    </div>
    <div class="texAcademicWork">
      <div class="all-title">
        <p class="main-font">
          <span>学术兼职</span>
        </p>
      </div>
      <academic-work></academic-work>
    </div>
    <div class="texProjects">
      <div class="all-title">
        <p class="main-font">
          <span>承担项目</span>
        </p>
      </div>
      <my-projects></my-projects>
    </div>
  </div>
</template>

<script>
  import UserInfo from '@/components/tex/texUserinfo'
  import HarvestList from '@/components/tex/texHarvestList'
  import AcademicWork from '@/components/tex/texAcademicWork'
  import MyProjects from '@/components/tex/texProjects'
  import MyRewards from '@/components/tex/texRewards'
  import myapi from '@/api/myapi.js'
  export default {
    name: 'sysOutputResume',
    components:{
      UserInfo,
      HarvestList,
      AcademicWork,
      MyProjects,
      MyRewards
    },
    data () {
      return {
        
      }
    },
    methods: {
      generateResume () {
        this.$router.push({ 
					name: 'TestResume'
				})                                                                                                                                                                                                                                                                                                                                                                                                                                                       
      }
    }
  }
</script>

<style scoped>
/* #sysOutputResume {
  padding-bottom: 100px;
} */

.all-title {
  height: 40px;
  border-bottom: 1px dashed #DCDFE6;
}

.main-font {
  font-size: 17px;
  /* color: #36648B; */
  color: #666;
  font-weight: bold;
  font-family: Hiragino Sans GB;
}

.el-button {
  float: right;
}

[class*="tex"] {
  margin-top: 60px;
}
</style>
