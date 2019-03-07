export default {
  install (Vue, opt) {
    Vue.prototype. growth = [
      {  
        name1: '网格与服务计算技术实验室',
        year1: '2006',
        name2: 'China-Grid杭电节点',
        year2: '2008'
      },
      { 
        name1: 'HDU-Wayne Joint Lab',
        year1: '2010',
        name2: '云计算技术研究中心',
        year2: '2011'
      },
      { 
        name1: '浙江省网络媒体与分析工程技术研究中心',
        year1: '2012',
        name2: '复杂系统建模与仿真教育部重点实验室立项建设',
        year2: '2013'
      },
      { 
        name1: '复杂系统建模与仿真教育部重点实验室验收通过',
        year1: '2017',
        name2: '复杂系统建模与仿真教育部重点实验室评估通过',
        year2: '2018'
      }
  ],
    Vue.prototype.reseachTopics = [
      { 
        topic:'云计算',
        description: '通过网络把多个成本相对较低的计算实体整合成一个具有强大计算能力的完美系统,并把这强大的计算能力分布到终端用户手中。'
      },
      { 
        topic:'边缘计算',
        description: '在靠近物或数据源头的一侧，采用网络、计算、存储、应用核心能力为一体的开放平台，就近提供最近端服务，以产生更快的网络服务响应。'
      },
      { 
        topic:'区块链',
        description: '一种新型的去中心化协议，具有分布式、去中介、去信任、不可篡改、可编程等特征，未来可应用于金融市场交易、博彩业、智能合约等领域。'
      },
      { 
        topic:'并行与高性能计算',
        description: '开发高性能计算机的技术，涉及并行算法、并行编译、并行软件工程、面向CPU/GPU的算法性能优化等。'
      },
      { 
        topic:'服务计算与系统虚拟化',
        description: '有效产生和利用计算和信息技术进行建模、生成、操作和管理业务服务的科学技术，涉及虚拟化技术、SOA和Web服务、业务流程集成等。'
      },
      { 
        topic:'机器学习',
        description: '从大量的、不完全的、有噪声的、模糊的实际应用数据中,提取隐含在其中的、潜在有用的信息和知识的过程，涉及各类算法。'
      },
  ],
  Vue.prototype.workEnvironment = [
      { img: require('../images/home/environment/1.png') },
      { img: require('../images/home/environment/2.png') },
      { img: require('../images/home/environment/3.png') },
      { img: require('../images/home/environment/4.png') },
      { img: require('../images/home/environment/5.png') },
      { img: require('../images/home/environment/6.png') }
  ]
}
}
  