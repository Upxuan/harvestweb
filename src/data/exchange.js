import myapi from '@/api/myapi.js'
export default {
  install (Vue, opt) {
    Vue.prototype.exchangeCooperation = [
      { img: require('../images/exchange/cooperation/1.jpg') },
      { img: require('../images/exchange/cooperation/2.jpg') },
      { img: require('../images/exchange/cooperation/3.jpg') },
      { img: require('../images/exchange/cooperation/4.jpg') },
    ]

    Vue.prototype.exchangeMeet = [
      { img: require('../images/exchange/meet/1.jpg'), name:'2017年ICDCS美国亚特兰大' },
      { img: require('../images/exchange/meet/2.jpg'), name:'2017年第八届中国计算机学会服务计算会议湖南湘潭' },
      { img: require('../images/exchange/meet/3.jpg'), name:'校地合作，舟山研究院成立' },
      { img: require('../images/exchange/meet/4.jpg'), name:'' },
      { img: require('../images/exchange/meet/5.jpg'), name:'' },
      { img: require('../images/exchange/meet/6.jpg'), name:'' },
      { img: require('../images/exchange/meet/7.jpg'), name:'' },
      { img: require('../images/exchange/meet/8.png'), name:'' },
      { img: require('../images/exchange/meet/9.png'), name:'' },
      { img: require('../images/exchange/meet/10.png'), name:'' },
      { img: require('../images/exchange/meet/11.png'), name:'' },
      { img: require('../images/exchange/meet/12.png'), name:'' },
      { img: require('../images/exchange/meet/13.png'), name:'APSCC2010' },
      { img: require('../images/exchange/meet/14.png'), name:'EduCloudSummit2012' },
      { img: require('../images/exchange/meet/15.png'), name:'H.J.Siegel教授' },
      { img: require('../images/exchange/meet/16.png'), name:'HPDIC2013' },
    ]

    Vue.prototype.exchangeScholar = [
      { img: require('../images/exchange/scholar/1.png'), name:'' },
      { img: require('../images/exchange/scholar/2.png'), name:'' },
      { img: require('../images/exchange/scholar/3.png'), name:'' },
      { img: require('../images/exchange/scholar/4.png'), name:'' },
      { img: require('../images/exchange/scholar/5.png'), name:'' },
      { img: require('../images/exchange/scholar/6.png'), name:'' },
    ]

    Vue.prototype.exchange2018GoOut = [
      { img: require('../images/exchange/2018goout/1.png'), name:'CCF YOCSEF中国杭州2018换届会议' },
      { img: require('../images/exchange/2018goout/2.jpg'), name:'CCF YOCSEF中国杭州2018换届会议' },
      { img: require('../images/exchange/2018goout/3.jpg'), name:'ICSOC 中国浙江杭州第16届面向服务的计算国际会议' },
      { img: require('../images/exchange/2018goout/4.jpg'), name:'ICSOC 中国浙江杭州第16届面向服务的计算国际会议' },
      { img: require('../images/exchange/2018goout/5.jpg'), name:'NASAC 中国深圳第十七届全国软件与应用学术会议' },
      { img: require('../images/exchange/2018goout/6.jpg'), name:'校地合作，舟山研究院' },
      { img: require('../images/exchange/2018goout/7.jpg'), name:'HPC 中国青岛2018全国高性能计算学术年会' },
      { img: require('../images/exchange/2018goout/8.jpg'), name:'教育部重点实验室新一轮评估期战略规划会暨全体动员大会' },
    ]

    Vue.prototype.exchange2018Please = [
      { img: require('../images/exchange/2018please/1.jpg'), name:'印度理工学院教授R.K. Shyamasundar' },
      { img: require('../images/exchange/2018please/2.jpg'), name:'印度理工学院教授R.K. Shyamasundar' },
      { img: require('../images/exchange/2018please/3.jpg'), name:'维也纳技术大学Hong-Linh Truong博士' },
      { img: require('../images/exchange/2018please/4.jpg'), name:'维也纳技术大学Hong-Linh Truong博士' },
      { img: require('../images/exchange/2018please/5.jpg'), name:'维也纳技术大学Hong-Linh Truong博士' },
      { img: require('../images/exchange/2018please/6.jpg'), name:'阿姆斯特丹大学的Zhming Zhao教授' },
      { img: require('../images/exchange/2018please/7.jpg'), name:'阿姆斯特丹大学的Zhming Zhao教授' },
      { img: require('../images/exchange/2018please/8.jpg'), name:'阿姆斯特丹大学的Zhming Zhao教授' },
    ]

    Vue.prototype.exchange2017GoOut = [
      { img: require('../images/exchange/2017goout/1.jpg'), name:'2017第八届中国计算机学会服务计算会议湖南湘潭' },
      { img: require('../images/exchange/2017goout/2.jpg'), name:'ICDCS 2017美国亚特兰大' },
      { img: require('../images/exchange/2017goout/3.jpg'), name:'当选SSYSF副主席' },
      { img: require('../images/exchange/2017goout/4.jpg'), name:'实验室第一届云计算与边缘计算研讨会' },
    ]

    Vue.prototype.exchangeGoOut = [
      { img: require('../images/exchange/2017goout/5.png'), name:'APSCC 2010 中国杭州第五届IEEE亚太服务计算国际会议' },
      { img: require('../images/exchange/2017goout/6.png'), name:'EduCloudSummit 2012中国杭州教育科研云技术高峰论坛' },
      { img: require('../images/exchange/2017goout/7.png'), name:'HPDIC 2013 美国第27届IEEE并行与分布式处理国际会议' },
      { img: require('../images/exchange/2017goout/8.png'), name:'PQoSCOM 2012 中国北京功率和QoS感知计算国际研讨会' },
    ]

    Vue.prototype.exchangePlease = [
      { img: require('../images/exchange/2017please/2.png'), name:'' },
      { img: require('../images/exchange/2017please/3.png'), name:'' },
      { img: require('../images/exchange/2017please/4.png'), name:'' },
      { img: require('../images/exchange/2017please/1.png'), name:'' },
      { img: require('../images/exchange/2017please/5.jpg'), name:'' },
      { img: require('../images/exchange/2017please/6.jpg'), name:'' },
      { img: require('../images/exchange/2017please/10.jpg'), name:'' },
      { img: require('../images/exchange/2017please/12.jpg'), name:'' },
      { img: require('../images/exchange/2017please/7.jpg'), name:'' },
      { img: require('../images/exchange/2017please/8.jpg'), name:'' },
      { img: require('../images/exchange/2017please/9.jpg'), name:'' },
      { img: require('../images/exchange/2017please/11.jpg'), name:'' },
    ]
  }
}
