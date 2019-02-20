<template>
  <div id="tabAdvanceSearch">
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm" >
      <el-form-item label="文献类别：" prop="harType">
        <el-checkbox :indeterminate="isIndeterminate" v-model="checkAll" @change="handleCheckAllChange">全选</el-checkbox>
        <div style="margin: 15px 0;">
          <el-checkbox-group v-model="checkedharvests" @change="handleCheckedharvestsChange">
            <el-checkbox v-for="harvest in harvests" :label="harvest" :key="harvest">{{harvest}}</el-checkbox>
          </el-checkbox-group>
        </div>
      </el-form-item>
      <el-row>
        <el-col :span="7">
          <el-form-item label="发表时间：" prop="date1">
            <el-select v-model="ruleForm.date1">
              <el-option
                v-for="item in searchDate"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="1" style="margin-left: -35px;"><div class="divide-text">-</div></el-col>
        <el-col :span="7" style="margin-left: -80px;">
          <el-form-item prop="date2">
            <el-select v-model="ruleForm.date2">
              <el-option
                v-for="item in searchDate"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="检索信息一：" prop="searchType1">
            <el-select v-model="ruleForm.searchType1" placeholder="请选择检索类目">
              <el-option
                v-for="item in searchTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="17" style="margin-left: -120px;">
          <el-form-item prop="search1">
            <el-input v-model="ruleForm.search1"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="检索信息二：" prop="searchType2">
            <el-select v-model="ruleForm.searchType2" placeholder="请选择检索类目">
              <el-option
                v-for="item in searchTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="17" style="margin-left: -120px;">
          <el-form-item prop="search2">
            <el-input v-model="ruleForm.search2"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="检索信息三：" prop="searchType3">
            <el-select v-model="ruleForm.searchType3" placeholder="请选择检索类目">
              <el-option
                v-for="item in searchTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="17" style="margin-left: -120px;">
          <el-form-item prop="search3">
            <el-input v-model="ruleForm.search3"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="检索信息四：" prop="searchType4">
            <el-select v-model="ruleForm.searchType4" placeholder="请选择检索类目">
              <el-option
                v-for="item in searchTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="17" style="margin-left: -120px;">
          <el-form-item prop="search4">
            <el-input v-model="ruleForm.search4"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="检索信息五：" prop="searchType5">
            <el-select v-model="ruleForm.searchType5" placeholder="请选择检索类目">
              <el-option
                v-for="item in searchTypes"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="17" style="margin-left: -120px;">
          <el-form-item prop="search5">
            <el-input v-model="ruleForm.search5"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      
    </el-form>
  </div>
</template>

<script>
  import myapi from '@/api/myapi.js'
  const harvestOptions = ['期刊论文', '会议论文', '专利', '项目', '软件著作权', '学术著作', '公共事务'];
  export default {
    name: 'tabAdvanceSearch',
    data () {
      return {
        checkAll: false,
        checkedharvests: [],
        harvests: harvestOptions,
        isIndeterminate: true,
        ruleForm: {},
        rules: {},
        searchDate: this.searchDate,
        searchTypes: this.searchTypes
      }
    },
    methods: {
      handleCheckAllChange(val) {
        this.checkedharvests = val ? harvestOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedharvestsChange(value) {
        let checkedCount = value.length;
        this.checkAll = checkedCount === this.harvests.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.harvests.length;
      }
    }
  }
</script>

<style scoped>
#tabAdvanceSearch{
  margin-left: 50px;
  width: 1000px;
  margin-top: 15px;
}
.divide-text {
  margin-left: 60px;
  text-align: center;
  line-height: 40px;
  color: rgb(96,98,102);
  font-size: 14px;
}
.el-input {
  /* width: 40%; */
}
</style>
