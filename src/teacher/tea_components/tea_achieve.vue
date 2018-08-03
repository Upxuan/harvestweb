<template>
	<div>
		<div class = "all-title">
    		<p class="main-font">个人成果 </p>
		</div><br>
    	<el-tabs type="border-card">
		  <el-tab-pane label="期刊论文"><qikanAchieve></qikanAchieve>> </el-tab-pane>
		  <el-tab-pane label="会议论文">配置管理</el-tab-pane>
		  <el-tab-pane label="项目">角色管理</el-tab-pane>
		  <el-tab-pane label="专利">定时任务补偿</el-tab-pane>
		  <el-tab-pane label="学术专著">配置管理</el-tab-pane>
		  <el-tab-pane label="软件著作权">角色管理</el-tab-pane>
		</el-tabs>

	</div>
</template>

<script type="text/javascript">
	import qikanAchieve from './achieve_components/qikanAchieve'
	export default{
		name:'Tea_Achieve',
		components:{
			qikanAchieve
		},
		data(){
			return{
				
			}
		}
	}
</script>

<style type="text/css">

.all-title {
 height:50px;
  border-bottom: 1px dashed #DCDFE6;
}
.main-font {
  font-size: 17px;
  
  color: #000;
  font-family: Hiragino Sans GB;

}
.line{
	color:#DCDFE6;
}
</style>