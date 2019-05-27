<template>
  <div id="sysGraduation">
    <div class = "all-title">
      <div class="main-font">
        <span>毕业交接</span>
        <el-button class="right-div" size="small" type="warning" @click="submitForm">提交</el-button>
        <el-button class="right-div" size="small" @click="resetForm" type="danger" style="margin-right: 15px">重置</el-button>
        <el-dialog :title="dialogTitle" :visible.sync="dialogVisible" v-if='dialogVisible' width="30%" @close="closeDialog">
          <!-- <file-list :fileParams="fileParams" @fileListChange="fileListChange"></file-list> -->
          <el-row>
            <el-col :span="24">
              <div class="col-md-12" v-for="(item, index) in fileList" :key="index">
                <div class="fileCard filelink">
                  <el-row>
                    <el-col :span="18">
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
      </div>
    </div>
    <div class="base-msg-all">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm" >
        <el-form-item label="论文材料上传：" class="base-msg-upload">
          <template slot-scope="props">
            <div style="width:120px;float:right;">
              <li style="margin-bottom:155px;"><el-button class="right-div" size="small" type="primary" plain @click="checkUploadFileList(props.row)">查看已上传文件</el-button></li>
              <li><el-button class="right-div" type="text" @click="clearFiles" style="color:#CD8500;">清空文件列表</el-button></li>
            </div>
            <!-- <el-button class="right-div" type="text" @click="clearFiles">清空文件列表</el-button> -->
            <!-- <el-button class="right-div" size="small" type="primary" plain @click="checkUploadFileList(props.row)">查看已上传文件</el-button> -->
            <el-upload
              class="upload-demo"
              drag
              multiple
              ref="uploadFile"
              action="/api/uploadGraduation"
              :limit=limitNum
              :data="uploadParam"
              :auto-upload="false"
              :before-upload="beforeUploadFile"
              :on-change="handleChange"
              :on-exceed="HandleExceed"
              :on-success="handleSuccess"
              :on-error="handleError"
              :file-list="uploadFileList">
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">将压缩文件拖到此处，或<em>点击上传</em></div>
              <div slot="tip" class="el-upload__tip" style="color:#8C8C8C;">
                <el-alert title="注意：只能上传不超过1G的不重名文件，单次上传文件不超过3个" type="warning" show-icon style="height:30px;" :closable="false"></el-alert>
              </div>
            </el-upload>
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
          <el-input
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 8 }"
            placeholder="如有需要请简要描述设备交接情况，如：1. 显示器 - 转交给某某同学。"
            v-model="ruleForm.deviceDescribe">
          </el-input>
        </el-form-item>
        <el-form-item label="工作交接：">
          <el-switch
            v-model="ruleForm.works"
            active-color="#888"
            active-text="未完成"
            inactive-color="#409EFF"
            inactive-text="已完成">
          </el-switch>
          <el-input
            type="textarea"
            :autosize="{ minRows: 5, maxRows: 8 }"
            placeholder="如有需要请简要描述工作交接情况"
            v-model="ruleForm.workDescribe">
          </el-input>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  // import FileList from '@/components/tex/texFileList'
  import {getCookie,delCookie,updateCookie,setCookie} from '@/api/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default{
    name:'sysGraduation',
    inject: ['reload'],
    // components: {
    //   FileList
    // },
    data() {
      return {
        uploadParam: {
          username: this.$userInfo.username,
          // files: [],
        },
        ruleForm: {
          userType: this.$type,
          userId: this.$userInfo.id,
          username: this.$userInfo.username,
          files: [],
          workDescribe: '',
          works: true,
          deviceDescribe: '',
          devices: true,
          keyss: true
        },
        rules: {},
        limitNum: 3,
        uploadFileList: [],  //当前提交成功的fileList
        fileList: [],  //服务器上实际所存储的fileList
        folderSize: 0,  //个人文件夹目前所占空间大小
        formData: "",  //文件上传给后端的文件param
        dialogVisible: false,
        dialogTitle: '',
        fileHref: 'http://cloud.hdu.edu.cn/lab/download/graduation/' + this.$userInfo.username,
        count: 0, //上传文件时候的数量控制
        cnt: 0, //上传文件时候的数量控制 增量
        errcode: 20,
      }
    },
    mounted () {
      var _this = this;
      var Params = {
        userId: _this.$userInfo.id,
        username: _this.$userInfo.username
      };
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
      submitForm() {
        if(this.judgeLogin()){
          this.$refs.ruleForm.validate((valid) => {
            if(valid) {
              this.$confirm('是否确定提交当前毕业信息', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
              }).then(() => {
                var _this = this;
                // console.log(_this.ruleForm.files);
                _this.count = _this.ruleForm.files.length;
                if(_this.count > 0){
                  this.$refs.uploadFile.submit();
                }else {
                  this.reviseBaseInfoRequest();
                }
              });
            }    
          });
        }
      },
      // 文件超出个数限制时的钩子
      HandleExceed(files, fileList) {
        this.$notify.warning({
          title: '警告',
          message: `只能选择 ${this.limitNum} 个文件，当前共选择了 ${files.length + fileList.length} 个`
        });
      },
      // 文件状态改变时的钩子
      handleChange(file, fileList) {
        // console.log('change')
        // console.log(file)
        // this.ruleForm.file = file.raw
        this.ruleForm.files.push(file.raw);
        // console.log(this.ruleForm.files)
        // console.log(fileList)
        // console.log(this.fileList)
      },
      // 上传文件之前的钩子, 参数为上传的文件,若返回 false 或者返回 Promise 且被 reject，则停止上传
      beforeUploadFile(file) {
        // console.log('before upload')
        // console.log(file)
        // let extension = file.name.substring(file.name.lastIndexOf('.')+1)
        let size = file.size / 1024 / 1024
        // if(extension !== 'zip') {
        //   this.$message({ type: 'warning', message: '只能上传zip文件' });
        // }
        if(size > 1024) {
          this.$message({ type: 'warning', message: '单个文件大小不得超过1G' });
        }
      },
      // 文件上传成功时的钩子
      handleSuccess(res, file, fileList) {
        // console.log(res);
        this.cnt++;
        if(res.errCode != 20) this.errcode = res.errCode;
        if(this.cnt == this.count) { //文件全部上传完后进行反馈处理
          if(this.errcode == 20) {
              this.reviseBaseInfoRequest();
          }else {
            if(this.errcode == 25) {
              this.$message({ type: 'warning', message: '上传的文件列表中有重名文件！' });
            }else if(this.errcode == 26) {
              this.$message({ type: 'error', message: '文件上传失败！请检查文件状况或联系管理员' });
            }
            this.reload();//清空fileList
          }
        }
      },
      // 文件上传失败时的钩子
      handleError(err, file, fileList) {
        this.$message({ type: 'error', message: '文件上传失败！请检查文件状况或联系管理员' });
      },
      clearFiles() {
        this.$refs.uploadFile.clearFiles();
      },
      checkUploadFileList(row) {
        var _this = this;
        _this.dialogTitle = this.$userInfo.name + " / 已上传文件列表";
        _this.dialogVisible = true;
        // _this.fileParams = {
        //   username: this.$userInfo.username,
        //   fileList: _this.fileList,
        //   folderSize: _this.folderSize
        // };
      },
      closeDialog() {
        this.dialogVisible = false;
      },
      downloadFile(filename) {
        // console.log(filename);
        if(this.judgeLogin()){
          var Params = {
            username: this.$userInfo.username,
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
          if(_this.fileList.length <= 0){
            this.$message({ type: 'warning', message: '当前无已上传的文件，请先上传!' });
          }else {
            this.$confirm('确定清除个人上传的所有文件？', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$ajax.get('/api/deleteAllFile', {params: {
                username: this.$userInfo.username
              }}).then( res => {
                // console.log(res);
                if(res.data.errCode == 20) {
                  this.$message({ type: 'success', message: '已清空个人文件夹' });
                  _this.fileList = [];
                }else if(res.data.errCode == 21) {
                  this.$message({ type: 'error', message: '操作失败！请联系管理员' });
                }
              });
            }).catch(() => {});
          }
        }
      },
      deleteFile(index) {
        // console.log(this.fileList[index]);
        if(this.judgeLogin()){
          var _this = this;
          // this.$confirm('确定清除个人上传的所有文件？', '提示', {
          //   confirmButtonText: '确定',
          //   cancelButtonText: '取消',
          //   type: 'warning'
          // }).then(() => {
            this.$ajax.get('/api/deleteFile', {params: {
              username: this.$userInfo.username,
              filename: _this.fileList[index]
            }}).then( res => {
              // console.log(res);
              if(res.data.errCode == 20) {
                this.$message({ type: 'success', message: '已删除所选文件' });
                _this.fileList.splice(index, 1);
              }else if(res.data.errCode == 21) {
                this.$message({ type: 'error', message: '操作失败！请联系管理员' });
              }
            }).catch(() => {});
          // });
        }
      },
      resetForm() {
        this.reload();
      },
      reviseBaseInfoRequest() {
        var _this = this;
        var Params = {
          userType: _this.ruleForm.userType,
          userId: _this.ruleForm.userId,
          username: _this.ruleForm.username,
          workDescribe: _this.ruleForm.workDescribe,
          works: _this.ruleForm.works,
          deviceDescribe: _this.ruleForm.deviceDescribe,
          devices: _this.ruleForm.devices,
          keyss: _this.ruleForm.keyss
        };
        this.$ajax.post('/api/uploadGraduationMsg', Params).then( res => {
          // console.log(res);
          if(res.data.errCode == 20) {
            this.$message({ type: 'success', message: '提交成功' });
            this.reload();//成功后更新界面，主要是清空了fileList和更新信息
          }else if(res.data.errCode == 21) {
            this.$message({ type: 'error', message: '毕业信息更新失败！请联系管理员' });
            this.clearFiles();//清空fileList
          }
        });
      },
      // uploadResultHandle(errCode) {
      //   if(errCode == 20) {
      //     this.$message({ type: 'success', message: '提交成功' });
      //     this.reload();//成功后更新界面，主要是清空了fileList和更新信息
      //   }else {
      //     if(errCode == 25) {
      //       this.$message({ type: 'warning', message: '上传的文件重复！请更改需上传的文件' });
      //     }else if(errCode == 26) {
      //       this.$message({ type: 'error', message: '文件上传失败！请检查文件状况或联系管理员' });
      //     }else if(errCode == 21) {
      //       this.$message({ type: 'error', message: '毕业信息更新失败！请联系管理员' });
      //     }
      //     this.clearFiles();//清空fileList
      //   }
      // },
      fileListChange(data) {
        this.fileList = data;
      }
    }
  }
</script>

<style>
li {
  list-style-type:none;
}
input[type="file"] {
    display: none;
}
#sysGraduation .base-msg-all{
  margin-left: 70px;
  width: 800px;
  margin-top: 50px;
}
#sysGraduation .manual-wrap {
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  font-family: Hiragino Sans GB;
}
#sysGraduation .all-title {
  height: 40px;
  border-bottom: 1px dashed #DCDFE6;
}
#sysGraduation .main-font {
  font-size: 17px;
  color: #000;
  font-family: Hiragino Sans GB;
}

#sysGraduation .base-msg-upload {
  /* margin: 20px auto;
  text-align: center; */
}
.right-div{
  float: right;
}
.handle-Button {
  width: 55px;
  height: 55px;
}
.fileCard {
  /* height: 20px; */
  margin: 15px 10px;
}
.inner-dialog {
  text-align: center;
  margin: auto 0;
}
.el-divider--horizontal {
  margin: 12px 0;
}
/* start upload */
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.el-upload {
    display: inline-block;
    text-align: center;
    cursor: pointer;
    outline: 0;
    border: 1px dashed #d9d9d9;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
/* end upload */

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
