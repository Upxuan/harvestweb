<template>
  <div id="tabSoftware">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm" >
      <el-form-item label="软件名称：" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="登记号：" prop="num">
        <el-input v-model="ruleForm.num"></el-input>
      </el-form-item>
      <el-form-item label="权利获得方式：" prop="acquireType">
        <el-radio-group v-model="ruleForm.acquireType">
          <el-radio label="原始取得"></el-radio>
          <el-radio label="继受取得"></el-radio>
        </el-radio-group>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {getCookie,delCookie,setCookie} from '@/api/js/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default {
    name: 'tabSoftware',
    props: ["row"],
    data() {
      return {
        ruleForm: {
          name: '',
          num: '',
          acquireType: ''
        },
        rules: {
          name: [{ required: true, message: '请输入软件名称', trigger: 'blur' }],
          num: [{ required: true, message: '请选择登记号', trigger: 'blur'}],
          acquireType: [{ required: true, message: '请选择权利获得方式', trigger: 'blur' }]        }
      }
    },
    created () {
      var _this = this
      console.log(_this.row)
      if(_this.row != null) {
        _this.ruleForm.name = _this.row.softwareName
        _this.ruleForm.num = _this.row.softwareNum
        _this.ruleForm.acquireType = _this.row.softwareAcquireType
      }
    },
    methods: {
      submitMsg () {
        var data = []
        this.$refs.ruleForm.validate((valid) => {
          if(valid){
            var _this = this.ruleForm
            var obj = {}
            obj.name = _this.name
            obj.num = _this.num
            obj.acquireType = _this.acquireType
            // console.log(obj)
            data = obj
          }else{
            data = null
          }
        })
        return data
      },
      resetMsg () {
        this.$refs.ruleForm.resetFields();
      }
    }
  }
</script>

<style scoped>
.el-button {
  float:right;
}
.el-menu {
  margin-right:-20px;
  float:right;
  font-family: Hiragino Sans GB;
  font-weight: normal;
}
textarea {
  height: 20px;
  width: 300px;
  font-size: 12px;
  border: 1px solid #C5C1AA;
  border-radius: 3px;
}
.divide-text {
  margin-left: 60px;
  text-align: center;
  line-height: 40px;
  color: rgb(96,98,102);
  font-size: 14px;
}
</style>
