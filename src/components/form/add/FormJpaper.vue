<template>
  <div id="tabJpaper">
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
            <el-select v-model="ruleForm.type2" placeholder="请选择分类" @change="changeType2" :disabled="isDisable2">
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
      <el-form-item label="期刊名称：" prop="paperName">
        <el-input v-model="ruleForm.paperName"></el-input>
      </el-form-item>
      <el-form-item label="状态：" prop="status">
        <el-radio-group v-model="ruleForm.status">
          <el-radio label="已发表"></el-radio>
          <el-radio label="已接收"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="发表日期：" prop="publishDate">
        <el-date-picker
          v-model="ruleForm.publishDate"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </el-form-item>
      <el-row>
        <el-col :span="12">
          <el-form-item label="卷号：" prop="reel">
            <el-input v-model="ruleForm.reel"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="期号：" prop="issue">
            <el-input v-model="ruleForm.issue"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
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
      <el-form-item label="DOI：" prop="doi">
        <el-input v-model="ruleForm.doi"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import {getCookie,delCookie,setCookie} from '@/api/js/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default {
    name: 'tabJpaper',
    props: ["row"],
    data() {
      var type2Validate = (rule, value, callback) => {
        // console.log(value)
        if(!this.isDisable2 && value == null){
          callback(new Error("请输入分类"));
        }else {
          callback();
        }
      };
      var type3Validate = (rule, value, callback) => {
        // console.log(value)
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
        // row: [],
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
          paperName: '',
          status: '',
          publishDate: '',
          reel: '',
          issue: '',
          page1: '',
          page2: '',
          doi: ''
        },
        rules: {
          type1: [{ required: true, message: '请输入收录', trigger: 'change'}],
          type2: [{validator: type2Validate, trigger: 'blur'}],
          type3: [{validator: type3Validate, trigger: 'blur'}],
          title: [{ required: true, message: '请输入标题', trigger: 'blur' }],
          paperName: [{ required: true, message: '请输入期刊名称', trigger: 'blur' }],
          publishDate: [{ required: true, message: '请选择发表日期', trigger: 'blur', type: 'string'}],
          reel: [{ required: true, message: '请输入卷号', trigger: 'blur' }],
          issue: [{ required: true, message: '请输入期号', trigger: 'blur' }],
          page1: [
            { required: true, message: '请输入开始页码', trigger: 'blur' },
            { validator: page1Validate, trigger: 'blur' }],
          page2: [{ required: true, message: '请输入结束页码', trigger: 'blur' }]
        }
      }
    },
    created () {
      var _this = this
      console.log(_this.row)
      if(_this.row != null) {
        _this.ruleForm.type1 = _this.row.jpaperType1
        _this.ruleForm.type2 = _this.row.jpaperType2
        _this.ruleForm.type3 = _this.row.jpaperType3
        _this.ruleForm.title = _this.row.jpaperTitle
        _this.ruleForm.paperName = _this.row.jpaperPaperName
        _this.ruleForm.status = _this.row.jpaperStatus
        _this.ruleForm.publishDate = _this.row.jpaperPublishDate
        _this.ruleForm.reel = _this.row.jpaperReel
        _this.ruleForm.issue = _this.row.jpaperIssue
        _this.ruleForm.page1 = _this.row.jpaperPage1
        _this.ruleForm.page2 = _this.row.jpaperPage2
        _this.ruleForm.doi = _this.row.jpaperDoi
        _this.ruleForm.review = _this.row.review
      }
      // _this.isDisable2 = false
      // _this.isDisable3 = false
      // console.log(_this.ruleForm)
    },
    methods: {
      submitMsg () {
        var data = []
        this.$refs.ruleForm.validate((valid) => {
          // console.log("IN")
          if(valid){
            // console.log("path1")
            //获取内容
            var _this = this.ruleForm
            var obj = {}
            obj.type1 = _this.type1
            obj.type2 = _this.type2
            obj.type3 = _this.type3
            obj.title = _this.title
            obj.paperName = _this.paperName
            obj.status = _this.status
            obj.publishDate = _this.publishDate
            obj.reel = _this.reel
            obj.issue = _this.issue
            obj.page1 = _this.page1
            obj.page2 = _this.page2
            obj.doi = _this.doi
            obj.review = _this.review
            console.log(obj)
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
      }
    }
  }
</script>

<style scoped>
.el-button {
  float:right;
}
.divide-text {
  margin-left: 60px;
  text-align: center;
  line-height: 40px;
  color: rgb(96,98,102);
  font-size: 14px;
}
</style>
