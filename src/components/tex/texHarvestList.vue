<template>
  <div id="texHarvestList">
    <div class="content">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="期刊论文" name="1">
          <div v-for="(item, index) in messages.jpaperData.slice((currentPage.jpaperPage-1)*pageSize.jpaperSize,currentPage.jpaperPage*pageSize.jpaperSize)" :key="index">
            <el-card class="box-card mycard" shadow="hover">
              <p class="mytitle">{{ item.jpaperTitle }}</p>
              <p>
                <span class="mydate">{{ item.jpaperPublishDate }}</span>
                <span>-</span>
                <span>{{ item.jpaperAuthors }}</span>
                <span class="underline-style">《{{ item.jpaperPaperName }}》</span>
              </p>
            </el-card>
          </div>
          <div class="block">
            <el-pagination
              @size-change="jpaperHandleSizeChange"
              @current-change="jpaperHandleCurrentChange"
              :current-page="currentPage.jpaperPage"
              :page-sizes="[5, 10, 20, 50]"
              :page-size="pageSize.jpaperSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="messages.jpaperData.length">
            </el-pagination>
          </div>
        </el-collapse-item>
        <el-collapse-item title="会议论文" name="2">
          <div v-for="(item, index) in messages.mpaperData.slice((currentPage.mpaperPage-1)*pageSize.mpaperSize,currentPage.mpaperPage*pageSize.mpaperSize)" :key="index">
            <el-card class="box-card mycard" shadow="hover">
              <p class="mytitle">{{ item.mpaperTitle }}</p>
              <p>
                <span class="mydate">{{ item.mpaperMeetDate }}</span>
                <span>-</span>
                <span>{{ item.mpaperAuthors }}</span>
                <span class="underline-style">{{ item.mpaperMeetName }}</span>
              </p>
            </el-card>
          </div>
          <div class="block">
            <el-pagination
              @size-change="mpaperHandleSizeChange"
              @current-change="mpaperHandleCurrentChange"
              :current-page="currentPage.mpaperPage"
              :page-sizes="[5, 10, 20, 50]"
              :page-size="pageSize.mpaperSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="messages.mpaperData.length">
            </el-pagination>
          </div>
        </el-collapse-item>
        <el-collapse-item title="专利" name="3">
          <div v-for="(item, index) in messages.patentData.slice((currentPage.patentPage-1)*pageSize.patentSize,currentPage.patentPage*pageSize.patentSize)" :key="index">
            <el-card class="box-card mycard" shadow="hover">
              <p class="mytitle">{{ item.patentTitle }}</p>
              <p>
                <span class="mydate">{{ item.patentBelong }}</span>
                <span>-</span>
                <!-- <span>{{ item.patentAuthors }}</span> -->
                <span class="underline-style">{{ item.patentUnit }}</span>
              </p>
            </el-card>
          </div>
          <div class="block">
            <el-pagination
              @size-change="patentHandleSizeChange"
              @current-change="patentHandleCurrentChange"
              :current-page="currentPage.patentPage"
              :page-sizes="[5, 10, 20, 50]"
              :page-size="pageSize.patentSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="messages.patentData.length">
            </el-pagination>
          </div>
        </el-collapse-item>
        <el-collapse-item title="项目" name="4">
          <div v-for="(item, index) in messages.projectData.slice((currentPage.projectPage-1)*pageSize.projectSize,currentPage.projectPage*pageSize.projectSize)" :key="index">
            <el-card class="box-card mycard" shadow="hover">
              <p class="mytitle">{{ item.projectTitle }}</p>
              <p>
                <span class="mydate">{{ item.projectDate }}</span>
                <span>-</span>
                <span>{{ item.projectAuthors }}</span>
                <span class="underline-style">{{ item.projectNum }}</span>
              </p>
            </el-card>
          </div>
          <div class="block">
            <el-pagination
              @size-change="projectHandleSizeChange"
              @current-change="projectHandleCurrentChange" 
              :current-page="currentPage.projectPage"
              :page-sizes="[5, 10, 20, 50]"
              :page-size="pageSize.projectSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="messages.projectData.length">
            </el-pagination>
          </div>
        </el-collapse-item>
        <el-collapse-item title="学术专著" name="5">
          <div v-for="(item, index) in messages.subjectData.slice((currentPage.subjectPage-1)*pageSize.subjectSize,currentPage.subjectPage*pageSize.subjectSize)" :key="index">
            <el-card class="box-card mycard" shadow="hover">
              <p class="mytitle">{{ item.subjectTitle }}</p>
              <p>
                <span class="mydate">{{ item.subjectPublishDate }}</span>
                <span>-</span>
                <span>{{ item.subjectAuthors }}</span>
                <span class="underline-style">{{ item.subjectPublish }}</span>
              </p>
            </el-card>
          </div>
          <div class="block">
            <el-pagination
              @size-change="subjectHandleSizeChange"
              @current-change="subjectHandleCurrentChange"
              :current-page="currentPage.subjectPage"
              :page-sizes="[5, 10, 20, 50]"
              :page-size="pageSize.subjectSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="messages.subjectData.length">
            </el-pagination>
          </div>
        </el-collapse-item>
        <el-collapse-item title="软件著作权" name="6">
          <div v-for="(item, index) in messages.softwareData.slice((currentPage.softwarePage-1)*pageSize.softwareSize,currentPage.softwarePage*pageSize.softwareSize) " :key="index">
            <el-card class="box-card mycard" shadow="hover">
              <p class="mytitle">{{ item.softwareName }}</p>
              <p>
                <span class="mydate">{{ item.softwareDate }}</span>
                <span>-</span>
                <!-- <span>{{ item.softwareAuthors }}</span> -->
                <span class="underline-style">{{ item.softwareNum }}</span>
              </p>
            </el-card>
          </div>
          <div class="block">
            <el-pagination
              @size-change="softwareHandleSizeChange"
              @current-change="softwareHandleCurrentChange"
              :current-page="currentPage.softwarePage"
              :page-sizes="[5, 10, 20, 50]"
              :page-size="pageSize.softwareSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="messages.softwareData.length">
            </el-pagination>
          </div>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
  import myapi from '@/api/myapi.js'
  export default {
    name: 'texHarvestList',
    props: ["username", "harvestParams"],
    inject: ['reload'],
    data () {
      return {
        UserName: '',
        number: {},
        currentPage: {
          jpaperPage: 1,
          mpaperPage: 1,
          patentPage: 1,
          projectPage: 1,
          subjectPage: 1,
          softwarePage: 1,
          affairsPage: 1
        },
        pageSize: {
          jpaperSize: 5,
          mpaperSize: 5,
          patentSize: 5,
          projectSize: 5,
          subjectSize: 5,
          softwareSize: 5,
          affairsSize: 5
        },
        value: '',
        expands: [],
        activeName: '1',
        messages: {
          jpaperData: [],
          mpaperData: [],
          patentData: [],
          projectData: [],
          subjectData: [],
          softwareData: []
        },
      }
    },
    mounted () {
      this.$nextTick( function() {
        if(this.judgeLogin()){
          var _this = this;
          var Params = {};
          // console.log(this.harvestParams)//查找学生个人成果（mStudent/myStudent）
          if(!this.isEmptyObject(_this.harvestParams)){
            Params = _this.harvestParams
          }else {
            if(this.$route.path == '/resume'){
              _this.UserName = _this.username 
            }else {
              _this.UserName = _this.$userInfo.username
            }
            Params = { 
              userType: _this.$type,
              username: _this.UserName 
            }
          }
          // console.log(Params)
          this.$ajax.get('/api/harvest', {params: Params}).then( res => {
            // console.log(res)
            if(res.data.errCode == 20) {
              /**************************************************************************************************jpaper***/
              var jpaper = res.data.jpaperModels
              for (var i=0; i<jpaper.length; i++) {
                let model = jpaper[i]
                // jpaper[i].jpaperIndex = i+1
                jpaper[i].jpaperVolume = model.jpaperReel + '-' + model.jpaperIssue;
                jpaper[i].jpaperPage = model.jpaperPage1 + '-' + model.jpaperPage2;
                jpaper[i].jpaperType = model.jpaperType1 
                if(model.jpaperType2 != '')
                  jpaper[i].jpaperType += '>' + jpaper[i].jpaperType2
                if(model.jpaperType3 != '')
                  jpaper[i].jpaperType += '>' + jpaper[i].jpaperType3
              }
              _this.messages.jpaperData = jpaper
              /**************************************************************************************************mpaper***/
              var mpaper = res.data.mpaperModels
              for (var i=0; i<mpaper.length; i++) {
                let model = mpaper[i]
                // mpaper[i].mpaperIndex = i+1
                mpaper[i].mpaperPage = model.mpaperPage1 + '-' + model.mpaperPage2;
                mpaper[i].mpaperMeetDate = model.mpaperMeetDate1 + ' To ' + model.mpaperMeetDate2;
                mpaper[i].mpaperType = model.mpaperType1 
                if(model.mpaperType2 != '')
                  mpaper[i].mpaperType += '>' + mpaper[i].mpaperType2
                if(model.mpaperType3 != '')
                  mpaper[i].mpaperType += '>' + mpaper[i].mpaperType3
              }
              _this.messages.mpaperData = mpaper
              /**************************************************************************************************patent***/
              var patent = res.data.patentModels
              for (var i=0; i<patent.length; i++) {
                let model = patent[i]
                // patent[i].patentIndex = i+1
                patent[i].patentEffectDate = model.patentEffectDate1 + ' 至 ' + model.patentEffectDate2
              }
              _this.messages.patentData = patent
              /**************************************************************************************************project***/
              var project = res.data.projectModels
              for (var i=0; i<project.length; i++) {
                let model = project[i]
                // project[i].projectIndex = i+1
                project[i].projectDate = model.projectDate1 + ' 至 ' + model.projectDate2
              }
              _this.messages.projectData = project
              /**************************************************************************************************subject***/
              var subject = res.data.subjectModels
              for (var i=0; i<subject.length; i++) {
                let model = subject[i]
                // subject[i].subjectIndex = i+1
              }
              _this.messages.subjectData = subject
              /**************************************************************************************************software***/
              var software = res.data.softwareModels
              for (var i=0; i<software.length; i++) {
                let model = software[i]
                // software[i].softwareIndex = i+1
              }
              _this.messages.softwareData = software

              _this.number.jpaperCount = jpaper.length
              _this.number.mpaperCount = mpaper.length
              _this.number.patentCount = patent.length
              _this.number.projectCount = project.length
              _this.number.subjectCount = subject.length
              _this.number.softwareCount = software.length
              _this.number.count = jpaper.length + mpaper.length + patent.length + project.length + subject.length + software.length
              this.$emit("numberEvent", _this.number)
            }else if(res.data.errCode == 21) {
              alert("出错！请联系管理员")
            }
          }).catch( () => {
            // alert("出错！请联系管理员")
          });
        }
      })
    },
    methods: {
      isEmptyObject (obj) {
        for(var key in obj){
          return false;
        }
        return true;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      jpaperExpandChange(row,expandedRows){
        if(expandedRows.length>1){
          expandedRows.shift()
        }
      },
      mpaperExpandChange(row,expandedRows){
        if(expandedRows.length>1){
          expandedRows.shift()
        }
      },
      patentExpandChange(row,expandedRows){
        if(expandedRows.length>1){
          expandedRows.shift()
        }
      },
      projectExpandChange(row,expandedRows){
        if(expandedRows.length>1){
          expandedRows.shift()
        }
      },
      subjectExpandChange(row,expandedRows){
        if(expandedRows.length>1){
          expandedRows.shift()
        }
      },
      softwareExpandChange(row,expandedRows){
        if(expandedRows.length>1){
          expandedRows.shift()
        }
      },
      affairsExpandChange(row,expandedRows){
        if(expandedRows.length>1){
          expandedRows.shift()
        }
      },
      jpaperHandleSizeChange: function (size) {
        this.pageSize.jpaperSize = size;
      },
      mpaperHandleSizeChange: function (size) {
        this.pageSize.mpaperSize = size;
      },
      patentHandleSizeChange: function (size) {
        this.pageSize.patentSize = size;
      },
      projectHandleSizeChange: function (size) {
        this.pageSize.projectSize = size;
      },
      subjectHandleSizeChange: function (size) {
        this.pageSize.subjectSize = size;
      },
      softwareHandleSizeChange: function (size) {
        this.pageSize.softwareSize = size;
      },
      jpaperHandleCurrentChange: function(currentPage){
        this.currentPage.jpaperPage = currentPage;
      },
      mpaperHandleCurrentChange: function(currentPage){
        this.currentPage.mpaperPage = currentPage;
      },
      patentHandleCurrentChange: function(currentPage){
        this.currentPage.patentPage = currentPage;
      },
      projectHandleCurrentChange: function(currentPage){
        this.currentPage.projectPage = currentPage;
      },
      subjectHandleCurrentChange: function(currentPage){
        this.currentPage.subjectPage = currentPage;
      },
      softwareHandleCurrentChange: function(currentPage){
        this.currentPage.softwarePage = currentPage;
      }
    }
  }
</script>

<style scoped>
.content {
  margin-top: 10px;
}

.el-button{
  float: right;
}

.el-pagination {
  margin-top: 35px;
  margin-right: 14px;
  margin-bottom: 20px;
  float: right;
}

.el-table {
  cursor: pointer;
}

.mycard {
  margin-bottom: 5px;
  color: #666;
}

.mytitle {
  font-weight: bold;
}

.mydate {
  color: rgb(79,184,238);
}

.underline-style {
  text-decoration: underline;
}

.demo-table-expand {
  font-size: 0;
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-left: 10px;
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
  color: #9C9C9C;
}
</style>
