<template>
  <div id="exchange">
    <section id="exchange1">
      <div class="container">
        <div class="row">
          <div class="col-md-12 wow fadeInDown text-center" data-wow-delay="2000">
            <h3>学术交流</h3>
          </div>
          <div class="col-md-12" style="margin-bottom:10px;">
            <div class="col-md-1"></div>
            <div class="col-md-10 text-center">
              <p>学术界有我们的声音，有效社交很重要。</p>
            </div>
            <div class="col-md-1"></div>
          </div>
          <!-- <div class="col-md-12"> -->
          <div class="col-md-1"></div>
          <div class="col-sm-2 col-md-2 wow fadeInLeft" data-wow-delay="2000" v-for="(item, index) in this.achievementImages" :key="index">
            <div class="exchange1_thumb">
              <img :src="item.img" class="img-responsive" alt="exchange1">
              <div class="exchange1_overlay">
                <a href="#"><i class="fa"><h5>{{ item.msg }}</h5></i></a>
              </div>
            </div>
            <!-- <div class="exchange1_description">
              <h5>{{ item.msg }}</h5>
            </div> -->
          </div>
          <div class="col-md-1"></div>
        <!-- </div> -->
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
/* start exchange1 */
#exchange1 {
  /* background: #404040; */
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
