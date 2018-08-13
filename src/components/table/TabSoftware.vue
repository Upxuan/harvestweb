<template>
  <div id="tabsoftware">
    <el-form-item label="软件名称" prop="name" required>
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="登记号" prop="name" >
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <div class="gap">
      <el-form-item label="权利获得方式" prop="state" label-width="120px" required >
        <el-radio-group v-model="ruleForm.state">
          <el-radio label="原始取得"></el-radio>
          <el-radio label="继受取得"></el-radio>
        </el-radio-group>
      </el-form-item>
    </div>
    <el-form-item label="DOI" prop="delivery">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="备注" prop="delivery">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item label="全文链接" prop="delivery">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="权利范围" prop="state" required>
      <el-radio-group v-model="ruleForm.state">
        <el-radio label="全部权利"></el-radio>
        <el-radio label="部分权利"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="开发完成时间" >
      <div class="block">
        <el-date-picker v-model="value1" type="date" placeholder="选择日期"> </el-date-picker>
      </div>
    </el-form-item>
  </div>
</template>

<script type="text/javascript">
  export default{
    name:'tabsoftware',
    data(){
      return{
        ruleForm:{
          name:''
        }
      }
    }
  }
</script>

<style scoped>
.gap{
  margin-left:-20px;
}
</style>
