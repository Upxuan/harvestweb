<template>
  <div id="sysAddauto">
    <div class = "all-title">
      <p class="main-font">
        <span>自动录入</span>
        <el-button type="primary" size="small" @click="submitForm()">选择录入</el-button>
        <el-select v-model="value" placeholder="请选择类别" @change="selectGet" size="small">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </p>
    </div>
    <div class = "base-msg-all">
      <keep-alive>
        <component :is='nowModel' ref="msg"></component>
      </keep-alive>
    </div><br>
  </div>
</template>

<script>
  import AddHarJpaper from '@/components/table/harvestAdd/tableAddJpaper'
  import AddHarMpaper from '@/components/table/harvestAdd/tableAddMpaper'
  import AddHarPatent from '@/components/table/harvestAdd/tableAddPatent'
  import AddHarProject from '@/components/table/harvestAdd/tableAddProject'
  import AddHarSubject from '@/components/table/harvestAdd/tableAddSubject'
  import AddHarSoftware from '@/components/table/harvestAdd/tableAddSoftware'
  import AddHarAffairs from '@/components/table/harvestAdd/tableAddAffairs'
  import {getCookie,delCookie,setCookie} from '@/api/js/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default{
    name:'sysAddauto',
    inject: ['reload'],
    components: {
      'jpaper': AddHarJpaper,
      'mpaper': AddHarMpaper,
      'patent': AddHarPatent,
      'project': AddHarProject,
      'subject': AddHarSubject,
      'software': AddHarSoftware,
      'affairs': AddHarAffairs
    },
    data() {
      return {
        nowModel:'jpaper',
        value:'jpaper',
        selections: [],
        options: [],
        options1: [
          { value: 'jpaper', label: '期刊论文' },
          { value: 'mpaper', label: '会议论文' },
          { value: 'patent', label: '专利' },
          { value: 'project', label: '项目' },
          { value: 'subject', label: '学术专著' },
          { value: 'software', label:'软件著作权' },
          { value: 'affairs', label:'公共事务' }
        ],
        options2: [
          { value: 'jpaper', label: '期刊论文' },
          { value: 'mpaper', label: '会议论文' },
          { value: 'patent', label: '专利' },
          { value: 'project', label: '项目' },
          { value: 'subject', label: '学术专著' },
          { value: 'software', label:'软件著作权' }
        ]
      }
    },
    mounted () {
      if(this.$type == 1)
        this.options = this.options2
      else if(this.$type == 2)
        this.options = this.options1
    },
    methods: {
      selectGet (value) {
        this.nowModel = this.value
      },
      submitForm () {
        var _this = this
        //处理selections，使之id变成List数组传值
        _this.selections = this.handleSelections(_this.$refs.msg.selectionData)
        console.log(_this.selections)
        if(_this.selections.length == 0){
          this.$message('请选择要输入的成果');
        } else {
          if(_this.nowModel === "jpaper"){
            this.autoAddHarvest(1)
          }
          else if(_this.nowModel === "mpaper"){
            this.autoAddHarvest(2)
          }
          else if(_this.nowModel === "patent"){
            this.autoAddHarvest(3)
          }
          else if(_this.nowModel === "project"){
            this.autoAddHarvest(4)
          }
          else if(_this.nowModel === "subject"){
            this.autoAddHarvest(5)
          }
          else if(_this.nowModel === "software"){
            this.autoAddHarvest(6)
          }
          else if(_this.nowModel === "affairs"){
            this.autoAddHarvest(7)
          }
        }
      },
      handleSelections (val) {
        var data = []
        for(let i=0; i<val.length; i++){
          let obj = {}
          obj.id = val[i].id
          obj.source = 0
          if(val[i].review != null)
            obj.source = 1
          data[i] = obj
        }
        return data
      }
    }
  }
</script>

<style scoped>
.el-button{
  float: right;
  margin-left: 15px;
}
.el-select {
  float: right;
  width: 125px;
}
.all-title {
  height: 40px;
  border-bottom: 1px dashed #DCDFE6;
}
.main-font {
  font-size: 17px;
  font-family: Hiragino Sans GB;
}
</style>
