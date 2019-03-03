<template>
  <div id="member">
    <div class="teacher">
      <section id="team" class="text-center">
        <div class="container">
          <div class="row">
            <div class="col-md-12 wow fadeInDown" data-wow-delay="900">
              <h3>学术带头人</h3>
              <!-- <div class="teacher-title-line"></div> -->
            </div>
            <div class="col-md-1"></div>
            <div class="col-md-10">
              <p>教授/博导3人；副教授8人；具有博士学位教师15人；浙江省首批中青年学科带头人1人；讲座教授1人；其中IEEE FELLOW 1人；浙江省151人才工程第三层次人员2人。</p>
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
                <h4>{{ item.name }}</h4>
                <h5>{{ item.direction }}</h5>
              </div>
            </div>
            <!-- <div class="col-sm-6 col-md-2 wow fadeInUp" data-wow-delay="2000">
              <div class="team_thumb">
                <img src="../images/team-img-2.jpg" class="img-responsive" alt="team">
                  <div class="team_overlay">
                    <ul class="social_icon">
                      <li><a href="#" class="fa fa-facebook"></a></li>
                      <li><a href="#" class="fa fa-twitter"></a></li>
                      <li><a href="#" class="fa fa-pinterest"></a></li>
                    </ul>
                  </div>
              </div>
              <div class="team_description">
                <h4>MARY</h4>
                <h5>DEVELOPER</h5>
              </div>
            </div>
            <div class="col-sm-6 col-md-2 wow fadeInUp" data-wow-delay="2000">
              <div class="team_thumb">
                <img src="../images/team-img-3.jpg" class="img-responsive" alt="team">
                  <div class="team_overlay">
                    <ul class="social_icon">
                      <li><a href="#" class="fa fa-facebook"></a></li>
                      <li><a href="#" class="fa fa-twitter"></a></li>
                      <li><a href="#" class="fa fa-pinterest"></a></li>
                    </ul>
                  </div>
              </div>
              <div class="team_description">
                <h4>JULIA</h4>
                <h5>DIRECTOR</h5>
              </div>
            </div>
            <div class="col-sm-6 col-md-2 wow fadeInRight" data-wow-delay="2000">
              <div class="team_thumb">
                <img src="../images/team-img-4.jpg" class="img-responsive" alt="team">
                  <div class="team_overlay">
                    <ul class="social_icon">
                      <li><a href="#" class="fa fa-facebook"></a></li>
                      <li><a href="#" class="fa fa-twitter"></a></li>
                      <li><a href="#" class="fa fa-pinterest"></a></li>
                    </ul>
                  </div>
              </div>
              <div class="team_description">
                <h4>LINDA</h4>
                <h5>MANAGER</h5>
              </div>
            </div>
            <div class="col-sm-6 col-md-2 wow fadeInRight" data-wow-delay="2000">
              <div class="team_thumb">
                <img src="../images/team-img-4.jpg" class="img-responsive" alt="team">
                  <div class="team_overlay">
                    <ul class="social_icon">
                      <li><a href="#" class="fa fa-facebook"></a></li>
                      <li><a href="#" class="fa fa-twitter"></a></li>
                      <li><a href="#" class="fa fa-pinterest"></a></li>
                    </ul>
                  </div>
              </div>
              <div class="team_description">
                <h4>LINDA</h4>
                <h5>MANAGER</h5>
              </div>
            </div>
            <div class="col-sm-6 col-md-2 wow fadeInRight" data-wow-delay="2000">
              <div class="team_thumb">
                <img src="../images/team-img-4.jpg" class="img-responsive" alt="team">
                  <div class="team_overlay">
                    <ul class="social_icon">
                      <li><a href="#" class="fa fa-facebook"></a></li>
                      <li><a href="#" class="fa fa-twitter"></a></li>
                      <li><a href="#" class="fa fa-pinterest"></a></li>
                    </ul>
                  </div>
              </div>
              <div class="team_description">
                <h4>LINDA</h4>
                <h5>MANAGER</h5>
              </div>
            </div> -->
          </div>
        </div>
      </section>
    </div>
    <div class="teacherMsg">
      <el-row type="flex" justify="center">
        <el-col>
          <div class="teacherMsg-card" v-for="(item, index) in this.teacherInfo" :key="index">
            <el-card shadow="hover" :body-style="{ padding: '0px' }">
              <div class="teacherMsg-card-msg">
                <el-row>
                  <el-col class="col-lg-3 teacherMsg-card-image">
                    <img :src="item.img" width="200">
                  </el-col>
                  <el-col class="col-lg-9 teacherMsg-card-info">
                      <span class="teacherMsg-info">
                        <p class="teacherMsg-name">{{ item.name }}</p>
                        <p>{{ item.title }}</p>
                        <p>{{ item.msg }}</p>
                      </span>
                  </el-col>
                </el-row>
              </div>
            </el-card>
          </div> 
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
  export default {
  name: 'member',
  data () {
    return {
      
    }
  },
  mounted () {
  
  }
}
</script>

<style scoped>
 .teacherMsg p {
  margin: 0px;
  color: #303030;
}
.teacherMsg {
  /* height: 800px; */
  /* padding: 20px 0; */
  background: #F5F5F5;
}
/*.teacher-title {
  font-size: 20px;
  margin: 30px auto;
  text-align: center;
  font-weight: bold;
  color: #66AF33;
}
 .teacher-title-line {
  margin-top: 7px;
  margin-bottom: 44px;
  background-color: #fff;
  height: 2px;
  position: relative;
  width: 22px;
  display: block;
  margin: 10px auto 20px auto;
} */
.teacherMsg-card {
  height: 400px;
  padding: 0 auto;
  text-align: center;
  margin-bottom: 2px;
}
.teacherMsg-card-msg {
  margin: 0px 10%;
}
.teacherMsg-card-image {
  height: 100%;
  width: 300px;
  line-height: 400px;
  margin: 0px auto;
  text-align: center;
  /* margin-left: 200px; */
}
.teacherMsg-card-image img {
  display: inline-block; 
  vertical-align: middle;
}
.teacherMsg-card-info {
  margin: 65px 0px 65px 10px;
  height: 100%;
}
.teacherMsg-info {
  text-align: justify;
}
.teacherMsg-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
}
.col-md-4 .teacherMsg-info {
  font-size: 10px;
}
.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {
  padding-right: 8px;
  padding-right: 8px;
  /* padding-left: 0px;
  padding-right: 0px; */
}
h4 {
  color: #66AF33;
}
</style>
