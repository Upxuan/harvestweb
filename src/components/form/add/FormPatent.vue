<template>
  <div id="tabPatent">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm" >
      <el-form-item label="专利名称：" prop="title">
        <el-input v-model="ruleForm.title" ></el-input>
      </el-form-item>
      <el-form-item label="申请(专利)号：" prop="num">
        <el-input v-model="ruleForm.num" ></el-input>
      </el-form-item>
      <el-form-item label="公开(公告)号：" prop="noteNum">
        <el-input v-model="ruleForm.noteNum" ></el-input>
      </el-form-item>
      <el-form-item label="发证单位：" prop="unit">
        <el-input v-model="ruleForm.unit" ></el-input>
      </el-form-item>
      <el-form-item label="专利类别：" prop="type">
        <el-radio-group v-model="ruleForm.type">
          <el-radio label="发明专利"></el-radio>
          <el-radio label="实用新型"></el-radio>
          <el-radio label="外观设计"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="专利状态：" prop="status">
        <el-radio-group v-model="ruleForm.status">
          <el-radio label="申请"></el-radio>
          <el-radio label="授权"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="申请日期：" prop="applyDate">
        <div class="block">
          <el-date-picker
            v-model="ruleForm.applyDate"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="生效日期：" prop="effectDate">
        <div class="block">
          <el-date-picker
            v-model="ruleForm.effectDate"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
            @change="dateFormat">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="专利权人：" prop="belong" >
        <el-input v-model="ruleForm.belong" ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {getCookie,delCookie,setCookie} from '@/api/js/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default {
    name: 'tabPatent',
    props: ["row"],
    data() {
      return {
        ruleForm: {
          title: '',
          num: '',
          noteNum: '',
          unit: '',
          type: '',
          status: '',
          applyDate: '',
          effectDate: '',
          belong: ''
        },
        rules: {
          title: [{ required: true, message: '请输入专利名称', trigger: 'blur' }],
          num: [{ required: true, message: '请输入申请(专利)号', trigger: 'blur' }],
          unit: [{ required: true, message: '请输入发证单位', trigger: 'blur' }],
          type: [{ required: true, message: '请选择专利类别', trigger: 'blur' }],
          status: [{ required: true, message: '请选择专利状态', trigger: 'blur' }],
          applyDate: [{ required: true, message: '请选择申请日期', trigger: 'blur', type: 'string' }],
          effectDate: [{ required: true, message: '请选择生效日期', trigger: 'blur' }],
        }
      }
    },
    created () {
      var _this = this
      console.log(_this.row)
      if(_this.row != null) {
        _this.ruleForm.title = _this.row.patentTitle
        _this.ruleForm.num = _this.row.patentNum
        _this.ruleForm.noteNum = _this.row.patentNoteNum
        _this.ruleForm.unit = _this.row.patentUnit
        _this.ruleForm.type = _this.row.patentType
        _this.ruleForm.status = _this.row.patentStatus
        _this.ruleForm.applyDate = _this.row.patentApplyDate
        _this.ruleForm.belong = _this.row.patentBelong
        var date = []
        date[0] = new Date(_this.row.patentEffectDate1);
        date[1] = new Date(_this.row.patentEffectDate2);
        _this.ruleForm.effectDate = date
      }
    },
    methods: {
      submitMsg () {
        var data = []
        this.$refs.ruleForm.validate((valid) => {
          if(valid){
            var _this = this.ruleForm
            var obj = {}
            obj.title = _this.title
            obj.num = _this.num
            obj.noteNum = _this.noteNum
            obj.unit = _this.unit
            obj.type = _this.type
            obj.status = _this.status
            obj.applyDate = _this.applyDate
            var d1 = new Date(_this.effectDate[0])
            var d2 = new Date(_this.effectDate[1])
            obj.effectDate1 = d1.getFullYear() + '-' + (d1.getMonth() + 1) + '-' + d1.getDate();
            obj.effectDate2 = d2.getFullYear() + '-' + (d2.getMonth() + 1) + '-' + d2.getDate();
            // obj.effectDate1 = _this.effectDate1
            // obj.effectDate2 = _this.effectDate2
            obj.belong = _this.belong
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
        this.ruleForm.effectDate1 = val[0].toString()
        this.ruleForm.effectDate2 = val[1].toString()
        // console.log(val)
        // console.log(val.toString())
      }
    }
  }
</script>

<style scoped>
.el-button {
  float: right;
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
  margin-left:  0px;
  text-align: center;
  line-height: 40px;
  color: rgb(96,98,102);
  font-size: 14px;
}
</style>
