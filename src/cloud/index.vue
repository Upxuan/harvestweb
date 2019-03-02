<template>
  <div id="index">
		<el-container>
			<el-header>
				<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
					<div class="container">
						<div class="row">
							<div class="navbar-header">
								<!-- <button class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
									<span class="icon icon-bar"></span>
									<span class="icon icon-bar"></span>
									<span class="icon icon-bar"></span>
								</button> -->
								<a href="/" class="navbar-brand"><h3>CLOUD</h3></a>
							</div>
							<div class="collapse navbar-collapse">
								<ul class="nav navbar-nav navbar-right">
									<li v-for="(item, index) in barData" :key="index">
										<router-link :to="item.route">
											{{ item.name }}
										</router-link>
									</li>
								</ul>
						</div>
						</div>			
					</div>
				</nav>
			</el-header>
			<el-main>
				<transition> 
					<router-view></router-view>
				</transition>
			</el-main>
		</el-container>
  </div>
</template>

<script>
import Home from '@/cloud/home'
import Member from '@/cloud/member'
import Research from '@/cloud/research'
import News from '@/cloud/news'
import Development from '@/cloud/development'
import JoinUs from '@/cloud/joinus'
export default {
  name: 'index',
  components: {
    Home,
    Member,
    Research,
    News,
    Development,
    JoinUs
  },
  data () {
    return {
			barData: [
				{ name: 'HOME', route: '/'},
				{ name: 'MEMBER', route: '/member'},
				{ name: 'RESEARCH', route: '/research'},
				{ name: 'NEWS', route: '/news'},
				{ name: 'DEVELOPMENT', route: '/development'},
				{ name: 'JOINUS', route: '/joinus'},
			]
    }
  },
}
</script>

<style>
@import 'http://www.jq22.com/jquery/bootstrap-3.3.4.css';
@import 'http://www.jq22.com/jquery/font-awesome.4.6.0.css';
@import '../css/animate.min.css';
@import '../css/templatemo-style.css';
@import 'http://fonts.googleapis.com/css?family=Open+Sans:400,700';
@import 'http://www.jq22.com/jquery/bootstrap-3.3.4.css';
</style>
