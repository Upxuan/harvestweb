<template>
  <div id="index">
		<el-container>
			<el-header>
				<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
					<div class="header-container">
						<div class="row">
							<div class="navbar-header">
								<!-- <img class="navbar-brand navbar-img" style="width:55px;height:55px;" src="../images/cloud.png" alt=""> -->
								<a v-if="!isMinScreenWidth" class="navbar-brand" href="" @click="gotoHome"><h3>CLOUD</h3></a>
								<el-dropdown v-else @command="handleCommand">
										<span class="el-dropdown-link">
												<a class="navbar-brand" href="" @click="gotoHome"><h3>CLOUD</h3></a>
										</span>
										<el-dropdown-menu slot="dropdown">
											<el-dropdown-item command="/">首页</el-dropdown-item>
											<el-dropdown-item command="/teacher">科研团队</el-dropdown-item>
											<el-dropdown-item command="/achievement">研究成果</el-dropdown-item>
											<el-dropdown-item command="/result">特色成果</el-dropdown-item>
											<el-dropdown-item command="/exchange">学术交流</el-dropdown-item>
											<el-dropdown-item command="/student">学生发展</el-dropdown-item>
											<el-dropdown-item command="/team">团队建设</el-dropdown-item>
											<el-dropdown-item command="/joinus">加入我们</el-dropdown-item>
											<el-dropdown-item command="/login">登录</el-dropdown-item>
										</el-dropdown-menu>
									</el-dropdown>
							</div>
							<div class="collapse navbar-collapse">
								<div v-if="!isMinScreenWidth">
									<ul class="nav navbar-nav navbar-right">
										<li v-for="(item, index) in barData" :key="index">
											<router-link :to="item.route">
												{{ item.name }}
											</router-link>
										</li>
										<li><router-link to="/login" target="_blank">登录</router-link></li>
									</ul>
								</div>
								<!-- <div v-else>
									<el-dropdown @command="handleCommand">
										<span class="el-dropdown-link">
												<a class="navbar-brand" href="" @click="gotoHome()"><h3>CLOUD</h3></a>
										</span>
										<el-dropdown-menu slot="dropdown">
											<el-dropdown-item command="home">首页</el-dropdown-item>
											<el-dropdown-item command="teacher">科研团队</el-dropdown-item>
											<el-dropdown-item command="achievement">研究成果</el-dropdown-item>
											<el-dropdown-item command="result">特色成果</el-dropdown-item>
											<el-dropdown-item command="exchange">学术交流</el-dropdown-item>
											<el-dropdown-item command="student">学生发展</el-dropdown-item>
											<el-dropdown-item command="team">团队建设</el-dropdown-item>
											<el-dropdown-item command="joinus">加入我们</el-dropdown-item>
										</el-dropdown-menu>
									</el-dropdown>
								</div> -->
							</div>
						</div>			
					</div>
				</nav>
			</el-header>
      <transition> 
        <router-view></router-view>
      </transition>
			<!-- <footer id="footer">
				<div class="footer-container">
					<div class="col-md-8"><br>
						<div class="footer-container-msg">
							<i class="fa fa-1x fa-map-marker"></i> 实验室地址：<br>
							<p>浙江省杭州市经济技术开发区2号大街1158号，邮编310018<br/>杭州电子科技大学下沙高教园校区 一教南楼323/335/337室 三教南楼617室</p>
						</div>
						<div class="footer-container-msg mylink">
							<i class="fa fa-1x fa-home"></i> 实验室网址：<br>
							<a href="http://cloud.hdu.edu.cn">http://cloud.hdu.edu.cn</a>
						</div>
					</div>
					<div class="col-md-4"><br>
						<div class="footer-container-msg">
							<i class="fa fa-1x fa-envelope-o"></i> 实验室邮箱：<br>
							cloud@hdu.edu.cn (云技术实验室)
						</div>
						<div class="footer-container-msg mylink">
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
						<div class="mylink">Copyright © 2019. All rights reserved. Designed by <a href="http://cloud.hdu.edu.cn" target="_blank">CLOUD</a>.</div>
					</div>
				</div>
			</footer> -->
			<my-footer></my-footer>
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
import MyFooter from '@/cloud/footer'
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
		JoinUs,
		MyFooter
  },
  data () {
    return {
			screenWidth: document.body.clientWidth,
			isMinScreenWidth: false,
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
	mounted () {
		var _this = this
		// console.log(this.screenWidth)
		if(_this.screenWidth < 1280) {
			_this.isMinScreenWidth = true
		}else {
			_this.isMinScreenWidth = false
		}
		window.onresize = () => {
			return (() => {
				window.screenWidth = document.body.clientWidth
				_this.screenWidth = window.screenWidth
			})();
		} 
	},
	watch: {
		screenWidth (val) {
			// if (!this.timer) {
				this.screenWidth = val
				// this.timer = true
				var _this = this
				// setTimeout(function () {
					// console.log(_this.screenWidth)
					
					if(_this.screenWidth < 1280) {
						_this.isMinScreenWidth = true
					}else {
						_this.isMinScreenWidth = false
					}
					// _this.init()
					// _this.timer = false
				// }, 400);
			// }
		}
	},
	methods: {
		handleSelect(key, keyPath) {
			// console.log(key, keyPath);
		},
		gotoHome () {
			this.$router.push({path:"/"});
		},
		handleCommand(command) {
			// this.$message('click on item ' + command);
			this.$router.push({path:command});
		}
	}
}
</script>

<style scoped>
@import '../css/templatemo-style.css';
@import 'http://www.jq22.com/jquery/bootstrap-3.3.4.css';
.header-container {
	min-width: 600px;
}
.navbar-img {
	margin: 5px 5px 0 0;
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
	min-width: 400px;
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
.el-dropdown-link {
	cursor: pointer;
	color: #409EFF;
}
</style>
