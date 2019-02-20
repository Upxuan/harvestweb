<template>
  <div id="sysMyAudit">
    <div class = "all-title">
      <p class="main-font">
        审核中:&nbsp<span>{{ number.unReviseNum }}</span>项&nbsp&nbsp
        已通过:&nbsp<span>{{ number.reviseSuccessNum }}</span>项&nbsp&nbsp
        未通过:&nbsp<span>{{ number.reviseFailNum }}</span>项
      </p>
    </div>
    <!-- <el-tabs type="border-card"> -->
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
	        <el-table-column prop="jpaperTitle" label="标题" width="420"></el-table-column>+
	        <el-table-column prop="jpaperAuthors" label="作者" width="228"></el-table-column>
	        <el-table-column prop="review" label="状态" width="100" align="center" :filters="options" :filter-method="filterHandler">
	          <template slot-scope="scope">
	            <span v-if="scope.row.review===1" style="color:#E6A23C">审核中</span>
	            <span v-else-if="scope.row.review===2" style="color: #F56C6C">未通过</span>
	            <span v-else-if="scope.row.review===3" style="color:#409EFF">已通过</span>
	          </template>
	        </el-table-column>
	        <el-table-column prop="reviseName" label="审核人" width="80" align="center" ></el-table-column>
	        <el-table-column label="操作" align="center">
	          <template slot-scope="props">
	            <el-button 
	            size="mini"
	            type="danger"
	            @click="handleDelete(1, props.row.jpaperId, props.row.review)" :disabled="props.row.review===3">删除</el-button>
	          <el-button
	            size="mini"
	            type="primary"
	            @click="handleEdit(props.row)" :disabled="props.row.review===3">编辑</el-button>
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
		      <el-table-column prop="mpaperTitle" label="标题" width="420"></el-table-column>
		      <el-table-column prop="mpaperAuthors" label="作者" width="228"></el-table-column>
		      <el-table-column prop="review" label="状态" width="100" align="center" :filters="options" :filter-method="filterHandler">
	          <template slot-scope="scope">
	            <span v-if="scope.row.review===1" style="color:#E6A23C">审核中</span>
	            <span v-else-if="scope.row.review===2" style="color: #F56C6C">未通过</span>
	            <span v-else-if="scope.row.review===3" style="color:#409EFF">已通过</span>
	          </template>
	        </el-table-column>
	        <el-table-column prop="reviseName" label="审核人" width="80" align="center" ></el-table-column>
		      <el-table-column label="操作" align="center">
		        <template slot-scope="props">
		          <el-button 
		            size="mini"
		            type="danger"
		            @click="handleDelete(2, props.row.mpaperId, props.row.review)" :disabled="props.row.review===3">删除</el-button>
		          <el-button
		            size="mini"
		            type="primary"
		            @click="handleEdit(props.row)" :disabled="props.row.review===3">编辑</el-button>
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
			    <el-table-column prop="patentTitle" label="专利名称" width="420"></el-table-column>
			    <el-table-column prop="patentAuthors" label="作者" width="228"></el-table-column>
			    <el-table-column prop="review" label="状态" width="100" align="center" :filters="options" :filter-method="filterHandler">
	          <template slot-scope="scope">
	            <span v-if="scope.row.review===1" style="color:#E6A23C">审核中</span>
	            <span v-else-if="scope.row.review===2" style="color: #F56C6C">未通过</span>
	            <span v-else-if="scope.row.review===3" style="color:#409EFF">已通过</span>
	          </template>
	        </el-table-column>
			    <el-table-column prop="reviseName" label="审核人" width="80" align="center" ></el-table-column>
			    <el-table-column label="操作" align="center">
			      <template slot-scope="props">
			        <el-button 
			          size="mini"
			          type="danger"
			          @click="handleDelete(3, props.row.patentId, props.row.review)" :disabled="props.row.review===3">删除</el-button>
			        <el-button
			          size="mini"
			          type="primary"
			          @click="handleEdit(props.row)" :disabled="props.row.review===3">编辑</el-button>
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
		      <el-table-column prop="projectTitle" label="标题" width="420"></el-table-column>
		      <el-table-column prop="projectAuthors" label="作者" width="228"></el-table-column>
		      <el-table-column prop="review" label="状态" width="100" align="center" :filters="options" :filter-method="filterHandler">
	          <template slot-scope="scope">
	            <span v-if="scope.row.review===1" style="color:#E6A23C">审核中</span>
	            <span v-else-if="scope.row.review===2" style="color: #F56C6C">未通过</span>
	            <span v-else-if="scope.row.review===3" style="color:#409EFF">已通过</span>
	          </template>
	        </el-table-column>
			    <el-table-column prop="reviseName" label="审核人" width="80" align="center" ></el-table-column>
		      <el-table-column label="操作" align="center">
		        <template slot-scope="props">
		          <el-button 
		            size="mini"
		            type="danger"
		            @click="handleDelete(4, props.row.projectId, props.row.review)" :disabled="props.row.review===3">删除</el-button>
		          <el-button
		            size="mini"
		            type="primary"
		            @click="handleEdit(props.row)" :disabled="props.row.review===3">编辑</el-button>
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
		      <el-table-column prop="subjectTitle" label="专著题目" width="420"></el-table-column>
		      <el-table-column prop="subjectAuthors" label="作者" width="228"></el-table-column>
		      <el-table-column prop="review" label="状态" width="100" align="center" :filters="options" :filter-method="filterHandler">
	          <template slot-scope="scope">
	            <span v-if="scope.row.review===1" style="color:#E6A23C">审核中</span>
	            <span v-else-if="scope.row.review===2" style="color: #F56C6C">未通过</span>
	            <span v-else-if="scope.row.review===3" style="color:#409EFF">已通过</span>
	          </template>
	        </el-table-column>
			    <el-table-column prop="reviseName" label="审核人" width="80" align="center" ></el-table-column>
		      <el-table-column label="操作" align="center">
		        <template slot-scope="props">
		          <el-button 
		            size="mini"
		            type="danger"
		            @click="handleDelete(5, props.row.subjectId, props.row.review)" :disabled="props.row.review===3">删除</el-button>
		          <el-button
		            size="mini"
		            type="primary"
		            @click="handleEdit(props.row)" :disabled="props.row.review===3">编辑</el-button>
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
			    @expand-change="softwareExpandChange">
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
			    <el-table-column prop="softwareName" label="软件名称" width="420" align="center"></el-table-column>
			    <el-table-column prop="softwareAuthors" label="作者" width="228"></el-table-column>
			    <el-table-column prop="review" label="状态" width="100" align="center" :filters="options" :filter-method="filterHandler">
	          <template slot-scope="scope">
	            <span v-if="scope.row.review===1" style="color:#E6A23C">审核中</span>
	            <span v-else-if="scope.row.review===2" style="color: #F56C6C">未通过</span>
	            <span v-else-if="scope.row.review===3" style="color:#409EFF">已通过</span>
	          </template>
	        </el-table-column>
			    <el-table-column prop="reviseName" label="审核人" width="80" align="center"></el-table-column>
			    <el-table-column label="操作" align="center">
			      <template slot-scope="props">
			        <el-button 
			          size="mini"
			          type="danger"
			          @click="handleDelete(6, props.row.softwareId, props.row.review)" :disabled="props.row.review===3">删除</el-button>
			        <el-button
			          size="mini"
			          type="primary"
			          @click="handleEdit(props.row)" :disabled="props.row.review===3">编辑</el-button>
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
		      @expand-change="affairsExpandChange">
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
		      <el-table-column prop="affairsTitle" label="主题" width="420"></el-table-column>
		      <el-table-column prop="affairsAuthors" label="作者" width="228"></el-table-column>
		      <el-table-column prop="review" label="状态" width="100" align="center" :filters="options" :filter-method="filterHandler">
	          <template slot-scope="scope">
	            <span v-if="scope.row.review===1" style="color:#E6A23C">审核中</span>
	            <span v-else-if="scope.row.review===2" style="color: #F56C6C">未通过</span>
	            <span v-else-if="scope.row.review===3" style="color:#409EFF">已通过</span>
	          </template>
	        </el-table-column>
			    <el-table-column prop="reviseName" label="审核人" width="80" align="center" ></el-table-column>
		      <el-table-column label="操作" align="center">
		        <template slot-scope="props">
		          <el-button 
		            size="mini"
		            type="danger"
		            @click="handleDelete(7, props.row.softwareId, props.row.review)" :disabled="props.row.review===3">删除</el-button>
		          <el-button
		            size="mini"
		            type="primary"
		            @click="handleEdit(props.row)" :disabled="props.row.review===3">编辑</el-button>
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
    <!-- </el-tabs> -->
  </div>
</template>

<script>
  export default{
    name:'sysMyAudit',
    inject: ['reload'],
    data(){
      return{
        number: {
          unReviseNum: 0,
          reviseSuccessNum: 0,
          reviseFailNum: 0
        },
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
          affairsSize: 5,
        },
        value: '',
        expands: [],
        activeName: '1',
        jpaperTable: [],
        mpaperTable: [],
        patentTable: [],
        projectTable: [],
        subjectTable: [],
        softwareTable: [],
        affairsTable: [],
        options: [
          { value: 1, text: '审核中' },
          { value: 2, text: '未通过' },
          { value: 3, text: '已通过' }]
      }
    },
    mounted () {
      this.$nextTick( function() {
				if(this.judgeLogin()){
					var _this = this
					var Params = { userId: _this.$userInfo.id }
					this.$ajax.get('/api/myAudit', {params: Params}).then( res => {
						console.log(res)
						/**************************************************************************************************jpaper***/
						var jpaper = res.data.jpaperModels
						for (var i=0; i<res.data.jpaperModels.length; i++) {
							let model = res.data.jpaperModels[i]
							jpaper[i].jpaperIndex = i+1
							jpaper[i].jpaperVolume = model.jpaperReel + '-' + model.jpaperIssue;
							jpaper[i].jpaperPage = model.jpaperPage1 + '-' + model.jpaperPage2;
							jpaper[i].jpaperType = model.jpaperType1 
							if(model.jpaperType2 != '')
								jpaper[i].jpaperType += '>' + jpaper[i].jpaperType2
							if(model.jpaperType3 != '')
								jpaper[i].jpaperType += '>' + jpaper[i].jpaperType3;
							if(model.review === 1)
								_this.number.unReviseNum++
							else if(model.review === 2)
								_this.number.reviseFailNum++
							else if(model.review === 3)
								_this.number.reviseSuccessNum++
						}
						_this.jpaperTable = jpaper
						/**************************************************************************************************mpaper***/
						var mpaper = res.data.mpaperModels
						for (var i=0; i<res.data.mpaperModels.length; i++) {
							let model = res.data.mpaperModels[i]
							mpaper[i].mpaperIndex = i+1
							mpaper[i].mpaperPage = model.mpaperPage1 + '-' + model.mpaperPage2;
							mpaper[i].mpaperMeetDate = model.mpaperMeetDate1 + ' To ' + model.mpaperMeetDate2;
							mpaper[i].mpaperType = model.mpaperType1 
							if(model.mpaperType2 != '')
								mpaper[i].mpaperType += '>' + mpaper[i].mpaperType2
							if(model.mpaperType3 != '')
								mpaper[i].mpaperType += '>' + mpaper[i].mpaperType3;
							if(model.review === 1)
								_this.number.unReviseNum++
							else if(model.review === 2)
								_this.number.reviseFailNum++
							else if(model.review === 3)
								_this.number.reviseSuccessNum++
						}
						_this.mpaperTable = mpaper
						/**************************************************************************************************patent***/
						var patent = res.data.patentModels
						for (var i=0; i<res.data.patentModels.length; i++) {
							let model = res.data.patentModels[i]
							patent[i].patentIndex = i+1
							patent[i].patentEffectDate = model.patentEffectDate1 + ' 至 ' + model.patentEffectDate2;
							if(model.review === 1)
								_this.number.unReviseNum++
							else if(model.review === 2)
								_this.number.reviseFailNum++
							else if(model.review === 3)
								_this.number.reviseSuccessNum++
						}
						_this.patentTable = patent
						/**************************************************************************************************project***/
						var project = res.data.projectModels
						for (var i=0; i<res.data.projectModels.length; i++) {
							let model = res.data.projectModels[i]
							project[i].projectIndex = i+1
							project[i].projectDate = model.projectDate1 + ' 至 ' + model.projectDate2;
							if(model.review === 1)
								_this.number.unReviseNum++
							else if(model.review === 2)
								_this.number.reviseFailNum++
							else if(model.review === 3)
								_this.number.reviseSuccessNum++
						}
						_this.projectTable = project
						/**************************************************************************************************subject***/
						var subject = res.data.subjectModels
						for (var i=0; i<res.data.subjectModels.length; i++) {
							let model = res.data.subjectModels[i]
							subject[i].subjectIndex = i+1
							if(model.review === 1)
								_this.number.unReviseNum++
							else if(model.review === 2)
								_this.number.reviseFailNum++
							else if(model.review === 3)
								_this.number.reviseSuccessNum++
						}
						_this.subjectTable = subject
						/**************************************************************************************************software***/
						var software = res.data.softwareModels
						for (var i=0; i<res.data.softwareModels.length; i++) {
							let model = res.data.softwareModels[i]
							software[i].softwareIndex = i+1
							if(model.review === 1)
								_this.number.unReviseNum++
							else if(model.review === 2)
								_this.number.reviseFailNum++
							else if(model.review === 3)
								_this.number.reviseSuccessNum++
						}
						_this.softwareTable = software
						/**************************************************************************************************affairs***/
						var affairs = res.data.affairsModels
						for (var i=0; i<res.data.affairsModels.length; i++) {
							let model = res.data.affairsModels[i]
							affairs[i].affairsIndex = i+1
							affairs[i].affairsDate = model.affairsDate1 + ' 至 ' + model.affairsDate2;
							if(model.review === 1)
								_this.number.unReviseNum++
							else if(model.review === 2)
								_this.number.reviseFailNum++
							else if(model.review === 3)
								_this.number.reviseSuccessNum++
						}
						_this.affairsTable = affairs
					}).catch( () => {
						// alert("出错！请联系管理员")
					})
				}
      })
    },
    methods:{
      handleEdit(row) {
				// console.log(index, row);
				this.$router.push({ 
					name: 'Addmanual', 
					params: { row: row, harReturnRouter: 'Myaudit' }
				})
      },
      handleDelete(harType, harId, review) {
        // console.log("harType:" + harType + ", harId:" + harId + ", review:" + review);
        this.delMyAuditHarvest(harType, harId, review)
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
        this.pageSize.mpaperSize = size;
      },
      projectHandleSizeChange: function (size) {
        this.pageSize.mpaperSize = size;
      },
      subjectHandleSizeChange: function (size) {
        this.pageSize.mpaperSize = size;
      },
      softwareHandleSizeChange: function (size) {
        this.pageSize.mpaperSize = size;
      },
      affairsHandleSizeChange: function (size) {
        this.pageSize.mpaperSize = size;
      },
      jpaperHandleCurrentChange: function(currentPage){
        this.currentPage.jpaperPage = currentPage;
      },
      mpaperHandleCurrentChange: function(currentPage){
        this.currentPage.mpaperPage = currentPage;
      },
      patentHandleCurrentChange: function(currentPage){
        this.currentPage.mpaperPage = currentPage;
      },
      projectHandleCurrentChange: function(currentPage){
        this.currentPage.mpaperPage = currentPage;
      },
      subjectHandleCurrentChange: function(currentPage){
        this.currentPage.mpaperPage = currentPage;
      },
      softwareHandleCurrentChange: function(currentPage){
        this.currentPage.mpaperPage = currentPage;
      },
      affairsHandleCurrentChange: function(currentPage){
        this.currentPage.mpaperPage = currentPage;
      },
      // rowClick(row, event, column) {
      //   Array.prototype.remove = function (val) {
      //     let index = this.indexOf(val);
      //       if (index > -1) 
      //         this.splice(index, 1);
      //     };
      //     if (this.expands.indexOf(row.id) < 0){
      //       this.expands.push(row.id);
      //     } else {
      //       this.expands.remove(row.id);
      //     }
      // },
    }
  }
</script>

<style scoped>
.el-button{
  margin-right: 5px;
  float: right;
}
.el-pagination{
  margin-top: 35px;
  margin-right: 14px;
  margin-bottom:20px;
  float: right;
}
.el-table{
  cursor: pointer; 
}
.all-title {
  height:40px;
  border-bottom: 1px dashed #DCDFE6;
}
.main-font span{
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
.el-tabs {
  margin-top: 15px;
}
</style>
