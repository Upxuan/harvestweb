<template>
  <div id="resume">
    <el-header>
      <span style="margin-left:400px;">{{ pinyinName }}</span>
    </el-header>
    <section id="resume1">
      <div class="container">
        <div class="row">
          <div class="part1">
            <div class="user-msg1">
              <img v-if="imgurl != '' && imgurl != null" :src="imgurl" width="130">
              <img v-else src="../../../static/images/user-blue.png" width="130">
              <div class="user-name"><span>{{ myInfo.name }}</span></div>
            </div>
            <div class="user-msg2">
              <div class="user1-title" v-show="myInfo.title != ''">
                <i class="fa fa-graduation-cap"></i>
                <span>{{ myInfo.title }}</span>
              </div>
              <div class="user1-team" v-show="myInfo.team != ''">
                <i class="fa fa-user-o"></i>
                <span>{{ myInfo.team }}</span>
              </div>
              <div class="user1-tel" v-show="myInfo.tel != ''">
                <i class="fa fa-volume-control-phone"></i>
                <span>{{ myInfo.tel }}</span>
              </div>
              <div class="user1-email" v-show="myInfo.email != ''">
                <i class="fa fa-envelope-o"></i>
                <span>{{ myInfo.email }}</span>
              </div>
              <div class="user1-link" v-show="myInfo.link != ''">
                <i class="fa fa-home"></i>
                <span>{{ myInfo.link }}</span>
              </div>
              <!-- <div class="user1-direction" v-show="myInfo.diretion != ''">
                <i class="fa fa-info-circle"></i>
                <span>{{ myInfo.direction }}</span>
              </div> -->
            </div>
          </div>
          <div class="heightline-isolation"></div>
          <div class="part2">
            <div class="my-title"><span>ABOUT ME</span></div>
            <pre>{{ textarea.introduction }}</pre>
          </div>
        </div>
      </div> 
    </section>
    <!-- <div class="line-isolation"></div> -->
    <section id="resume5">
      <div class="container">
        <div class="row text-center">
          <span style="font-size:30px;color:#333;">Research Direction</span>
          <!-- <span style="font-size:16px;">{{ myInfo.direction }}</span> -->
          <pre>{{ myInfo.direction }}</pre>
          <!-- <div class="part1 my-title">
           <span>Research Direction</span>
          </div>
          <div class="part2">
           <pre>{{ myInfo.direction }}</pre>
          </div> -->
        </div>
      </div> 
    </section>
    <section id="resume3">
      <div class="container">
        <div class="row">
          <div class="part1 my-title">
           <span>Personal Achievement</span>
          </div>
          <div class="part2">
            <div class="charts">
              <div class="col-md-2">
                <p><el-progress type="circle" :percentage="circle.jpaperPercent" color="rgb(79,184,238)" :stroke-width="strokeWidth" :width="circleWidth"></el-progress></p>
                <p>期刊论文</p>
              </div>
              <div class="col-md-2">
                <p><el-progress type="circle" :percentage="circle.mpaperPercent" color="rgb(79,184,238)" :stroke-width="strokeWidth" :width="circleWidth"></el-progress></p>
                <p>会议论文</p>
              </div>
              <div class="col-md-2">
                <p><el-progress type="circle" :percentage="circle.subjectPercent" color="rgb(79,184,238)" :stroke-width="strokeWidth" :width="circleWidth"></el-progress></p>
                <p>学术专著</p>
              </div>
              <div class="col-md-2">
                  <p><el-progress type="circle" :percentage="circle.othersPercent" color="rgb(79,184,238)" :stroke-width="strokeWidth" :width="circleWidth"></el-progress></p>
                  <p>其他</p>
              </div>
              <div class="col-md-2">
                <br>
                <p>总计</p>
                <p style="font-size:25px">{{ number.count }}篇</p>
              </div>
            </div>
            <div style="margin:10px 0 40px 0;">
              <!-- <p class="main-font">
                <span>个人成果</span>
              </p> -->
              <harvest-list @numberEvent="getNumber" :username="username"></harvest-list>
            </div>
          </div>
        </div>
      </div> 
    </section>
    <section id="resume2">
      <div class="container">
        <div class="row">
          <div class="part1 my-title">
           <span>Rewards</span>
          </div>
          <div class="part2">
           <pre>{{ textarea.rewards }}</pre>
          </div>
        </div>
      </div> 
    </section>
    <section id="resume4">
      <div class="container">
        <div class="row">
          <div class="part1 my-title">
           <span>Academic Exchange</span>
          </div>
          <div class="part2">
           <pre>{{ textarea.academicwork }}</pre>
          </div>
        </div>
      </div> 
    </section>
    <my-footer></my-footer>
  </div>
</template>

<script>
import UserInfo from '@/components/tex/texUserinfo'
import HarvestList from '@/components/tex/texHarvestList'
import MyFooter from '@/cloud/footer'
import { ConvertPinyin } from '@/js/chinese.to.pinyin.js'
export default {
  name: 'resume',
  components: {
    UserInfo,
    HarvestList,
    MyFooter
  },
  data () {
    return {
      username: '',
      pinyinName: '1',
      myInfo: {},
      number: {},
      strokeWidth: 8,
      circleWidth: 120,
      circle: {
        jpaperPercent: 0.0,
        mpaperPercent: 0.0,
        subjectPercent: 0.0,
        othersPercent: 0.0,
        patentPercent: 0.0,
        projectPercent: 0.0,
        softwarePercent: 0.0,
      },
      textarea: {
        introduction: '',
        rewards: '',
        academicwork: ''
      },
      imgurl: '',
    }
  },
  mounted () {
    var _this = this
    _this.username = this.$route.query.username
    // console.log(_this.username)
    // this.getTeacherMsg(_this.username, 0)
    var Params = { username: this.username }
    this.$ajax.get('/api/getTeacherMsg', {params: Params}).then( res => {
      // console.log(res)
      if(res.data.errCode == 20){
        _this.myInfo = res.data.teacherModel
        _this.textarea.introduction = _this.myInfo.introduction
        _this.textarea.rewards = _this.myInfo.rewards
        _this.textarea.academicwork = _this.myInfo.academicwork
        _this.imgurl = _this.myInfo.imgurl
        if(_this.imgurl != '' && _this.imgurl != null) {
          _this.imgurl = '../../../static/images/avatar/' + _this.imgurl;
        }
        // console.log(this.myInfo.name)
        _this.pinyinName = ConvertPinyin(_this.myInfo.name)
      }else if(res.data.errCode == 21){
        alert("出错！请联系管理员")
      }
    }).catch( err => {
      // console.log(err)
      alert("出错！请联系管理员")
    });
  },
  methods: {
    getNumber (data) {
      var _this = this
      _this.number = data
      // console.log(data)
      _this.circle.jpaperPercent = Math.round(_this.number.jpaperCount / _this.number.count * 10000) / 100.00
      _this.circle.mpaperPercent = Math.round(_this.number.mpaperCount / _this.number.count * 10000) / 100.00
      _this.circle.subjectPercent = Math.round(_this.number.subjectCount / _this.number.count * 10000) / 100.00
      _this.number.othersCount = _this.number.patentCount + _this.number.projectCount + _this.number.softwareCount
      _this.circle.othersPercent = Math.round(_this.number.othersCount / _this.number.count * 10000) / 100.00
    }
  }
}
</script>

<style scoped>
@import '../../css/templatemo-style.css';
@import 'http://www.jq22.com/jquery/bootstrap-3.3.4.css';
pre {
  white-space: pre-wrap; 
  border: dashed 0px;
  font-size: 14px;
  line-height: 30px;
  font-size: 16px;
}
.el-header {
  /*background-color: #545c64;*/
  background-color: #66AF33;
  background-color: rgb(79,184,238);
  color: #1874CD;
  width: 100%;
  font-size: 22px;
  font-weight: bold;
  font-family: Hiragino Sans GB;
  float: left;
  line-height: 60px;
}
.el-header span {
  color: #fff;
}
.part1 {
  width: 220px;
  float: left;
  margin-right: 25px;
}
.part2 {
  width: 680px;
  float: left;
  margin-left: 25px;
}
.my-title{ 
  font-size: 35px;
  color: #333;
  /*font-weight: bold;*/
}
[class*="col-"] {
    float: left;
    min-height: 1px;
    width: 20%;
    padding: 12px;
}
[class*="col-"] p {
  text-align: center;
}
[class*="user1-"] {
  padding: 3px 0;
}
[class*="user1-"] span {
  padding-left: 5px;
}
.line-isolation {
  border-bottom: 1px dashed #DCDFE6;
}
.heightline-isolation {
  float: left;
  width: 1px;
  height: 340px;
  border-right: 1px dashed #DCDFE6;
}
.charts:before, .charts:after {
    content: "";
    display: block;
    visibility: hidden;
    clear: both;
    *zoom: 1;
}

/* start resume1 */
#resume1 {
  background: #FFF;
  color: #555;
  min-height: 300px;
  padding: 150px 0 80px 0;
}
#resume1 pre {
  background: #FFF;
}
#resume1 .user-msg1 {
  margin: 0 auto;
  text-align: center;
}
#resume1 .user-name { 
  font-size: 21px;
  color: #000;
  /*font-weight: bold;*/
}            
#resume1 .user-name {
  padding: 10px 0;
}
#resume1 .user-msg2 {
  margin-left: 15px;
}
/* end resume1 */

/* start resume2 */
#resume2 {
  background: rgb(246, 246, 246);
  color: #555;
  min-height: 300px;
  padding: 50px 0 80px 0;
}
/* #resume2 pre {
  background: #FFF;
} */
/* end resume2 */

/* start resume3 */
#resume3 {
  background: #FFF;
  color: #555;
  min-height: 300px;
  padding: 50px 0 80px 0;
}
/* end resume3 */

/* start resume4 */
#resume4 {
  background: #FFF;
  color: #555;
  min-height: 300px;
  padding: 50px 0 80px 0;
}
#resume4 pre {
  background: #FFF;
}
/* end resume4 */

/* start resume5 */
#resume5 {
  background: rgb(246, 246, 246);
  color: #555;
  min-height: 150px;
  padding: 30px 0;
}
/* end resume5 */

</style>
