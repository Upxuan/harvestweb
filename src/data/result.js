import myapi from '@/api/myapi.js'
export default {
  install (Vue, opt) {
    Vue.prototype.result = [
      { 
        img: require('../images/result/1-1.jpg'), 
        mgs: 'OSNSolution软件是由杭电云技术研究中心与杭州信核数据科技有限公司共同开发的智能数据存储和系统安全管理平台，是目前国内唯一可以提供高端存储应用、存储安全和存储管理的产品，可统一管理企业的异构存储设备，改进性能，降低存储管理成本，并提高数据的安全等级与可用性。系统支持大中型的企业级应用，实现对IBM、EMC等同类存储系统产品的进口替代，经倪光南等院士专家鉴定整体技术达到国际先进水平。         ' 
      },
    ]

  }
}
