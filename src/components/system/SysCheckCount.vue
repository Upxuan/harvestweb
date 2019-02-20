<template>
  <div id="sysCheckCount">
    <div class="all-title">
      <p class="main-font">
        <span>查询条件</span>
        <el-button v-if="$type === '0'" type="primary" size="small" @click="searchHarvest()">查询</el-button>
        <el-button v-else-if="$type === '2'" type="warning" size="small" @click="searchHarvest()">查询</el-button>
        <el-button type="danger" size="small" style="margin-right: 15px;" @click="resetForm()">重置</el-button>
      </p>
    </div>
    <advance-search></advance-search>
    <div class="all-title">
      <p class="main-font">
        <span>查询结果</span>
      </p>
    </div>
    <harvest-list></harvest-list>
  </div>
</template>

<script>
  import AdvanceSearch from '@/components/form/formAdvanceSearch'
  import HarvestList from '@/components/tex/texHarvestList'
  import myapi from '@/api/myapi.js'
  export default {
    name:'sysCheckCount',
    components:{
      AdvanceSearch,
      HarvestList
    },
    data () {
      return {
        
      }
    }
  }
</script>

<style scoped>
.all-title {
  height: 40px;
  border-bottom: 1px dashed #DCDFE6;
}
.main-font {
  font-size: 17px;
  color: #000;
  font-family: Hiragino Sans GB;
}
.el-button{
  float: right;
} 
</style>
