<template>
  <div id="achievement">
    <section id="achflow" class="text-center">
			<div class="container">
				<div class="row">
					<!-- <div class="text-center col-md-12 wow fadeInDown" data-wow-delay="2000">
						<h3>CRYSTAL achflow</h3>
					</div>
					<div class="col-md-2"></div>
					<div class="col-md-8">
						<p>Mauris mattis vitae libero eget iaculis. Donec et augue quis quam porttitor consectetur ut nec sem. Integer sagittis viverra quam quis ultricies. Aenean risus nisl, consequat at nunc id, tincidunt tristique mauris.</p>
					</div>
					<div class="col-md-2"></div> -->
          <div class="col-md-12 wow fadeInDown" data-wow-delay="2000">
						<form role="form">
              <div class="col-md-1"></div>
							<div class="col-md-2 bold-h4" v-for="(item, index) in this.Data" :key="index">
                <h1 style="font-size: 40px">{{ item.num }}</h1>
                <div class="white-title-line"></div>
                <h4>{{ item.name }}</h4>
              </div>
						</form>
					</div>
				</div>
			</div>
		</section>
    <section id="ach1">
      <div class="container">
        <div class="row">
          <div class="col-md-12 wow fadeInDown text-center" data-wow-delay="2000">
            <h3>科研之奖项</h3>
          </div>
          <div class="col-md-12" style="margin-bottom:10px;">
            <div class="col-md-1"></div>
            <div class="col-md-10 text-center">
              <p>
                 教育厅成果奖二等奖1项<span class="hui-font">（2011）</span>，
                 浙江省科学进步奖三等奖1项<span class="hui-font">（2012）</span>，
                 浙江省教学成果奖一等奖1项<span class="hui-font">（2014）</span><br>
                 浙江省科学进步奖一等奖1项<span class="hui-font">（2014）</span>，
                 浙江省科学进步奖二等奖1项<span class="hui-font">（2017）</span>
              </p>
              <!-- <p>实验室近年来共发表SCI/E论文<span class="green-font"></span>200多</p>篇；申请国家发明专利<span class="green-font">30余</span>项；<br/>获得授权发明专利<span class="green-font">22</span>项；软件著作权<span class="green-font">12</span>项</p> -->
            </div>
            <div class="col-md-1"></div>
          </div>
          <!-- <div class="col-md-12"> -->
          <div class="col-md-1"></div>
          <div class="col-sm-2 col-md-2 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.Images" :key="index">
            <div class="ach1_thumb">
              <img :src="item.img" class="img-responsive" alt="ach1">
              <div class="ach1_overlay">
                <i class="fa"><h5>{{ item.msg }}</h5></i>
              </div>
            </div>
            <!-- <div class="ach1_description">
              <h5>{{ item.msg }}</h5>
            </div> -->
          </div>
          <div class="col-md-1"></div>
        <!-- </div> -->
        </div>
      </div> 
    </section>
    <section id="ach2">
      <div class="container">
        <div class="row bold-h4">
          <div class="col-md-12 wow fadeInDown text-center" data-wow-delay="2000" style="margin-bottom:20px;">
            <h3>科研之项目</h3>
          </div>
          <div class="col-md-12">
            <h4>国家级(<span class="green-font">{{ project1length }}项</span>)</h4>
            <pre>{{ project1 }}</pre>
            <!-- <div v-for="(item, index) in this.project1" :key="index">
              <p>{{ item.msg }}</p>
            </div> -->
          </div>
          <div class="col-md-12" style="margin-top:30px;">
            <h4>省市级(<span  class="green-font">{{ project2length }}项</span>)</h4>
            <pre>{{ project2 }}</pre>
            <!-- <div v-for="(item, index) in this.project2" :key="index">
              <p>{{ item.msg }}</p>
            </div> -->
          </div>
        </div>
        <div class="row ach2-paper">
          <div class="col-md-12 wow fadeInDown text-center" data-wow-delay="2000">
            <h3>科研之代表性论文<br><span>(近三年部分)</span></h3>
          </div>
          <div class="col-md-12">
            <pre>{{ paper }}</pre>
            <!-- <div v-for="(item, index) in this.paper" :key="index">
              <p>{{ index+1 }}. {{ item.msg }}</p>
            </div> -->
          </div>
        </div>
      </div> 
    </section>
  </div>
</template>

<script>
// import achievement from '../data/achievement.json';
import achievement from '../../static/mock/achievement.json';
export default {
  name: 'achievement',
  data () {
    return {
      Data: achievement.achievementData,
      Images: achievement.achievementImages,
      project1: '',
      project2: '',
      paper: '',
      project1length: 0,
      project2length: 0,
      // project1: achievement.achievementProject1,
      // project2: achievement.achievementProject2,
      // paper: achievement.achievementPaper
    }
  },
  mounted () {
    var _this = this;
    var Params = { userType: -1 };
    this.$ajax.get('/api/getAchievement', {params: Params}).then( res => {
      // console.log(res);
      if(res.data.errCode == 20){
        _this.project1 = res.data.achievement.project1;
        _this.project2 = res.data.achievement.project2;
        _this.paper = res.data.achievement.paper;

        var project1 = _this.project1;
        var project2 = _this.project2;
        var index = project1.indexOf("\n");
        var k=1;
        while(index >= 0){
          project1 = project1.substr(index+1);
          index = project1.indexOf("\n");
          k++;
        }
        _this.project1length = k;
        // console.log(k);
        index = project2.indexOf("\n");
        k=1;
        while(index >= 0){
          project2 = project2.substr(index+1);
          index = project2.indexOf("\n");
          k++;
        }
        _this.project2length = k;
        // console.log(k);
      }else if(res.data.errCode == 21){
        alert("出错！请联系管理员");
      }
    }).catch( err => {
      // console.log(err)
      // alert("出错！请联系管理员")
    });
  }
}
</script>

<style scoped>
@import '../css/templatemo-style.css';
@import 'http://www.jq22.com/jquery/bootstrap-3.3.4.css';
/* 66AF33 */
.white-title-line {
  margin: 15px auto;
  text-align: center;
  width: 25px;
  height: 1px;
  border-top: solid #FFF 1px;
}
h3 {
  font-weight: bold;
  letter-spacing: 1px !important;
}
pre {
  background: #FFF;
  white-space: pre-wrap; 
  border: dashed 0px;
  font-size: 14px;
  line-height: 30px;
  font-family: "SimSun"; 
  text-align: justify;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  /* font-size: 16px; */
}
.bold-h4 h4 {
  font-weight: bold;
  letter-spacing: 1px !important;
  padding-bottom: 10px;
}
.achievement-title-line {
  background: #FFF;
  height: 1px;
  margin-bottom: 25px;
}

/* start achflow */
#achflow {
  background: url('../../static/images/achievement/ach-flow.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  color: #FFFFFF;
  min-height: 300px;
  padding: 110px 0 110px 0;
}
#achflow h3 {
  font-weight: bold;
  letter-spacing: 1px !important;
  padding-bottom: 30px;
}
#achflow p {
  font-weight: 400;
  padding: 0 0 30px 0;
}
/* end achflow */

/* start ach1 */
#ach1 {
  /* background: #404040; */
  background: rgb(246, 246, 246);
  color: #FFFFFF;
  min-height: 300px;
  padding: 80px 0 80px 0;
}
#ach1 h3 {
  color: #333;
  padding-bottom: 30px;
}
#ach1 p {
  color: #555;
  font-weight: 400;
  margin: 0 0 40px 0;
}
#ach1 .col-md-4 {
  padding: 2px;
}
#ach1 .ach1_thumb {
  overflow: hidden;
  position: relative;
}
#ach1 .ach1_thumb img {
  width: 100%;
  height: auto;
}
#ach1 .ach1_thumb .ach1_overlay {
  background: #F5F5F5;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
}
#ach1 .ach1_thumb .ach1_overlay .fa {
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
#ach1 .ach1_thumb:hover .ach1_overlay{
  opacity: 0.8;
}
#ach1 .ach1_description {
  /* height: 120px; */
  background: #CDBA96;
  padding: 10px;
}
#ach1 h5 {
  font-size: 15px;
  color: #66AF33;
  text-align: justify;
  padding-bottom: 5px;
}
/* end ach1 */

/* start ach2 */
#ach2
{
  background: #FFF;
  /* color: #FFFFFF; */
  min-height: 300px;
  padding: 80px 0 80px 0;
}
#ach2 h3 {
  padding-bottom: 40px;
}
.ach2-paper {
  margin-top: 100px;
}
.ach2-paper span {
  font-size: 16px;
  font-weight: 500;
}
.ach2-paper p {
  text-align: justify;
}
/* end ach2 */
</style>
