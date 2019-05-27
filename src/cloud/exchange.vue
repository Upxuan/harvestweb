<template>
  <div id="exchange">
    <section id="exchangeflow" class="text-center">
			<div class="container">
				<div class="row">
					<div class="text-center col-md-12 wow fadeInDown" data-wow-delay="2000">
						<h3>学术交流</h3>
					</div>
          <div class="col-md-12" style="height:190px;;">
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
          <div class="col-md-12" style="margin-bottom:50px;" v-for="(item, indexs) in this.exchangesData" :key="indexs">
            <i class="fa fa-calendar fa-lg" style="color:#606060;float:left"></i> 
            <h1>&nbsp;&nbsp;&nbsp;{{ item.title }}</h1>
            <div class="card1" v-show="item.out_message.length>0">
              <i class="fa fa-send exchange-logo"></i><h2>走出去</h2> 
              <div class="col-md-12" v-for="(list, index) in item.out_message" :key="index">
                <h4>
                  <div v-html="list.description"></div>
                  <!-- <span>{{ list.description }}</span> -->
                  <!-- <a onclick="" v-show="">了解更多</a> -->
                </h4>
                <div class="col-sm-6 col-md-3 wow fadeInLeft" data-wow-delay="2000" v-for="(imglist, index1) in list.imageslist" :key="index1">
                  <div class="exchange1_thumb exchange-demo">
                    <img :src="imglist.img" class="img-responsive" alt="exchange1">
                    <div class="exchange1_overlay" v-show="imglist.name != ''">
                      <i class="fa"><h5>{{ imglist.name }}</h5></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="card1" v-show="item.in_message.length>0">
              <i class="fa fa-signing exchange-logo"></i><h2>请进来</h2> 
              <div class="col-md-12" v-for="(list, index) in item.in_message" :key="index">
                <h4><div v-html="list.description"></div></h4>
                <div class="col-sm-6 col-md-3 wow fadeInLeft" data-wow-delay="2000" v-for="(imglist, index2) in list.imageslist" :key="index2">
                  <div class="exchange1_thumb exchange-demo">
                    <img :src="imglist.img" class="img-responsive" alt="exchange1">
                    <div class="exchange1_overlay" v-show="imglist.name != ''">
                      <i class="fa"><h5>{{ imglist.name }}</h5></i>
                    </div>
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
import exchange from '../../static/mock/exchange.json';
export default {
  name: 'exchange',
  data () {
    return {
      exchangesData: exchange.all_exchanges
    }
  },
  mounted() {
    for(let i=0; i<this.exchangesData.length; i++){
      let out_message = this.exchangesData[i].out_message;
      let in_message = this.exchangesData[i].in_message;
      for(let j=0; j<out_message.length; j++)
        this.exchangesData[i].out_message[j].description =  this.trim(out_message[j].description);
      for(let j=0; j<in_message.length; j++)
        this.exchangesData[i].in_message[j].description = this.trim(in_message[j].description);
    }
  },
  methods: {
    //json中字符串换行转换
    trim(str) {  
      str = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + str;
      return str.replace(/\n|\r\n/g, "<br/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    }
  }
}
</script>

<style scoped>
@import '../css/templatemo-style.css';
@import 'http://www.jq22.com/jquery/bootstrap-3.3.4.css';
/* span {
  text-align: justify;
} */
/* start exchangeflow */
#exchangeflow {
  background: url('../../static/images/exchange/exchange-flow.jpg') no-repeat center center;
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
  /* background: url('../../static/images/result/backgrand/resu-flow.jpg') no-repeat center center;
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
  width: 140px;
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
  /* text-align: justify; */
  padding-bottom: 5px;
}

#exchange1 .exchange-demo {
  min-height: 180px;
  margin-bottom: 10px;
}

#exchange1 .exchange-logo {
  color: #66AF33;
  float: left;
  margin-right: 10px;
}

/* end exchange1 */
</style>
