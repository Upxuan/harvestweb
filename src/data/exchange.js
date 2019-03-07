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
  }
}
