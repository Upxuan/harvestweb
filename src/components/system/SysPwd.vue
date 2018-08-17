<template>
  <div id="syspwd">
    <div class = "all-title">
      <p class="main-font">修改密码</p>
    </div>
      <div class="base-msg-all">

      	<el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="80px" class="demo-ruleForm">
  <el-form-item label="密码" prop="pass">
    <el-input type="password" size="small" v-model="ruleForm2.pass" auto-complete="off"></el-input>
  </el-form-item>
  <el-form-item label="确认密码" prop="checkPass">
    <el-input type="password" size="small" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
  </el-form-item>
 
</el-form>
</div>
  <!-- <el-form-item> -->
    <el-button type="primary" size="small" @click="submitForm('ruleForm2')" >确认修改</el-button>
    <el-button size="small" @click="resetForm('ruleForm2')" style="margin-right: 20px">重置</el-button>
  <!-- </el-form-item> -->
<!-- </el-form> -->
    
      
    
	</div>
</template>

<script >
	export default{
		name:'syspwd',
		
		// return:{
		// 	form2:{
  //         formerpwd:'',
  //         nowpwd:'',
  //         affirmpwd:''
       data() {
      var checkAge = (rule, value, callback) => {

      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          if (this.ruleForm2.checkPass !== '') {
            this.$refs.ruleForm2.validateField('checkPass');
          }
          callback();
        }
      };
      var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2: {
          pass: '',
          checkPass: '',
 
        },
        rules2: {
          pass: [
            { validator: validatePass, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass2, trigger: 'blur' }
          ]
        }
      };
    },
    methods:{
    	submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
	}
</script>
<style>
.el-button{
  float:right;
 
}
.base-msg-all{
  margin-left: 70px;
  width:800px;
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