import myapi from '@/api/myapi.js'
export default {
  install (Vue, opt) {
    Vue.prototype.delMyHarvest = function (harType, harId, source) {
      var flag = this.judgeLogin();
      if(!flag) return;
      this.$confirm('确定删除当前成果?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          var Params = {
              userType: this.$type,
              userId: this.$userInfo.id,
              harType: harType,
              harId: harId,
              source: source};
          // console.log(Params)
          this.$ajax.get('/api/delMyHarvest', {params: Params}).then( res => {
            // console.log(res);
            if(res.data.errCode == 20){
              this.reload();
              this.$message({ type: 'success', message: '删除成功' });
            }else if(res.data.errCode == 21){
              this.$message({ type: 'error', message: '删除失败' });
            }
          }).catch( error => {
            // console.log(error);
            alert("出错！请联系管理员")
          })
        }).catch( () => {
        });
    }

    Vue.prototype.delMyAuditHarvest = function (harType, harId, review) {
      var flag = this.judgeLogin();
      if(!flag) return;
      this.$confirm('确定永久删除该成果?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var _this = this;
        var Params = {
              harType: harType,
              harId: harId};
        this.$ajax.get('/api/delMyAuditHarvest', {params: Params}).then( res => {
          console.log(res);
          if(res.data.errCode == 20){
            if(review === 1)
              _this.number.unReviseNum--
            else if(review === 2)
              _this.number.reviseFailNum--
            else if(review === 3)
              _this.number.reviseSuccessNum--
            this.reload();
            this.$message({ type: 'success', message: '删除成功' });
          }else if(res.data.errCode == 21){
            this.$message({ type: 'error', message: '删除失败' });
          }
        }).catch( error => {
          // console.log(error);
          alert("出错！请联系管理员")
        })
      }).catch( () => {
      });
    }

    Vue.prototype.passMyAuditHarvest = function (harType, harId, review) {
      var flag = this.judgeLogin();
      if(!flag) return;
      this.$confirm('确定通过此成果?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var _this = this;
        var Params = {
              userId: _this.$userInfo.id,
              harType: harType,
              harId: harId};
        this.$ajax.get('/api/passMyAuditHarvest', {params: Params}).then( res => {
          console.log(res);
          if(res.data.errCode == 20){
            if(review === 1)
              _this.number.unReviseNum--
            _this.number.reviseSuccessNum++
            this.reload();
            this.$message({ type: 'success', message: '操作成果' });
          }else if(res.data.errCode == 21){
            this.$message({ type: 'error', message: '操作失败' });
          }
        }).catch( error => {
          // console.log(error);
          alert("出错！请联系管理员")
        })
      }).catch( () => {
      });
    }

    Vue.prototype.rejectMyAuditHarvest = function (harType, harId, review) {
      var flag = this.judgeLogin();
      if(!flag) return;
      this.$confirm('确定否决此成果?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var _this = this;
        var Params = {
              userId: _this.$userInfo.id,
              harType: harType,
              harId: harId};
        this.$ajax.get('/api/rejectMyAuditHarvest', {params: Params}).then( res => {
          console.log(res);
          if(res.data.errCode == 20){
            if(review === 1)
              _this.number.unReviseNum--
            _this.number.reviseFailNum++
            this.reload();
            console.log("reject")
            this.$message({ type: 'success', message: '操作成果' });
          }else if(res.data.errCode == 21){
            this.$message({ type: 'error', message: '操作失败' });
          }
        }).catch( error => {
          // console.log(error);
          alert("出错！请联系管理员")
        })
      }).catch( () => {
      });
    }

    Vue.prototype.autoAddHarvest = function (val) {
      var flag = this.judgeLogin();
      if(!flag) return;
      this.$confirm('确定录入所选成果?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var _this = this
        var Params = {
          userType: _this.$type,
          userId: _this.$userInfo.id,
          harType: val,
          selections: _this.selections
        };
        console.log(Params)
        this.$ajax({
          url: '/api/autoAdd',
          method: 'post',
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          data: Params
        }).then( res => {
          console.log(res)
          if(res.data.errCode == 20){
            this.reload();
            this.$message({ type:'success', message:'成果录入成功'})
          }else if(res.data.errCode == 21){
            this.$message({ type: 'error', message: '录入失败' });
          }
        }).catch( error => {
          console.log(error);
        });
      }).catch( () => {});
    }

  }
}
