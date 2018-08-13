<template>
  <div id="sysmanage">
    <div class="index-wrap1">
      <div class = "all-title">
        <p class="main-font">修改基本信息</p>
      </div>
      <div class="base-msg-all">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="账号">{{form.account}}</el-form-item>
          <el-form-item label="姓名">{{form.name}}</el-form-item>
          <el-form-item label="联系方式">
            <el-input  size="small" v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input  size="small" v-model="form.Email"></el-input>
          </el-form-item>
          <el-form-item label="研究方向">
            <el-input type="textarea" :rows="2" v-model="form.textarea1"></el-input>
          </el-form-item>
          <el-form-item label="个人主页">
            <el-input  size="small" v-model="form.blog"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-button  size="small" type="primary" @click="open6">确认修改</el-button><br>
      <div class = "all-title">
        <p class="main-font">修改密码</p>
      </div>
      <div class="base-msg-all">
        <el-form ref="form1" :model="form1" label-width="80px">
          <el-form-item label="原始密码">
            <el-input  size="small" v-model="form1.formerpwd"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input  size="small" v-model="form1.nowpwd"></el-input>
          </el-form-item>
          <el-form-item label="确认密码">
            <el-input  size="small" v-model="form1.affirmpwd"></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-button  size="small" type="primary" @click="open5">确认修改</el-button><br>
    </div>
  </div>
</template>

<script>
  export default{
    name:'sysmanage',
    data() {
      return {
        form: {
          account:'dfvxc',
          name: 'nesdbx',
          phone: '1234567889',
          Email: '1234568@qq.com',
          textarea1:'fyakbdilsvnldxfbinsldlfnbkv fjkv',
          blog:'garsdf.com',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        form1:{
          formerpwd:'',
          nowpwd:'',
          affirmpwd:''
        }
      }
    }
  }
</script>

<style scoped>
.el-button{
  float:right;
  margin-right: 30px;
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
