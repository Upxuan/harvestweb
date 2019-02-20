<template>
  <div id="SysMharvestCopy">
	  <div class = "all-title">
	    <p class="main-font">
	      学生成果管理：共<span>{{ this.count }}</span>项
	      <!-- <el-button size="small" type="warning" @click="addSelections">添加成果</el-button> -->
	      <el-button size="small" type="danger" @click="delSelections">批量删除</el-button>
	    </p>
	  </div>
	  <el-collapse v-model="activeName" accordion>
      <el-collapse-item title="期刊论文" name="1">
        <el-table
          :data="jpaperTable.slice((currentPage.jpaperPage-1)*pageSize.jpaperSize,currentPage.jpaperPage*pageSize.jpaperSize)"
          stripe
          style="width: 100%"
          row-key="jpaperIndex"
          @expand-change="jpaperExpandChange"
          @selection-change='handleSelectionChange'>
          <el-table-column type="selection" width="60" align="center"></el-table-column>
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
	        <el-table-column prop="jpaperTitle" label="标题" width="520"></el-table-column>
	        <el-table-column prop="jpaperAuthors" label="作者" width="240"></el-table-column>
	        <el-table-column label="操作" align="center">
	          <template slot-scope="props">
							<el-button size="mini" type="primary" @click="handleEdit(props.row)">编辑</el-button>
	          </template>
	        </el-table-column>
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
		      @expand-change="mpaperExpandChange"
          @selection-change='handleSelectionChange'>
          <el-table-column type="selection" width="60" align="center"></el-table-column>
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
		      <el-table-column prop="mpaperTitle" label="标题" width="520"></el-table-column>
		      <el-table-column prop="mpaperAuthors" label="作者" width="240"></el-table-column>
		      <el-table-column label="操作" align="center">
		        <template slot-scope="props">
		          <el-button size="mini" type="primary" @click="handleEdit(props.row)">编辑</el-button>
		        </template>
		      </el-table-column>
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
			    @expand-change="patentExpandChange"
					@selection-change='handleSelectionChange'>
          <el-table-column type="selection" width="60" align="center"></el-table-column>
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
			    <el-table-column prop="patentTitle" label="专利名称" width="520"></el-table-column>
			    <el-table-column prop="patentAuthors" label="作者" width="240"></el-table-column>
			    <el-table-column label="操作" align="center">
			      <template slot-scope="props">
			        <el-button size="mini" type="primary" @click="handleEdit(props.row)">编辑</el-button>
			      </template>
			    </el-table-column>
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
		      @expand-change="projectExpandChange"
					@selection-change='handleSelectionChange'>
          <el-table-column type="selection" width="60" align="center"></el-table-column>
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
		      <el-table-column prop="projectTitle" label="标题" width="520"></el-table-column>
		      <el-table-column prop="projectAuthors" label="作者" width="240"></el-table-column>
		      <el-table-column label="操作" align="center">
		        <template slot-scope="props">
		          <el-button size="mini" type="primary" @click="handleEdit(props.row)">编辑</el-button>
		        </template>
		      </el-table-column>
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
		      @expand-change="subjectExpandChange"
					@selection-change='handleSelectionChange'>
          <el-table-column type="selection" width="60" align="center"></el-table-column>
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
		              <span>{{ props.row.subjectIsbn }}</span>
		            </el-form-item>
		            <el-form-item label="出版社：">
		              <span>{{ props.row.subjectPublish }}</span>
		            </el-form-item>
		            <el-form-item label="出版日期：">
		              <span>{{ props.row.subjectPublishDate }}</span>
		            </el-form-item>
		            <el-form-item label="DOI：">
		              <span>{{ props.row.subjectDoi }}</span>
		            </el-form-item>
		            <el-form-item label="作者：">
		              <span>{{ props.row.subjectAuthors }}</span>
		            </el-form-item>
		          </el-form>
		        </template>
		      </el-table-column>
		      <el-table-column prop="subjectIndex" label="序号" width="80" align="center"></el-table-column>
		      <el-table-column prop="subjectTitle" label="专著题目" width="520"></el-table-column>
		      <el-table-column prop="subjectAuthors" label="作者" width="240"></el-table-column>
		      <el-table-column label="操作" align="center">
		        <template slot-scope="props">
		          <el-button size="mini" type="primary" @click="handleEdit(props.row)">编辑</el-button>
		        </template>
		      </el-table-column>
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
			    @expand-change="softwareExpandChange"
					@selection-change='handleSelectionChange'>
          <el-table-column type="selection" width="60" align="center"></el-table-column>
			    <el-table-column type="expand">
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
			    </el-table-column>
			    <el-table-column prop="softwareIndex" label="序号" width="80" align="center"></el-table-column>
			    <el-table-column prop="softwareName" label="软件名称" width="520" align="center"></el-table-column>
			    <el-table-column prop="softwareAuthors" label="作者" width="240"></el-table-column>
			    <el-table-column label="操作" align="center">
			      <template slot-scope="props">
			        <el-button size="mini" type="primary" @click="handleEdit(props.row)">编辑</el-button>
			      </template>
			    </el-table-column>
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
      <el-collapse-item title="公共事务" name="7">
        <el-table
		      :data="affairsTable.slice((currentPage.affairsPage-1)*pageSize.affairsSize,currentPage.affairsPage*pageSize.affairsSize)"
		      style="width: 100%"
		      stripe
		      row-key="affairsIndex"
		      @expand-change="affairsExpandChange"
					@selection-change='handleSelectionChange'>
          <el-table-column type="selection" width="60" align="center"></el-table-column>
		      <el-table-column type="expand">
		        <template slot-scope="props">
		          <el-form label-position="left" inline class="demo-table-expand">
		            <el-form-item label="主题：">
		              <span>{{ props.row.affairsTitle }}</span>
		            </el-form-item>
		            <el-form-item label="详细内容：">
		              <span>{{ props.row.affairsContent }}</span>
		            </el-form-item>
		            <el-form-item label="起止日期：">
		              <span>{{ props.row.affairsDate }}</span>
		            </el-form-item>
		            <el-form-item label="作者：">
		              <span>{{ props.row.affairsAuthors }}</span>
		            </el-form-item>
		          </el-form>
		        </template>
		      </el-table-column>
		      <el-table-column prop="affairsIndex" label="序号" width="80" align="center"></el-table-column>
		      <el-table-column prop="affairsTitle" label="主题" width="520"></el-table-column>
		      <el-table-column prop="affairsAuthors" label="作者" width="240"></el-table-column>
		      <el-table-column label="操作" align="center">
		        <template slot-scope="props">
		          <el-button size="mini" type="primary" @click="handleEdit(props.row)">编辑</el-button>
		        </template>
		      </el-table-column>
		    </el-table>
		    <div class="block">
		      <el-pagination
		        @size-change="affairsHandleSizeChange"
		        @current-change="affairsHandleCurrentChange"
		        :current-page="currentPage.affairsPage"
		        :page-sizes="[5, 10, 20, 50]"
		        :page-size="pageSize.affairsSize"
		        layout="total, sizes, prev, pager, next, jumper"
		        :total="affairsTable.length">
		      </el-pagination>
		    </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
  import myapi from '@/api/myapi.js'
  export default{
		name: 'SysMharvest',
		inject: ['reload'],
    data(){
      return{
        count: 0,
        value: '',
        activeName: '1',
        jpaperTable: [],
        mpaperTable: [],
        patentTable: [],
        projectTable: [],
        subjectTable: [],
        softwareTable: [],
        affairsTable: [],
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
				selectionData:[]
      }
    },
    mounted () {
    	this.$nextTick( function() {
				if(this.judgeLogin()){
					var _this = this
					var Params = { userType: _this.$type }
					this.$ajax.get('/api/getHarvestCopy', {params: Params}).then( res => {
						console.log(res)
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
								jpaper[i].jpaperType += '>' + jpaper[i].jpaperType3;
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
								mpaper[i].mpaperType += '>' + mpaper[i].mpaperType3;
						}
						_this.mpaperTable = mpaper
						/**************************************************************************************************patent***/
						var patent = res.data.patentModels
						for (var i=0; i<patent.length; i++) {
							let model = patent[i]
							patent[i].patentIndex = i+1
							patent[i].patentEffectDate = model.patentEffectDate1 + ' 至 ' + model.patentEffectDate2;
						}
						_this.patentTable = patent
						/**************************************************************************************************project***/
						var project = res.data.projectModels
						for (var i=0; i<project.length; i++) {
							let model = project[i]
							project[i].projectIndex = i+1
							project[i].projectDate = model.projectDate1 + ' 至 ' + model.projectDate2;
						}
						_this.projectTable = project
						/**************************************************************************************************subject***/
						var subject = res.data.subjectModels
						for (var i=0; i<subject.length; i++) {
							subject[i].subjectIndex = i+1
						}
						_this.subjectTable = subject
						/**************************************************************************************************software***/
						var software = res.data.softwareModels
						for (var i=0; i<software.length; i++) {
							software[i].softwareIndex = i+1
						}
						_this.softwareTable = software
						/**************************************************************************************************affairs***/
						var affairs = res.data.affairsModels
						for (var i=0; i<affairs.length; i++) {
							let model = affairs[i]
							affairs[i].affairsIndex = i+1
							affairs[i].affairsDate = model.affairsDate1 + ' 至 ' + model.affairsDate2;
						}
						_this.affairsTable = affairs
						this.count += (jpaper.length+mpaper.length+patent.length+project.length+subject.length+software.length+affairs.length)
					}).catch( () => {
						alert("出错！请联系管理员")
					});
				}
      })
    },
    methods:{
			handleSelectionChange (val) {
        this.selectionData = val
			},
			handleEdit (row) {
				console.log(row)
				this.$router.push({ 
					name: 'Addmanual', 
					params: { row: row, harReturnRouter: 'Mharvestcopy' }
				})
			},
      addSelections () {
				this.$router.push({ 
					name: 'Addmanual', 
					params: { harReturnRouter: 'Mharvestcopy' }
				})
      },
      delSelections () {
				var _this = this
				if(_this.selectionData.length == 0){
					this.$message.error('请选择要删除的成果');
				}else {
					var data = []
					for( let i=0; i<_this.selectionData.length; i++){
						let obj = {}
						if(_this.selectionData[i].jpaperId != null){
							obj.harType = 1
							obj.harId = _this.selectionData[i].jpaperId
						}else if(_this.selectionData[i].mpaperId != null){
							obj.harType = 2
							obj.harId = _this.selectionData[i].mpaperId
						}else if(_this.selectionData[i].patentId != null){
							obj.harType = 3
							obj.harId = _this.selectionData[i].patentId
						}else if(_this.selectionData[i].projectId != null){
							obj.harType = 4
							obj.harId = _this.selectionData[i].projectId
						}else if(_this.selectionData[i].subjectId != null){
							obj.harType = 5
							obj.harId = _this.selectionData[i].subjectId
						}else if(_this.selectionData[i].SoftwareId != null){
							obj.harType = 6
							obj.harId = _this.selectionData[i].softwareId
						}else if(_this.selectionData[i].affairsId != null){
							obj.harType = 7
							obj.harId = _this.selectionData[i].affairsId
						}
						data[i] = obj
					}
					// console.log(data)

					if(this.judgeLogin()){
						this.$confirm('是否删除所选成果?', '提示', {
							confirmButtonText: '删除',
							cancelButtonText: '取消',
							type: 'warning'
						}).then(() => {
							var _this = this;
							var Params = { baseHarvestList: data }
							this.$ajax({
								url: '/api/delHarvestCopy',
								method: 'post',
								contentType: "application/json; charset=utf-8",
								dataType: "json",
								data: Params
							}).then( res => {
								console.log(res);
								if(res.data.errCode == 20){
									this.reload();
									this.$message({ type: 'success', message: '删除成功' });
								}else if(res.data.errCode == 21){
									this.$message({ type: 'error', message: '删除失败' });
								}
							}).catch( error => {
								// console.log(error);
								alert("出错！请联系管理员")
							})
						}).catch( () => {});
					}
				}
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
      jpaperHandleSizeChange(size) {
        this.pageSize.jpaperSize = size;
      },
      mpaperHandleSizeChange(size) {
        this.pageSize.mpaperSize = size;
      },
      patentHandleSizeChange(size) {
        this.pageSize.mpaperSize = size;
      },
      projectHandleSizeChange(size) {
        this.pageSize.mpaperSize = size;
      },
      subjectHandleSizeChange(size) {
        this.pageSize.mpaperSize = size;
      },
      softwareHandleSizeChange(size) {
        this.pageSize.mpaperSize = size;
      },
      affairsHandleSizeChange(size) {
        this.pageSize.mpaperSize = size;
      },
      jpaperHandleCurrentChange(currentPage){
        this.currentPage.jpaperPage = currentPage;
      },
      mpaperHandleCurrentChange(currentPage){
        this.currentPage.mpaperPage = currentPage;
      },
      patentHandleCurrentChange(currentPage){
        this.currentPage.mpaperPage = currentPage;
      },
      projectHandleCurrentChange(currentPage){
        this.currentPage.mpaperPage = currentPage;
      },
      subjectHandleCurrentChange(currentPage){
        this.currentPage.mpaperPage = currentPage;
      },
      softwareHandleCurrentChange(currentPage){
        this.currentPage.mpaperPage = currentPage;
      },
      affairsHandleCurrentChange(currentPage){
        this.currentPage.mpaperPage = currentPage;
      }
    }
  }
</script>

<style scoped>
.el-pagination {
  float: right;
  margin-top: 35px;
  margin-bottom: 35px;
}

.el-table {
  cursor: pointer;
}

.el-select {
  float: right;
  margin-right: 10px;
}

.main-font .el-button {
  float: right;
}

.manual-wrap {
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  font-family: Hiragino Sans GB;
}

.all-title {
  height: 40px;
  border-bottom: 1px dashed #DCDFE6;
}

.main-font span {
  font-size: 20px;
  color: #F56C6C;
}

.main-font {
  font-size: 17px;
  font-family: Hiragino Sans GB;
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
