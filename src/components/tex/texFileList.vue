<template>
  <div id="texFileList">
    <el-row>
      <el-col :span="24">
        <div class="col-md-12" v-for="(item, index) in fileParams.fileList" :key="index">
        <div class="fileCard filelink">
          <el-row>
            <el-col :span="18">
              <a :href="fileHref+'/'+fileList[index]" :download="fileList[index]">{{ item }}</a>
            </el-col>
            <el-col :span="6">
              <el-button size="mini" type="danger" icon="el-icon-delete" circle class="right-div" style="margin-left:10px;" @click="deleteFile(index)"></el-button>
              <a :href="fileHref+'/'+fileList[index]" :download="fileList[index]">
                <el-button size="mini" type="success" icon="el-icon-download" circle class="right-div"></el-button>
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
  </div>
</template>

<script>
  export default {
    name:'texFileList',
    props: ["fileParams"],
    inject: ['reload'],
    data () {
      return {
        fileHref: 'http://cloud.hdu.edu.cn/lab/cloud/graduation/files' + "/" + this.fileParams.username,
        downloadFileName: '',
        folderSize: this.fileParams.folderSize
      }
    },
    mounted() {
      console.log(this.fileParams);
    },
    methods: {
      deleteAllFile() {
        if(this.judgeLogin()){
          var _this = this;
          if(this.fileParams.fileList.length <= 0){
            this.$message({ type: 'warning', message: '当前无已上传的文件，请先上传!' }); 
          }else {
            this.$confirm('确定清除个人上传的所有文件？', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              this.$ajax.get('/api/deleteAllFile', {params: {
                username: this.fileParams.username
              }}).then( res => {
                // console.log(res);
                if(res.data.errCode == 20) {
                  this.$message({ type: 'success', message: '已清空个人文件夹' });
                  this.fileParams.fileList = [];
                  this.$emit("fileListChange", this.fileParams.fileList);
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
              username: this.fileParams.username,
              filename: this.fileParams.fileList[index]
            }}).then( res => {
              // console.log(res);
              if(res.data.errCode == 20) {
                this.$message({ type: 'success', message: '已删除所选文件' });
                this.fileParams.fileList.splice(index, 1);
                this.$emit("fileListChange", this.fileParams.fileList);
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
