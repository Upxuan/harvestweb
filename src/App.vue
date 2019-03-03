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
@import './css/animate.min.css';
@import './css/templatemo-style.css';
@import 'http://www.jq22.com/jquery/bootstrap-3.3.4.css';
@import 'http://www.jq22.com/jquery/font-awesome.4.6.0.css';
@import 'http://www.jq22.com/jquery/bootstrap-3.3.4.css';
@import 'http://fonts.googleapis.com/css?family=Open+Sans:400,700';
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
