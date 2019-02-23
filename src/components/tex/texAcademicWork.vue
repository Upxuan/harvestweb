<template>
  <div id="texAcademicWork">
    <div class="content">
      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 15 }"
        placeholder="请输入学术兼职信息"
        v-model="textarea">
      </el-input>
    </div>
  </div>
</template>

<script>
  import myapi from '@/api/myapi.js'
  export default {
    name: 'texAcademicWork',
    data () {
      return {
        textarea: ''
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
.content {
    margin-top: 10px;
    /* padding-right: 40%; */
}
</style>
