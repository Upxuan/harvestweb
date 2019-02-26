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
        <p class="main-font"><span>个人成果</span></p>
      </div>
      <harvest-list></harvest-list>
    </div>
    <div class="texRewards">
      <div class="all-title">
        <p class="main-font"><span>获得奖励</span></p>
      </div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 15 }"
        placeholder="请输入获得的奖励信息"
        v-model="textarea.rewards">
      </el-input>
    </div>
    <div class="texAcademicWork">
      <div class="all-title">
        <p class="main-font"><span>学术兼职</span></p>
      </div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 15 }"
        placeholder="请输入学术兼职信息"
        v-model="textarea.academicwork">
      </el-input>
    </div>
  </div>
</template>

<script>
  import UserInfo from '@/components/tex/texUserinfo'
  import HarvestList from '@/components/tex/texHarvestList'
  import {getCookie,delCookie,setCookie} from '@/api/js/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default {
    name: 'sysOutputResume',
    inject: ['reload'],
    components:{
      UserInfo,
      HarvestList
    },
    data () {
      return {
        textarea: {
          rewards: '',
          academicwork: '',
        }
      }
    },
    created () {
      this.getThreeMsg(this.$userInfo.username)
      console.log(this.textarea.rewards)
    },
    methods: {
      generateResume () {
        if(this.judgeLogin()){
          var _this = this
          var Params = {
            userType: this.$type,
            userId: this.$userInfo.id,
            teacherModel: {
              rewards: _this.textarea.rewards,
              academicwork: _this.textarea.academicwork,
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
            console.log(res)
            if(res.data.errCode == 20 ){
              this.reload()
              this.$message({ type: 'success', message: '已生成/更新简历' })
              this.$router.push({  
                path: '/resume',
                query: {
                  username: this.$userInfo.username
                }
              }) 
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
#sysOutputResume {
  padding-bottom: 100px;
}

.all-title {
  margin-top: 40px;
  height: 35px;
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
  margin-top: 10px;
}

.texHarvestList {
  margin-top: 50px;
}
</style>
