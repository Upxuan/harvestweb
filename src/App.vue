<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  provide () {
    return {
      reload: this.reload
    }
  },
  data () {
    return {
      isRouterAlive: true
    }
  },
  methods: {
    //模板刷新
    reload () {
      this.isRouterAlive = false;
      this.$nextTick( function () {
        this.isRouterAlive = true;
      })
    }
  }
}
</script>

<style>
body {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
a {
  TEXT-DECORATION: none
}
</style>
