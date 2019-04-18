<template>
  <div id="sysWebMaintain">
     <div class="all-title">
      <p class="main-title">
        <span>官网信息维护</span>
        <el-button type="primary" size="small" @click="submit()">提交更新</el-button>
      </p>
    </div>
    <div class="web-maintain-content">
      <div class="maintain-textare-project1">
        <p class="subtitle"><span>科研之项目-国家级<span style="font-size: 20px;color: #F56C6C;">{{ project1len }}</span>项</span></p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 25, maxRows: 25 }"
          placeholder="请输入需发布的国家级科研项目"
          v-model="project1">
        </el-input>
      </div>
      <div class="maintain-textare-project2">
        <p class="subtitle"><span>科研之项目-省市级<span style="font-size: 20px;color: #F56C6C;">{{ project2len }}</span>项</span></p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 25, maxRows: 25 }"
          placeholder="请输入需发布的省市级科研项目"
          v-model="project2">
        </el-input>
      </div>
      <div class="maintain-textare-paper">
        <p class="subtitle"><span>科研之代表性论文<span style="font-size: 20px;color: #F56C6C;">{{ paperlen }}</span>项</span></p>
        <el-input
          type="textarea"
          :autosize="{ minRows: 25, maxRows: 25 }"
          placeholder="请输入需发布的代表性科研论文"
          v-model="paper">
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
  // import achievement from '../../../static/mock/achievement.json';
  export default {
    name: 'sysWebMaintain',
    inject: ['reload'],
    data () {
      return {
        project1: '',
        project2: '',
        paper: '',
        project1len: 0,
        project2len: 0,
        paperlen: 0
        // project1: achievement.achievementProject1,
        // project2: achievement.achievementProject2,
        // paper: achievement.achievementPaper,
      }
    },
    // created () {
    //   this.$ajax.get('/api/achievement').then(res => { //ajax从.json文件获取数据信息
    //     console.log(res.data.data)
    //   }, res => {
    //     console.log("数据加载失败")
    //   })
    // },
    mounted () {
      if(this.judgeLogin()){
        var _this = this;
        var Params = { userType: _this.$type };
        this.$ajax.get('/api/getAchievement', {params: Params}).then( res => {
          console.log(res);
          if(res.data.errCode == 20){
              _this.project1 = res.data.achievement.project1;
              _this.project2 = res.data.achievement.project2;
              _this.paper = res.data.achievement.paper;
          }else if(res.data.errCode == 21){
            alert("出错！请联系管理员");
          }
        }).catch( err => {
          // console.log(err)
          // alert("出错！请联系管理员")
        });
      }
    },
    watch:{
      project1: {
        handler(newName, oldName) {
          var str = this.project1;
          var index = str.indexOf("\n");
          var k=1;
          while(index >= 0){
            str = str.substr(index+1);
            index = str.indexOf("\n");
            k++;
          }
          this.project1len = k;
        },
        immediate: false
      },
      project2: {
        handler(newName, oldName) {
          var str = this.project2;
          var index = str.indexOf("\n");
          var k=1;
          while(index >= 0){
            str = str.substr(index+1);
            index = str.indexOf("\n");
            k++;
          }
          this.project2len = k;
        },
        immediate: false
      },
      paper: {
        handler(newName, oldName) {
          var str = this.paper;
          var index = str.indexOf("\n");
          var k=1;
          while(index >= 0){
            str = str.substr(index+1);
            index = str.indexOf("\n");
            k++;
          }
          this.paperlen = k;
        },
        immediate: false
      }
    },
    methods: {
      submit () {
        if(this.judgeLogin()){
          var _this = this
          var Params = {
            userType: _this.$type,
            project1: _this.project1,
            project2: _this.project2,
            paper: _this.paper,
            // protect2: _this.project2,
            // paper: _this.paper,
          };
          // console.log(Params)
          this.$ajax({
            url:'/api/updateWebmaintain', 
            method: 'post',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: Params
          }).then( res => {
            // console.log(res)
            if(res.data.errCode == 20){
              this.reload()
              this.$message({ type: 'success', message: '官网相关信息已更新' })
            }else {
              this.$message({ type: 'error', message: '信息更新失败' });
            }
          }).catch( error => {
            // console.log()
          });
        }
      }
    }
  }
</script>

<style scoped>
#sysWebMaintain {
  padding-bottom: 100px;
}

.all-title {
  height: 40px;
  border-bottom: 1px dashed #DCDFE6;
}

.main-title {
  font-size: 17px;
  color: #000;
  font-family: Hiragino Sans GB;
}

.subtitle {
  font-size: 16px;
  color: #1874CD;
  margin: 30px 0 10px 0;
}

.el-button {
  float: right;
}

.web-maintain-content {
  margin: 30px 0px;
}

[class*="maintain-textare"] {
  width: 90%;
  min-width: 500px;
}
.maintain-textare-project2, .maintain-textare-paper {
  margin-top: 100px;
}
</style>
