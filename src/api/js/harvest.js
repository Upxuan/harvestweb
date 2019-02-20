import myapi from '@/api/myapi.js'
export default {
  install (Vue, opt) {
  //所有内容
    Vue.prototype.getHarJpaper = function(val) {
      var flag = this.judgeLogin();
      if(!flag) return;
      var _this = this;
      var data = [];
      var Params = {
              userType: _this.$type,
              userId: _this.$userInfo.id,
              load: val };
      this.$ajax.get('/api/harJpaper', {params: Params}).then( res => {
        console.log(res);
        var jpaper = res.data;
        for (var i=0; i<jpaper.length; i++) {
          let model = jpaper[i];
          jpaper[i].id = model.jpaperId;
          jpaper[i].jpaperIndex = i+1;
          jpaper[i].jpaperVolume = model.jpaperReel + '-' + model.jpaperIssue;
          jpaper[i].jpaperPage = model.jpaperPage1 + '-' + model.jpaperPage2;
          jpaper[i].jpaperType = model.jpaperType1;
          if(model.jpaperType2 != '')
            jpaper[i].jpaperType += '>' + jpaper[i].jpaperType2;
          if(model.jpaperType3 != '')
            jpaper[i].jpaperType += '>' + jpaper[i].jpaperType3;
        }
        // for (var i = 0; i<res.data.length; i++) {
        //   var obj = {};
        //   obj.index = i+1;
        //   obj.id = res.data[i].jpaperId;
        //   obj.title = res.data[i].jpaperTitle;
        //   obj.paperName = res.data[i].jpaperPaperName;
        //   obj.status = res.data[i].jpaperStatus;
        //   obj.publishDate = res.data[i].jpaperPublishDate;
        //   obj.volume = res.data[i].jpaperReel + '-' + res.data[i].jpaperIssue;
        //   obj.page = res.data[i].jpaperPage1 + '-' + res.data[i].jpaperPage2;
        //   obj.doi = res.data[i].jpaperDoi;
        //   obj.authors = res.data[i].jpaperAuthors;
        //   obj.review = res.data[i].review;

        //   obj.type = res.data[i].jpaperType1 
        //   if(res.data[i].jpaperType2 != '')
        //     obj.type = obj.type + '>' + res.data[i].jpaperType2
        //   if(res.data[i].jpaperType3 != '')
        //     obj.type = obj.type + '>' + res.data[i].jpaperType3;

        //   data[i] = obj;
        // }
        _this.tableData = jpaper;
        // console.log(this.tableData);
      }).catch( error => {
        console.log(error);
        alert("出错！请联系管理员")
      });
    }

    Vue.prototype.getHarMpaper = function(val) {
      var flag = this.judgeLogin();
      if(!flag) return;
      var _this = this;
      var data = [];
      _this.logining = true;
      // console.log(_this.$type);
      // console.log(_this.$userInfo.id);
      var harvestParams = {
                userType: _this.$type,
                userId: _this.$userInfo.id,
                load: val };
      this.$ajax.get('/api/harMpaper', {params: harvestParams}).then( res => {
        // console.log(res);
        _this.logining = false;
        var mpaper = res.data;
        for (var i=0; i<mpaper.length; i++) {
          let model = mpaper[i];
          mpaper[i].id = model.mpaperId;
          mpaper[i].mpaperIndex = i+1;
          mpaper[i].mpaperPage = model.mpaperPage1 + '-' + model.mpaperPage2;
          mpaper[i].mpaperMeetDate = model.mpaperMeetDate1 + ' To ' + model.mpaperMeetDate2;
          mpaper[i].mpaperType = model.mpaperType1;
          if(model.mpaperType2 != '')
            mpaper[i].mpaperType += '>' + mpaper[i].mpaperType2;
          if(model.mpaperType3 != '')
            mpaper[i].mpaperType += '>' + mpaper[i].mpaperType3;
        }
        // for (var i = 0; i<res.data.length; i++) {
        //   var obj = {};
        //   obj.index = i+1;
        //   obj.id = res.data[i].mpaperId;
        //   obj.title = res.data[i].mpaperTitle;
        //   obj.publishDate = res.data[i].mpaperPublishDate;
        //   obj.page = res.data[i].mpaperPage1 + '-' + res.data[i].mpaperPage2;
        //   obj.meetName = res.data[i].mpaperMeetName;
        //   obj.meetDate = res.data[i].mpaperMeetDate1 + ' To ' + res.data[i].mpaperMeetDate2;
        //   obj.meetPlace = res.data[i].mpaperMeetPlace;
        //   obj.authors = res.data[i].mpaperAuthors;
        //   obj.review = res.data[i].review;

        //   obj.type = res.data[i].mpaperType1 
        //   if(res.data[i].mpaperType2 != '')
        //     obj.type = obj.type + '>' + res.data[i].mpaperType2
        //   if(res.data[i].mpaperType3 != '')
        //     obj.type = obj.type + '>' + res.data[i].mpaperType3

        //   data[i] = obj;
        // }
        _this.tableData = mpaper;
      }).catch( error => {
        // console.log(error);
        alert("出错！请联系管理员")
      });
    }

    Vue.prototype.getHarPatent = function(val) {
      var flag = this.judgeLogin();
      if(!flag) return;
      var _this = this;
      var data = [];
      // _this.logining = true;
      var harvestParams = {
                userType: _this.$type,
                userId: _this.$userInfo.id,
                load: val };
      this.$ajax.get('/api/harPatent', {params: harvestParams}).then( res => {
        // console.log(res);
        var patent = res.data;
        for (var i=0; i<patent.length; i++) {
          let model = patent[i];
          patent[i].id = model.patentId;
          patent[i].patentIndex = i+1;
          patent[i].patentEffectDate = model.patentEffectDate1 + ' 至 ' + model.patentEffectDate2;
        }
        // _this.logining = false;
        // for (var i = 0; i<res.data.length; i++) {
        //   var obj = {};
        //   obj.index = i+1;
        //   obj.id = res.data[i].patentId;
        //   obj.title = res.data[i].patentTitle;
        //   obj.num = res.data[i].patentNum;
        //   obj.noteNum = res.data[i].patentNoteNum;
        //   obj.unit = res.data[i].patentUnit;
        //   obj.type = res.data[i].patentType;
        //   obj.status = res.data[i].patentStatus;
        //   obj.applyDate = res.data[i].patentApplyDate;
        //   obj.effectDate = res.data[i].patentEffectDate1 + ' 至 ' + res.data[i].patentEffectDate2;
        //   obj.belong = res.data[i].patentBelong;
        //   obj.authors = res.data[i].patentAuthors;
        //   obj.review = res.data[i].review;
        //   data[i] = obj;
        // }
        _this.tableData = patent;
        // console.log(this.tableData);
      }).catch( error => {
        // console.log(error);
        alert("出错！请联系管理员")
      });
    }

    Vue.prototype.getHarProject = function(val) {
      var flag = this.judgeLogin();
      if(!flag) return;
      var _this = this;
      var data = [];
      _this.logining = true;
      // console.log(_this.$type);
      // console.log(_this.$userInfo.id);
      var harvestParams = {
                userType: _this.$type,
                userId: _this.$userInfo.id,
                load: val };
      this.$ajax.get('/api/harProject', {params: harvestParams}).then( res => {
        // console.log(res);
        var project = res.data;
        for (var i=0; i<project.length; i++) {
          let model = project[i];
          project[i].id = model.projectId;
          project[i].projectIndex = i+1;
          project[i].projectDate = model.projectDate1 + ' 至 ' + model.projectDate2;
        }
        // _this.logining = false;
        // for (var i = 0; i<res.data.length; i++) {
        //   var obj = {};
        //   obj.index = i+1;
        //   obj.id = res.data[i].projectId;
        //   obj.type = res.data[i].projectType;
        //   obj.title = res.data[i].projectTitle;
        //   obj.num = res.data[i].projectNum;
        //   obj.date = res.data[i].projectDate1 + ' 至 ' + res.data[i].projectDate2;
        //   obj.money = res.data[i].projectMoney;
        //   obj.authors = res.data[i].projectAuthors;
        //   obj.review = res.data[i].review;
        //   data[i] = obj;
        // }
        _this.tableData = project;
      }).catch( error => {
        // console.log(error);
        alert("出错！请联系管理员")
      });
    }

    Vue.prototype.getHarSubject = function(val) {
      var flag = this.judgeLogin();
      if(!flag) return;
      var _this = this;
      var data = [];
      // _this.logining = true;
      var harvestParams = {
                userType: _this.$type,
                userId: _this.$userInfo.id,
                load: val };
      this.$ajax.get('/api/harSubject', {params: harvestParams}).then( res => {
        // console.log(res);
        var subject = res.data;
        for (var i=0; i<subject.length; i++) {
          let model = subject[i];
          subject[i].id = model.subjectId;
          subject[i].subjectIndex = i+1;
        }
        // _this.logining = false;
        // for (var i = 0; i<res.data.length; i++) {
        //   var obj = {};
        //   obj.index = i+1;
        //   obj.id = res.data[i].subjectId;
        //   obj.title = res.data[i].subjectTitle;
        //   obj.bookName = res.data[i].subjectBookName;
        //   obj.status = res.data[i].subjectStatus;
        //   obj.isbn = res.data[i].subjectISBN;
        //   obj.publish = res.data[i].subjectPublish;
        //   obj.publishDate = res.data[i].subjectPublishDate;
        //   obj.doi = res.data[i].subjectDOI;
        //   obj.authors = res.data[i].subjectAuthors;
        //   obj.review = res.data[i].review;
        //   data[i] = obj;
        // }
        _this.tableData = subject;
        // console.log(this.tableData);
      }).catch( error => {
        // console.log(error);
        alert("出错！请联系管理员")
      });
    }

    Vue.prototype.getHarSoftware = function(val) {
      var flag = this.judgeLogin();
      if(!flag) return;
      var _this = this;
      var data = [];
      // _this.logining = true;
      var harvestParams = {
                userType: _this.$type,
                userId: _this.$userInfo.id,
                load: val };
      this.$ajax.get('/api/harSoftware', {params: harvestParams}).then( res => {
        // console.log(res);
        var software = res.data;
        for (var i=0; i<software.length; i++) {
          let model = software[i];
          software[i].id = model.softwareId;
          software[i].softwareIndex = i+1;
        }
        // _this.logining = false;
        // for (var i = 0; i<res.data.length; i++) {
        //   var obj = {};
        //   obj.index = i+1;
        //   obj.id = res.data[i].softwareId;
        //   obj.name = res.data[i].softwareName;
        //   obj.num = res.data[i].softwareNum;
        //   obj.acquireType = res.data[i].softwareAcquireType;
        //   obj.authors = res.data[i].softwareAuthors;
        //   obj.review = res.data[i].review;
        //   data[i] = obj;
        // }
        _this.tableData = software;
        // console.log(this.tableData);
      }).catch( error => {
        // console.log(error);
        alert("出错！请联系管理员")
      });
    }

    Vue.prototype.getHarAffairs = function(val) {
      var flag = this.judgeLogin();
      if(!flag) return;
      var _this = this;
      var data = [];
      // _this.logining = true;
      var harvestParams = {
                userType: _this.$type,
                userId: _this.$userInfo.id,
                load: val };
      // console.log(harvestParams)
      this.$ajax.get('/api/harAffairs', {params: harvestParams}).then( res => {
        // console.log(res);
        var affairs = res.data;
        for (var i=0; i<affairs.length; i++) {
          let model = affairs[i];
          affairs[i].id = model.affairsId;
          affairs[i].affairsIndex = i+1;
          affairs[i].affairsDate = model.affairsDate1 + ' 至 ' + model.affairsDate2;
        }
        // _this.logining = false;
        // for (var i = 0; i<res.data.length; i++) {
        //   var obj = {};
        //   obj.index = i+1;
        //   obj.id = res.data[i].affairsId;
        //   obj.title = res.data[i].affairsTitle;
        //   obj.content = res.data[i].affairsContent;
        //   obj.date = res.data[i].affairsDate1 + ' 至 ' + res.data[i].affairsDate2;
        //   obj.authors = res.data[i].affairsAuthors;
        //   obj.review = res.data[i].review;
        //   data[i] = obj;
        // }
        _this.tableData = affairs;
        console.log(this.tableData);
      }).catch( error => {
        // console.log(error);
        alert("出错！请联系管理员")
      });
    }
  }//install
}

