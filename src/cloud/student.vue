<template>
  <div id="student">
    <section id="stuflow" class="text-center">
			<div class="container">
				<div class="row">
					<div class="text-center col-md-12 wow fadeInDown" data-wow-delay="2000">
						<h3>学生发展</h3>
					</div>
				</div>
			</div>
		</section>
    <section id="stu1" class="text-center">
      <div class="container">
        <div class="row">
          <!-- <div class="text-center col-md-12 wow fadeInDown" data-wow-delay="2000">
						<h3>学生去向</h3>
					</div> -->
          <div class="col-md-1"></div>
          <div class="col-md-10">
            <!-- <p>教授/博导3人；副教授8人；具有博士学位教师15人；浙江省首批中青年学科带头人1人；讲座教授3人；其中IEEE FELLOW 1人；浙江省151人才工程第三层次人员2人。</p> -->
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-12">
            <div id="myChart" :style="{width: '1000px', height: '650px'}"></div>
          </div>
          <!-- <div class="col-md-6">
            <div id="myChart2" :style="{width: '500px', height: '500px'}"></div>
          </div> -->
        </div>
      </div>
    </section>
    <section id="stu2">
      <div class="container">
        <div class="row bold-h4">
          <div class="col-md-12 wow fadeInDown text-center" data-wow-delay="2000">
            <h3>
              <span>博士研究生</span> 
              <div class="black-title-line"></div>
            </h3>
          </div>
          <div class="col-md-12" v-for="(items, index) in this.studentDoc" :key="index" style="margin-bottom:15px;">
            <h4>博士研究生<span class="green-font">{{ items.title }}</span>级</h4>
            <p>{{ items.msg }}</p>
            <!-- <span>{{ items.msg[0].name }}</span>
            <span>{{ items.msg[0].name }}</span>
            <div v-for="(item, index) in items.msg" :key="index">
              {{ item.name }}
            </div> -->
          </div>
          <div class="col-md-12 wow fadeInDown text-center" data-wow-delay="2000" style="margin-top:80px;">
            <h3>
              <span>硕士生研究生</span> 
              <div class="black-title-line"></div>
            </h3>
          </div>
          <div class="col-md-12" v-for="(items, index) in this.studentMd" :key="index + '-label'" style="margin-bottom:15px;">
            <h4>硕士研究生<span class="green-font">{{ items.title }}</span>级</h4>
            <p>{{ items.msg }}</p>
          </div>
        </div>
      </div> 
    </section>
    <section id="stu3" class="text-center">
			<div class="container">
				<div class="row">
					<div class="col-md-12 wow fadeInDown" data-wow-delay="2000">
						<h3>学生获奖<br><span class="deepred-font">(近两年部分)</span></h3>
					</div>
          <div class="col-md-12">
            <div class="col-xs-3 col-sm-3 col-md-3 wow fadeInLeft" style="margin-bottom:10px;" data-wow-delay="2000" v-for="(item, index) in this.studentRewards" :key="index">
              <div class="stu3_thumb">
                <img :src="item.img" class="img-responsive" alt="stu3">
                <div class="stu3_overlay">
                  <a href="#"><i class="fa"><h5>{{ item.msg }}<br><span class="deepred-font">{{ item.name }}</span></h5></i></a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 stu3-honor">
            <div class="col-md-4" style="margin-right:40px;"></div>
            <div class="col-md-3 wow fadeInLeft" data-wow-delay="2000">
              <div class="stu3_thumb">
                <img src="../images/student/reward-team17-2.jpg" class="img-responsive" alt="stu3">
                <div class="stu3_overlay">
                  <a href="#">
                    <i class="fa" style="height:110px;width:140px;">
                      <h5>2017年第八届中国计算机学会服务计算会议软件服务创新大赛优胜奖<br>
                      <span class="deepred-font">高敏，陈璐，王兴菲，余方正，张伟鹏</span></h5>
                    </i>
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-4"></div>
          </div>
				</div>
			</div>
		</section>
    <section id="stu4">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="col-md-12" v-for="(item, index) in this.studentRewardHonor" :key="index">
              <h5>{{ item.msg }}（<span class="deepred-font">{{item.name}}</span>）</h5>
            </div>
          </div>
          <div class="col-md-6">
            <div class="col-md-12" v-for="(item, index) in this.studentRewards" :key="index + 'model'">
              <h5>{{ item.msg }}（<span class="deepred-font">{{item.name}}</span>）</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <section id="stu3" class="text-center">
      <div class="container">
        <div class="row"></div>
      </div>
    </section> -->
  </div>
</template>

<script>
export default {
  name: 'student',
  data () {
    return {
      
    }
  },
  mounted () {
    this.genData()
  },
  methods: {
    genData(count) {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      myChart.setOption({
        title : {
          text: '云计算实验室就业统计(单位:人)',
          subtext: '2005-2016级近12年学生去向(左)   2013-2016级近4年学生去向(右)',
          x:'center',
          textStyle: {
            color: '#555',
            fontSize: 22
          },
          subtextStyle: {
            color: '#333',
            fontSize: 14
          }
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          // orient: 'vertical',
          // left: 'left',
          x : 'center',
          y : 'bottom',
          data: ['阿里系','腾讯','网易','运营商','百度','海康威视','学校','事业单位','今日头条','浙商证券','猿辅导','顺丰','广联达',
                 '拼多多','滴滴','华为','蘑菇街','大华','京东金融','搜狗','百世汇通','网新恒天','喜马拉雅','诺基亚','微店','深信服',
                 '同花顺','九言','中控','阜博通','出国','美图秀秀','考博','51信用卡','浦道科技','Ucloud','360','银行软开系','Thoughtworks',
                 '公信宝','泛城','七牛','合众',]
        },
        toolbox: {
          show : true,
          feature : { saveAsImage : {show: true} }
        },
        series : [
          {
            name: '近12年学生去向',
            type: 'pie',
            radius : [20, 110],
            center : ['25%', '45%'],
            roseType : 'radius',
            // label: {
            //   normal: { show: false },
            //   emphasis: { show: true }
            // },
            // lableLine: {
            //     normal: { show: false },
            //     emphasis: { show: true }
            // },
            data:[
              {value:13, name:'华为'}, 
              {value:9, name:'运营商'}, 
              {value:6, name:'百度'}, 
              {value:4, name:'海康威视'}, 
              {value:4, name:'学校'},
              {value:3, name:'事业单位'}, 
              {value:2, name:'360'}, 
              {value:2, name:'百世汇通'},
              {value:2, name:'大华'}, 
              {value:2, name:'腾讯'}, 
              {value:2, name:'拼多多'}, 
              {value:1, name:'京东金融'}, 
              {value:1, name:'搜狗'}, 
              {value:1, name:'滴滴'}, 
              {value:1, name:'今日头条'},
              {value:1, name:'蘑菇街'}, 
              {value:1, name:'网新恒天'}, 
              {value:1, name:'浙商证券'}, 
              {value:1, name:'阜博通'},
              {value:1, name:'深信服'}, 
              {value:1, name:'51信用卡'}, 
              {value:1, name:'七牛'},
              {value:1, name:'合众'}, 
              {value:1, name:'Ucloud'}, 
              {value:1, name:'诺基亚'}, 
              {value:1, name:'同花顺'}, 
              {value:1, name:'微店'}, 
              {value:1, name:'顺丰'}, 
              {value:1, name:'美图秀秀'}, 
              {value:1, name:'喜马拉雅'},
              {value:1, name:'九言'}, 
              {value:1, name:'中控'}, 
              {value:1, name:'泛城'}, 
              {value:1, name:'广联达'}, 
              {value:1, name:'出国'},
              {value:1, name:'公信宝'}, 
              {value:1, name:'猿辅导'}, 
              {value:1, name:'Thoughtworks'}, 
              {value:1, name:'考博'}, 
              {value:28, name:'银行软开系'},
              {value:24, name:'网易'}, 
              {value:13, name:'阿里系'},
            ],
            itemStyle: {
              shadowColor: 'rgba(0, 0, 0, 0.5)',
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
          {
            name:'近4年学生去向',
            type:'pie',
            radius : [10, 110],
            center : ['75%', '45%'],
            roseType : 'radius',
            data:[
              {value:9, name:'华为'},
              {value:3, name:'运营商'},
              {value:2, name:'海康威视'},
              {value:2, name:'百世汇通'},
              {value:1, name:'百度'},
              {value:2, name:'腾讯'},
              {value:1, name:'滴滴'},
              {value:1, name:'今日头条'},
              {value:1, name:'蘑菇街'},
              {value:1, name:'深信服'},
              {value:1, name:'51信用卡'},
              {value:1, name:'微店'},
              {value:1, name:'美图秀秀'},
              {value:1, name:'喜马拉雅'},
              {value:1, name:'九言'},
              {value:1, name:'中控'},
              {value:1, name:'广联达'},
              {value:1, name:'出国'},
              {value:1, name:'猿辅导'},
              {value:1, name:'Thoughtworks'},
              {value:1, name:'考博'},
              {value:3, name:'银行软开系'},
              {value:17, name:'网易'},
              {value:4, name:'阿里系'},
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          },
        ]
      })
    }
  }
}
</script>

<style scoped>
h3 {
  font-weight: bold;
  letter-spacing: 1px !important;
  padding-bottom: 30px;
}
.bold-h4 h4 {
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1px !important;
  padding-bottom: 10px;
}
.deepred-font {
  color: #B22222;
  font-size: 15px;
  font-weight: 500;
}
.black-title-line {
  margin: 10px auto;
  text-align: center;
  width: 30px;
  height: 1px;
  border-top: solid #555 1px;
}

/* start stuflow */
#stuflow {
  background: url('../images/student/stu-flow.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  color: #FFFFFF;
  min-height: 50px;
  padding: 30px 0 30px 0;
}
#stuflow h3 {
  font-weight: bold;
  letter-spacing: 1px !important;
}
#stuflow p {
  font-weight: 400;
  padding: 0 0 30px 0;
}
/* end stuflow */

/* start stu1 */
#stu1 {
  background: rgb(246, 246, 246);
  color: #FFFFFF;
  min-height: 200px;
  padding: 80px 0 80px 0;
}
#stu1 h3 {
  color: #333;
  padding-bottom: 30px;
}
#stu1 p {
  color: #555;
  font-weight: 400;
  margin-bottom: 40px;
}
/* end stu1 */

/* start stu2 */
#stu2
{
  background: #FFF;
  /* color: #FFFFFF; */
  min-height: 300px;
  padding: 80px 0 80px 0;
}
#stu2 p {
  text-align: justify;
}
.stu2-paper {
  margin-top: 100px;
}
.stu2-paper span {
  font-size: 16px;
  font-weight: 500;
}
.stu2-paper p {
  text-align: justify;
}
/* end stu2 */

/* start stu3 */
#stu3 {
  background: url('../images/student/stu-flow.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  color: #FFFFFF;
  min-height: 50px;
  padding: 30px 0 30px 0;
}
#stu3 h5 {
  font-size: 15px;
  /* color: #66AF33; */
  text-align: justify;
  padding-bottom: 5px;
}
#stu3 p {
  font-weight: 400;
  padding: 0 0 30px 0;
}
#stu3 .stu3_thumb {
  overflow: hidden;
  position: relative;
}
#stu3 .stu3_thumb img {
  width: 100%;
  height: auto;
}
#stu3 .stu3_thumb .stu3_overlay {
  background: #F5F5F5;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
}
#stu3 .stu3_thumb .stu3_overlay .fa {
  color: #555;
  width: 100px;
  height: 80px;
  line-height: 60px;
  text-align: center;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
#stu3 .stu3_thumb:hover .stu3_overlay{
  opacity: 0.8;
}
.stu3-honor {
  padding: 20px 0px;
}
.stu3-honor h5 {
  margin: 5px 0px;
}
.stu3-honor col-md-6,col-md-12 {
  padding-left: 0px;
  padding-right: 0px;
}
/* end stu3 */

/* start stu4 */
#stu4 {
  background: rgb(246, 246, 246);
  color: #FFFFFF;
  min-height: 200px;
  padding: 40px 0;
}
#stu4 h5 {
  color: #555;
  margin-bottom: 8px;
}
/* end stu4 */
</style>
