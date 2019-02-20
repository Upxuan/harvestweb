<template>
  <div id="sysManagePwd">
    <div class = "all-title">
      <p class="main-font">
        <span>修改密码</span>
        <el-button type="primary" size="small" @click="submitForm()" >确认修改</el-button>
        <el-button size="small" @click="resetForm()" type="danger" style="margin-right: 15px">重置</el-button>
      </p>
    </div>
    <div class="base-msg-all">
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="原密码：" prop="pass">
          <el-input type="password" size="small" v-model="ruleForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="新密码：" prop="checkPass1">
          <el-input type="password" size="small" v-model="ruleForm.checkPass1" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="确认密码：" prop="checkPass2">
          <el-input type="password" size="small" v-model="ruleForm.checkPass2" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script >
  export default{
    name: 'sysManagePwd',
    data() {
      var validateCheckPass1 = (rule, value, callback) => {
        // this.$refs.ruleForm.validateField('checkPass2');
        let regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
        if(regExp.test(value) === false){
          callback(new Error('6-16字母和数字组成，不能是纯数字或纯英文'))
        }else if (value !== this.ruleForm.checkPass2 && this.ruleForm.checkPass2 !== '') {
          callback(new Error('两次输入密码不一致'));
        } else {
          callback();
        }
      };
      var validateCheckPass2 = (rule, value, callback) => {
        let regExp = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
        if(this.ruleForm.checkPass1 !== '') {
          if(regExp.test(value) === false){
            callback(new Error('6-16字母和数字组成，不能是纯数字或纯英文'))
          }
          else if (value !== this.ruleForm.checkPass1) {
            callback(new Error('两次输入密码不一致'));
          } else {
            callback();
          }
        }else {
          callback(new Error('请输入新密码'))
        }
      };
      return {
        ruleForm: {
          pass: '',
          checkPass1: '',
          checkPass2: '',
        },
        rules: {
          pass: [{ required: true, message: '请输入原密码', trigger: 'blur' }],
          checkPass1: [
            { required: true, message: '请输入新密码', trigger: 'blur' },
            { validator: validateCheckPass1, trigger: 'blur' }],
          checkPass2: [
            { required: true, message: '请重复新密码', trigger: 'blur' },
            { validator: validateCheckPass2, trigger: 'blur' }]
        }
      }
    },
    methods: {
      submitForm() {
        var _this = this
        this.$refs.ruleForm.validate((valid) => {
          if (valid) {
            if(this.judgeLogin()){
              this.$confirm('请确认是否修改密码', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                var Params = {
                  userType: this.$type,
                  userId: this.$userInfo.id,
                  pass: this.ruleForm.pass,
                  checkPass: this.ruleForm.checkPass1
                }
                this.$ajax.get('/api/revisePwd', {params: Params}).then( res => {
                  console.log(res)
                  if(res.data.errCode == 20){
                    this.$message({ type: 'success', message: '修改成功' });
                    this.resetForm()
                  }else if(res.data.errCode == 21){
                    this.$message({ type: 'error', message: '修改失败' });
                  }else if(res.data.errCode == 23){
                    this.$message({ type: 'error', message: '原密码错误' });
                  }
                }).catch( () => {
                  alert("出错，请联系管理员！")
                })
              }).catch( () => {
            
              });
            }
          } else {
            console.log('error submit!!')
            return false
          }
        });
      },
      resetForm () {
        this.$refs.ruleForm.resetFields();
      }
    }
  }
</script>

<style scoped>
.el-button{
  float:right;
}
.base-msg-all{
  margin-left: 70px;
  width: 800px;
  margin-top:20px;
}
.manual-wrap {
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10px;
  margin-left:30px;
  margin-right:30px;
  font-family: Hiragino Sans GB;
}
.all-title {
  height:40px;
  border-bottom: 1px dashed #DCDFE6;
}
.main-font {
  font-size: 17px;
  color: #000;
  font-family: Hiragino Sans GB;
}
</style>
