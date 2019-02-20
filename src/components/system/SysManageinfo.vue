<template>
  <div id="sysManageInfo">
      <div class = "all-title">
        <p class="main-font">
          <span>修改基本信息</span>
          <el-button  size="small" type="primary" @click="submitRevise()">确认修改</el-button>
          <el-button size="small" @click="resetForm()" type="danger" style="margin-right: 15px">重置</el-button>
        </p>
      </div>
      <div class="base-msg-all">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm" >
          <el-form-item label="账号：">{{ ruleForm.username }}</el-form-item>
          <el-form-item label="姓名：">{{ ruleForm.name }}</el-form-item>
          <div v-if="this.$type == 1">
            <el-form-item label="职称：">{{ ruleForm.title }}</el-form-item>
            <el-form-item label="个人主页：">
              <el-input v-model="ruleForm.link"></el-input>
            </el-form-item>
          </div>
          <div v-else-if="this.$type == 2">
            <el-form-item label="第一导师：">{{ ruleForm.first }}</el-form-item>
            <el-form-item label="指导老师：">{{ ruleForm.second }}</el-form-item>
          </div>
          <el-form-item label="联系方式：">
            <el-input v-model="ruleForm.tel"></el-input>
          </el-form-item>
          <el-form-item label="电子邮箱：">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="研究方向：">
            <el-input v-model="ruleForm.direction"></el-input>
          </el-form-item>
        </el-form>
      </div>
  </div>
</template>

<script>
  import {getCookie,delCookie,updateCookie,setCookie} from '@/api/js/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default{
    name:'sysManageInfo',
    inject: ['reload'],
    data() {
      return {
        ruleForm: {
          username: this.$userInfo.username,
          name: this.$userInfo.name,
          title: this.$userInfo.title,
          tel: this.$userInfo.tel,
          email: this.$userInfo.email,
          direction: this.$userInfo.direction,
          link: this.$userInfo.link,
          first: this.$userInfo.first,
          second: this.$userInfo.second
        },
        rules: {}
      }
    },
    methods: {
      submitRevise () {
        if(this.judgeLogin()){
          this.$confirm('请确认是否修改基础信息', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            var reForm = this.ruleForm
            var myInfo = this.$userInfo
            if(this.$type == 1 && reForm.tel == myInfo.tel && reForm.email == myInfo.email && reForm.direction == myInfo.direction && reForm.link == myInfo.link) {
              this.$message({ type: 'error', message: '基础信息未经修改' });
            } else if (this.$type == 2 && reForm.tel == myInfo.tel && reForm.email == myInfo.email && reForm.direction == myInfo.direction) {
              this.$message({ type: 'error', message: '基础信息未经修改' });
            } else {
              var Params = {
                userType: this.$type,
                userId: this.$userInfo.id,
                link: reForm.link,
                tel: reForm.tel,
                email: reForm.email,
                direction: reForm.direction,
              }
              this.$ajax.get('/api/reviseBaseInfo', {params: Params}).then( res => {
                console.log(res)
                if(res.data.errCode == 20){
                  if(this.$type == 1) {
                    this.$userInfo.link = this.ruleForm.link
                  }
                  this.$userInfo.tel = this.ruleForm.tel
                  this.$userInfo.email = this.ruleForm.email
                  this.$userInfo.direction = this.ruleForm.direction
                  console.log(this.$userInfo)
                  this.$message({ type: 'success', message: '修改成功' });
                }else if(res.data.errCode == 21){
                  this.$message({ type: 'error', message: '修改失败' });
                }
              }).catch( error => {
                console.log(error)
              })
            }
          }).catch( () => {
            
          });
        }
      },
      resetForm () {
        this.reload();
      }
    }
  }
</script>

<style scoped>
.el-button{
  float: right;
}
.base-msg-all{
  margin-left: 70px;
  width: 800px;
  margin-top: 20px;
}
.manual-wrap {
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  font-family: Hiragino Sans GB;
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
</style>
