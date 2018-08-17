<template>
  <div id="tabmpaper">
    <el-form-item label="论文类别：" prop="resource" required>
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="特邀报告"></el-radio>
        <el-radio label="分组报告"></el-radio>
        <el-radio label="墙报展示"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="标题：" prop="name">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="摘要：" prop="delivery">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item label="关键词：" prop="delivery">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="语言：" prop="resource">
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="中文"></el-radio>
        <el-radio label="外文"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="会议名称：" prop="resource">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="会议组织者：" prop="delivery">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="会议日期：" required>
      <div class="block">
        <el-date-picker
          v-model="value7"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions2">
        </el-date-picker>
      </div>
    </el-form-item>
    <el-form-item label="发表日期：" required>
      <div class="block">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期：">
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
    <el-form-item label="国家或地区：" prop="resource">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="城市：" prop="delivery">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="文章号：" prop="delivery">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="DOI：" prop="delivery">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="收录情况：" prop="type">
      <el-checkbox-group v-model="ruleForm.type">
        <el-checkbox label="SCIE" name="type"></el-checkbox>
        <el-checkbox label="SSCI" name="type"></el-checkbox>
        <el-checkbox label="EI" name="type"></el-checkbox>
        <el-checkbox label="ISTP" name="type"></el-checkbox>
        <el-checkbox label="北大中文核心期刊" name="type"></el-checkbox>
        <el-checkbox label="其他" name="type"></el-checkbox>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="基金标注：" prop="delivery">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="引用次数：" prop="delivery">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="备注：" prop="delivery">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item label="全文链接：" prop="delivery">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <!-- <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item> -->
  </div>
</template>

<script scoped>
export default{
  name:'Huiyi',
  data() {
    return {
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
      value6: '',
      value7: '',
      value1: '',
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      // rules: {
      //   name: [
      //     { required: true, message: '请输入活动名称', trigger: 'blur' },
      //     { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }],
      //   region: [{ required: true, message: '请选择活动区域', trigger: 'change' }],
      //   date1: [{ type: 'date', required: true, message: '请选择日期', trigger: 'change' }],
      //   date2: [{ type: 'date', required: true, message: '请选择时间', trigger: 'change' }],
      //   type: [{ type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }],
      //   resource: [{ required: true, message: '请选择活动资源', trigger: 'change' }],
      //   desc: [{ required: true, message: '请填写活动形式', trigger: 'blur' }]
      // }
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

</style>
