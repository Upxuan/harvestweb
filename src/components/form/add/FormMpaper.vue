<template>
  <div id="tabMpaper">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm" >
      <el-row>
        <el-col :span="8">
          <el-form-item label="收录：" prop="type1">
            <el-select v-model="ruleForm.type1" placeholder="请选择收录" @change="changeType1">
              <el-option
                v-for="item in typeOption1"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="分类：" prop="type2">
            <el-select v-model="ruleForm.type2" placeholder="请选择分类" @change="changeType2" :disabled="isDisable2" ref="type2Ref">
              <el-option
                v-for="item in typeData2"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item label="级别：" prop="type3">
            <el-select v-model="ruleForm.type3" placeholder="请选择级别" :disabled="isDisable3">
              <el-option
                v-for="item in typeData3"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="标题：" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="发表日期：" prop="publishDate">
        <div class="block">
          <el-date-picker
            v-model="ruleForm.publishDate"
            type="date"
            placeholder="选择日期"
            value-format="yyyy-MM-dd">
          </el-date-picker>
        </div>
      </el-form-item>
      <el-row>
        <el-col :span="8">
          <el-form-item label="起止页码：" prop="page1">
            <el-input v-model="ruleForm.page1"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="1" style="margin-left: -45px;"><div class="divide-text">至</div></el-col>
        <el-col :span="8" style="margin-left: -85px;">
          <el-form-item prop="page2">
            <el-input v-model="ruleForm.page2" class="my-input"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="会议名称：" prop="meetName">
        <el-input v-model="ruleForm.meetName"></el-input>
      </el-form-item>
      <el-form-item label="会议日期：" prop="meetDate">
        <div class="block">
          <el-date-picker
            v-model="ruleForm.meetDate"
            type="daterange"
            align="right"
            unlink-panels
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd">
            <!-- @change="dateFormat" -->
          </el-date-picker>
        </div>
      </el-form-item>
      <el-form-item label="会议地点：" prop="meetPlace">
        <el-input v-model="ruleForm.meetPlace"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {getCookie,delCookie,setCookie} from '@/api/js/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default {
    name: 'tabMpaper',
    props: ["row"],
    data() {
      var type2Validate = (rule, value, callback) => {
        console.log(value)
        if(!this.isDisable2 && value == null){
          callback(new Error("请输入分类"));
        }else {
          callback();
        }
      };
      var type3Validate = (rule, value, callback) => {
        console.log(value)
        if(!this.isDisable3 && value == null){
          callback(new Error("请输入级别"));
        }else {
          callback();
        }
      };
      var page1Validate = (rule, value, callback) => {
        // console.log(value)
        if (parseInt(value) < 1) {
          callback(new Error('请输入正确的起始页码'));
        } else if(parseInt(value) > parseInt(this.ruleForm.page2)) {
          callback(new Error('起止页码不能小于结束页码'));
        }else {
          callback();
        }
      };
      return {
        isDisable2: true,
        isDisable3: true,
        typeData2: [],
        typeData3: [],
        typeOption1: [
          { value: 'SCI', label: 'SCI' },
          { value: 'EI', label: 'EI' },
          { value: '其他', label: '其他' }
        ],
        typeOption21: [
          { value: 'CCF', label: 'CCF' },
        ],
        typeOption22: [
          { value: 'CCF', label: 'CCF' },
          { value: 'JCR', label: 'JCR' },
          { value: '中科院分区', label: '中科院分区' },
        ],
        typeOption31: [
          { value: 'A类', label: 'A类' },
          { value: 'B类', label: 'B类' },
          { value: 'C类', label: 'C类' },
          { value: 'unRank', label: 'unRank' },
        ],
        typeOption32: [
          { value: '1区', label: '1区' },
          { value: '2区', label: '2区' },
          { value: '3区', label: '3区' },
          { value: '4区', label: '4区' },
        ],
        ruleForm: {
          type1: '',
          type2: '',
          type3: '',
          title: '',
          publishDate: '',
          page1: '',
          page2: '',
          meetName: '',
          meetDate: '',
          meetPlace: ''
        },
        rules: {
          type1: [{ required: true, message: '请输入收录', trigger: 'change'}],
          type2: [{validator: type2Validate, trigger: 'blur'}],
          type3: [{validator: type3Validate, trigger: 'blur'}],
          title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
          publishDate: [{ required: true, message: '请选择发表日期', trigger: 'blur', type: 'string' }],
          page1: [{ validator: page1Validate, trigger: 'blur' }],
          meetName: [{ required: true, message: '请输入会议名称', trigger: 'blur' }],
          meetDate: [{ required: true, message: '请选择起止日期', trigger: 'blur' }],
          meetPlace: [{ required: true, message: '请输入会议地点', trigger: 'blur' }]
        }
      }
    },
    created () {
      var _this = this
      // console.log(_this.row)
      if(_this.row != null) {
        _this.ruleForm.type1 = _this.row.mpaperType1
        _this.ruleForm.type2 = _this.row.mpaperType2
        _this.ruleForm.type3 = _this.row.mpaperType3
        _this.ruleForm.title = _this.row.mpaperTitle
        _this.ruleForm.publishDate = _this.row.mpaperPublishDate
        _this.ruleForm.page1 = _this.row.mpaperPage1
        _this.ruleForm.page2 = _this.row.mpaperPage2
        _this.ruleForm.meetName = _this.row.mpaperMeetName
        _this.ruleForm.meetPlace = _this.row.mpaperMeetPlace
        var date = []
        date[0] = new Date(_this.row.mpaperMeetDate1);
        date[1] = new Date(_this.row.mpaperMeetDate2);
        _this.ruleForm.meetDate = date
      }
      // console.log(_this.ruleForm)
    },
    methods: {
      submitMsg () {
        // console.log("intoMpaperSubmit")
        var data = []
        this.$refs.ruleForm.validate((valid) => {
          // console.log("IN")
          if(valid){
            // console.log("path1")
            var _this = this.ruleForm
            var obj = {}
            obj.type1 = _this.type1
            obj.type2 = _this.type2
            obj.type3 = _this.type3
            obj.title = _this.title
            obj.publishDate = _this.publishDate
            obj.page1 = _this.page1
            obj.page2 = _this.page2
            obj.meetName = _this.meetName
            // console.log(this.ruleForm.meetDate)
            var d1 = new Date(_this.meetDate[0])
            var d2 = new Date(_this.meetDate[1])
            obj.meetDate1 = d1.getFullYear() + '-' + (d1.getMonth() + 1) + '-' + d1.getDate();
            obj.meetDate2 = d2.getFullYear() + '-' + (d2.getMonth() + 1) + '-' + d2.getDate();
            obj.meetPlace = _this.meetPlace
            // console.log(obj)
            data = obj
          }else{
            // console.log('path2');
            data = null
          }
        })
        // console.log("OUT")
        return data
      },
      resetMsg () {
        this.$refs.ruleForm.resetFields();
      },
      changeType1 (val) {
        // console.log(val)
        var _this = this
        _this.ruleForm.type2 = ''
        _this.ruleForm.type3 = ''
        _this.isDisable3 = true
        if(val != "其他"){
          _this.isDisable2 = false
          if(val === "SCI")
            _this.typeData2 = _this.typeOption22
          else if(val === "EI")
            _this.typeData2 = _this.typeOption21
        }else {
          _this.isDisable2 = true
        }
      },
      changeType2 (val) {
        // console.log(val)
        var _this = this
        _this.ruleForm.type3 = ''
        this.isDisable3 = false
        if(val === "CCF")
          _this.typeData3 = _this.typeOption31
        else if(val === "JCR" || val === "中科院分区")
          _this.typeData3 = _this.typeOption32
      },
      dateFormat (val) {
        this.ruleForm.meetDate1 = val[0].toString()
        this.ruleForm.meetDate2 = val[1].toString()
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
.divide-text {
  margin-left: 60px;
  text-align: center;
  line-height: 40px;
  color: rgb(96,98,102);
  font-size: 14px;
}
</style>
