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
      <transition> 
        <router-view></router-view>
      </transition>
			<div id="foot">
        <footer id="footer">
                <div class="fotter">
                <div class="footer-container">
                    <div class="col-md-8">
                    <br>
                    <i class="fa fa-1x fa-home"></i> 实验室地址：<br>
                    浙江省杭州市杭州电子科技大学下沙高教园校区 一教南楼323/335/337室 三教南楼617室<br>
                    </div>
                    <div class="col-md-4">
                    <br>
                    <i class="fa fa-1x fa-chain"></i> 实验室网址：<br>
                    <a href="http://cloud.hdu.edu.cn">http://cloud.hdu.edu.cn</a><br>
                    </div>
                    <div class="clearfix"></div>
                </div>
                </div>
                <br>
                <div class="container">
                <div class="row myfooter">
                    <div class="text-center">
                    Copyright © 2019. All rights reserved. Designed by <a target="_blank"
                        href="http://cloud.hdu.edu.cn">CLOUD</a>.
                    </div>
                </div>
                </div>
                <br>
            </footer>
    </div>
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
.container {
  margin: 0px 18%;
  width: 60%;
}

#footer {
  width: 100%;
  font-size: 14px;
  color: #DDD;
  background-color: rgb(34, 34, 34);
}

.footer-container {
  margin: 0px 17%;
}
</style>
