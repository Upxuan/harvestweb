<template>
  <div id="tabjpaper">
    <el-form-item label="标题：" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="摘要：" prop="abstract">
      <el-input type="textarea" v-model="ruleForm.abstract"></el-input>
    </el-form-item>
    <el-form-item label="关键词：" prop="keyword" >
      <el-input v-model="ruleForm.keyword" placeholder="用分号分割"></el-input>
    </el-form-item>
    <el-form-item label="语言：" prop="language">
      <el-radio-group v-model="ruleForm.language">
        <el-radio label="中文"></el-radio>
        <el-radio label="外文"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="期刊名称：" prop="jpapername" required>
      <el-input v-model="ruleForm.jpapername"></el-input>
    </el-form-item>
    <el-form-item label="状态：" prop="state">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="已发表"></el-radio>
        <el-radio label="已接受"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="发表日期：" required>
      <div class="block">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
    </el-form-item>
    <el-form-item label="起止页码：">
      <el-col :span="6">
        <el-input></el-input>
      </el-col>
      <el-col class="line" :span="0.5">&nbsp&nbsp至&nbsp&nbsp</el-col>
      <el-col :span="6">
        <el-input></el-input>
      </el-col>
    </el-form-item>
    <el-form-item label="文章号：" prop="number">
      <el-input v-model="ruleForm.number"></el-input>
    </el-form-item>
    <el-form-item label="DOI：" prop="doi">
      <el-input v-model="ruleForm.doi"></el-input>
    </el-form-item>
    <el-form-item label="收录情况：" prop="record">
      <el-checkbox-group v-model="ruleForm.record">
        <el-checkbox label="SCIE" name="type"></el-checkbox>
        <el-checkbox label="SSCI" name="type"></el-checkbox>
        <el-checkbox label="EI" name="type"></el-checkbox>
        <el-checkbox label="ISTP" name="type"></el-checkbox>
        <el-checkbox label="北大中文核心期刊" name="type"></el-checkbox>
        <el-checkbox label="其他" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form :model="ruleForm" :inline="true" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size = "small">
      <el-form-item   class="demo-form-inline" label="卷号："  required prop="reel">
        <el-input v-model="ruleForm.reel"></el-input>
      </el-form-item>
      <el-form-item   label="期号："  required prop="issue">
        <el-input v-model="ruleForm.issue"></el-input>
      </el-form-item>
    </el-form>
    <el-form-item label="基金标注：" prop="fund">
      <el-input v-model="ruleForm.fund"></el-input>
    </el-form-item>
    <el-form-item label="引用次数：" prop="quote">
      <el-input v-model="ruleForm.quote"></el-input>
    </el-form-item>
    <el-form-item label="备注：" prop="remark">
      <el-input type="textarea" v-model="ruleForm.remark"></el-input>
    </el-form-item>
    <el-form-item label="全文链接：" prop="link">
      <el-input v-model="ruleForm.link"></el-input>
    </el-form-item>
    <!-- <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button type="danger" style="margin-right: 15px;" @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item> -->
  </div>
</template>

<script>
  import TableEditor from '../table/tabEditor'
  export default {
    name:'tabjpaper',
    components:{
      TableEditor
    },
    data() {
      return {
        rules: {
          name: [
            { required: true, message: '请输入标题', trigger: 'blur' }
          ],
          jpapername: [
            { required: true, message: '请输入期刊名称', trigger: 'blur' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          reel: [
            { type: 'array', required: true, message: '请输入卷号', trigger: 'blur' }
          ],
          issue: [
            {  required: true, message: '请输入期号', trigger: 'blur' }
          ],
          // resource: [
          //   { required: true, message: '请选择', trigger: 'blur' }
          // ],
        },
        pickerOptions2: {
          shortcuts: [
            {
              text: '最近一周',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                picker.$emit('pick', [start, end]);
              }
            },
            {
            text: '最近一个月',
            onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                picker.$emit('pick', [start, end]);
              }
            },
            {
              text: '最近三个月',
              onClick(picker) {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                picker.$emit('pick', [start, end]);
              }
            }
          ]
        },
        value:'qikan',
        value6: '',
        value7: '',
        value1: '',
        ruleForm: {
          name: '',
          jpapername:'',
          date1: '',
          reel:'',
          issue:'',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
      
      }
    },
    methods: {
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
      },
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
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
.demo-form-inline{
  width:300px;
}
</style>
