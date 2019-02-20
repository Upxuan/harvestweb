<template>
  <div id="sysOutputResume">
    <div class="texUserinfo">
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
    <div class="texAcademicWork">
      <academic-work></academic-work>
    </div>
    <div class="texProjects">
      <my-projects></my-projects>
    </div>
    <div class="texRewards">
      <my-rewards></my-rewards>
    </div>
    <div class="texTeachSituation">
      <teach-situation></teach-situation>
    </div>
  </div>
</template>

<script>
  import UserInfo from '@/components/tex/texUserinfo'
  import HarvestList from '@/components/tex/texHarvestList'
  import AcademicWork from '@/components/tex/texAcademicWork'
  import MyProject from '@/components/tex/texProjects'
  import MyRewards from '@/components/tex/texRewards'
  import TeachSituation from '@/components/tex/texTeachSituation'
  import myapi from '@/api/myapi.js'
  export default {
    name: 'sysOutputResume',
    components:{
      UserInfo,
      HarvestList,
      AcademicWork,
      MyProject,
      MyRewards,
      TeachSituation
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
#sysOutputResume {
  padding-bottom: 100px;
}
.all-title {
  height: 40px;
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
[class*="tex"] {
  margin-top: 35px;
}
</style>
