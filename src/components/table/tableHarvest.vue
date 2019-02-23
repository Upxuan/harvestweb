<template>
  <div id="sysharvest" v-if="$type != '0'">
    <div class = "all-title">
      <p class="main-font">个人成果 </p>
    </div><br>
    <el-tabs type="border-card">
      <el-tab-pane label="期刊论文">
        <har-jpaper></har-jpaper>
      </el-tab-pane>
      <el-tab-pane label="会议论文">
        <har-mpaper></har-mpaper>
      </el-tab-pane>
      <el-tab-pane label="专利">
        <har-patent></har-patent>
      </el-tab-pane>
      <el-tab-pane label="项目">
        <har-project></har-project>
      </el-tab-pane>
      <el-tab-pane label="学术专著">
        <har-subject></har-subject>
      </el-tab-pane>
      <el-tab-pane label="软件著作权">
        <har-software></har-software>
      </el-tab-pane>
      <el-tab-pane label="公共事务" v-if="show">
        <har-affairs></har-affairs>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import HarJpaper from '@/components/table/harvest/tableJpaper'
  import HarMpaper from '@/components/table/harvest/tableMpaper'
  import HarPatent from '@/components/table/harvest/tablePatent'
  import HarProject from '@/components/table/harvest/tableProject'
  import HarSubject from '@/components/table/harvest/tableSubject'
  import HarSoftware from '@/components/table/harvest/tableSoftware'
  import HarAffairs from '@/components/table/harvest/tableAffairs'
  import {getCookie,delCookie,setCookie} from '@/api/js/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default {
    name:'sysharvest',
    components:{
      HarJpaper,
      HarMpaper,
      HarPatent,
      HarProject,
      HarSubject,
      HarSoftware,
      HarAffairs
    },
    data () {
      return {
        show: false
      }
    },
    mounted () {
      if(this.$type == 2){
        this.show = true
      }
    }
  }
</script>

<style scoped>
.all-title {
  height: 30px;
  margin-top: 35px;
  border-bottom: 1px dashed #DCDFE6;
}
.main-font {
  font-size: 17px;
  color: #000;
  font-family: Hiragino Sans GB;
}
.line{
  color: #DCDFE6;
}
</style>
