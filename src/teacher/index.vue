<template>
  <div>
    <!-- <TEA_HEAD></TEA_HEAD> -->
    <div class="index-wrap">
      <div class="user-img">
        <img src="../assets/hp.png"> 
      </div>
      <Tea_Inf></Tea_Inf>
      <Tea_Achieve></Tea_Achieve>
     <button @click="add('a-component', 'test')">Add A</button>
    <button @click="add('b-component', 'test')">Add B</button>
   </div>
  </div>
</template>

<script>
  // import TEA_HEAD from './tea_head'
  import Tea_Inf from './tea_components/tea_inf'
  import Tea_Achieve from './tea_components/tea_achieve'


 

export default {
  name: 'HelloWorld',
 components:{
    Tea_Inf, Tea_Achieve
 }
}

</script>

<style scoped>
.user-img {
  float: left;

}
.index-wrap {
 
  margin-right:100px;
  margin: 0 auto;
  overflow: hidden;
  margin-top: -750px;
  margin-left:230px;
  font-family: Hiragino Sans GB;
  /*background-color: #123456;*/
}

</style>
