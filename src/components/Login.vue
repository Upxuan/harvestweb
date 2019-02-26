<template>
  <div class="wrap">
    <div class="container">
      <br><br><br><br><br><br>
      <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-position="left" label-width="0px" >
        <h1 class="title">WELCOME</h1>
        <el-form-item prop="account">
          <el-input
            type="username"
            v-model="ruleForm2.account"
            :maxlength='16'
            auto-complete="off"
            placeholder="username"
            @change="changeAccount"
            @keyup.enter.native='handleSubmit'>
          </el-input>
        </el-form-item>
        <el-form-item prop="checkPass">
          <el-input
            type="password"
            v-model="ruleForm2.checkPass"
            :maxlength='16'
            auto-complete="off"
            placeholder="password"
            @keyup.enter.native='handleSubmit'>
          </el-input>
        </el-form-item>
        <el-form-item style="width:100%;">
          <el-button
            type="submit"
            style="width:100%;"
            @click.native.prevent="handleSubmit"
            :loading="logining">
            Login
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="footer">
      <p>cloud.hdu.edu.cn</p>
      <p>@云技术研究中心成果管理系统</p>
      <!-- <a href="cloud.hdu.edu.cn">cloud.hdu.edu.cn</a> -->
    </div>
    <ul>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
</template>

<script>
  import {getCookie,delCookie,setCookie} from '../api/js/Cookie.js'
  import myapi from '../api/myapi.js'
  export default {
    name: 'Login',
    data () {
      var validateAccount = (rule, value, callback) => {
        if (!value) {
          callback(new Error('请输入用户名'));
        }else {
          var targ = /^[A-Za-z0-9]+$/;
          if(!targ.test(value)){
            callback(new Error('用户名只支持英文、数字'));
          }
          callback();
        }
      }
      return {
        logining: false,//加载动画
        ruleForm2: {
          account: '',//用户名
          checkPass: ''//密码
        },
        rules2: {
          account: [{ validator: validateAccount, trigger: 'blur' }],
          checkPass: [
              { required: true, message: '请输入密码', trigger: 'blur' },
              { min: 3, max: 16, required: true, message: '密码长度于3-16位之间', trigger: 'blur' },
          ]
        }
      }
    },
    methods: {
      changeAccount () {
        // this.ruleForm2.checkPass = "";
      },
      //点击登录
      handleSubmit() {
        var _this = this;
        var user = "";
        this.$refs.ruleForm2.validate((valid) => {
          if (valid) {
            _this.logining = true;
            var loginParams = {username: this.ruleForm2.account, password: this.ruleForm2.checkPass};

            this.$ajax.get('/api/login', {params: loginParams}).then( res => {
              // console.log(res);
              _this.logining = false;
              var type = res.data.type;
              if(res.data.errCode == 10){
                var userModel = {}
                var model ={}
                if(type == 0){
                  model = res.data.managerModel
                }else if(type == 1){
                  model = res.data.teacherModel
                  userModel.email = model.email
                  userModel.direction = model.direction
                  userModel.link = model.link
                  userModel.team = model.team
                  userModel.tel = model.tel
                  userModel.title = model.title
                }else if(type == 2){
                  model = res.data.studentModel
                  userModel.link = model.first
                  userModel.link = model.second
                  userModel.tel = model.tel
                  userModel.email = model.email
                  userModel.direction = model.direction
                  userModel.title = model.degree
                  userModel.team = model.team
                }
                userModel.id = model.id
                userModel.name = model.name
                userModel.username = model.username
                userModel.password = model.password
                
                user = JSON.stringify(userModel);
                setCookie('userInfo', user);
                setCookie('type', type);
                // console.log("document.cookie:" + document.cookie);
                _this.$router.push({ path:'/layout' });
              }else{
                _this.$message.error("用户名或密码错误");
              }
            }).catch( error => {
              _this.logining = false;
              console.log(error)
              alert("出错！请联系管理员")
            });
          }else {
            _this.logining = false;
            // alert("出错！请联系管理员")
            return false;
          }
        });
        // myapi.$emit("userInfo", user);
      }
    }
  }
</script>

<style scoped>
body {
  font: 16px/20px microsft yahei;
}
.wrap {
  width: 100%;
  height: 100%;
  /*400px*/
  padding: 40px 0;
  position: fixed;
  /* top: 50%;
  margin-top: -337px; */
  opacity: 0.8;
  background: linear-gradient(to bottom right,#33ccff,#409eff);
  background: -webkit-linear-gradient(to bottom right,#33ccff,#0099ff);
}
.container {
  width: 320px;
  margin: 0 auto;
}
.container h1 {
  text-align: center;
  color: #FFFFFF;
  font-weight: 500;
  /*font-weight: bold;*/
}
.container input {
  width: 100%;
  display: block;
  height: 36px;
  border: 0;
  outline: 0;
  padding: 6px 10px;
  line-height: 24px;
  margin: 10px auto;
  -webkit-transition: all 0s ease-in 0.1ms;
  -moz-transition: all 0s ease-in 0.1ms;
  transition: all 0s ease-in 0.1ms;
}
.container input[type="username"], .container input[type="password"]  {
  background-color: #FFFFFF;
  font-size: 16px;
  color: #50a3a2;
}
.container input[type='submit'] {
  font-size: 16px;
  letter-spacing: 2px;
  color: #666666;
  background-color: #FFFFFF;
}
.container input:focus {
  width: 320px;
}
.container input[type='submit']:hover {
  cursor: pointer;
  width: 325px;
}
.footer {
  width: 100%;
  color: #FFFFFF;
  font-size: 12px;
  position: fixed;
  bottom: 10px;
  text-align: center;
}
.footer p {
  margin: 0px 0px;
}
/*背景效果渲染部分*/
.wrap ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -10;
}
.wrap ul li {
  list-style-type: none;
  display: block;
  position: absolute;
  bottom: -120px;
  width: 15px;
  height: 15px;
  z-index: -8;
  background-color:rgba(255, 255, 255, 0.15);
  animotion: square 25s infinite;
  -webkit-animation: square 25s infinite;
}
.wrap ul li:nth-child(1) {
  left: 0;
  animation-duration: 10s;
  -moz-animation-duration: 10s;
  -o-animation-duration: 10s;
  -webkit-animation-duration: 10s;
}
.wrap ul li:nth-child(2) {
  width: 40px;
  height: 40px;
  left: 10%;
  animation-duration: 15s;
  -moz-animation-duration: 15s;
  -o-animation-duration: 15s;
  -webkit-animation-duration: 15s;
}
.wrap ul li:nth-child(3) {
  left: 20%;
  width: 25px;
  height: 25px;
  animation-duration: 12s;
  -moz-animation-duration: 12s;
  -o-animation-duration: 12s;
  -webkit-animation-duration: 12s;
}
.wrap ul li:nth-child(4) {
  width: 50px;
  height: 50px;
  left: 30%;
  -webkit-animation-delay: 3s;
  -moz-animation-delay: 3s;
  -o-animation-delay: 3s;
  animation-delay: 3s;
  animation-duration: 12s;
  -moz-animation-duration: 12s;
  -o-animation-duration: 12s;
  -webkit-animation-duration: 12s;
}
.wrap ul li:nth-child(5) {
  width: 60px;
  height: 60px;
  left: 40%;
  animation-duration: 10s;
  -moz-animation-duration: 10s;
  -o-animation-duration: 10s;
  -webkit-animation-duration: 10s;
}
.wrap ul li:nth-child(6) {
  width: 75px;
  height: 75px;
  left: 50%;
  -webkit-animation-delay: 7s;
  -moz-animation-delay: 7s;
  -o-animation-delay: 7s;
  animation-delay: 7s;
}
.wrap ul li:nth-child(7) {
  left: 60%;
  animation-duration: 8s;
  -moz-animation-duration: 8s;
  -o-animation-duration: 8s;
  -webkit-animation-duration: 8s;
}
.wrap ul li:nth-child(8) {
  width: 90px;
  height: 90px;
  left: 70%;
  -webkit-animation-delay: 4s;
  -moz-animation-delay: 4s;
  -o-animation-delay: 4s;
  animation-delay: 4s;
}
.wrap ul li:nth-child(9) {
  width: 100px;
  height: 100px;
  left: 80%;
  animation-duration: 20s;
  -moz-animation-duration: 20s;
  -o-animation-duration: 20s;
  -webkit-animation-duration: 20s;
}
.wrap ul li:nth-child(10) {
  width: 120px;
  height: 120px;
  left: 90%;
  -webkit-animation-delay: 6s;
  -moz-animation-delay: 6s;
  -o-animation-delay: 6s;
  animation-delay: 6s;
  animation-duration: 30s;
  -moz-animation-duration: 30s;
  -o-animation-duration: 30s;
  -webkit-animation-duration: 30s;
}
@keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
  100% {
    bottom: 400px;
    transform: rotate(600deg);
    -webit-transform: rotate(600deg);
    -webkit-transform: translateY(-500);
    transform: translateY(-500)
  }
}
@-webkit-keyframes square {
  0% {
    -webkit-transform: translateY(0);
    transform: translateY(0)
  }
  100% {
    bottom: 400px;
    transform: rotate(600deg);
    -webit-transform: rotate(600deg);
    -webkit-transform: translateY(-500);
    transform: translateY(-500)
  }
}
</style>
