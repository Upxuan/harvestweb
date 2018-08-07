<template>
  <div id="sysaddmanual">
    <div class="index-wrap">
      <div class = "all-title">
        <p class="main-font">基本信息<span class="smallfont"> (<span class="redfont"> * </span>为必填项）</span></p>
      </div>
      <div class = "base-msg-all">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" size="small">
          <el-form-item label="类别"  required>
            <el-select v-model="value" placeholder="请选择类别" @change()>
              <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
  import TablePatent from '../table/TabPatent'
  import TableSubject from '../table/TabSubject'
  import TableMpaper from '../table/TabMpaper'
  export default{
    name:'sysaddmanual',
    components:{
      TablePatent,
      TableSubject,
      TableMpaper
    },
    data()
    {
      return{
        value:'patent',
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
            value: 'project',
            label: '项目'
          },
          {
            value: 'patent',
            label: '专利'
          },
          {
            value: 'subject',
            label: '学术专著'
          },
          {
            value:'software',
            label:'软件著作权'
          }
        ],
      }
    },
    methods:{
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
  width:800px;
  margin-top:15px;
}
</style>
