<template>
  <div id="texGraduationStatus">
    <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" v-if='dialogVisible' width="30%" @close="closeDialog" append-to-body>
      <el-row>
        <el-col :span="24">
          <div class="col-md-12" v-for="(item, index) in fileList" :key="index">
            <div class="fileCard filelink">
              <el-row>
                <el-col :span="18">
                  <!-- <a href="javascript:void(0);" :download="fileList[index]" onclick="redirect($(this))" :val="fileHref+'/'+fileList[index]">{{ item }}</a> -->
                  <a :href="fileHref+'/'+fileList[index]" :download="fileList[index]">{{ item }}</a>
                  <!-- <el-button size="mini" type="text" style="color:#555;font-size:14px;" @click="downloadFile(item)">{{ item }}</el-button> -->
                </el-col>
                <el-col :span="6">
                  <el-button size="mini" type="danger" icon="el-icon-delete" circle class="right-div" style="margin-left:10px;" @click="deleteFile(index)"></el-button>
                  <a :href="fileHref+'/'+fileList[index]" :download="fileList[index]">
                    <el-button size="mini" type="success" icon="el-icon-download" circle class="right-div"></el-button>
                    <!-- <el-button size="mini" type="success" icon="el-icon-download" circle class="right-div" @click="downloadFile(item)"></el-button> -->
                  </a>
                </el-col>
              </el-row>
            </div>
            <el-divider></el-divider>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24" style="margin-top:30px;">
          <el-button class="right-div" size="small" type="info" plain @click="deleteAllFile()">清除所有文件</el-button>
          <!-- <span class="right-div" style="margin:6px 15px;"><span style="color:#F56C6C;">{{ folderSize }}</span> / 300MB</span> -->
        </el-col>
      </el-row>
    </el-dialog>
    <div id="graduation-status">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
        <el-form-item label="论文材料交接：">
          <template slot-scope="props">
            <el-button size="small" type="success" plain @click="checkUploadFileList(props.row)">查看已上传文件</el-button>
          </template>
        </el-form-item>
        <el-form-item label="钥匙交接：">
          <el-switch
            v-model="ruleForm.keyss"
            active-color="#888"
            active-text="未完成"
            inactive-color="#409EFF"
            inactive-text="已完成">
          </el-switch>
        </el-form-item>
        <el-form-item label="设备交接：">
          <el-switch
            v-model="ruleForm.devices"
            active-color="#888"
            active-text="未完成"
            inactive-color="#409EFF"
            inactive-text="已完成">
          </el-switch>
          <pre v-if="ruleForm.deviceDescribe != '' ">{{ ruleForm.deviceDescribe }}</pre>
          <!-- <pre v-else>暂无设备交接详情</pre> -->
        </el-form-item>
        <el-form-item label="工作交接：">
          <el-switch
            v-model="ruleForm.works"
            active-color="#888"
            active-text="未完成"
            inactive-color="#409EFF"
            inactive-text="已完成">
          </el-switch>
          <pre v-if="ruleForm.workDescribe != '' ">{{ ruleForm.workDescribe }}</pre>
          <!-- <pre v-else>暂无工作交接详情</pre> -->
        </el-form-item>
        <el-form-item>
          <el-button class="right-div" size="medium" type="primary" style="margin-right:25px;" @click="updateForm">确认修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  export default {
    name:'texGraduationStatus',
    props: ["graduationParams"],
    inject: ['reload'],
    data () {
      return {
        dialogVisible: false,
        fileHref: 'http://cloud.hdu.edu.cn/lab/download/graduation/' + this.graduationParams.username,
        downloadFileName: '',
        folderSize: 0,
        fileList: [],
        ruleForm: {
          userType: "",
          userId: "",
          username: "",
          files: [],
          workDescribe: '',
          works: true,
          deviceDescribe: '',
          devices: true,
          keyss: true
        },
        rules: {}
      }
    },
    created() {
      var _this = this;
      var Params = {
        userId: this.graduationParams.id,
        username: this.graduationParams.username
      };
      // console.log(Params);
      this.$ajax.post('/api/getGraduationMsg', Params).then( res => {
        // console.log(res);
        if(res.data.errCode == 20) {
          _this.ruleForm.devices = res.data.devices;
          _this.ruleForm.deviceDescribe = res.data.deviceDescribe;
          _this.ruleForm.keyss = res.data.keyss;
          _this.ruleForm.works = res.data.works; 
          _this.ruleForm.workDescribe = res.data.workDescribe;
          _this.fileList = res.data.fileList;
          _this.folderSize = (res.data.folderSize/(1024 * 1024)).toFixed(2) + "MB"
        }else if(res.data.errCode == 21) {
          alert("出错！请联系管理员");
        }
      });
    },
    methods: {
      // <a href="javascript:void(0);" onclick="redirect($(this))" val="http://www.baidu.com">跳转</a>
      // redirect(options) {
      //   console.log(1);
      //   var url = options.attr('val');
      //   window.location.href = this.fileHref+'/'+filename;
      // },
      updateForm() {
        if(this.judgeLogin()){
          this.$refs.ruleForm.validate((valid) => {
            if(valid) {
              this.$confirm('是否确定修改该学生毕业信息', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                var _this = this;
                var Params = {
                  // userType: _this.ruleForm.userType,
                  userId: this.graduationParams.id,
                  username: this.graduationParams.username,
                  workDescribe: _this.ruleForm.workDescribe,
                  works: _this.ruleForm.works,
                  deviceDescribe: _this.ruleForm.deviceDescribe,
                  devices: _this.ruleForm.devices,
                  keyss: _this.ruleForm.keyss
                };
                // console.log(Params)
                this.$ajax.post('/api/uploadGraduationMsg', Params).then( res => {
                  // console.log(res);
                  if(res.data.errCode == 20) {
                    this.$message({ type: 'success', message: '修改成功' });
                  }else if(res.data.errCode == 21) {
                    this.$message({ type: 'error', message: '操作失败！请联系管理员' });
                  }
                });
              });
            }
          });
        }
      },
      closeDialog() {
        this.dialogVisible = false;
      },
      checkUploadFileList(row) {
        var _this = this;
        _this.dialogTitle = this.graduationParams.name + " / 已上传文件列表";
        _this.dialogVisible = true;
      },
      downloadFile(filename) {
        // console.log(filename);
        if(this.judgeLogin()){
          var Params = {
            username: this.graduationParams.username,
            filename: filename
          };
          this.$ajax({
            url: '/api/downloadFile',
            method: 'post',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: Params,
            responseType: 'blob'
          }).then( res => {
            // console.log(res);
            let url = window.URL.createObjectURL(res.data); //创建一个新的 URL 对象
            // console.log(url)
            //以下代码一句话解释，在页面上生成一个a标签并指定href为上面的url,然后模拟点击，以实现自动下载
            var a = document.createElement("a");
            document.body.appendChild(a);
            a.href = url;
            a.download = filename;
            a.click();
            window.URL.revokeObjectURL(url);
          }).catch( error => {
            // console.log(error);
          });
        }
      },
      deleteAllFile() {
        if(this.judgeLogin()){
          var _this = this;
          if(this.fileList.length <= 0){
            this.$message({ type: 'warning', message: '当前无已上传的文件，请先上传!' });
          }else {
            this.$confirm('确定清除个人上传的所有文件？', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$ajax.get('/api/deleteAllFile', {params: {
                username: this.graduationParams.username
              }}).then( res => {
                // console.log(res);
                if(res.data.errCode == 20) {
                  this.$message({ type: 'success', message: '已清空个人文件夹' });
                  this.fileList = [];
                  this.$emit("fileListChange", this.fileList);
                }else if(res.data.errCode == 21) {
                  this.$message({ type: 'error', message: '操作失败！请联系管理员' });
                }
              });
            }).catch(() => {});
          }
        }
      },
      deleteFile(index){
        // console.log(this.fileList[index]);
        if(this.judgeLogin()){
          var _this = this;
          // this.$confirm('确定清除个人上传的所有文件？', '提示', {
          //   confirmButtonText: '确定',
          //   cancelButtonText: '取消',
          //   type: 'warning'
          // }).then(() => {
            this.$ajax.get('/api/deleteFile', {params: {
              username: this.graduationParams.username,
              filename: this.fileList[index]
            }}).then( res => {
              // console.log(res);
              if(res.data.errCode == 20) {
                this.$message({ type: 'success', message: '已删除所选文件' });
                this.fileList.splice(index, 1);
                this.$emit("fileListChange", this.fileList);
              }else if(res.data.errCode == 21) {
                this.$message({ type: 'error', message: '操作失败！请联系管理员' });
              }
            });
          // }).catch(() => {});
        }
      }
    }
  }
</script>

<style scoped>
pre {
  background: #FFF;
}
.right-div{
  float: right;
}
.fileCard {
  /* height: 20px; */
  margin: 15px 10px;
}
/* start filelink*/
.filelink a {
  /* color: #409EFF; */
  color: #555;
}
.filelink a:hover {
  color: #111;
  font-size: 14px;
  text-decoration:none ;
}
.filelink > a:focus
  {
    color: #999;
    text-decoration:none ;
  }
.filelink > .active > a,
.filelink > .active > a:hover,
.filelink > .active > a:focus {
  color: #36648B;
  background-color: transparent;
}
/* end filelink*/
</style>
