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
.green-font {
  color: #66AF33;
}
.hui-font {
  color: #999;
}
/*
a:link{color: blue}
a:visited{color: red}
a:hover{color: yellow}
a:active{color: white}
*/
.mylink a {
  color: #36648B;
  font-weight: bold;
}
.mylink a:hover {
  color: #999;
  font-size: 15px;
  text-decoration:none ;
}
.mylink > a:focus
  {
    color: #999;
    text-decoration:none ;
  }
.mylink > .active > a,
.mylink > .active > a:hover,
.mylink > .active > a:focus {
  color: #36648B;
  background-color: transparent;
}
</style>
