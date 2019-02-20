<template>
  <div id="sysaudit" class="index-wrap">
    <div class = "all-title">
      <div class="content-head">
        <p class="main-font">教师信息管理：共<span>{{ number }}</span>人
          <el-button size="small " type="warning"  @click="dialogFormVisible = true">添加教师</el-button>
          <el-button size="small" type="danger" @click="delSelections()" style="margin-right:15px;">批量删除</el-button>
        </p>
      </div>
      <el-dialog :title="dialogTitle" :visible.sync="dialogFormVisible" width="480px" @close="closeDialog()">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="demo-ruleForm" >
          <el-form-item label="姓名：" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="工号：" prop="username">
            <el-input v-model="ruleForm.username" :disabled="usernameShow"></el-input>
          </el-form-item>
          <el-form-item label="职称：" prop="title">
            <el-select v-model="ruleForm.title" placeholder="请选择职称">
              <el-option
                v-for="item in option"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="组别：" prop="team">
            <el-input v-model="ruleForm.team"></el-input>
          </el-form-item>
          <el-form-item label="联系方式：" prop="tel">
            <el-input v-model="ruleForm.tel"></el-input>
          </el-form-item>
          <el-form-item label="邮箱：" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="研究方向：" prop="direction">
            <el-input v-model="ruleForm.direction"></el-input>
          </el-form-item>
          <el-form-item label="个人主页：" prop="link">
            <el-input v-model="ruleForm.link"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="handleTeacher()">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <el-table
      :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)"
      style="width: 100%"
      stripe
      row-key="index"
      @expand-change="expandChange"
      @selection-change='handleSelectionChange'>
      <el-table-column type="selection" width="60" align="center"></el-table-column>
      <el-table-column type="expand">
        <template slot-scope="props">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="工号：">
              <span>{{ props.row.username }}</span>
            </el-form-item>
            <el-form-item label="姓名：">
              <span>{{ props.row.name }}</span>
            </el-form-item>
            <el-form-item label="职称：">
              <span>{{ props.row.title }}</span>
            </el-form-item>
            <el-form-item label="组别：">
              <span>{{ props.row.team }}</span>
            </el-form-item>
            <el-form-item label="联系方式：">
              <span>{{ props.row.tel }}</span>
            </el-form-item>
            <el-form-item label="电子邮箱：">
              <span>{{ props.row.email }}</span>
            </el-form-item>
            <el-form-item label="研究方向：">
              <span>{{ props.row.direction }}</span>
            </el-form-item>
            <el-form-item label="个人主页：">
              <span>{{ props.row.link }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column prop="index" label="序号" width="60" align="center"></el-table-column>
      <el-table-column prop="username" label="工号" width="130" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="130" align="center"></el-table-column>
      <el-table-column prop="title" label="职称" width="130" align="center"></el-table-column>
      <el-table-column prop="tel" label="联系方式" width="130" align="center"></el-table-column>
      <el-table-column prop="email" label="电子邮箱" width="275" align="center"></el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="props">
          <el-button size="mini" type="primary" @click="handleEdit(props.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="tableData.length">
      </el-pagination>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sysaudit',
    inject: ['reload'],
    data() {
      var validateUsername = (rule, value, callback) => {
        var targ = /^[A-Za-z0-9]+$/;
        if(!targ.test(value)){
          callback(new Error('用户名/工号只支持英文、数字'));
        }
        callback();
      }
      return {
        number: 0,
        currentPage: 1,
        pagesize: 10,
        tableData: [],
        expand: [],
        selectionData: [],
        dialogTitle: '添加教师',
        dialogType: 0,
        usernameShow: false,
        // obj: {},
        option: [
          { value: '教授', label: '教授' },
          { value: '副教授', label: '副教授' },
          { value: '讲师', label: '讲师' }
        ],
        dialogFormVisible: false,
        ruleForm: { 
          id: -1,
          name: '',
          username: '',
          title: '',
          team: '',
          tel: '',
          email: '',
          direction: '',
          link: ''
        },
        rules: {
          name: [{ required: true, message: '请输入姓名', trigger: 'blur'}],
          username: [
            { required: true, message: '请输入工号', trigger: 'blur'},
            { min: 5, max: 5, message: '请输入5位长工号', trigger: 'blur' },
            { validator: validateUsername, trigger: 'blur' }],
          title: [{ required: true, message: '请输入职称', trigger: 'change'}],
          tel: [{ min: 11, max: 11, message: '请输入11位电话号码', trigger: 'blur' }]
        }
      }
    },
    mounted () {
      this.$nextTick( function() {
        if(this.judgeLogin()){
          var _this = this;
          var data = [];
          var Params = { userType: _this.$type }
          this.$ajax.get('/api/getTeacher', {params: Params}).then( res => {
            console.log(res);
            var teacherData = res.data.teacherModels
            for (var i = 0; i<teacherData.length; i++) {
              teacherData[i].index = i+1;
            }
            _this.number = teacherData.length
            _this.tableData = teacherData
          }).catch( error => {
            console.log(error);
          });
        }
      })
    },
    methods: {
      handleSelectionChange (val) {
        this.selectionData = val
			},
      handleEdit(row) {
        if(this.judgeLogin()){
          var _this = this
          console.log(row);
          _this.ruleForm.id = row.id
          _this.ruleForm.name = row.name
          _this.ruleForm.username = row.username
          _this.ruleForm.title = row.title
          _this.ruleForm.team = row.team
          _this.ruleForm.tel = row.tel
          _this.ruleForm.email = row.email
          _this.ruleForm.direction = row.direction
          _this.ruleForm.link = row.link
          _this.dialogTitle = '更新教师信息'
          _this.dialogType = 1
          _this.usernameShow = true
          _this.dialogFormVisible = true
        }
      },
      closeDialog() {
        this.$refs.ruleForm.resetFields();
        this.dialogType = 0
        this.usernameShow = false
        this.ruleForm = {}
        // this.obj = null
      },
      handleTeacher () {
        if(this.judgeLogin()){
          var _this = this
          this.$refs.ruleForm.validate((valid) => {
            if(valid){
              // console.log(_this.obj)
              // console.log(_this.ruleForm)
              // if(_this.dialogType == 1 && _this.obj == _this.ruleForm){//更新时要判断是否更新
              //   this.$message({ type: 'error', message: '请先更改信息' });
              // }else{
                var Params = {
                  handleType: _this.dialogType,
                  teacherModel: {
                    id: _this.ruleForm.id,//更新的时候用
                    name: _this.ruleForm.name,
                    username: _this.ruleForm.username,
                    title: _this.ruleForm.title,
                    team: _this.ruleForm.team,
                    tel: _this.ruleForm.tel,
                    email: _this.ruleForm.email,
                    direction: _this.ruleForm.direction,
                    link: _this.ruleForm.link
                  }
                }
                console.log(Params)
                this.$ajax({
                  url: '/api/handleTeacher',
                  method: 'post',
                  contentType: "application/json; charset=utf-8",
                  dataType: "json",
                  data: Params
                }).then( res => {
                  console.log(res)
                  if(res.data.errCode == 20){
                    var msg = '录入成功'
                    if(_this.dialogType == 1) 
                      msg = '更新成功'
                    this.$message({ type:'success', message:msg})
                    this.ruleForm = {}
                    this.$refs.ruleForm.resetFields();
                    _this.dialogFormVisible = false//如果成功就结束dialog
                    this.reload()
                  }else if(res.data.errCode == 21){
                    this.$message({ type: 'error', message: '操作失败' });
                    this.ruleForm = {}
                    this.$refs.ruleForm.resetFields();
                  }else if(res.data.errCode == 22){
                    this.$message({ type: 'error', message: '用户名/工号重复' });
                  }
                }).catch( error => {
                  alert("出错！请联系管理员")
                });
              // }
            } 
          })
        }
      },
      delSelections() {
        if(this.judgeLogin()){
          var _this = this
          if(_this.selectionData.length == 0){
            this.$message.error('请选择要删除的成果');
          }else {
            var data = []
            for( let i=0; i<_this.selectionData.length; i++){
              data[i] = _this.selectionData[i].id
            }
            // console.log(data)
            this.$confirm('是否删除所选教师信息?', '提示', {
              confirmButtonText: '删除',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              var Params = { idList: data }
              this.$ajax({
                url: '/api/delTeacher',
                method: 'post',
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                data: Params
              }).then( res => {
                console.log(res)
                if(res.data.errCode == 20){
                  this.reload();
                  this.$message({ type: 'success', message: '删除成功' });
                }else if(res.data.errCode == 21){
                  this.$message({ type: 'error', message: '删除失败' });
                }
              }).catch( error => {
                console.log(error)
              })
            }).catch( () => {});

          }
        }
      },
      expandChange(row,expandedRows) {//一次展开一行
        if(expandedRows.length>1){
          expandedRows.shift()
        }
      },
      handleSizeChange(size) {
        this.pagesize = size;
      },
      handleCurrentChange(currentPage){
        this.currentPage = currentPage;
      }
    },
  }
</script>

<style scoped>
.el-pagination {
  float: right;
  margin-top: 35px;
  margin-bottom: 35px;
}

.el-table {
  cursor: pointer;
}

.content-head .el-button {
  float: right;
  margin-right: 0px;
}

.manual-wrap {
  margin: 0 auto;
  overflow: hidden;
  margin-top: 10px;
  margin-left: 30px;
  margin-right: 30px;
  font-family: Hiragino Sans GB;
}

.all-title {
  height: 40px;
  border-bottom: 1px dashed #DCDFE6;
}

.content-head span {
  font-size: 20px;
  color: #F56C6C;
}

.main-font {
  font-size: 17px;
  font-family: Hiragino Sans GB;
}

.demo-table-expand {
  font-size: 0;
  /*background: #EDEDED;*/
}

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}

.demo-table-expand .el-form-item {
  margin-left: 10px;
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
  color: #9C9C9C;
}

.all-title .el-form-item {
  width: 345px;
}
</style>
