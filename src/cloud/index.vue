<template>
  <div id="index">
		<el-container>
			<!-- <el-header> -->
				<!-- <el-menu :default-active="activeIndex" class="el-menu-demo" mode="vertical" @select="handleSelect" v-for="(item, index) in barData" :key="index">
					<el-menu-item :index="item.route">{{ item.name }}</el-menu-item>
				</el-menu> -->
				<!-- <el-menu 
				:unique-opened='true'
				:default-active="this.$route.path"
				router
				class="el-menu-demo"
				@select="handleSelect">
					<el-menu-item index="/">home</el-menu-item>
					<el-menu-item index="/researchTeam">researchTeam</el-menu-item>
				</el-menu>
			</el-header> -->

			<el-header>
				<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
					<div class="header-container">
						<div class="row">
							<div class="navbar-header">
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
			<footer id="footer">
				<div class="footer-container">
					<div class="col-md-8"><br>
						<div class="footer-container-msg">
							<i class="fa fa-1x fa-map-marker"></i> 实验室地址：<br>
							<p>浙江省杭州市经济技术开发区2号大街1158号，邮编310018<br/>杭州电子科技大学下沙高教园校区 一教南楼323/335/337室 三教南楼617室</p>
						</div>
						<div class="footer-container-msg">
							<i class="fa fa-1x fa-home"></i> 实验室网址：<br>
							<a href="http://cloud.hdu.edu.cn">http://cloud.hdu.edu.cn</a>
						</div>
					</div>
					<div class="col-md-4"><br>
						<div class="footer-container-msg">
							<i class="fa fa-1x fa-envelope-o"></i> 实验室邮箱：<br>
							cloud@hdu.edu.cn (云技术实验室)
						</div>
						<div class="footer-container-msg">
							<i class="fa fa-1x fa-bank"></i> 友情链接：<br>
							<a href="http://www.hdu.edu.cn/" target="_blank">Hangzhou Dianzi University</a><br/>
							<a href="http://computer.hdu.edu.cn/" target="_blank">School of Coputer Science and Technology</a>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			<div class="footer-copyright">
				<div class="row myfooter text-center">
					<div class="team_overlay">
						<ul class="social_icon">
							<li><a href="#" class="fa fa-angle-double-up"></a></li>
						</ul>								
					</div>
					Copyright © 2019. All rights reserved. Designed by <a target="_blank" href="http://cloud.hdu.edu.cn">CLOUD</a>.
				</div>
			</div>
		</footer>
		</el-container>
  </div>
</template>

<script>
import Home from '@/cloud/home'
import teacher from '@/cloud/teacher'
import achievement from '@/cloud/achievement'
import result from '@/cloud/result'
import exchange from '@/cloud/exchange'
import student from '@/cloud/student'
import team from '@/cloud/team'
import JoinUs from '@/cloud/joinus'
export default {
  name: 'index',
  components: {
    Home,
    teacher,
    achievement,
    result,
    exchange,
    student,
    team,
    JoinUs
  },
  data () {
    return {
			activeIndex: '/',
			barData: [
				{ name: '首页', route: '/'},
				{ name: '研究团队', route: '/teacher'},
				{ name: '科研成果', route: '/achievement'},
				{ name: '特色成果', route: '/result'},
				{ name: '学术交流', route: '/exchange'},
				{ name: '学生发展', route: '/student'},
				{ name: '团队建设', route: '/team'},
				{ name: '加入我们', route: '/joinus'},
			]
    }
	},
	methods: {
		handleSelect(key, keyPath) {
			console.log(key, keyPath);
		}
	}
}
</script>

<style>
.header-container {
	min-width: 600px;
}
#footer {
	width: 100%;
	font-size: 14px;
	color: #DDD;
	background-color: rgb(34, 34, 34);
}
.header-container {
  margin: 0px 18%;
  width: 60%;
}
.footer-container {
  margin: 0px 17%;
}
.footer-container-msg {
	margin-bottom: 15px;
}
.footer-copyright {
	padding: 0px 17%;
	padding-top: 5px;
	padding-bottom: 10px;
	background-color: rgb(51, 51, 51);
}
</style>
