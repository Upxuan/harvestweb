<template>
  <div id="tabpatent">
    <el-form-item label="论文类别" prop="resource" required>
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="中国专利"></el-radio>
        <el-radio label="美国专利"></el-radio>
        <el-radio label="欧洲专利"></el-radio>
        <el-radio label="WIPO专利"></el-radio>
        <el-radio label="日本专利"></el-radio>
        <el-radio label="其他国家专利"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="专利名称" prop="name" required><el-input v-model="ruleForm.name" ></el-input></el-form-item>
    <div class="gap">
      <el-form-item label="申请(专利)号" prop="name" label-width="120px" required>
        <el-input v-model="ruleForm.name" ></el-input>
      </el-form-item>
    </div>
    <el-form-item label="公开(公告)号" prop="name" >
      <el-input v-model="ruleForm.name" ></el-input>
    </el-form-item>
    <el-form-item label="摘要" prop="delivery" >
      <el-input type="textarea" v-model="ruleForm.desc" ></el-input>
    </el-form-item>
    <el-form-item label="关键词" prop="delivery">
       <el-input v-model="ruleForm.name" placeholder="用分号或逗号隔开"></el-input>
    </el-form-item>
    <div class="gap">
      <el-form-item label="IPC号(主分类号)"  label-width="120px" prop="delivery">
         <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
    </div>
    <el-form-item label="CPC号" prop="delivery">
       <el-input v-model="ruleForm.name" placeholder="用分号或逗号隔开"></el-input>
    </el-form-item>
    <el-form-item label="发证单位" prop="name" required>
      <el-input v-model="ruleForm.name" ></el-input>
    </el-form-item>
    <el-form-item label="专利类别" prop="resource" required>
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="发明专利"></el-radio>
        <el-radio label="实用新型"></el-radio>
        <el-radio label="外观设计"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="专利状态" prop="resource" required>
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="申请"></el-radio>
        <el-radio label="授权"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item label="生效日期" required>
      <div class="block">
        <el-date-picker
          v-model="value7"
          type="daterange"
          align="right"
          unlink-panels
          range-separator="至"
          start-placeholder="开始日期"
          end-placeholder="结束日期"
          :picker-options="pickerOptions2">
        </el-date-picker>
      </div>
    </el-form-item>
    <el-form-item label="申请日期" required>
      <div class="block">
        <el-date-picker
          v-model="value1"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </div>
    </el-form-item>
    <el-form-item label="专利权人" prop="name" >
      <el-input v-model="ruleForm.name" ></el-input>
    </el-form-item>
    <el-form-item label="成果转化状态" prop="resource" >
      <el-radio-group v-model="ruleForm.resource">
        <el-radio label="转让"></el-radio>
        <el-radio label="许可"></el-radio>
        <el-radio label="作价投资"></el-radio>
        <el-radio label="其他"></el-radio>
        <el-radio label="无"></el-radio>
      </el-radio-group>
    </el-form-item>
    <div class="inputlength">
      <el-form-item label="交易金额" prop="name" required>
        <el-input v-model="ruleForm.name" ></el-input>
      </el-form-item>
    </div>
    <el-form-item label="基金标注" prop="delivery">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="DOI" prop="delivery">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
    <el-form-item label="备注" prop="delivery">
      <el-input type="textarea" v-model="ruleForm.desc"></el-input>
    </el-form-item>
    <el-form-item label="全文链接" prop="delivery">
      <el-input v-model="ruleForm.name"></el-input>
    </el-form-item>
  </div>
</template>

<script type="text/javascript">
  export default{
    name:'tabpatent',
    data(){
      return{
        ruleForm:{
        }
      }
    }
  }
</script>

<style scoped>
.inputlength{
  width:300px;
}
.gap{
  margin-left:-20px;
}
</style>
