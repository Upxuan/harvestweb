<template>
  <div id="texResultContent">
    <el-card class="box-card result-content-card" shadow="hover">
      <div @click="dialogVisible = true">
        <p class="result-content-title">{{ item.title }}</p>
        <p>
          <span class="result-content-type">{{ item.type }}</span>&nbsp;
          <span class="result-content-authors">{{ item.authors }}</span>
        </p>
      </div>
    </el-card>
    <el-dialog title="详细信息" :visible.sync="dialogVisible" width="50%">
      <div class="result-content-dialog" >
        <p class="result-content-title" style="color:#4682B4;">{{ item.type }}</p>
        <p><span class="result-content-title">标题：</span> {{ item.title }}</p>
        <p><span class="result-content-title">作者：</span> {{ item.authors }}</p>
        <div v-for="(it, index2) in item.params" :key="index2">
          <p><span class="result-content-title">{{ it.key }}：</span>{{ it.value }}</p>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name:'texResultContent',
    props: ["item"],
    data () {
      return {
        dialogVisible: false,
      }
    }
  }
</script>

<style scoped>

/* start search */
.result-content-card {
  width: 70%;
  min-width: 890px;
  font-size: 14px;
  margin-bottom: 10px;
  color: #666;
}
.result-content-title{
  font-weight: bold;
}
.result-content-type {
  color:#4682B4;
}
.result-content-authors {
  font-size: 13px;
}
.result-content-dialog {
  padding: 0px 40px 40px 40px;
}
/* end search */
</style>
