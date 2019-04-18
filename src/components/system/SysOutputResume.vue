<template>
  <div id="sysOutputResume">
    <div class="userinfo">
      <div class="all-title">
        <p class="main-font">
          <span>个人信息</span>
          <el-button type="primary" size="small" @click="generateResume">生成主页</el-button>
        </p>
      </div>
      <div class="userinfo-content">
        <div class="myinfo">
          <user-info></user-info>
        </div>
        <!-- <div class="myIntroduction">
          <el-popover
            width="500"
            placement="right"
            trigger="hover">
            <el-input
              type="textarea"
              :autosize="{ minRows: 8, maxRows: 10 }"
              placeholder="请输入个人简介"
              v-model="textarea.introduction">
            </el-input>
            <el-button type="primary" icon="el-icon-edit" circle slot="reference"></el-button>
          </el-popover>
        </div> -->
      </div>
    </div>
    <div class="texHarvestList">
      <div class="all-title">
        <p class="main-font"><span>个人成果</span></p>
      </div>
      <harvest-list></harvest-list>
    </div>
    <div class="texIntroduction">
      <div class="all-title little-title">
        <p class="main-font"><span>个人简介</span></p>
      </div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 8, maxRows: 15 }"
        placeholder="请输入个人简介"
        v-model="textarea.introduction">
      </el-input>
    </div>
    <div class="texRewards">
      <div class="all-title little-title">
        <p class="main-font"><span>获得奖励</span></p>
      </div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 8, maxRows: 15 }"
        placeholder="请输入获得的奖励信息"
        v-model="textarea.rewards">
      </el-input>
    </div>
    <div class="texAcademicWork">
      <div class="all-title little-title">
        <p class="main-font"><span>学术兼职</span></p>
      </div>
      <el-input
        type="textarea"
        :autosize="{ minRows: 12, maxRows: 15 }"
        placeholder="请输入学术兼职信息"
        v-model="textarea.academicwork">
      </el-input>
    </div>
  </div>
</template>

<script>
  import UserInfo from '@/components/tex/texUserinfo'
  import HarvestList from '@/components/tex/texHarvestList'
  import {getCookie,delCookie,setCookie} from '@/api/Cookie.js'
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
          introduction: '',
          rewards: '',
          academicwork: '',
        }
      }
    },
    created () {
      this.getTeacherMsg(this.$userInfo.username, 0)
    },
    methods: {
      generateResume () {
        if(this.judgeLogin()){
          var _this = this
          var Params = {
            userType: this.$type,
            userId: this.$userInfo.id,
            teacherModel: {
              introduction: _this.textarea.introduction,
              rewards: _this.textarea.rewards,
              academicwork: _this.textarea.academicwork,
            }
          }
          // console.log(Params)
          this.$ajax({
            url:'/api/generateResume', 
            method: 'post',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: Params
          }).then( res => {
            // console.log(res)
            if(res.data.errCode == 20){
              this.reload()
              this.$message({ type: 'success', message: '已生成/更新简历' })
              let newpage = this.$router.resolve({ 
                path: '/resume',
                query: {
                  username: this.$userInfo.username
                }  
              })  
              window.open(newpage.href, '_blank');
            }else {
              this.$message({ type: 'error', message: '操作失败' });
            }
          }).catch( error => {
            // console.log()
          })
        }
      },
      handlePageChange(val){
        var startIndex = 1+(val-1)*10;
        this.getAnswerFromGoogle(startIndex);
      },
    }
  }
</script>

<style scoped>
#sysOutputResume {
  padding-bottom: 100px;
}

.all-title {
  margin-top: 10px;
  height: 35px;
  border-bottom: 1px dashed #DCDFE6;
}

.little-title {
  margin-top: 40px;
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

.userinfo {
  margin-top: 20px;
  height: 300px;
  /* width: 100%; */
  /* width: 1662px; */
}

[class*="tex"] {
  margin-top: 10px;
}

[class*="my"] {
  float: left;
  /* display: inline; */
}

.userinfo-content {
  width: 700px;
}

.myIntroduction {
  margin: 20px auto;
  /* margin-bottom: 100px; */
} 
</style>
