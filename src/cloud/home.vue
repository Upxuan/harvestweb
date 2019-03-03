<template>
  <div id="home">
   <div class="block">
    <el-carousel trigger="click" :height="bannerH+'px'">
      <el-carousel-item v-for="item in 4" :key="item"></el-carousel-item>
    </el-carousel>
  </div>

    <!-- start about -->
    <section id="about">
      <div class="container">
        <div class="row">
          <div class="col-sm-6 col-md-7 wow fadeInLeft" data-wow-delay="2000">
            <h3>Welcome to</h3>
            <h3>Center for Cloud Computing</h3>
            <br>
            <h2>Introduction</h2>
            <p>
              杭州电子科技大学云计算技术研究中心隶属于杭州电子科技大学计算机学院，依托于“复杂系统建模与仿真”教育部重点实验室、计算机科学与技术浙江省“重中之重”学科和一级博士点学科，拥有良好的学术氛围和国际前沿的研究方向。目前研究领域包括：边缘计算、云存储技术、大数据分析处理、物联网技术、云计算与高性能计算、软件可靠性、新型移动互联网与物联网应用、计算系统虚拟化、绿色计算等。中心具备较强的师资力量、充满活力的科研梯队以及良好的硬件设施环境。现有教授、博导3人，副教授8人，具有博士学位教师15人，浙江省首批中青年学科带头人1人，讲座教授1人，其中IEEE
              FELLOW 1人，浙江省151人才工程第三层次人员2人。目前全日制在读博士硕士研究生70余名。</p>
            <br>
          </div>
          <div class="col-sm-6 col-md-5 wow fadeInRight" data-wow-delay="2000">
            <br>
            <h3>Our Location</h3>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <img src="../images/rewards/1.png" class="img-responsive" alt="company 3">
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <img src="../images/rewards/2.png" class="img-responsive" alt="company 4">
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <img src="../images/rewards/3.png" class="img-responsive" alt="company 3">
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <img src="../images/rewards/4.jpg" class="img-responsive" alt="company 4">
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
        <br>
      </div>
    </section>
    <br>
    <!-- end about -->
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1',
      bannerH: 200
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    setBannerH() {
      this.bannerH = document.body.clientWidth / 2 - 70
    },
  },
  mounted() {
    this.setBannerH()
    window.addEventListener('resize', () => {
      this.setBannerH()
    }, false)
  },
  created() { }
}
</script>

<style scoped>
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

.block {
  position: relative;
  margin: 0;
  padding: 0;
}

.logo {
  top: 30px;
  margin: 0px 20%;
  font-size: 40px;
  font-family: STCaiyun;
  color: #fff;
  font-weight: bold;
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
  background-image: url(../images/slider/4.jpg);
  background-size: cover;
}

.el-carousel__item:nth-child(4n+1) {
  background-image: url(../images/slider/2.jpg);
  background-size: cover;
}

.el-carousel__item:nth-child(4n+2) {
  background-image: url(../images/slider/11.jpg);
  background-size: cover;
}

.el-carousel__item:nth-child(4n+3) {
  background-image: url(../images/slider/1.jpg);
  background-size: cover;
}

p {
  text-indent: 30px;
}

.container {
  margin: 0px 18%;
  width: 60%;
}

#about .col-md-5 img {
  height: 140px;
  margin: 5px;
}
</style>
