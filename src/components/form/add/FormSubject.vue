<template>
  <div id="tabSubject">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm" >
      <el-form-item label="专著题目：" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="丛书名称：" prop="bookName" >
        <el-input v-model="ruleForm.bookName"></el-input>
      </el-form-item>
      <el-form-item label="出版状态：" prop="status">
        <el-radio-group v-model="ruleForm.status">
          <el-radio label="已出版"></el-radio>
          <el-radio label="待出版"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="ISBN号：" prop="isbn" >
        <el-input v-model="ruleForm.isbn"></el-input>
      </el-form-item>
      <el-form-item label="出版社：" prop="publish">
        <el-input v-model="ruleForm.publish"></el-input>
      </el-form-item>
      <el-form-item label="出版日期：" prop="publishDate">
        <el-date-picker
          v-model="ruleForm.publishDate"
          type="date"
          placeholder="选择日期"
          value-format="yyyy-MM-dd">
        </el-date-picker>
      </el-form-item>
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
    name: 'tabSubject',
    props: ["row"],
    data() {
      return{
        ruleForm:{
          title: '',
          bookName: '',
          status: '',
          isbn: '',
          publish: '',
          publishDate: '',
          doi: ''
        },
        rules: {
          title: [{ required: true, message: '请输入专著题目', trigger: 'blur' }],
          publish: [{ required: true, message: '请输入出版社', trigger: 'blur' }],
          publishDate: [{ required: true, message:'请输入出版日期', trigger: 'blur', type: 'string' }]
        }
      }
    },
    created () {
      var _this = this
      console.log(_this.row)
      if(_this.row != null) {
        _this.ruleForm.title = _this.row.subjectTitle
        _this.ruleForm.bookName = _this.row.subjectBookName
        _this.ruleForm.status = _this.row.subjectStatus
        _this.ruleForm.isbn = _this.row.subjectISBN
        _this.ruleForm.publish = _this.row.subjectPublish
        _this.ruleForm.publishDate = _this.row.subjectPublishDate
        _this.ruleForm.doi = _this.row.subjectDOI
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
            obj.bookName = _this.bookName
            obj.status = _this.status
            obj.isbn = _this.isbn
            obj.publish = _this.publish
            obj.publishDate = _this.publishDate
            obj.doi = _this.doi
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
.myfont {
  color:rgb(96,98,102);
}
</style>
