<template>
  <div id="home">
    <div class="block flexslider templatemo_headerimage">
      <el-carousel trigger="click" :height="bannerH+'px'" class="slides" setActiveItem @change="changeCarousel">
        <el-carousel-item>
          <div class="slider-caption">
            <div class="templatemo_homewrapper">
              <!-- <div class="animated bounce">欢迎来到云技术研究中心</div> -->
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item class="text-center">
          <div class="slider-caption2 text-center">
            <div class="templatemo_homewrapper">
              <h2 id="f1-1" class="wow" data-wow-delay="2000">2019实验室招新</h2>
              <div id="f1-2">
                <h3 class="wow" data-wow-delay="2000">请将详细简历及本科成绩单发送至实验室邮箱cloud@hdu.edu.cn</h3>
                <h3 class="wow" data-wow-delay="2000">简历中请注明初试总成绩、单科成绩、本科期间项目经历、研究兴趣和计划等。</h3>
                <h3 class="wow" data-wow-delay="2000">邮件无主题、正文、抬头、落款的直接忽略！附件不要压缩打包。</h3>
              </div>
              <a id="f1-3" class="smoothScroll btn btn-default wow" data-wow-delay="2000" @click="gotoJoinUs()">LEARN MORE</a>	
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="slider-caption">
            <div id="f2" class="templatemo_homewrapper">
              <h2 class="wow" data-wow-delay="2000">云技术研究中心</h2>
              <h3 class="wow" data-wow-delay="2000">复杂系统建模与仿真教育部B类重点实验室</h3>
              <h3 class="wow" data-wow-delay="2000">浙江省网络媒体云处理与分析工程技术中心</h3>
              <h3 class="wow" data-wow-delay="2000">浙江省数据存储传输及应用技术研究重点实验室</h3>
            </div>
          </div>
        </el-carousel-item>
        <el-carousel-item>
          <div class="slider-caption">
            <div id="f3" class="templatemo_homewrapper">
              <h2 class="wow" data-wow-delay="2000">实验室科研平台</h2>
              <h3 class="wow" data-wow-delay="2000">复杂系统建模与仿真教育部重点实验室</h3>
              <h3 class="wow" data-wow-delay="2000">中国教育科研网格平台</h3>
              <h3 class="wow" data-wow-delay="2000">浙江省网络媒体云处理与分析工程技术中心</h3>
              <h3 class="wow" data-wow-delay="2000">浙江省数据存储传输及应用技术研究重点实验室</h3>
              <h3 class="wow" data-wow-delay="2000">浙江省政务新媒体研究院</h3>
              <h3 class="wow" data-wow-delay="2000">海量数据存储与处理校创新团队</h3>
              <h3 class="wow" data-wow-delay="2000">浙江省物联网科技创新服务平台和杭州市物联网科技创新服务平台的核心共建单位</h3>
            </div>
          </div>
        </el-carousel-item>
      </el-carousel> 
    </div>
    <!-- start about -->
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-7 wow fadeInLeft" data-wow-delay="2000">
            <h3>WECOME TO CLOUD 云技术研究中心</h3>
            <br>
            <h2>INTRODUCTION</h2>
            <p>
              杭州电子科技大学云计算技术研究中心隶属于杭州电子科技大学计算机学院，依托于“复杂系统建模与仿真”教育部重点实验室、计算机科学与技术浙江省“重中之重”学科和一级博士点学科，拥有良好的学术氛围和国际前沿的研究方向。目前研究领域包括：边缘计算、云存储技术、大数据分析处理、物联网技术、云计算与高性能计算、软件可靠性、新型移动互联网与物联网应用、计算系统虚拟化、绿色计算等。中心具备较强的师资力量、充满活力的科研梯队以及良好的硬件设施环境。现有教授、博导3人，副教授8人，具有博士学位教师15人，浙江省首批中青年学科带头人1人，讲座教授1人，其中IEEE
              FELLOW 1人，浙江省151人才工程第三层次人员2人。目前全日制在读博士硕士研究生70余名。</p>
            <br>
          </div>
          <div class="col-sm-6 col-md-5 wow fadeInRight" data-wow-delay="2000">
            <br><br><br>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <img src="../../static/images/home/rewards/1.jpg" class="img-responsive" alt="company 3">
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <img src="../../static/images/home/rewards/2.jpg" class="img-responsive" alt="company 4">
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <img src="../../static/images/home/rewards/3.jpg" class="img-responsive" alt="company 3">
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <img src="../../static/images/home/rewards/4.jpg" class="img-responsive" alt="company 4">
            </div>
          </div>
        </div>
        <p>
          中心承担了教育部中国教育科研网格ChinaGrid二期力学网格——杭电校园网格主节点建设任务，同时也是杭州电子科技大学高性能计算服务平台。目前拥有四个实验室(1教335、1教323、东区305、3教501)、400多平米的实验场地，实验设备包括：6个高性能计算机集群及2台IBM小型机，聚合峰值计算能力20万亿FLOPS，存储容量逾100TB，100余台PC机；拥有UBsense室内定位系统、GPS信号模拟器、GIS平台等设备构成的移动计算环境，以及50个Xbow
          TeloSB无线传感器模块、RFID设备构成的无线传感网络实验环境；实验设备资产700多万元，为高层次人才培养提供良好的基础设施与外部条件。</p>
        <br>
        <p>
          云计算技术研究中心承担了国家科技支撑计划课题2项目，国家973计划子课题1项，国家自然科学基金20项，国防基金重点项目1项，浙江省自然科学基金项目13项，浙江省重大科技计划专项9项，浙江省科技计划项目4项，发表SCI/EI论文200多篇，申请国家发明专利30余项，获得授权发明专利20余项，软件著作权12项。研究成果获得浙江省科学进步奖一等奖1项（2014），浙江省科学进步奖二等奖1项（2017），浙江省教学成果奖一等奖1项（2014），浙江省科学进步奖三等奖1项（2012），教育厅成果奖2等奖1项（2011）。
        </p>
      </div>
    </section>
    <br>
    <!-- end about -->
    <!-- start growth -->
		<section id="pricing" class="text-center" style="background-color: rgb(246,246,246);">
      <div class="container">
          <div class="row">
            <div class="col-md-12 wow fadeInDown">
              <!-- <h3>Road To Growth</h3> -->
              <h3>实验室发展史</h3>
            </div>
            <div class="col-md-2"></div>
            <div class="col-md-8">
              <span>2006年 - 至今</span>
            </div>
            <div class="col-md-2" style="height: 40px;"></div>
            <div class="col-md-3 col-sm-6" style="padding-left:0px;" v-for="(item, index) in this.home.growth" :key="index">
              <div class="col-md-6 wow fadeInLeft" style="padding-left:5px">
                <div class="plan plan_one" style="opacity:0.9;border-radius:10px">
                  <h4 class="plan_title" style="color:black; height:130px; padding-top:30px;">{{ item.name1 }}</h4>
                  <ul>
                    <li style="font-family:Bahnschrift;font-size:20px;">{{ item.year1 }}</li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 wow fadeInDown" style="padding-right:5px">
                <div class="plan plan_two" style="opacity:0.9;border-radius:10px">
                  <h4 class="plan_title" style="color:black; height:130px; padding-top:30px;">{{ item.name2 }}</h4>
                  <ul>
                    <li style="font-family:Bahnschrift;font-size:20px;">{{ item.year2 }}</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
		</section>
		<!-- end growth -->
    <!-- start reseach topics -->
		<section id="service">
			<div class="container">
				<div class="row">
					<div class="text-center col-md-12 wow fadeInDown">
						<!-- <h3>RESEARCH TOPICS</h3> -->
						<h3>研究方向</h3>
					</div>
					<div class="col-md-2"></div>
					<div class="col-md-8 text-center">
						<p>云存储技术、大数据分析处理、无线传感器网络技术、云计算、并行计算与高性能计算、软件可靠性、新型移动互联网与物联网应用、服务计算及系统虚拟化、绿色计算与能耗有效性、社会网络、工程计算仿真、地理信息系统等。
            </p>
          </div>   
          <div class="col-md-2"></div>
					<div class="col-sm-6 col-md-4 wow fadeInLeft">
						<div class="media">
							<i class="fa fa-cloud pull-left media-object"></i>
              <div class="media-body">
                <h4 class="media-heading">云计算</h4>
                <p  style="text-indent: 0">通过网络把多个成本相对较低的计算实体整合成一个具有强大计算能力的完美系统,并把这强大的计算能力分布到终端用户手中。</p>
              </div>
						</div>
					</div>
          <div class="col-sm-6 col-md-4 wow fadeInLeft">
						<div class="media">
							<i class="fa fa-cloud-download pull-left media-object"></i>
              <div class="media-body">
                <h4 class="media-heading">边缘计算</h4>
                <p  style="text-indent: 0">在靠近物或数据源头的一侧，采用网络、计算、存储、应用核心能力为一体的开放平台，就近提供最近端服务，以产生更快的网络服务响应。</p>
              </div>
						</div>
					</div>
          <div class="col-sm-6 col-md-4 wow fadeInLeft">
						<div class="media">
							<i class="fa fa-chain pull-left media-object"></i>
              <div class="media-body">
                <h4 class="media-heading">区块链</h4>
                <p  style="text-indent: 0">一种新型的去中心化协议，具有分布式、去中介、去信任、不可篡改、可编程等特征，未来可应用于金融市场交易、博彩业、智能合约等领域。</p>
              </div>
						</div>
					</div>
          <div class="col-sm-6 col-md-4 wow fadeInLeft">
						<div class="media">
							<i class="fa fa-bars pull-left media-object"></i>
              <div class="media-body">
                <h4 class="media-heading">并行与高性能计算</h4>
                <p  style="text-indent: 0">开发高性能计算机的技术，涉及并行算法、并行编译、并行软件工程、面向CPU/GPU的算法性能优化等。</p>
              </div>
						</div>
					</div>
          <div class="col-sm-6 col-md-4 wow fadeInLeft">
						<div class="media">
							<i class="fa fa-server pull-left media-object"></i>
              <div class="media-body">
                <h4 class="media-heading">服务计算与系统虚拟化</h4>
                <p  style="text-indent: 0">有效产生和利用计算和信息技术进行建模、生成、操作和管理业务服务的科学技术，涉及虚拟化技术、SOA和Web服务、业务流程集成等。</p>
              </div>
						</div>
					</div>
          <div class="col-sm-6 col-md-4 wow fadeInLeft">
						<div class="media">
							<i class="fa fa-cogs pull-left media-object"></i>
              <div class="media-body">
                <h4 class="media-heading">机器学习</h4>
                <p  style="text-indent: 0">从大量的、不完全的、有噪声的、模糊的实际应用数据中,提取隐含在其中的、潜在有用的信息和知识的过程，涉及各类算法。</p>
              </div>
						</div>
					</div>
				</div>
			</div>
		</section>
    <!-- end research topics -->
    <!-- start work -->
		<section id="work" class="text-center">
      <div class="container">
        <div class="row">
          <div class="col-md-12 wow fadeInDown" data-wow-delay="2000">
            <!-- <h3 style="color:#66AF23">WORK ENVIRONMENT</h3> -->
            <h3 style="color:#333">实验室环境<br>
              <span style="color:#66AF23;font-size:15px;font-weight: 500;">(中国教育科研网格建设单位)</span>
            </h3>
          </div>
          <div class="col-md-2"></div>
          <div class="col-md-8">
            <span>6个机柜，2套刀片服务器，2套网络存储、聚合峰值计算能力12万亿FLOPS，存储容量100TB，80余台PC机；拥有UBsense室内定位系统、GPS信号模拟器、GIS平台等设备构成的移动计算环境，以及50个Xbow TeloSB无线传感器模块、RFID设备构成的无线传感网络实验环境。</span><br><br>
            <span>实验设备资产近1000万元，为高层次人才培养提供良好的基础设施与外部条件。未来三年还将购进300多万大型仪器和日常办公设备。</span>
          </div>
          <div class="col-md-2"></div>
          <div class="col-sm-6 col-md-4 wow fadeInLeft" style="margin-top:20px;" data-wow-delay="2000" v-for="(item, index) in this.home.workEnvironment" :key="index">
            <div class="work_thumb">
              <img :src="item.img" style="width:100%; height:100%;" class="img-responsive" alt="work">
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end work -->

    <!-- start home1 -->
    <section id="home1">
      <div class="container">
        <div class="row">
          <div class="col-md-12 wow fadeInDown text-center" data-wow-delay="2000">
            <h3>合作机构</h3>
          </div>
          <div class="col-md-12" style="margin-bottom:50px;">
            <!-- <div class="col-md-1"></div> -->
            <div class="col-md-12">
              <p><span style="font-weight:bold;">合作高校：</span>美国韦恩州立大学，加拿大约克大学，浙江大学，华中科技大学，中科院网络中心等相关实验室。</p><br>
              <p><span style="font-weight:bold;">合作企业：</span>阿里巴巴，网易杭研院，海康威视，同花顺，信核数据，同博，盘石网盟，中科曙光，浪潮集团，新华三，安恒，数源科技，中电集团第52研究所等国内知名IT企业；602所、706所、620所等军工科研单位。</p><br>
              <p><span style="font-weight:bold;">交叉平台：</span>杭电舟山同博海洋电子信息研究院，杭电-韦恩州立大学云服务实验室，资产云协同创新中心，中国财务云研究院，浙江省数据存储传输及应用技术研究重点实验室，浙江省网络媒体云处理与分析工程技术研究中心。</p>
            </div>
          </div>
          <div class="col-md-12" style="margin-bottom:20px;">
            <div class="col-md-1"></div>
            <div class="col-sm-2 col-md-2 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.home.homeCooperation.school" :key="index">
              <div class="home1_thumb"><img :src="item.img" class="img-responsive"></div>
            </div> 
            <div class="col-md-1"></div>
          </div>
          <div class="col-md-12"  style="margin-bottom:20px;">
            <div class="col-md-1"></div>
            <div class="col-sm-2 col-md-2 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.home.homeCooperation.cooperation1" :key="index">
              <div class="home1_thumb"><img :src="item.img" class="img-responsive"></div>
            </div> 
            <div class="col-md-1"></div>
          </div>
          <div class="col-md-12"  style="margin-bottom:20px;">
            <div class="col-md-1"></div>
            <div class="col-sm-2 col-md-2 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.home.homeCooperation.cooperation2" :key="index">
              <div class="home1_thumb"><img :src="item.img" class="img-responsive"></div>
            </div> 
            <div class="col-md-1"></div>
          </div>
          <div class="col-md-12">
            <div class="col-md-4"></div>
            <div class="col-sm-2 col-md-2 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.home.homeCooperation.cooperation3" :key="index">
              <div class="home1_thumb"><img :src="item.img" class="img-responsive"></div>
            </div> 
            <div class="col-md-1"></div>
          </div>
        </div>
      </div> 
    </section>
    <!-- end home1 -->

    <!-- start newsletter -->
		<section id="newsletter" class="text-center">
      <div class="container">
        <div class="row">
          <div class="text-center col-md-12 wow fadeInDown" data-wow-delay="2000">
            <h3>JOIN US</h3>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <span>我们非常欢迎热爱实验室相关研究方向的同学前来加入我们的行列，攻读博士学位、硕士学位，做科创实习；非常欢迎拥有博士学位的相关优秀人才前来应聘教师岗位。</span>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-12 wow fadeInDown" data-wow-delay="2000">
            <form role="form">
              <div class="col-md-4"></div>
              <div class="col-md-4">
                <a class="smoothScroll btn btn-default wow fadeInDown" data-wow-delay="2000" style="width:260px;margin-top:20px;" @click="gotoJoinUs()">JOIN US NOW</a>	
                <!-- <router-link to="/joinus">
                  <input type="submit" value="JOIN US NOW" class="form-control">
                </router-link> -->
              </div>
              <div class="col-md-4"></div>
            </form>
          </div>
        </div>
      </div>
    </section>
    <!-- end newsletter -->
  </div>
</template>

<script>
import home from '../../static/mock/home.json';
export default {
  name: 'home',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      bannerH: 200,
      home: {
        homeCooperation: home.homeCooperation,
        growth: home.growth,
        reseachTopics: home.reseachTopics,
        workEnvironment: home.workEnvironment,
      }
    }
  },
  methods: {
    gotoJoinUs(){
      this.$router.push({path:"/joinus"});
    },
    setBannerH() {
      this.bannerH = document.body.clientWidth / 2 - 70
    },
    changeCarousel (key1, key2) {
      // console.log(key1 + ",,," + key2)
      // console.log(document.getElementById("f2").className)
      if(key1 === 1) {
        $('#f1-1').addClass('animated fadeInLeftBig')
        $('#f1-2').addClass('animated fadeInRightBig')
        $('#f1-3').addClass('animated fadeInUp')
      }else if(key1 === 2) {
        $('#f2').addClass('animated flipInX')
      }else if(key1 === 3) {
        $('#f3').addClass('animated bounceInUp')
      }

      if(key2 === 1) {
        $('#f1-1').removeClass('animated fadeInLeftBig');
        $('#f1-2').removeClass('animated fadeInRightBig');
        $('#f1-3').removeClass('animated fadeInUp');
      }else if(key2 === 2) {
        $('#f2').removeClass('animated flipInX')
      }else if(key2 === 3) {
        $('#f3').removeClass('animated bounceInUp')
      }
    }
  },
  mounted() {
    this.setBannerH()
    window.addEventListener('resize', () => {
      this.setBannerH()
    }, false)
  }
}
</script>

<style scoped>
@import '../css/templatemo-style.css';
@import 'http://www.jq22.com/jquery/bootstrap-3.3.4.css';
/* start animate*/
#f1-3 {
  animation-duration:1s;
  -webkit-animation-duration:1s;
  animation-delay:1s;
  -webkit-animation-delay:1s;
}
#f2, #f3{
  animation-duration:1.5s;
  -webkit-animation-duration:1.5s;
}
/* end animate*/

p {
  font-size: 15px;
  text-align: justify;
  text-indent: 32px;
}
span {
  font-size: 15px;
}
.navigation {
  margin: 0px 15%;
  position: fixed;
  top: 30px;
  z-index: 5;
}

.navigation-left {
  float: left;
  width: 470px;
}

.logo {
  top: 30px;
  margin: 0px 20%;
  font-size: 40px;
  font-family: STCaiyun;
  color: #fff;
  font-weight: bold;
}

.block {
  position: relative;
  margin: 0;
  padding: 0;
}

.el-menu-item {
  font-size: 17px;
  font-weight: bold;
}

.el-submenu__title {
  font-size: 17px;
  font-weight: bold;
}

.el-menu.el-menu--horizontal {
  border-bottom: 0px !important;
  border-right: 0px !important;
}

.el-carousel__item:nth-child(4n) {
  background-image: url(../../static/images/home/sliders/4.jpg);
  background-size: cover;
}

.el-carousel__item:nth-child(4n+1) {
  background-image: url(../../static/images/home/sliders/2.jpg);
  background-size: cover;
}

.el-carousel__item:nth-child(4n+2) {
  background-image: url(../../static/images/home/sliders/11.jpg);
  background-size: cover;
}

.el-carousel__item:nth-child(4n+3) {
  background-image: url(../../static/images/home/sliders/1.jpg);
  background-size: cover;
}

.slider-caption{
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  top: 100px;
  left: 120px; 
  /* font-family: YouYuan; */
}

.slider-caption2{
  color:white;
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;
  text-transform: uppercase;
  z-index: 7;
  width: 100%;
  height: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  padding-bottom: 220px;
}

.container {
  margin: 0px 18%;
  width: 60%;
}

#about .col-md-5 img {
  height: 140px;
  margin: 5px;
}

.grow {
  text-align: center;
}

#pricing {
  background: url('../../static/images/home/pricing-img.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  color: #FFFFFF;
  min-height: 300px;
  padding: 110px 0 110px 0;
}
 
#pricing .container{
    margin: 0px 10%;
    width: 80%;
}

#pricing .plan .plan_title{
  padding:25px;
  display: flex;
  align-items: center; 
}

#work {
  /* background:#DDDDDD; */
  background:rgb(246,246,246);
}

#work .container .col-md-8  {
  color: #555;
  
  /* font-family: YouYuan; */
}

.work_thumb {
  height: 250px;
  margin:5px 5px 5px 5px;
}

/* start home1 */
#home1 {
  /* background: #404040; */
  background: #FFF;
  min-height: 300px;
  padding: 80px 0 80px 0;
}
#home1 h3 {
  color: #333;
  font-weight: bold;
  letter-spacing: 1px !important;
  padding-bottom: 30px;
  
}
#home1 p {
  margin: 0px;
  /* margin-bottom: 10px; */
}
#home1 .col-md-4 {
  padding: 2px;
}
#home1 .home1_thumb {
  overflow: hidden;
  position: relative;
}
#home1 .home1_thumb img {
  width: 100%;
  height: auto;
}
#home1 .home1_thumb .home1_overlay {
  background: #F5F5F5;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
}
#home1 .home1_thumb .home1_overlay .fa {
  color: #555;
  width: 90px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
#home1 .home1_thumb:hover .home1_overlay{
  opacity: 0.8;
}
#home1 .home1_description {
  /* height: 120px; */
  background: #CDBA96;
  padding: 10px;
}
#home1 h5 {
  font-size: 15px;
  color: #66AF23;
  text-align: justify;
  padding-bottom: 5px;
}
/* end home1 */
</style>
