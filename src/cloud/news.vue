<template>
  <div id="news">
   <!-- <remote-script src="../js/dynamics.js"></remote-script>
   <remote-script src="../js/minigrid.js"></remote-script> -->
   <h3>最小的响应式动态网格瀑布流布局js插件 <p>A Minimal 2kb zero dependency cascading grid layout</p></h3>

	<a href="index.html" class="current">Default</a> &nbsp; &nbsp; &nbsp;<a href="index2.html">结合 Dynamics.js 使用</a>
<div class="demo">
	<div class="grid">
		<div class="grid-item">
		</div>
		<div class="grid-item">
		</div>
		<div class="grid-item" style="height: 245px;">
		</div>
		<div class="grid-item">
		</div>
		<div class="grid-item" style="height: 290px;">
		</div>
		<div class="grid-item">
		</div>
		<div class="grid-item" style="height: 140px;">
		</div>
		<div class="grid-item" style="height: 200px">
		</div>
		<div class="grid-item" style="height: 150px">
		</div>
		<div class="grid-item">
		</div>
		<div class="grid-item" style="height: 220px">
		</div>
		<div class="grid-item" style="height: 205px">
		</div>
		<div class="grid-item">
		</div>
		<div class="grid-item">
		</div>
		<div class="grid-item">
		</div>
		<div class="grid-item">
		</div>
	</div>
</div>
  </div>
</template>

<script>
import { minigrid } from '../js/minigrid.js'
export default {
  name: 'news',
  data () {
    return {

    }
  },
  mounted () {
    this.test()
  },
  methods () {
        var test = minigrid('.grid', '.grid-item', 6, null, 
          function(){
            var d = document.querySelector('.demo');
            d.style.opacity = 1;
          }
        );
        window.addEventListener('resize', function(){
          minigrid('.grid', '.grid-item');
        });
  }
}
</script>

<style scoped>
.demo {
	position: relative;
	opacity: 0;
	transition: .2s ease;
	margin-bottom: 60px;
}
.grid {
	position: relative;
	/* fluffy */
	margin: 0 auto;
	width: 98%;/* end fluffy */
}
.grid-item {
	position: absolute;
	top: 0;
	left: 0;
	/* fluffy */
	width: 180px;
	height: 120px;
	border-radius: 3px;
	background-color: #536DFE;
	/* end fluffy */
	-webkit-transition: .3s ease-in-out;
	-o-transition: .3s ease-in-out;
	transition: .3s ease-in-out;
}

/* mq */

@media (max-width: 600px) {
.grid-item {
	width: 120px;
	height: 80px;
}
}
</style>
