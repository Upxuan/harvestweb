<template>
  <div id="harvesthandle">
    <el-table-column label="操作" align="center">
      <template slot-scope="scope">
        <el-button 
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
      </template>
    </el-table-column>
  </div>
</template>

<script>
  import {getCookie,delCookie,setCookie} from '@/api/js/Cookie.js'
  import myapi from '@/api/myapi.js'
  export default {
    name:'harvesthandle',
    data () {
      return {
        currentPage:1,
        pagesize:5,
        logining: false,
        tableData: [
          {
            id: 0,
            index: 0,
            type: '',
            title: '',
            time: '',
            authors: '',
            // name: ''
          }
        ]
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
        //   this.$router.replace('')
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var _this = this;
          var Params = {
                    usertype: _this.$type,
                    userid: _this.$userInfo.id,
                    hartype: 1,
                    harid: row.id};
          this.$ajax.post('/api/delHarvest')
          // this.$message({ type: 'success', message: '删除成功!' });
        }).catch(() => {
          // this.$message({ type: 'info', message: '已取消删除' });
        });
      }
    }
  }
</script>

<style scoped>
.el-button{
  margin-right: 5px;
  float:right;
}
</style>
