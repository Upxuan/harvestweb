<template>
  <div id="myteam">
    <section id="myteam1">
      <div class="container">
        <div class="row">
          <div class="col-md-12 wow fadeInDown text-center" data-wow-delay="2000">
            <h3>团队合照</h3>
          </div>
          <div class="col-sm-3 col-md-3 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.teamPeople" :key="index">
            <div class="myteam1_thumb">
              <img :src="item.img" class="img-responsive">
            </div>
          </div>
        </div>
      </div> 
    </section>
    <section id="myteam2">
      <div class="container">
        <div class="row">
          <div class="col-md-12 wow fadeInDown text-center" data-wow-delay="2000">
            <h3>“惬意”的外地开发及竞赛备战</h3>
          </div>
          <div class="col-sm-3 col-md-3 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.teamDevelop" :key="index">
            <div class="myteam1_thumb" style="height: 180px;">
              <img :src="item.img" class="img-responsive">
            </div>
          </div>
        </div>
      </div> 
    </section>
    <section id="myteam3">
      <div class="container">
        <div class="row">
          <div class="col-md-12 wow fadeInDown text-center" data-wow-delay="2000">
            <h3>多彩的团建生活</h3>
          </div>
          <div class="col-md-1" style="margin-right:45px;"></div>
          <div class="col-sm-3 col-md-3 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.teamBuliding" :key="index">
            <div class="myteam1_thumb">
              <img :src="item.img" class="img-responsive">
            </div>
          </div>
        </div>
      </div> 
    </section>
    <section id="myteam2">
      <div class="container">
        <div class="row">
          <div class="col-md-12 wow fadeInDown text-center" data-wow-delay="2000">
            <h3>户外活动</h3>
          </div>
          <div class="col-sm-3 col-md-3 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.teamOutdoor" :key="index">
            <div class="myteam1_thumb" style="height: 180px;">
              <img :src="item.img" class="img-responsive">
            </div>
          </div>
        </div>
      </div> 
    </section>
    <section id="myteam1">
      <div class="container">
        <div class="row">
          <div class="col-md-12 wow fadeInDown text-center" data-wow-delay="2000">
            <h3>年终聚餐及颁奖</h3>
          </div>
          <div class="col-sm-3 col-md-3 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.teamParty" :key="index">
            <div class="myteam1_thumb" style="height: 180px;">
              <img :src="item.img" class="img-responsive">
            </div>
          </div>
        </div>
      </div> 
    </section>
  </div>
</template>

<script>
export default {
  name: 'myteam',
  data () {
    return {

    }
  },
}
</script>

<style scoped>
/* start myteam1 */
#myteam1 {
  background: url('../images/team/team-flow.jpg') no-repeat center center;
  background-size: cover;
  background-attachment: fixed;
  color: #FFFFFF;
  min-height: 300px;
  padding: 80px 0 80px 0;
}
#myteam1 h3 {
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px !important;
  padding-bottom: 40px;
}
#myteam1 .myteam1_thumb {
  overflow: hidden;
  position: relative;
  height: 180px;
}
#myteam1 .myteam1_thumb img {
  width: 100%;
  height: auto;
}
/* end myteam1 */

/* start myteam2 */
#myteam2 {
  background: rgb(246, 246, 246);
  color: #555;
  min-height: 300px;
  padding: 80px 0 80px 0;
}
#myteam2 h3 {
  color: #333;
  font-weight: bold;
  padding-bottom: 40px;
}
/* end myteam2 */

/* start myteam3 */
#myteam3 {
  background: #FFF;
  color: #555;
  min-height: 300px;
  padding: 80px 0 80px 0;
}
#myteam3 h3 {
  color: #333;
  font-weight: bold;
  padding-bottom: 40px;
}
/* end myteam3 */
</style>
