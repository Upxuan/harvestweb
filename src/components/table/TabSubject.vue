<template>
  <div id="tabsubject">
    <el-form-item label="专著题目：" prop="name" required>
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="丛书名称：" prop="name" >
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="语种：" prop="language">
      <el-radio-group v-model="ruleForm.language">
        <el-radio label="中文"></el-radio>
        <el-radio label="外文"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="出版状态：" prop="state">
      <el-radio-group v-model="ruleForm.state">
        <el-radio label="已出版"></el-radio>
        <el-radio label="待出版"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="ISBN号：" prop="isbn" >
      <el-input v-model="ruleForm.isbn"></el-input>
    </el-form-item>
    <el-form-item label="编辑：" prop="editor" required >
      <el-input v-model="ruleForm.editor"></el-input>
    </el-form-item>
    <el-form-item label="国家或地区：" prop="nation" required label-width="110px" style="margin-left: -10px">
      <el-input v-model="ruleForm.nation"></el-input>
    </el-form-item>
    <el-form-item label="城市：" prop="city" >
      <el-input v-model="ruleForm.city"></el-input>
    </el-form-item>
    <el-form-item label="起止页码：">
      <el-col :span="6">
        <el-input></el-input>
      </el-col>
      <el-col class="line" :span="0.5">&nbsp&nbsp至&nbsp&nbsp</el-col>
      <el-col :span="6">
        <el-input></el-input>
      </el-col>
    </el-form-item>
  </div>
</template>

<script>
  export default{
    name:'tabsubject',
    data(){
      return{
        ruleForm:{
          name:'',
        }
      }
    }
  }
</script>

<style scoped>

</style>
