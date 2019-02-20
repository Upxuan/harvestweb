<template>
  <div id="texRewards">
    <div class="all-title">
      <p class="main-font">
        <span>获得奖励</span>
      </p>
    </div>
    <div class="content">
      <span>Rewards msg</span>
    </div>
  </div>
</template>

<script>
  import myapi from '@/api/myapi.js'
  export default {
    name: 'texRewards',
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
