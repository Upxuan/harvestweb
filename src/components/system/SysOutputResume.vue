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
      <my-rewards ref="rewards" :rewardsMsg="rewardsData"></my-rewards>
    </div>
    <div class="texAcademicWork">
      <div class="all-title">
        <p class="main-font">
          <span>学术兼职</span>
        </p>
      </div>
      <academic-work ref="academicwork" :academicworkMsg="academicworkData"></academic-work>
    </div>
    <div class="texProjects">
      <div class="all-title">
        <p class="main-font">
          <span>承担项目</span>
        </p>
      </div>
      <my-projects ref="projects" :projectsMsg="projectsData"></my-projects>
    </div>
  </div>
</template>

<script>
  import UserInfo from '@/components/tex/texUserinfo'
  import HarvestList from '@/components/tex/texHarvestList'
  import AcademicWork from '@/components/form/formAcademicWork'
  import MyProjects from '@/components/form/formProjects'
  import MyRewards from '@/components/form/formRewards'
  import myapi from '@/api/myapi.js'
  export default {
    name: 'sysOutputResume',
    inject: ['reload'],
    components:{
      UserInfo,
      HarvestList,
      AcademicWork,
      MyProjects,
      MyRewards
    },
    data () {
      return {
        rewardsData: '',
        academicworkData: '',
        projectsData: ''
      }
    },
    created () {
      var _this = this
      _this.rewardsData = _this.$userInfo.rewards
      _this.academicworkData = _this.$userInfo.academicwork
      _this.projectsData = _this.$userInfo.projects

      // console.log( _this.rewardsData + _this.academicworkData + _this.projectsData)
    },
    mounted () {
      console.log(this.$userInfo)
    },
    methods: {
      generateResume () {
        if(this.judgeLogin()){
          var _this = this
          _this.rewardsData = _this.$refs.rewards.getRewards()
          _this.academicworkData = _this.$refs.academicwork.getAcademicwork()
          _this.projectsData = _this.$refs.projects.getProjects()
          var Params = {
            userType: this.$type,
            userId: this.$userInfo.id,
            teacherModel: {
              rewards: _this.rewardsData,
              academicwork: _this.academicworkData,
              projects: _this.projectsData
            }
          }
          console.log(Params)
          this.$ajax({
            url:'/api/generateResume', 
            method: 'post',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: Params
          }).then( res => {
            // console.log(res)
            if(res.data.errCode == 20 ){
              this.$userInfo.rewards = _this.rewardsData
              this.$userInfo.academicwork = _this.academicworkData
              this.$userInfo.projects = _this.projectsData
              // this.reload()重新加载信息
              // console.log(this.$userInfo)
              this.$message({ type: 'success', message: '已生成/更新简历' })
              this.$router.push({  name: 'TestResume' }) 
            }else {
              this.$message({ type: 'error', message: '操作失败' });
            }
          }).catch( error => {
            console.log()
          })
        }
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
  color: #545454;
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
