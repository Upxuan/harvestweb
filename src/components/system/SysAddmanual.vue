<template>
  <div id="sysAddmanual">
    <div class = "all-title">
      <p class="main-font">
        <span>基本信息</span>
        <span class="smallfont"> (<span class="redfont"> * </span>为必填项）</span> 
        <el-button v-if="this.harReturnRouter == 'Myaudit'" type="primary" size="small" @click="submitAgainForm(2)">重新提交</el-button>
        <el-button v-else-if="this.row != null" type="primary" size="small" @click="updateForm(1)">更新成果</el-button>
        <el-button v-else type="primary" size="small" @click="submitForm(0, 0)">录入成果</el-button>
        <el-button v-if="this.row != null" type="warning" size="small" style="margin-right: 15px;" @click="turnBack()">返回</el-button>
        <el-button v-else type="danger" size="small" style="margin-right: 15px;" @click="resetForm()">重置</el-button>
      </p>
    </div>
    <div class = "base-msg-all">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm" >
        <el-form-item label="类别：" required>
          <el-select v-model="value" placeholder="请选择类别" @change="selectGet" :disabled="isDisable">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <keep-alive>
          <component :is='nowModel' ref="msg" :row="row"></component>
        </keep-alive>
      </el-form>
    </div><br>
    <table-editor ref="authorsMsg" :row="row"></table-editor>
  </div>
</template>

<script>
  import TableEditor from '../form/add/formEditor'
  import TableJpaper from '../form/add/FormJpaper'
  import TableMpaper from '../form/add/FormMpaper'
  import TablePatent from '../form/add/FormPatent'
  import TableProject from '../form/add/FormProject'
  import TableSubject from '../form/add/FormSubject'
  import TableSoftware from '../form/add/FormSoftware'
  import TableAffairs from '../form/add/FormAffairs'
  import myapi from '@/api/myapi.js'
  export default {
    name: 'sysAddmanual',
    components: {
      TableEditor,
      'jpaper': TableJpaper,
      'mpaper': TableMpaper,
      'patent': TablePatent,
      'project': TableProject,
      'subject': TableSubject,
      'software': TableSoftware,
      'affairs': TableAffairs
    },
    data () {
      return {
        row: {},
        harReturnRouter: '',
        isDisable: false,
        ruleForm: {},
        rules: {},
        nowModel: 'jpaper',
        value: 'jpaper',
        authors: [],
        authorsdata: [],
        jpaper: [],
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
    created () {
      var _this = this
      if(_this.$type == 1)
        _this.options = _this.options2
      else if(_this.$type == 2 || _this.$type == 0)
        _this.options = _this.options1
      
      //管理员端的跳转处理
      _this.harReturnRouter = _this.$route.params.harReturnRouter//路由跳转获得的信息
      _this.row = _this.$route.params.row
      console.log(_this.row)
      // console.log(_this.harReturnRouter)

      if(_this.row != null) {
        //传值给子组件
        _this.isDisable = true
        if(_this.row.jpaperId != null ) {
          _this.value = 'jpaper'//select的值jpaper
          _this.nowModel = 'jpaper'
        }else if(_this.row.mpaperId != null ) {
          _this.value = 'mpaper'
          _this.nowModel = 'mpaper'
        }else if(_this.row.patentId != null ) {
          _this.value = 'patent'
          _this.nowModel = 'patent'
        }else if(_this.row.projectId != null ) {
          _this.value = 'project'
          _this.nowModel = 'project'
        }else if(_this.row.subjectId != null ) {
          _this.value = 'subject'
          _this.nowModel = 'subject'
        }else if(_this.row.softwareId != null ) {
          _this.value = 'software'
          _this.nowModel = 'software'
        }else if(_this.row.affairsId != null ) {
          _this.value = 'affairs'
          _this.nowModel = 'affairs'
        }
      }
    },
    methods:{
      selectGet (value) {
        this.nowModel = this.value
      },
      submitForm (handleType, harId) {//handleType=1时更新，handleType=0时插入 ,handleType=2时再次提交(主要更新review) //只有更新时有用
        if(this.judgeLogin()){//验证用户身份是否过时
          var _this = this
          // console.log(_this.nowModel)
          _this.authorsdata = _this.$refs.authorsMsg.tableData
          if(_this.authorsdata == null)
            this.$message({ type: 'error', message: '请输入作者信息' });
          else {
            this.handleAuthors()//处理作者，处理过的数据放到this.authors[]
            // console.log(this.authors)
            var obj = _this.$refs.msg.submitMsg()
            if(obj != null) {
              // console.log(obj)
              // console.log("review:" + obj.review)
              var source = 0
              if(obj.review != null) source = 1 //由review得到source
              // console.log("source:" + source)
              if(_this.nowModel === "jpaper"){//**********************************************.jpaper*******
                //获取成果数据 与后端通信
                var Params = {
                  handleType: handleType,
                  source: source,
                  harId: harId,
                  userType: this.$type,
                  userId: this.$userInfo.id,
                  authorsModels: _this.authors,
                  jpaperModel: {
                    jpaperType1: obj.type1,
                    jpaperType2: obj.type2,
                    jpaperType3: obj.type3,
                    jpaperTitle: obj.title,
                    jpaperPaperName: obj.paperName,
                    jpaperStatus: obj.status,
                    jpaperPublishDate: obj.publishDate,
                    jpaperReel: obj.reel,
                    jpaperIssue: obj.issue,
                    jpaperPage1: obj.page1,
                    jpaperPage2: obj.page2,
                    jpaperDoi: obj.doi
                  }
                }
                console.log(Params)
                this.$ajax({
                  url: '/api/manualAddJpaper',
                  method: 'post',
                  contentType: "application/json; charset=utf-8",
                  dataType: "json",
                  data: Params
                }).then( res => {
                  console.log(res)
                  if(res.data.errCode == 20){
                    if(handleType === 0){
                      this.$message({ type:'success', message:'成果录入成功'})
                      this.resetForm()// 成功的话表格重置一下
                    }else{
                      var msg = ''
                      if(handleType === 1) msg='成果更新成功'
                      else msg='重新提交成功'
                      this.$message({ type:'success', message:msg})
                      this.turnBack()
                    } 
                  }else if(res.data.errCode == 21){
                    this.$message({ type: 'error', message: '操作失败' });
                  }
                }).catch( error => {
                  console.log(error);
                })
              }else if(_this.nowModel === "mpaper"){//****************************************.mpaper*******
                var Params = {
                  handleType: handleType,
                  source: source,
                  harId: harId,
                  userType: this.$type,
                  userId: this.$userInfo.id,
                  authorsModels: _this.authors,
                  mpaperModel: {
                    mpaperType1: obj.type1,
                    mpaperType2: obj.type2,
                    mpaperType3: obj.type3,
                    mpaperTitle: obj.title,
                    mpaperPublishDate: obj.publishDate,
                    mpaperPage1: obj.page1,
                    mpaperPage2: obj.page2,
                    mpaperMeetName: obj.meetName,
                    mpaperMeetDate1: obj.meetDate1,
                    mpaperMeetDate2: obj.meetDate2,
                    mpaperMeetPlace: obj.meetPlace,
                  }
                }
                console.log(Params)
                this.$ajax({
                  url: '/api/manualAddMpaper',
                  method: 'post',
                  contentType: "application/json; charset=utf-8",
                  dataType: "json",
                  data: Params
                }).then( res => {
                  console.log(res)
                  if(res.data.errCode == 20){
                    if(handleType === 0){
                      this.$message({ type:'success', message:'成果录入成功'})
                      this.resetForm()// 成功的话表格重置一下
                    }else {
                      var msg = ''
                      if(handleType === 1) msg='成果更新成功'
                      else msg='重新提交成功'
                      this.$message({ type:'success', message:msg})
                      this.turnBack()
                    } 
                  }else if(res.data.errCode == 21){
                      this.$message({ type: 'error', message: '操作失败' });
                  }
                })
              }else if(_this.nowModel === "patent"){//****************************************.patent*******
                var Params = {
                  handleType: handleType,
                  source: source,
                  harId: harId,
                  userType: this.$type,
                  userId: this.$userInfo.id,
                  authorsModels: _this.authors,
                  patentModel: {
                    patentTitle: obj.title,
                    patentNum: obj.num,
                    patentNoteNum: obj.noteNum,
                    patentUnit: obj.unit,
                    patentType: obj.type,
                    patentStatus: obj.status,
                    patentApplyDate: obj.applyDate,
                    patentEffectDate1: obj.effectDate1,
                    patentEffectDate2: obj.effectDate2,
                    patentBelong: obj.belong
                  }
                }
                console.log(Params)
                this.$ajax({
                  url: '/api/manualAddPatent',
                  method: 'post',
                  contentType: "application/json; charset=utf-8",
                  dataType: "json",
                  data: Params
                }).then( res => {
                  console.log(res)
                  if(res.data.errCode == 20){
                    if(handleType === 0){
                      this.$message({ type:'success', message:'成果录入成功'})
                      this.resetForm()// 成功的话表格重置一下
                    }else {
                      var msg = ''
                      if(handleType === 1) msg='成果更新成功'
                      else msg='重新提交成功'
                      this.$message({ type:'success', message:msg})
                      this.turnBack()
                    } 
                  }else if(res.data.errCode == 21){
                      this.$message({ type: 'error', message: '操作失败' });
                  }
                })
              }else if(_this.nowModel === "project"){//***************************************.project******
                var Params = {
                  handleType: handleType,
                  source: source,
                  harId: harId,
                  userType: this.$type,
                  userId: this.$userInfo.id,
                  authorsModels: _this.authors,
                  projectModel: {
                    projectType: obj.type,
                    projectTitle: obj.title,
                    projectNum: obj.num,
                    projectDate1: obj.date1,
                    projectDate2: obj.date2,
                    projectMoney: obj.money,
                  }
                }
                console.log(Params)
                this.$ajax({
                  url: '/api/manualAddProject',
                  method: 'post',
                  contentType: "application/json; charset=utf-8",
                  dataType: "json",
                  data: Params
                }).then( res => {
                  console.log(res)
                  if(res.data.errCode == 20){
                    if(handleType === 0){
                      this.$message({ type:'success', message:'成果录入成功'})
                      this.resetForm()// 成功的话表格重置一下
                    }else {
                       var msg = ''
                      if(handleType === 1) msg='成果更新成功'
                      else msg='重新提交成功'
                      this.$message({ type:'success', message:msg})
                      this.turnBack()
                    } 
                  }else if(res.data.errCode == 21){
                      this.$message({ type: 'error', message: '操作失败' });
                  }
                })
              }else if(_this.nowModel === "subject"){//***************************************.subject******
                var Params = {
                  handleType: handleType,
                  source: source,
                  harId: harId,
                  userType: this.$type,
                  userId: this.$userInfo.id,
                  authorsModels: _this.authors,
                  subjectModel: {
                    subjectTitle: obj.title,
                    subjectBookName: obj.bookName,
                    subjectStatus: obj.status,
                    subjectISBN: obj.isbn,
                    subjectPublish: obj.publish,
                    subjectPublishDate: obj.publishDate,
                    subjectDOI: obj.doi
                  }
                }
                console.log(Params)
                this.$ajax({
                  url: '/api/manualAddSubject',
                  method: 'post',
                  contentType: "application/json; charset=utf-8",
                  dataType: "json",
                  data: Params
                }).then( res => {
                  console.log(res)
                if(res.data.errCode == 20){
                    if(handleType === 0){
                      this.$message({ type:'success', message:'成果录入成功'})
                      this.resetForm()// 成功的话表格重置一下
                    }else {
                       var msg = ''
                      if(handleType === 1) msg='成果更新成功'
                      else msg='重新提交成功'
                      this.$message({ type:'success', message:msg})
                      this.turnBack()
                    } 
                  }else if(res.data.errCode == 21){
                      this.$message({ type: 'error', message: '操作失败' });
                  }
                })
              }else if(_this.nowModel === "software"){//**************************************.software*****
                var Params = {
                  handleType: handleType,
                  source: source,
                  harId: harId,
                  userType: this.$type,
                  userId: this.$userInfo.id,
                  authorsModels: _this.authors,
                  softwareModel: {
                    softwareName: obj.name,
                    softwareNum: obj.num,
                    softwareAcquireType: obj.acquireType,
                  }
                }
                console.log(Params)
                this.$ajax({
                  url: '/api/manualAddSoftware',
                  method: 'post',
                  contentType: "application/json; charset=utf-8",
                  dataType: "json",
                  data: Params
                }).then( res => {
                  console.log(res)
                  if(res.data.errCode == 20){
                    if(handleType === 0){
                      this.$message({ type:'success', message:'成果录入成功'})
                      this.resetForm()// 成功的话表格重置一下
                    }else {
                      var msg = ''
                      if(handleType === 1) msg='成果更新成功'
                      else msg='重新提交成功'
                      this.$message({ type:'success', message:msg})
                      this.turnBack()
                    } 
                  }else if(res.data.errCode == 21){
                      this.$message({ type: 'error', message: '操作失败' });
                  }
                })
              }else if(_this.nowModel === "affairs"){//***************************************.affairs******
                var Params = {
                  handleType: handleType,
                  source: source,
                  harId: harId,
                  userType: this.$type,
                  userId: this.$userInfo.id,
                  authorsModels: _this.authors,
                  affairsModel: {
                    affairsTitle: obj.title,
                    affairsContent: obj.content,
                    affairsDate1: obj.date1,
                    affairsDate2: obj.date2
                  }
                }
                console.log(Params)
                this.$ajax({
                  url: '/api/manualAddAffairs',
                  method: 'post',
                  contentType: "application/json; charset=utf-8",
                  dataType: "json",
                  data: Params
                }).then( res => {
                  console.log(res)
                  if(res.data.errCode == 20){
                    if(handleType === 0){
                      this.$message({ type:'success', message:'成果录入成功'})
                      this.resetForm()// 成功的话表格重置一下
                    }else {
                       var msg = ''
                      if(handleType === 1) msg='成果更新成功'
                      else msg='重新提交成功'
                      this.$message({ type:'success', message:msg})
                      this.turnBack()
                    } 
                  }else if(res.data.errCode == 21){
                      this.$message({ type: 'error', message: '操作失败' });
                  }
                })
              }
            }
          }
        }
      },
      updateForm (handleType) {
        var _this = this
        // 最好判断下成果信息是否更新否则不用提交
        // _this.authorsdata = _this.$refs.authorsMsg.tableData
        // console.log(JSON.stringify(_this.authorsdata))
        // console.log(JSON.stringify(_this.row.authorsList))
        // if(JSON.stringify(_this.authorsdata) == JSON.stringify(_this.row.authorsList)){
          // this.$message({ type: 'error', message: '请更新作者信息后再提交' });
        // }else {}
        if(this.judgeLogin()){
          var msg = ''
          if(handleType == 1) msg = '确定更新当前成果?'
          else msg = '确定重新提交当前成果?'
          this.$confirm(msg, '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            var harId = 0
            if(_this.nowModel === "jpaper")
              harId = _this.row.jpaperId
            else if(_this.nowModel === "mpaper")
              harId = _this.row.mpaperId
            else if(_this.nowModel === "patent")
              harId = _this.row.patentId
            else if(_this.nowModel === "project")
              harId = _this.row.projectId
            else if(_this.nowModel === "subject")
              harId = _this.row.subjectId
            else if(_this.nowModel === "software")
              harId = _this.row.softwareId
            else if(_this.nowModel === "affairs")
              harId = _this.row.affairsId
            // console.log(harId)
            this.submitForm(handleType, harId)
         	}).catch( () => {});
        }
      },
      submitAgainForm (handleType) {
        this.updateForm(handleType)
      },
      resetForm () {
        if(this.judgeLogin())
          this.$refs.msg.resetMsg()
      },
      turnBack () {
        if(this.judgeLogin()){
          // this.$confirm('确定放弃当前所填信息?', '提示', {
          //   confirmButtonText: '确定',
          //   cancelButtonText: '取消',
          //   type: 'warning'
          // }).then(() => {
            var _this = this
            if(_this.harReturnRouter == "Mharvest")
              _this.$router.push({ path:'/Mharvest'})
            else if(_this.harReturnRouter == "Mharvestcopy")
              _this.$router.push({ path:'/Mharvestcopy'})
            else if(_this.harReturnRouter == "Myaudit")
              _this.$router.push({ path:'/Myaudit'})
            else
              _this.$router.push({ path:'/Index'})
          // });
        }
      },
      handleAuthors () {//作者数据的处理
        var _this = this
        var data = []
        for(let i=0; i<_this.authorsdata.length; i++){
          var obj = {}
          obj.name = _this.authorsdata[i].name
          if(_this.authorsdata[i].degree == "教师"){
            obj.degree = 1
          }else if(_this.authorsdata[i].degree == "学生"){
            obj.degree = 2
          }else if(_this.authorsdata[i].degree == "非实验室人员"){
            obj.degree = 3
          }else{
            obj.degree = 0
          }
          obj.nature1 = _this.authorsdata[i].nature1
          obj.nature2 = _this.authorsdata[i].nature2
          if(!_this.authorsdata[i].nature1) obj.nature1 = false
          if(!_this.authorsdata[i].nature2) obj.nature2 = false
          // console.log(obj)
          data[i] = obj
        }
        _this.authors = data
      },
      findJpaper () {
        myapi.$emit("findJpaperInfo","success")
      }
    }
  }
</script>

<style scoped>
.el-button{
  float: right;
}
.all-title {
  height: 40px;
  border-bottom: 1px dashed #DCDFE6;
}
.smallfont{
  font-size: 14px;
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
