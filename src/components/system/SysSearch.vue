<template>
  <div id="sysSearch">
    <el-breadcrumb separator-class="el-icon-arrow-right" style="margin-bottom:20px;">
      <el-breadcrumb-item>管理</el-breadcrumb-item>
      <el-breadcrumb-item>查询统计</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="search-condition">
      <el-card class="box-card search-condition-card" shadow="hover">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="130px" class="search-condition-ruleForm">
          <el-form-item label="文献类别：" prop="harType">
            <el-checkbox :indeterminate="isIndeterminate" v-model="checkData" @change="handlecheckDataChange">全选</el-checkbox>
            <div style="margin: 15px 0;">
              <el-checkbox-group v-model="checkedharvests" @change="handleCheckedharvestsChange">
                <el-checkbox 
                v-for="harvest in harvests" 
                :key="harvest"
                :label="harvest">{{ harvest }}</el-checkbox>
              </el-checkbox-group>
            </div>
          </el-form-item>
          <el-row>
            <el-col :span="7">
              <el-form-item label="检索条件：" prop="searchDemoKey">
                <el-select v-model="ruleForm.searchDemo[0].key" placeholder="请选择检索类目">
                  <el-option
                    v-for="item in searchTypes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="16" style="margin-left: -120px;">
              <el-form-item prop="searchDemoValue">
                <el-input v-model="ruleForm.searchDemo[0].value"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row v-for="(item, index) in ruleForm.search" :key="index">
            <el-col :span="7">
              <el-form-item :prop="'searchKey' + (index+1)">
                <el-select v-model="item.key" placeholder="请选择检索类目">
                  <el-option
                    v-for="item in searchTypes"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="16" style="margin-left: -120px;">
              <el-form-item :prop="'searchValue' + (index+1)">
                <el-input v-model="item.value"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="2" style="margin-left:-4%;">
              <el-button @click.prevent="removeItem(item)" type="danger" size="small" icon="el-icon-delete" circle></el-button>
            </el-col>
          </el-row>
          <el-form-item style="text-align: right">
            <el-button @click="addItem(ruleForm.search)" type="text" style="margin-right:165px;">+ AddLine</el-button>
          </el-form-item>
          <el-button type="primary" size="medium" @click="searchMethod">查询</el-button>
          <el-button size="medium" style="margin-right: 15px;" @click="resetForm">重置</el-button>
        </el-form>
      </el-card>
    </div>
    <!-- <advance-search></advance-search> -->
    <!-- <div class="all-title">
      <p class="main-font">
        <span>查询结果</span>
      </p>
    </div> -->
    <div class="search-result">
      <div class="search-result-info">
        找到约 <span style="color:#CD0000;">{{ dataList2.length }}</span> 条结果
      </div>
      <div class="search-result-content">
        <component 
          :is="isContent" 
          :key="index1"
          v-for="(item, index1) in dataList2.slice((currentPage-1)*pageSize,currentPage*pageSize)" 
          :item="item">
          </component>
      </div>
      <div class="block search-result-pagination" v-show="dataList2.length>0">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page.sync="currentPage"
          :page-size="pageSize"
          layout="prev, pager, next, jumper"
          :total="dataList2.length">
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
  import AdvanceSearch from '@/components/form/formAdvanceSearch'
  import ResultContent from '@/components/tex/texResultContent'
  import data from '../../../static/mock/data.json';
  import {HandlePrefix} from '@/js/search.js'
  const harvestOptions = ['期刊论文', '会议论文', '专利', '项目', '软件著作权', '学术专著', '公共事务'];
  export default {
    inject: ['reload'],
    name:'sysSearch',
    components:{
      AdvanceSearch,
      ResultContent
    },
    data () {
      return {
        ruleForm: {
          searchDemo: [{key: 1, value: "" }],
          search: []
        },
        rules: {},
        currentPage: 1,
        pageSize: 10,
        isContent: "ResultContent",
        dataList: [],
        dataList2: [],
        checkData: false,
        checkedharvests: [],
        harvests: harvestOptions,
        isIndeterminate: true,
        searchTypes: data.searchTypes,
        searchConds: { title: [] },
      }
    },
    mounted () {
      if(this.judgeLogin()){
        var _this = this;
        var Params = {
          userType: _this.$type,
          userId: _this.$userInfo.id
        };
        this.$ajax.get("/api/search", {params: Params}).then( res=> {
          // console.log(res);
          _this.dataList = res.data;
          // _this.dataList2 = res.data;
          // console.log(_this.dataList);
        }).catch( err=> { });
      }
    },
    computed: {
      // dataList2 () {
      //   let arr = [];
      //   for(let i = 0; i < this.dataList.length; i++) {
      //     if(this.dataList[i].title.search(this.ruleForm.title) != -1) {
      //       arr.push(this.dataList[i]);
      //     }
      //   }
      //   return arr;
      // }
    },
    methods: {
      searchMethod() {
        if(this.judgeLogin()){
          if(this.dataList == false) {
            this.$message.error('当前无成果可供查询');
          }else {
            var _this = this;
            var conditions = {
              types: _this.checkedharvests,
              searchs: _this.ruleForm.searchDemo.concat(_this.ruleForm.search)
            };
            // console.log(conditions);
            this.dataList2 = HandlePrefix(this.dataList, conditions);

            // var conditions = {
            //   types: _this.checkedharvests,
            //   title: this.handeleStr(_this.ruleForm.title),
            //   firstAuthor: this.handeleStr(_this.ruleForm.firstAuthor),
            //   belongName: this.handeleStr(_this.ruleForm.belongName),
            //   submitName: this.handeleStr(_this.ruleForm.submitName),
            //   reviseName: this.handeleStr(_this.ruleForm.reviseName)
            // };
            // _this.dataList2 = SearchHarvest(_this.dataList, conditions);
          }
        }
      },
      handeleStr(str) {
        if(typeof(str) == undefined || str == null)
          return str;
        return str.replace(/\s*/g, "");
      },
      resetForm() {
        if(this.judgeLogin()){
          // this.$refs.ruleForm.resetFields();
          // this.checkData = false;
          // this.checkedharvests = [];
          // this.ruleForm.search = [];
          this.reload();
        }
      },
      addItem(data) {
        if(data.length < 4){
          this.ruleForm.search.push({
            key: 1,
            value: ''
          });
        }
      },
      removeItem(item) {
        var index = this.ruleForm.search.indexOf(item)
        if (index !== -1) {
          this.ruleForm.search.splice(index, 1)
        }
      },
      handleSizeChange(pageSize) {
        this.pageSize = pageSize;
      },
      handleCurrentChange(currentPage) {
        this.currentPage = currentPage;
      },
      handlecheckDataChange(val) {
        this.checkedharvests = val ? harvestOptions : [];
        this.isIndeterminate = false;
      },
      handleCheckedharvestsChange(value) {
        let checkedCount = value.length;
        this.checkData = checkedCount === this.harvests.length;
        this.isIndeterminate = checkedCount > 0 && checkedCount < this.harvests.length;
      }
    }
  }
</script>

<style scoped>
/* .all-title { */
  /* height: 40px; */
  /* border-bottom: 1px dashed #DCDFE6; */
/* } */
.main-font {
  font-size: 17px;
  color: #000;
  font-family: Hiragino Sans GB;
}
.el-button{
  float: right;
} 
.el-input {
  /* width: 600px; */
}

/* start search-condition */
.search-condition {
  padding-bottom: 30px;
}
.search-condition-card {
  width: 70%;
  min-width: 890px;
  background: #FAFAFA;
  padding-bottom: 40px;
}
.search-condition-ruleForm {
  padding-right: 20px;
}
/* end search-condition */

/* start search-result */
.search-result{
  min-height: 500px;
  /* padding-left: 10%; */
}
/* .search-result-content{
  min-height: 650px;
} */
.search-result-info{
  color:#929497;
  font-size: 13px;
  margin-top:15px;
  margin-bottom: 20px;
}
.result-content-title{
  font-weight: bold;
}
.result-content-type {
  color:#4682B4;
}
.result-content-authors {
  font-size: 13px;
}
.result-content-dialog {
  padding: 0px 40px 40px 40px;
}
.search-result-pagination{
  width: 60%;
  margin: 50px auto;
  align-content: center;
}
/* end search-result */
</style>
