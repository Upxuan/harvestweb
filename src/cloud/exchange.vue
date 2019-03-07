<template>
  <div id="exchange">
    <section id="exchangeflow" class="text-center">
			<div class="container">
				<div class="row">
					<div class="text-center col-md-12 wow fadeInDown" data-wow-delay="2000">
						<h3>学术交流</h3>
					</div>
          <div class="col-md-12" style="margin-bottom:40px;">
            <div class="col-md-1"></div>
            <div class="col-md-10 text-center">
              <p style="font-size:15px;">学术界有我们的声音，有效社交很重要。</p>
            </div>
            <div class="col-md-1"></div>
          </div>
				</div>
			</div>
		</section>
    <section id="exchange1">
      <div class="container">
        <div class="row">
          <!-- <div class="col-md-12 wow fadeInDown text-center" data-wow-delay="2000">
            <h3>学术交流</h3>
          </div>
          <div class="col-md-12" style="margin-bottom:40px;">
            <div class="col-md-1"></div>
            <div class="col-md-10 text-center">
              <p>学术界有我们的声音，有效社交很重要。</p>
            </div>
            <div class="col-md-1"></div>
          </div> -->
          <div class="col-md-12">
            <i class="fa fa-calendar fa-lg" style="color:#606060;float:left"></i> 
            <h1>&nbsp;&nbsp;&nbsp;Year of 2018</h1>
            <div class="card1">
              <i class="fa fa-send" style="color:#66AF33;float:left;margin-right:10px;"></i><h2>走出去</h2> 
              <h4>参加ICSOC 2018（中国浙江杭州第16届面向服务的计算国际会议）、参加CCF YOCSEF杭州2018换届会议（实验室殷昱煜副教授荣任CCF YOCSEF杭州候任主席）、参加NASAC 2018（第十七届全国软件与应用学术会议）、成立了校地合作，舟山研究院、参加HPC（中国青岛2018全国高性能计算学术年会）、参加教育部重点实验室新一轮评估期战略规划会暨全体动员大会等。</h4>
              <div class="col-sm-6 col-md-3 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.exchange2018GoOut" :key="index" style="height: 190px">
                <div class="exchange1_thumb">
                  <img :src="item.img" class="img-responsive" alt="exchange1">
                  <div class="exchange1_overlay">
                    <a href="#"><i class="fa"><h5>{{ item.name }}</h5></i></a>
                  </div>
                </div>         
              </div>
            </div>
            <div class="card1" style="margin-top:30px;">
              <i class="fa fa-signing" style="color:#66AF33;float:left;margin-right:10px;"></i><h2>请进来</h2> 
              <h4>实验室邀请印度理工学院教授R.K. Shyamasundar讲座、维也纳技术大学Hong-Linh Truong博士讲座、荷兰阿姆斯特丹大学的Zhming Zhao教授讲座、实验室联合举办HASE 2019（中国杭州第十九届高可靠系统工程国际会议）等。</h4>
              <div class="col-sm-6 col-md-3 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.exchange2018Please" :key="index" style="height: 190px">
                <div class="exchange1_thumb">
                  <img :src="item.img" class="img-responsive" alt="exchange1">
                  <div class="exchange1_overlay">
                    <a href="#"><i class="fa"><h5>{{ item.name }}</h5></i></a>
                  </div>
                </div>  
              </div>       
            </div>
          </div>
          <!-- <h1 style="border-bottom : 1px solid #DDDDDD;">&nbsp;</h1> -->
          <div class="col-md-12" style="margin-top:50px"> 
              <i class="fa fa-calendar fa-lg" style="color:#606060;float:left"></i> 
              <h1>&nbsp;&nbsp;&nbsp;Year of 2017</h1>
              <div class="card1">
                <i class="fa fa-send" style="color:#66AF33;float:left;margin-right:10px;"></i><h2>走出去</h2> 
                <h4>实验室参加中国湘潭2017第八届中国计算机学会服务计算会议、参加ICDCS 2017（美国亚特兰大IEEE分布式计算系统国际会议）、成功举办复杂系统建模与仿真教育部重点实验室学术研讨会第一届云计算与边缘计算研讨会。</h4>
                <div class="col-sm-6 col-md-3 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.exchange2017GoOut" :key="index" style="height: 190px">
                  <div class="exchange1_thumb">
                    <img :src="item.img" class="img-responsive" alt="exchange1">
                    <div class="exchange1_overlay">
                      <a href="#"><i class="fa"><h5>{{ item.name }}</h5></i></a>
                    </div>
                  </div>         
                </div>
              </div>
            </div>

            <div class="col-md-12"  style="margin-top:50px">
                <i class="fa fa-calendar fa-lg" style="color:#606060;float:left"></i> 
                <h1>&nbsp;&nbsp;&nbsp;更早</h1>
                <div class="card1">
                    <i class="fa fa-send" style="color:#66AF33;float:left;margin-right:10px;"></i><h2>走出去</h2> 
                    <h4>APSCC 2010 中国杭州第五届IEEE亚太服务计算国际会议、EduCloudSummit 2012中国杭州教育科研云技术高峰论坛、HPDIC 2013 美国第27届IEEE并行与分布式处理国际会议、PQoSCOM 2012 中国北京功率和QoS感知计算国际研讨会等。在知名学术会议如PDPS、Cluster、APSCC、SERVICES、ICSOC、WAIM等举办了CloudPerf 2011-2014,FM-S&C 2011-2014,HPDIC 2012-2014,PQosCom 2012,MDSP 2012,DISA 2012等Workshop。</h4>
                    <div class="col-sm-6 col-md-3 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.exchangeGoOut" :key="index" style="height: 135px">
                      <div class="exchange1_thumb">
                        <img :src="item.img" class="img-responsive" alt="exchange1">
                        <div class="exchange1_overlay">
                          <a href="#"><i class="fa"><h5>{{ item.name }}</h5></i></a>
                        </div>
                      </div>         
                  </div>
                </div>
                <div class="card1">
                  <i class="fa fa-signing" style="color:#66AF33;float:left;margin-right:10px;"></i><h2>请进来</h2> 
                  <h4>实验室邀请H.J.Siegel教授、施巍松教授、Smets教授等教授来访进行学术交流，同韦恩州立大学、约克大学、巴黎十三大学等知名国外学府进行了合作研究。</h4>
                  <div class="col-sm-6 col-md-3 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.exchangePlease" :key="index" style="height: 190px">
                    <div class="exchange1_thumb">
                      <img :src="item.img" class="img-responsive" alt="exchange1">
                      <div class="exchange1_overlay">
                        <a href="#"><i class="fa"><h5>{{ item.name }}</h5></i></a>
                      </div>
                    </div>  
                  </div>       
                </div>
              </div>
        </div>
      </div> 
    </section>
  </div>
</template>

<script>
export default {
  name: 'exchange',
  data () {
    return {

    }
  }
}
</script>

<style scoped>
/* start exchangeflow */
#exchangeflow {
  background: url('../images/exchange/exchange-flow.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  color: #FFFFFF;
  min-height: 50px;
  padding: 30px 0 30px 0;
}
#exchangeflow h3 {
  font-weight: bold;
  letter-spacing: 1px !important;
  padding-bottom: 10px;
}
#exchangeflow p {
  font-weight: 400;
}
/* end exchangeflow */

/* start exchange1 */
#exchange1 {
  /* background: #404040; */
  /* background: url('../images/result/backgrand/resu-flow.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed; */
  background: rgb(246, 246, 246);
  color: #FFFFFF;
  min-height: 300px;
  padding: 80px 0 80px 0;
}
#exchange1 h3 {
  color: #333;
  font-weight: bold;
  letter-spacing: 1px !important;
  padding-bottom: 10px;
  
}
#exchange1 p {
  color: #555;
  font-weight: 400;
  margin: 0 0 40px 0;
}

#exchange1 h1 {
  font-size: 18px;
  font-family: Bahnschrift;
  color: #606060;
}

#exchange1 h2 {
  font-size: 18px;
  font-family: Bahnschrift;
  color: #66AF33;
}

#exchange1 h4 {
  font-size: 14px;
  color: #606060;
  line-height: 22px;
}

#exchange1 .col-md-4 {
  padding: 2px;
}

#exchange1 .exchange1_thumb {
  overflow: hidden;
  position: relative;
}

#exchange1 .exchange1_thumb img {
  width: 100%;
  height: auto;
}

#exchange1 .exchange1_thumb .exchange1_overlay {
  background: #F5F5F5;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
}

#exchange1 .exchange1_thumb .exchange1_overlay .fa {
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

#exchange1 .exchange1_thumb:hover .exchange1_overlay{
  opacity: 0.8;
}

#exchange1 .exchange1_description {
  /* height: 120px; */
  background: #CDBA96;
  padding: 10px;
}

#exchange1 h5 {
  font-size: 15px;
  color: #66AF33;
  text-align: justify;
  padding-bottom: 5px;
}

/* end exchange1 */
</style>
