<template>
  <div id="texHarvestList">
    <div class="content">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item title="期刊论文" name="1">
          <el-table
            :data="jpaperTable.slice((currentPage.jpaperPage-1)*pageSize.jpaperSize,currentPage.jpaperPage*pageSize.jpaperSize)"
            stripe
            style="width: 100%"
            row-key="jpaperIndex"
            @expand-change="jpaperExpandChange">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="收录：">
                    <span>{{ props.row.jpaperType }}</span>
                  </el-form-item>
                  <el-form-item label="标题：">
                    <span>{{ props.row.jpaperTitle }}</span>
                  </el-form-item>
                  <el-form-item label="期刊名称：">
                    <span>{{ props.row.jpaperPaperName }}</span>
                  </el-form-item>
                  <el-form-item label="状态：">
                    <span>{{ props.row.jpaperStatus }}</span>
                  </el-form-item>
                  <el-form-item label="发表日期：">
                    <span>{{ props.row.jpaperPublishDate }}</span>
                  </el-form-item>
                  <el-form-item label="卷期号：">
                    <span>{{ props.row.jpaperVolume }}</span>
                  </el-form-item>
                  <el-form-item label="起止页码：">
                    <span>{{ props.row.jpaperPage }}</span>
                  </el-form-item>
                  <el-form-item label="DOI：">
                    <span>{{ props.row.jpaperDoi }}</span>
                  </el-form-item>
                  <el-form-item label="作者：">
                    <span>{{ props.row.jpaperAuthors }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column prop="jpaperIndex" label="序号" width="80" align="center"></el-table-column>
            <el-table-column prop="jpaperType" label="收录" width="200" align="center"></el-table-column>
            <el-table-column prop="jpaperTitle" label="标题" width="550"></el-table-column>
            <el-table-column prop="jpaperPaperName" label="期刊名称" width="230"></el-table-column>  
            <el-table-column prop="jpaperPublishDate" label="发表日期" width="170" align="center"></el-table-column>
            <el-table-column prop="jpaperAuthors" label="作者"  width="380"></el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              @size-change="jpaperHandleSizeChange"
              @current-change="jpaperHandleCurrentChange"
              :current-page="currentPage.jpaperPage"
              :page-sizes="[5, 10, 20, 50]"
              :page-size="pageSize.jpaperSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="jpaperTable.length">
            </el-pagination>
          </div>
        </el-collapse-item>
        <el-collapse-item title="会议论文" name="2">
          <el-table
            :data="mpaperTable.slice((currentPage.mpaperPage-1)*pageSize.mpaperSize,currentPage.mpaperPage*pageSize.mpaperSize)"
            style="width: 100%"
            stripe
            row-key="mpaperIndex"
            @expand-change="mpaperExpandChange">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="收录：">
                    <span>{{ props.row.mpaperType }}</span>
                  </el-form-item>
                  <el-form-item label="标题：">
                    <span>{{ props.row.mpaperTitle }}</span>
                  </el-form-item>
                  <el-form-item label="发表日期：">
                    <span>{{ props.row.mpaperPublishDate }}</span>
                  </el-form-item>
                  <el-form-item label="起止页码：">
                    <span>{{ props.row.mpaperPage }}</span>
                  </el-form-item>
                  <el-form-item label="会议名称：">
                    <span>{{ props.row.mpaperMeetName }}</span>
                  </el-form-item>
                  <el-form-item label="会议日期：">
                    <span>{{ props.row.mpaperMeetDate }}</span>
                  </el-form-item>
                  <el-form-item label="会议地点：">
                    <span>{{ props.row.mpaperMeetPlace }}</span>
                  </el-form-item>
                  <el-form-item label="作者：">
                    <span>{{ props.row.mpaperAuthors }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column prop="mpaperIndex" label="序号" width="80" align="center"></el-table-column>
            <el-table-column prop="mpaperType" label="收录" width="200" align="center"></el-table-column>
            <el-table-column prop="mpaperTitle" label="标题" width="550"></el-table-column>
            <el-table-column prop="mpaperMeetName" label="会议名称" width="230"></el-table-column>  
            <el-table-column prop="mpaperPublishDate" label="发表日期" width="170" align="center"></el-table-column>
            <el-table-column prop="mpaperAuthors" label="作者"  width="380"></el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              @size-change="mpaperHandleSizeChange"
              @current-change="mpaperHandleCurrentChange"
              :current-page="currentPage.mpaperPage"
              :page-sizes="[5, 10, 20, 50]"
              :page-size="pageSize.mpaperSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="mpaperTable.length">
            </el-pagination>
          </div>
        </el-collapse-item>
        <el-collapse-item title="专利" name="3">
          <el-table
            :data="patentTable.slice((currentPage.patentPage-1)*pageSize.patentSize,currentPage.patentPage*pageSize.patentSize)"
            style="width: 100%"
            stripe
            row-key="patentIndex"
            @expand-change="patentExpandChange">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="专利名称：">
                    <span>{{ props.row.patentTitle }}</span>
                  </el-form-item>
                  <el-form-item label="申请（专利）号：">
                    <span>{{ props.row.patentNum }}</span>
                  </el-form-item>
                  <el-form-item label="公开（公告）号：">
                    <span>{{ props.row.patentNoteNum }}</span>
                  </el-form-item>
                  <el-form-item label="发证单位：">
                    <span>{{ props.row.patentUnit }}</span>
                  </el-form-item>
                  <el-form-item label="专利类别：">
                    <span>{{ props.row.patentType }}</span>
                  </el-form-item>
                  <el-form-item label="专利状态：">
                    <span>{{ props.row.patentStatus }}</span>
                  </el-form-item>
                  <el-form-item label="申请日期：">
                    <span>{{ props.row.patentApplyDate }}</span>
                  </el-form-item>
                  <el-form-item label="生效日期：">
                    <span>{{ props.row.patentEffectDate }}</span>
                  </el-form-item>
                  <el-form-item label="专利权人：">
                    <span>{{ props.row.patentBelong }}</span>
                  </el-form-item>
                  <el-form-item label="作者：">
                    <span>{{ props.row.patentAuthors }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column prop="patentIndex" label="序号" width="80" align="center"></el-table-column>
            <el-table-column prop="patentTitle" label="专利名称" width="480"></el-table-column>
            <el-table-column prop="patentUnit" label="发证单位" width="280" align="center"></el-table-column>
            <el-table-column prop="patentEffectDate" label="生效日期" width="200" align="center"></el-table-column>
            <el-table-column prop="patentBelong" label="专利权人" width="200" align="center"></el-table-column>
            <el-table-column prop="patentAuthors" label="作者" width="370"></el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              @size-change="patentHandleSizeChange"
              @current-change="patentHandleCurrentChange"
              :current-page="currentPage.patentPage"
              :page-sizes="[5, 10, 20, 50]"
              :page-size="pageSize.patentSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="patentTable.length">
            </el-pagination>
          </div>
        </el-collapse-item>
        <el-collapse-item title="项目" name="4">
          <el-table
            :data="projectTable.slice((currentPage.projectPage-1)*pageSize.projectSize,currentPage.projectPage*pageSize.projectSize)"
            style="width: 100%"
            stripe
            row-key="projectIndex"
            @expand-change="projectExpandChange">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="类别：">
                    <span>{{ props.row.projectType }}</span>
                  </el-form-item>
                  <el-form-item label="标题：">
                    <span>{{ props.row.projectTitle }}</span>
                  </el-form-item>
                  <el-form-item label="编号：">
                    <span>{{ props.row.projectNum }}</span>
                  </el-form-item>
                  <el-form-item label="起止日期：">
                    <span>{{ props.row.projectDate }}</span>
                  </el-form-item>
                  <el-form-item label="金额：">
                    <span>{{ props.row.projectMoney }}</span>
                  </el-form-item>
                  <el-form-item label="作者：">
                    <span>{{ props.row.projectAuthors }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column prop="projectIndex" label="序号" width="80" align="center"></el-table-column>
            <el-table-column prop="projectType" label="收录" width="210" align="center"></el-table-column>
            <el-table-column prop="projectTitle" label="标题" width="650"></el-table-column>
            <el-table-column prop="projectDate" label="起止日期" width="270" align="center"></el-table-column>
            <el-table-column prop="projectAuthors" label="作者"  width="400"></el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              @size-change="projectHandleSizeChange"
              @current-change="projectHandleCurrentChange" 
              :current-page="currentPage.projectPage"
              :page-sizes="[5, 10, 20, 50]"
              :page-size="pageSize.projectSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="projectTable.length">
            </el-pagination>
          </div>
        </el-collapse-item>
        <el-collapse-item title="学术专著" name="5">
          <el-table
            :data="subjectTable.slice((currentPage.subjectPage-1)*pageSize.subjectSize,currentPage.subjectPage*pageSize.subjectSize)"
            style="width: 100%"
            stripe
            row-key="subjectIndex"
            @expand-change="subjectExpandChange">
            <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="专著题目：">
                    <span>{{ props.row.subjectTitle }}</span>
                  </el-form-item>
                  <el-form-item label="丛书名称：">
                    <span>{{ props.row.subjectBookName }}</span>
                  </el-form-item>
                  <el-form-item label="出版状态：">
                    <span>{{ props.row.subjectStatus }}</span>
                  </el-form-item>
                  <el-form-item label="ISBN号：">
                    <span>{{ props.row.subjectISBN }}</span>
                  </el-form-item>
                  <el-form-item label="出版社：">
                    <span>{{ props.row.subjectPublish }}</span>
                  </el-form-item>
                  <el-form-item label="出版日期：">
                    <span>{{ props.row.subjectPublishDate }}</span>
                  </el-form-item>
                  <el-form-item label="DOI：">
                    <span>{{ props.row.subjectDOI }}</span>
                  </el-form-item>
                  <el-form-item label="作者：">
                    <span>{{ props.row.subjectAuthors }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column>
            <el-table-column prop="subjectIndex" label="序号" width="80" align="center"></el-table-column>
            <el-table-column prop="subjectTitle" label="专著题目" width="500"></el-table-column>
            <el-table-column prop="subjectBookName" label="丛书名称" width="260"></el-table-column>
            <el-table-column prop="subjectPublish" label="出版社" width="210" align="center"></el-table-column>
            <el-table-column prop="subjectPublishDate" label="出版日期" width="180" align="center"></el-table-column>
            <el-table-column prop="subjectAuthors" label="作者" width="380"></el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              @size-change="subjectHandleSizeChange"
              @current-change="subjectHandleCurrentChange"
              :current-page="currentPage.subjectPage"
              :page-sizes="[5, 10, 20, 50]"
              :page-size="pageSize.subjectSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="subjectTable.length">
            </el-pagination>
          </div>
        </el-collapse-item>
        <el-collapse-item title="软件著作权" name="6">
          <el-table
            :data="softwareTable.slice((currentPage.softwarePage-1)*pageSize.softwareSize,currentPage.softwarePage*pageSize.softwareSize)"
            style="width: 100%"
            stripe
            row-key="softwareIndex"
            @expand-change="softwareExpandChange">
            <!-- <el-table-column type="expand">
              <template slot-scope="props">
                <el-form label-position="left" inline class="demo-table-expand">
                  <el-form-item label="软件名称：">
                    <span>{{ props.row.softwareName }}</span>
                  </el-form-item>
                  <el-form-item label="权利获得方式：">
                    <span>{{ props.row.softwareAcquireType }}</span>
                  </el-form-item>
                  <el-form-item label="登记号：">
                    <span>{{ props.row.softwareNum }}</span>
                  </el-form-item>
                  <el-form-item label="作者：">
                    <span>{{ props.row.softwareAuthors }}</span>
                  </el-form-item>
                </el-form>
              </template>
            </el-table-column> -->
            <el-table-column prop="softwareIndex" label="序号" width="80" align="center"></el-table-column>
            <el-table-column prop="softwareName" label="软件名称" width="600" align="center"></el-table-column>
            <el-table-column prop="softwareAcquireType" label="权利获得方式" width="300" align="center"></el-table-column>
            <el-table-column prop="softwareNum" label="登记号" width="300" align="center"></el-table-column>
            <el-table-column prop="softwareAuthors" label="作者" width="380"></el-table-column>
          </el-table>
          <div class="block">
            <el-pagination
              @size-change="softwareHandleSizeChange"
              @current-change="softwareHandleCurrentChange"
              :current-page="currentPage.softwarePage"
              :page-sizes="[5, 10, 20, 50]"
              :page-size="pageSize.softwareSize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="softwareTable.length">
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
    inject: ['reload'],
    data () {
      return {
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
        activeName: '',
        jpaperTable: [],
        mpaperTable: [],
        patentTable: [],
        projectTable: [],
        subjectTable: [],
        softwareTable: [],
        affairsTable: []
      }
    },
    mounted () {
      this.$nextTick( function() {
        if(this.judgeLogin()){
          var _this = this
          var Params = { 
            userType: _this.$type, 
            userId: _this.$userInfo.id 
          }
          this.$ajax.get('/api/harvest', {params: Params}).then( res => {
            // console.log(res)
            if(res.data.errCode == 20){
              /**************************************************************************************************jpaper***/
              var jpaper = res.data.jpaperModels
              for (var i=0; i<jpaper.length; i++) {
                let model = jpaper[i]
                jpaper[i].jpaperIndex = i+1
                jpaper[i].jpaperVolume = model.jpaperReel + '-' + model.jpaperIssue;
                jpaper[i].jpaperPage = model.jpaperPage1 + '-' + model.jpaperPage2;
                jpaper[i].jpaperType = model.jpaperType1 
                if(model.jpaperType2 != '')
                  jpaper[i].jpaperType += '>' + jpaper[i].jpaperType2
                if(model.jpaperType3 != '')
                  jpaper[i].jpaperType += '>' + jpaper[i].jpaperType3
              }
              _this.jpaperTable = jpaper
              /**************************************************************************************************mpaper***/
              var mpaper = res.data.mpaperModels
              for (var i=0; i<mpaper.length; i++) {
                let model = mpaper[i]
                mpaper[i].mpaperIndex = i+1
                mpaper[i].mpaperPage = model.mpaperPage1 + '-' + model.mpaperPage2;
                mpaper[i].mpaperMeetDate = model.mpaperMeetDate1 + ' To ' + model.mpaperMeetDate2;
                mpaper[i].mpaperType = model.mpaperType1 
                if(model.mpaperType2 != '')
                  mpaper[i].mpaperType += '>' + mpaper[i].mpaperType2
                if(model.mpaperType3 != '')
                  mpaper[i].mpaperType += '>' + mpaper[i].mpaperType3
              }
              _this.mpaperTable = mpaper
              /**************************************************************************************************patent***/
              var patent = res.data.patentModels
              for (var i=0; i<patent.length; i++) {
                let model = patent[i]
                patent[i].patentIndex = i+1
                patent[i].patentEffectDate = model.patentEffectDate1 + ' 至 ' + model.patentEffectDate2
              }
              _this.patentTable = patent
              /**************************************************************************************************project***/
              var project = res.data.projectModels
              for (var i=0; i<project.length; i++) {
                let model = project[i]
                project[i].projectIndex = i+1
                project[i].projectDate = model.projectDate1 + ' 至 ' + model.projectDate2
              }
              _this.projectTable = project
              /**************************************************************************************************subject***/
              var subject = res.data.subjectModels
              for (var i=0; i<subject.length; i++) {
                let model = subject[i]
                subject[i].subjectIndex = i+1
              }
              _this.subjectTable = subject
              /**************************************************************************************************software***/
              var software = res.data.softwareModels
              for (var i=0; i<software.length; i++) {
                let model = software[i]
                software[i].softwareIndex = i+1
              }
              _this.softwareTable = software

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
