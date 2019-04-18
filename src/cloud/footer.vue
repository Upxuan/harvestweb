<template>
  <div id="myfooter">
			<footer id="footer">
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
			</footer>
  </div>
</template>

<script>
export default {
  name: 'myfooter',
  data () {
    return {

    }
	}
}
</script>

<style scoped>
@import '../css/templatemo-style.css';
@import 'http://www.jq22.com/jquery/bootstrap-3.3.4.css';
#footer {
	width: 100%;
	font-size: 14px;
	color: #DDD;
	background-color: rgb(34, 34, 34);
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
