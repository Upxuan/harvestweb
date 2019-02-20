<template>
  <div id="tabProject">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm" >
      <el-form-item label="类别：" prop="type">
        <el-input v-model="ruleForm.type" ></el-input>
      </el-form-item>
      <el-form-item label="标题：" prop="title">
        <el-input v-model="ruleForm.title" ></el-input>
      </el-form-item>
      <el-form-item label="编号：" prop="num">
        <el-input v-model="ruleForm.num" ></el-input>
      </el-form-item>
      <el-form-item label="起止日期：" prop="date">
        <el-date-picker
          v-model="ruleForm.date"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          value-format="yyyy-MM-dd"
          @change="dateFormat">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="金额：" prop="money">
        <el-input v-model="ruleForm.money" ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script type="text/javascript">
  import {getCookie,delCookie,setCookie} from '@/api/js/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default {
    name: 'tabProject',
    props: ["row"],
    data() {
      return {
        ruleForm: {
          type: '',
          title: '',
          num: '',
          date: '',
          money: ''
        },
        rules: {
          type: [{ required: true, message: '请选择类别', trigger: 'blur' }],
          title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
          num: [{ required: true, message: '请输入编号', trigger: 'blur' }],
          date: [{ required: true, message: '请选择起止日期', trigger: 'blur'}],
          money: [{ required: true, message: '请输入金额', trigger: 'blur' }],
        }
      }
    },
    created () {
      var _this = this
      console.log(_this.row)
      if(_this.row != null) { 
        _this.ruleForm.type = _this.row.projectType
        _this.ruleForm.title = _this.row.projectTitle
        _this.ruleForm.num = _this.row.projectNum
        _this.ruleForm.money = _this.row.projectMoney
        var date = []
        date[0] = new Date(_this.row.projectDate1);
        date[1] = new Date(_this.row.projectDate2);
        _this.ruleForm.date = date
      }
    },
    methods: {
      submitMsg () {
        var data = []
        this.$refs.ruleForm.validate((valid) => {
          if(valid){
            var _this = this.ruleForm
            var obj = {}
            obj.type = _this.type
            obj.title = _this.title
            obj.num = _this.num
            var d1 = new Date(_this.date[0])
            var d2 = new Date(_this.date[1])
            obj.date1 = d1.getFullYear() + '-' + (d1.getMonth() + 1) + '-' + d1.getDate();
            obj.date2 = d2.getFullYear() + '-' + (d2.getMonth() + 1) + '-' + d2.getDate();
            // obj.date1 = _this.date1
            // obj.date2 = _this.date2
            obj.money = _this.money
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
      },
      dateFormat (val) {
        this.ruleForm.date1 = val[0].toString()
        this.ruleForm.date2 = val[1].toString()
        // console.log(val)
        // console.log(val.toString())
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
