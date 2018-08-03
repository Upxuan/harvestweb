<template>
  <div>
     
  
 <!-- 上传 -->
<!-- <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size = "small"> -->
   <!-- <el-form-item label="成果全文" prop="delivery">
    <el-upload
  class="upload-demo"
  action="https://jsonplaceholder.typicode.com/posts/"
  :on-preview="handlePreview"
  :on-remove="handleRemove"
  :before-remove="beforeRemove"
  multiple
  :limit="3"
  :on-exceed="handleExceed"
  :file-list="fileList"> -->
 <!--  <el-button size="small" type="primary">点击上传</el-button>
  <div slot="tip" class="el-upload__tip">只能上传PDF文件</div>
</el-upload> -->
  <!-- </el-form-item> -->
  
  <el-form-item label="论文类别" prop="resource" required>
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="特邀报告"></el-radio>
      <el-radio label="分组报告"></el-radio>
      <el-radio label="墙报展示"></el-radio>
    </el-radio-group>
  </el-form-item>
   <el-form-item label="标题" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="摘要" prop="delivery">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item label="关键词" prop="delivery">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="语言" prop="resource">
    <el-radio-group v-model="ruleForm.resource">
      <el-radio label="中文"></el-radio>
      <el-radio label="外文"></el-radio>
    </el-radio-group>
  </el-form-item>
  <el-form-item label="会议名称" prop="resource">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="会议组织者" prop="delivery">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  

   <el-form-item label="会议日期" required>
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
   <el-form-item label="发表日期" required>
    <div class="block">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
  </el-form-item>
  
 
   <el-form-item label="起止页码" prop="delivery">
    <div class="block">
    
  </div>
  </el-form-item>
  <el-form-item label="国家或地区" prop="resource">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="城市" prop="delivery">
    <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
   <el-form-item label="文章号" prop="delivery">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
   <el-form-item label="DOI" prop="delivery">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="收录情况" prop="type">
    <el-checkbox-group v-model="ruleForm.type">
      <el-checkbox label="SCIE" name="type"></el-checkbox>
      <el-checkbox label="SSCI" name="type"></el-checkbox>
      <el-checkbox label="EI" name="type"></el-checkbox>
      <el-checkbox label="ISTP" name="type"></el-checkbox>
       <el-checkbox label="北大中文核心期刊" name="type"></el-checkbox>
        <el-checkbox label="其他" name="type"></el-checkbox>
    </el-checkbox-group>
  </el-form-item>
  <el-form-item label="基金标注" prop="delivery">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="引用次数" prop="delivery">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item label="备注" prop="delivery">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item label="全文链接" prop="delivery">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
<zuozhexiangqing></zuozhexiangqing>

</div>


</template>
<script>
	import zuozhexiangqing from './zuozhexiangqing'

  
  export default {
  	name:'Qikan',
  	components:
  	{
  		zuozhexiangqing
  	},
    data() {

      return {
        // fileList: []

      
      

           pickerOptions2: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value:'qikan',
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
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写活动形式', trigger: 'blur' }
          ]
        }
      };
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

.index-wrap {
 
  margin-right:100px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: -780px;
  margin-left:230px;
  font-family: Hiragino Sans GB;
  
  
}
.all-title {
 height:40px;
  border-bottom: 1px dashed #DCDFE6;
}

.smallfont{
  font-size:14px;

}
.el-button{
  float:right;
}
.el-menu{
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
.manual-wrap {
  /*width: 1200px;*/
  margin: 0 auto;
  overflow: hidden;
  margin-top: 20px;
  margin-left:30px;
  margin-right:30px;
  font-family: Hiragino Sans GB;

}
.manual-wrap1{
   margin: 0 auto;
  overflow: hidden;
  margin-top: 6px;
  margin-left:30px;
  margin-right:30px;
}
.manual-wrap p {
  float: left;
}
.base-msg {
  margin: 12px 0 0 50px ;
  line-height: 12px;
}
.base-msg-all{
  margin-left: 70px;
  width:800px;
  margin-top:15px;
}
.base-msg-some{
  margin-left: 70px;
  width:400px;
  margin-top:25px;
}

.main-font {
  font-size: 17px;
  
  color: #000;
  font-family: Hiragino Sans GB;

}
.all-title {
 height:40px;
  border-bottom: 1px dashed #DCDFE6;
}
.all-title p {
  margin-top: 6px;
}
.redfont {
  color: red;
}
.all-title button {
  float: right;
  /*background: rgb(233,93,0)*/;
  display: inline-block;
  padding: 5px 30px;
  margin: 0 10px 5px 10px;
  border:none;
  border-radius:5px;
  color: #fff;
}


</style>
