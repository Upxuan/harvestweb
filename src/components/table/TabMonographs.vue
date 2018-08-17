<template>
	<div id="tabmonographs">
		<el-form-item label="专利名称：" prop="name" required><el-input v-model="ruleForm.name" ></el-input></el-form-item>
	</div>
</template>

<script type="text/javascript">
	export default{
		name:'tabmonographs',
		data(){
			return{
				ruleForm:{
					name:''
				}
			}
		}
	}
</script>