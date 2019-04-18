<template>
  <div id="sysManageInfo">
    <div class = "all-title">
      <p class="main-font">
        <span>修改基本信息</span>
        <el-button  size="small" type="warning" @click="submitRevise()">确认修改</el-button>
        <el-button size="small" @click="resetForm()" type="danger" style="margin-right: 15px">重置</el-button>
      </p>
    </div>
    <div class="base-msg-all">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm" >
        <!-- <input type="file" accept="image/*" @change="uploadImg"> -->
        <el-form-item label="上传头像：" class="base-msg-upload">
          <el-upload
            class="avatar-uploader"
            accept="image/jpeg, image/png"
            ref="upload"
            action="/api/user/saveImage/"
            :headers="myHeader"
            :show-file-list="false"
            :with-credentials="true"
            :auto-upload="false"
            :on-change="addFile">
            <!-- <img v-if="ruleForm.imageUrl" src="../../../static/images/avatar/1553431446491.jpg" class="avatar"> -->
            <img v-if="imageUrl!='' && imageUrl!=null" :src="imageUrl" class="avatar">
            <img v-else-if="imgurl!='' && imgurl!=null" :src="imgurl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
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
  import {getCookie,delCookie,updateCookie,setCookie} from '@/api/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default{
    name:'sysManageInfo',
    inject: ['reload'],
    data() {
      return {
        imageUrl: '',
        imgurl: '',
        imgFile: {},
        fileSizeIsSatisfy: true,
        fileFormatIsSatisfy: true,
        // headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        ruleForm: {
          imgname: this.$userInfo.imgurl,
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
    mounted () {
      // console.log(this.ruleForm.imgname)
      if(this.ruleForm.imgname != '' && this.ruleForm.imgname != null) {
        this.imgurl = '../../../static/images/avatar/' + this.$userInfo.imgurl;
      }
      // console.log(this.ruleForm.imgname)
      // console.log(this.imgurl)
    },
    computed: {
      myHeader(){
        return { "authToken": window.sessionStorage.getItem('authToken') };
      },
    },
    methods: {
      addFile (file, fileList) {
        // console.log(file)
        this.imgFile = file;
        var isSize = file.size / 1024 / 1024 < 3;
        var isFormat = file.raw.type === ('image/jpeg' || 'image/png');
        if(isSize && isFormat){
          this.imageUrl = URL.createObjectURL(file.raw);
          // console.log(file.raw)
          // console.log(this.imageUrl)
          return true;
        }else{
          if(!isSize) this.$message.error("上传头像图片大小不能超过 3MB!");
          if(!isFormat) this.$message.error("上传头像图片只能是 JPG或PNG 格式!");
          return false;
        }
      },
      submitRevise () {
        var _this = this;
        if(this.judgeLogin()){
          this.$refs.ruleForm.validate((valid) => {
            if(valid) {
              this.$confirm('请确认是否修改基础信息', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                var reForm = _this.ruleForm
                var myInfo = _this.$userInfo
                if(_this.$type == 1 && JSON.stringify(_this.imgFile) == "{}" && reForm.tel == myInfo.tel && reForm.email == myInfo.email && reForm.direction == myInfo.direction && reForm.link == myInfo.link) {
                  this.$message({ type: 'error', message: '基础信息未经修改' });
                }else if (_this.$type == 2 && JSON.stringify(_this.imgFile) == "{}" && reForm.tel == myInfo.tel && reForm.email == myInfo.email && reForm.direction == myInfo.direction) {
                  this.$message({ type: 'error', message: '基础信息未经修改' });
                }else {
                  // this.$refs.upload.submit();
                  if(JSON.stringify(_this.imgFile) != "{}") {
                    var fileName = _this.imgFile.name;
                    var reader = new FileReader();
                    reader.readAsDataURL(this.imgFile.raw);
                    reader.onload = function(e) {
                      var data = this.result; // 这个就是base64编码了
                      var Params = {
                        imageUrl: data,
                        fileName: fileName,
                        userType: _this.$type,
                        userId: _this.$userInfo.id,
                        link: reForm.link,
                        tel: reForm.tel,
                        email: reForm.email,
                        direction: reForm.direction,
                      }
                      // console.log(Params)
                      $.ajax({
                        data: Params,
                        type: "POST",
                        url: '/api/reviseBaseInfo',
                        async: false,
                        success (res) {
                          if(res.errCode == 20) {
                            var userModel = _this.$userInfo
                            if(_this.$type == 1) userModel.link = _this.ruleForm.link
                            userModel.imgurl = res.imgName
                            userModel.tel = _this.ruleForm.tel
                            userModel.email = _this.ruleForm.email
                            userModel.direction = _this.ruleForm.direction
                            var user = JSON.stringify(userModel)
                            setCookie('userInfo', user);
                            // setTimeout("alert('修改成功')",100);
                          }else if(res.errCode == 21) {
                            // setTimeout("alert('修改失败')",100);
                          }
                        }
                      });
                    }
                  }else {
                    var Params = {
                      imageUrl: "",
                      fileName: "",
                      userType: _this.$type,
                      userId: _this.$userInfo.id,
                      link: reForm.link,
                      tel: reForm.tel,
                      email: reForm.email,
                      direction: reForm.direction,
                    }
                    // console.log(Params)
                    this.$ajax.get('/api/reviseBaseInfo', {params: Params}).then( res => {
                      // console.log(res)
                      if(res.data.errCode == 20) {
                          var userModel = _this.$userInfo
                          if(_this.$type == 1) userModel.link = _this.ruleForm.link
                          // userModel.imgurl = res.data.imgName
                          userModel.tel = _this.ruleForm.tel
                          userModel.email = _this.ruleForm.email
                          userModel.direction = _this.ruleForm.direction
                          // console.log(userModel)
                          var user = JSON.stringify(userModel)
                          setCookie('userInfo', user)
                          this.$message({ type: 'success', message: '修改成功' });
                        }else if(res.data.errCode == 21) {
                          this.$message({ type: 'error', message: '修改失败' });
                        }
                    }).catch( err=> {});
                  }
                  
                  // var Params = {
                  //   userType: _this.$type,
                  //   imageUrl: data,
                  //   userType: _this.$type,
                  //   userId: _this.$userInfo.id,
                  //   link: reForm.link,
                  //   tel: reForm.tel,
                  //   email: reForm.email,
                  //   direction: reForm.direction,
                  // }
                  // this.$ajax.get('/api/reviseBaseInfo', {params: Params}).then( res => {
                  //   console.log(res)
                  //   if(res.data.errCode == 20) {
                  //     var userModel = _this.$userInfo
                  //     if(_this.$type == 1) userModel.link = _this.ruleForm.link
                  //     userModel.tel = _this.ruleForm.tel
                  //     userModel.email = _this.ruleForm.email
                  //     userModel.direction = _this.ruleForm.direction
                      
                  //     var user = JSON.stringify(userModel)
                  //     setCookie('userInfo', user)
                  //     this.$message({ type: 'success', message: '修改成功' });
                  //   }else if(res.data.errCode == 21){
                  //     this.$message({ type: 'error', message: '修改失败' });
                  //   }
                  // }).catch( error => {
                  //   console.log(error)
                  // })
                }
              }).catch( () => {});
            }else {
              //表单验证没通过
            }
          });
        }
      },
      resetForm () {
        this.reload();
      },
      judgeObject (obj) {
        for(var i in obj){
          return false;
        }
        return true;
      }
    }
  }
</script>

<style>
#sysManageInfo .el-button{
  float: right;
}
#sysManageInfo .base-msg-all{
  margin-left: 70px;
  width: 800px;
  margin-top: 50px;
}
#sysManageInfo .manual-wrap {
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  font-family: Hiragino Sans GB;
}
#sysManageInfo .all-title {
  height: 40px;
  border-bottom: 1px dashed #DCDFE6;
}
#sysManageInfo .main-font {
  font-size: 17px;
  color: #000;
  font-family: Hiragino Sans GB;
}

#sysManageInfo .base-msg-upload {
  /* margin: 20px auto;
  text-align: center; */
}
/* start upload */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-upload {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    outline: 0;
    border: 1px dashed #d9d9d9;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
/* end upload */
</style>
