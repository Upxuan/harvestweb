<template>
  <div id="researchTeam">
    <div class="teacher">
      <section id="team" class="text-center teacher-section">
        <div class="container">
          <div class="row">
            <div class="col-md-12 wow fadeInDown" data-wow-delay="900">
              <h3>教师团队</h3>
              <!-- <div class="teacher-title-line"></div> -->
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <p>教授/博导3人；副教授8人；具有博士学位教师15人；浙江省首批中青年学科带头人1人；讲座教授3人；其中IEEE FELLOW 1人；浙江省151人才工程第三层次人员2人。</p>
            </div>
            <div class="col-md-1"></div>
            <div class="col-xs-4 col-sm-3 col-md-2 wow fadeInLet" data-wow-delay="2000" v-for="(item, index) in this.teacherInfo" :key="index">
              <div class="team_thumb">
                <img :src="item.img" class="img-responsive" alt="team">
                <div class="team_overlay">
                  <ul class="social_icon">
                    <li><a href="#" class="fa fa-user-o"></a></li>
                  </ul>								
                </div>
              </div>
              <div class="team_description">
                <div class="teacher-name">{{ item.name }}</div>
                <h5>{{ item.direction }}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="teacherMsg">
      <div class="teacherMsg-card" v-for="(item, index) in this.teacherInfo" :key="index">
        <section id="team" class="teacherMsg-section">
          <div class="container">
            <div class="row">
              <div class="col-md-3">
                <img :src="item.img" width="200">
              </div>
              <div class="col-md-9">
                <h4>{{ item.name }}</h4>
                <p>{{ item.title }}</p>
                <p>{{ item.msg }}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'researchTeam',
  data () {
    return {}
  },
  mounted () {}
}
</script>

<style scoped>
.teacher-section {
  background: #404040;
  color: #FFFFFF;
}
.teacherMsg-section {
  background: #fff;
  margin-bottom: 3px;
}
.teacherMsg {
  width: 100%;
  background: #F5F5F5;
}
.teacherMsg-card {
  width: 100%;
}
.teacher-name {
  font-size: 16px;
  /* font-weight: bold; */
  padding-bottom: 10px;
  color: #66AF33;
}
.green-font {
  color: #66AF33;
  font-weight: bold;
  font-size: 16px;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  padding-left: 10px;
  padding-right: 10px;
}
h4 {
  font-weight: bold;
}
</style>
