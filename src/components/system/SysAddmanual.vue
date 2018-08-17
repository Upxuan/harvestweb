<template>
  <div id="sysaddmanual">
    <div class = "all-title">
      
      <p class="main-font">基本信息<span class="smallfont"> (<span class="redfont"> * </span>为必填项）</span> 
      <el-button  type="primary" size="small" @click="submitForm('ruleForm')">立即创建</el-button>
      <el-button @click="resetForm('ruleForm')" size="small" type="danger" style="margin-right: 15px;">重置</el-button></p>
    </div>
    <div class = "base-msg-all">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size = "small">
        <el-form-item label="类别：" required>
          <el-select v-model="value" placeholder="请选择类别" @change="changed">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <keep-alive>
          <component :is='nowModel' ></component>
        </keep-alive>
      </el-form>
    </div><br>
    <div class = "all-title">
      <p class="main-font">作者详情<a href="/HelloWorld"></a></p>
    </div><br>
    <table-editor></table-editor>

  </div>
</template>

<script>
  import TableEditor from '../table/tabEditor'
  import TableJpaper from '../table/TabJpaper'
  import TableMpaper from '../table/TabMpaper'
  import TablePatent from '../table/TabPatent'
  import TableProject from '../table/TabProject'
  import TableSoftware from '../table/TabSoftware'
  import TableSubject from '../table/TabSubject'
  import TableMonographs from '../table/TabMonographs'
  export default{
    name:'sysaddmanual',
    components:{
      TableEditor,
      'jpaper': TableJpaper,
      'mpaper': TableMpaper,
      'patent': TablePatent,
      'project': TableProject,
      'software': TableSoftware,
      'subject': TableSubject,
      'monographs': TableMonographs
    },
    data()
    {
      return{
        ruleForm: {
          pass: '',
          checkPass: '',
          age: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入标题', trigger: 'blur' },
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
        },
        nowModel:'jpaper',
        value:'jpaper',
        options: [
          {
            value: 'jpaper',
            label: '期刊论文'
          },
          {
            value: 'mpaper',
            label: '会议论文'
          },
          {
            value: 'patent',
            label: '专利'
          },
          {
            value: 'project',
            label: '项目'
          },
          {
            value:'software',
            label:'软件著作权'
          },
          {
            value: 'subject',
            label: '学术专著'
          },
          {
            value:'monographs',
            label:'公共事务'
          }
        ],
      }
    },

    methods:{
      changed(){
        this.nowModel = this.value;
      }
    }
  }
</script>

<style scoped>
.gap{
  margin-right: 10px;
}
.el-button{
  float:right;
}
.all-title {
  height:40px;
  border-bottom: 1px dashed #DCDFE6;
}
.smallfont{
  font-size:14px;
}
.main-font {
  font-size: 17px;
  color: #000;
  font-family: Hiragino Sans GB;
}
.redfont {
  color: red;
}
.base-msg-all{
  margin-left: 70px;
  width: 800px;
  margin-top: 15px;
}
</style>
