<template>
  <div id="texTeachSituation">
    <div class="all-title">
      <p class="main-font">
        <span>教学情况</span>
      </p>
    </div>
    <div class="content">
      <span>TeachSituation msg</span>
    </div>
  </div>
</template>

<script>
  import myapi from '@/api/myapi.js'
  export default {
    name: 'texTeachSituation',
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
.content {
    margin-top: 10px;
}
</style>
