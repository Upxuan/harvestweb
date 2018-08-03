<template>
  <el-container>
  <el-header>
    &nbsp&nbspACHIEVE
   <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#545c64"
  text-color="#fff"
  active-text-color="#409EFF">
  <el-submenu index="2">
    <template slot="title">某某某</template>
    <el-menu-item index="2-1">退出</el-menu-item>
  </el-submenu>
  
</el-menu>
  </el-header>

  <div class="backcolor">
    
  <el-aside>
    <el-menu :default-active="this.$route.path" router  @select="handleSelect"   @open="handleOpen1"
      @close="handleClose1" 
      class="el-menu-vertical-demo" >
        <el-menu-item index="/HelloWorld">
        <i class="el-icon-document"></i>
        <span slot="title">个人主页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-edit"></i>
          <span>添加成果</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="/addManual">手动录入</el-menu-item>
          <el-menu-item index="/auto">自动录入</el-menu-item>
        </el-menu-item-group>
      
          
        </el-menu-item-group>
       </el-submenu>
          <el-menu-item index="/mystudent">
        <i class="el-icon-document"></i>
        <span slot="title">我的学生</span>
      </el-menu-item>
      <!-- </el-menu-item> -->
    <el-menu-item index="/audit">
        <i class="el-icon-view"></i>
        <span slot="title">学生成果审核 <el-badge :value="4"  class="item"></el-badge></span>

      </el-menu-item>
      <el-menu-item index="/manage">
        <i class="el-icon-setting"></i>
        <span slot="title">账号管理</span>
      </el-menu-item>
  
        
      
    </el-menu>
   </el-aside>
   <div class="borderleft"></div>
  </div>
  <div class="content">
    <transition>
      <router-view></router-view>
    </transition>
  </div>
  </el-container>
</template>

  <script >
  export default{
    name:'layout',
   
    data() {
      return {
       
        account:'全奕诺',
     
          }
        },
        methods:{
        handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
     
          
    }
  

    }
        
  
</script>
<style >
.el-menu-demo{
  float:right;
  margin-right:-110px;
}
.el-dropdown{
  float:right;
}
  .borderleft{
      border-right:1px solid #123456;
    }
   .backcolor{
    /*background-color: #fff;*/
   
    width:200px;
    height:800px;
    border-right: 1px solid #E4E7ED;
   }
    .el-menu{
   
      width:200px;
    
      font-family: Hiragino Sans GB;
      font-weight: normal;
      overflow:hidden;
     

      
    }
    .el-footer{
    position:relative;
    width:100%;
    background-color: #333;
    color:#eee;
    text-align: center;
    font-size: 16px;
    height: 50px; 
}


    .topcolor{
      background-color: #545c64;
    
    color: #409eff;
    width:100%;
    font-size: 20px;
    font-weight: bold;
    font-family: Hiragino Sans GB;
    float:left;
    line-height: 60px;
    }

     .el-header{
    
     
    background-color: #545c64;
     /*background-color: rgb(238, 241, 246);*/
    color: #409eff;
    width:100%;
   /* margin-left:30px;
    margin-right:30px;*/
    font-size: 22px;
    font-weight: bold;
    font-family: Hiragino Sans GB;
    /*text-align: center;*/
    float:left;
    line-height: 60px;
  }
 
  </style>
