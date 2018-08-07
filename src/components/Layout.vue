<template>
  <div id="layout">
    <el-container>
      <el-header>
        <span>&nbsp&nbspACHIEVE</span>
        <el-menu
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
        <el-menu
          :default-active="this.$route.path"
          router
          @select="handleSelect"
          class="el-menu-vertical-demo">
          <el-menu-item index="/Index">
            <i class="el-icon-document"></i>
            <span slot="title">个人主页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-edit"></i>
              <span>添加成果</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="/AddManual">手动录入</el-menu-item>
              <el-menu-item index="/auto">自动录入</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="/mystudent">
            <i class="el-icon-document"></i>
            <span slot="title">我的学生</span>
          </el-menu-item>
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
    </div>
    <div class="content">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    </el-container>
  </div>
</template>

<script>
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

<style scoped>
.el-header{
  background-color: #545c64;
  color: #409eff;
  width: 100%;
  font-size: 22px;
  font-weight: bold;
  font-family: Hiragino Sans GB;
  float: left;
  line-height: 60px;
}
.el-menu-demo{
  float: right;
  margin-right: -110px;
}
.el-dropdown{
  float: right;
}
.backcolor{
  width: 200px;
  height: 800px;
  border-right: 1px solid #E4E7ED;
}
.borderleft{
  border-right: 1px solid #123456;
}
.el-menu{
  width: 200px;
  font-family: Hiragino Sans GB;
  font-weight: normal;
  overflow: hidden;
}
.el-footer{
  position: relative;
  width: 100%;
  background-color: #333;
  color: #eee;
  text-align: center;
  font-size: 16px;
  height: 50px; 
}
.topcolor{
  background-color: #545c64;
  color: #409eff;
  width: 100%;
  font-size: 20px;
  font-weight: bold;
  font-family: Hiragino Sans GB;
  float: left;
  line-height: 60px;
}
</style>
