<template>
  <div id="sysindex">
    <div class="index-wrap">
      <div class="user-img">
        <img src="@/assets/hp.png"> 
      </div>
      <user-info></user-info>
      <my-harvest></my-harvest>
      <button @click="add('a-component', 'test')">Add A</button>
      <button @click="add('b-component', 'test')">Add B</button>
    </div>
  </div>
</template>

<script>
  import UserInfo from './SysUserinfo'
  import MyHarvest from './SysHarvest'
  export default {
    name: 'sysindex',
    components:{
      UserInfo,
      MyHarvest
  }
}
</script>

<style scoped>
.user-img {
  float: left;
}
.index-wrap {
  margin-right: 100px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: -750px;
  margin-left: 230px;
  font-family: Hiragino Sans GB;
}
</style>
