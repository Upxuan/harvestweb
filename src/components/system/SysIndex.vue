<template>
  <div id="sysindex">
    <div class="index-wrap">
      <user-info></user-info>
      <my-harvest></my-harvest>
    </div>
  </div>
</template>

<script>
  import UserInfo from '@/components/tex/texUserinfo'
  import MyHarvest from '@/components/table/tableHarvest'
  export default {
    name: 'sysindex',
    components:{
      UserInfo,
      MyHarvest
  }
}
</script>

<style scoped>

</style>
