<template>
  <div id="layout">
    <el-container>
      <el-header>
        <span>&nbsp;&nbsp;HARVEST</span>
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link">
            {{ $userInfo.name }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="out">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-container class="container">
        <div class="backbar">
          <el-aside>
            <el-menu
              :unique-opened='true'
              :default-active="this.$route.path"
              router
              @select="handleSelect"
              class="el-menu-vertical-demo">
              <el-menu-item index="/system/index">
                <i class="el-icon-document"></i>
                <span slot="title">个人主页</span>
              </el-menu-item>
              <el-submenu index="1" v-show="teacherShow || studentShow">
                <template slot="title">
                  <i class="el-icon-edit"></i>
                  <span>添加成果</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/system/addmanual">手动录入</el-menu-item>
                  <el-menu-item index="/system/addauto">自动录入</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/system/mystudent" v-show="teacherShow">
                <i class="el-icon-star-on"></i>
                <span slot="title">我的学生</span>
              </el-menu-item>
              <el-menu-item index="/system/audit" v-show="teacherShow || manageinfoShow">
                <i class="el-icon-news"></i>
                <span slot="title">学生成果审核<el-badge class="mark" :value="num2" :hidden="num2 === 0" :max="99"/></span>
              </el-menu-item>
              <el-menu-item index="/system/myaudit" v-show="studentShow">
                <i class="el-icon-news"></i>
                <span slot="title">成果审核情况</span>
              </el-menu-item>
              <el-submenu index="2" v-show="managerShow">
                <template slot="title">
                  <i class="el-icon-star-on"></i>
                  <span>成果管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/system/mharvest">教师成果管理</el-menu-item>
                  <el-menu-item index="/system/mharvestcopy">学生成果管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="3" v-show="managerShow">
                <template slot="title">
                  <i class="el-icon-star-off"></i>
                  <span>信息管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/system/mteacher">教师信息管理</el-menu-item>
                  <el-menu-item index="/system/mstudent">学生信息管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="/system/search" v-show="managerShow">
                <i class="el-icon-search"></i>
                <span slot="title">查询统计</span>
              </el-menu-item>
              <el-menu-item index="/system/outputResume" v-show="teacherShow">
                <i class="el-icon-tickets"></i>
                <span slot="title">主页生成</span>
              </el-menu-item>
              <el-menu-item index="/system/webMaintain" v-show="managerShow">
                <i class="el-icon-menu"></i>
                <span slot="title">官网信息维护</span>
              </el-menu-item>
              <el-submenu index="4">
                <template slot="title">
                  <i class="el-icon-setting"></i>
                  <span>账号管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="/system/manageinfo" :disabled="manageinfoShow">修改基本信息</el-menu-item>
                  <el-menu-item index="/system/managepwd">修改密码</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-aside>
        </div>
        <div class="content">
          <el-main>
            <transition> 
              <router-view ref="note"></router-view>
            </transition>
          </el-main>
        </div>
      </el-container>
    </el-container>
  </div>
</template>

<script>
  import Addmanual from '@/components/system/SysAddmanual'
  import Mteacher from '@/components/system/SysMteacher'
  import Mstudent from '@/components/system/SysMstudent'
  import Mharvest from '@/components/system/SysMharvest'
  import Mharvestcopy from '@/components/system/SysMharvestcopy'  
  import Audit from '@/components/system/SysAudit'
  import {getCookie,delCookie,setCookie} from '@/api/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default {
    name: 'layout',
    components: {
      Addmanual,
      Mteacher,
      Mstudent,
      Mharvest,
      Mharvestcopy,
      Audit
    },
    data() {
      return {
        account:'',
        sidebarShow: false,
        managerShow: false,
        teacherShow: false,
        studentShow: false,
        manageinfoShow: false,
        num2: 0,
        disabledNum2: false
      }
    },
    mounted () {
      this.$nextTick( function() {
        var _this = this
        if(_this.$type == 0){//admin
          _this.managerShow = true
          _this.manageinfoShow = true
        }else if(_this.$type == 1){//teacher
          _this.teacherShow = true
        }else if(_this.$type == 2){//student
          _this.studentShow = true
        }
        if(_this.$type != 2) this.getNum2()
      })
    },
    methods: {
      getNum2 () {
        var _this = this
        var Params = { 
          userType: _this.$type,
          userId: _this.$userInfo.id 
        }
        this.$ajax.get('/api/audit', {params: Params}).then( res => {
          if(res.data.errCode == 20){
            for (var i=0; i<res.data.jpaperModels.length; i++) 
              if(res.data.jpaperModels[i].review === 1) _this.num2++
            for (var i=0; i<res.data.mpaperModels.length; i++) 
              if(res.data.mpaperModels[i].review === 1) _this.num2++
            for (var i=0; i<res.data.patentModels.length; i++) 
              if(res.data.patentModels[i].review === 1) _this.num2++
            for (var i=0; i<res.data.projectModels.length; i++) 
              if(res.data.projectModels[i].review === 1) _this.num2++
            for (var i=0; i<res.data.subjectModels.length; i++) 
              if(res.data.subjectModels[i].review === 1) _this.num2++
            for (var i=0; i<res.data.softwareModels.length; i++) 
              if(res.data.softwareModels[i].review === 1) _this.num2++
            for (var i=0; i<res.data.affairsModels.length; i++) 
              if(res.data.affairsModels[i].review === 1) _this.num2++
          }else if(res.data.errCode == 21){
            alert("出错！请联系管理员")
          }
        }).catch( () => {
          // alert("出错！请联系管理员")
        });
      },
      handleCommand (command) {
        this.$confirm('确定退出系统?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          // this.$message({type: 'success',message: '成功退出!'});
          //清除cookie中的data
          this.$router.push({ path:'/login' });
        }).catch(() => {
          // this.$message({type: 'info',message: '已取消!'});
        });
      },
      handleOpen(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        // console.log(key, keyPath);
      },
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
.el-header {
  background-color: #545c64;
  /* background-color: rgb(79,184,238); */
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
.container {
  height: 80%;
}
.el-dropdown{
  float: right;
}
.backbar {
  width: 200px;
  height: 800px;
}
.el-menu{
  width: 200px;
  font-family: Hiragino Sans GB;
  font-weight: normal;
  overflow: hidden;
}
.content {
  width: 100%;
  border-left: 1px solid #E4E7ED;
}
.item {
  margin-top: 10px;
  margin-right: 40px;
}
</style>
