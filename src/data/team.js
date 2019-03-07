import myapi from '@/api/myapi.js'
export default {
  install (Vue, opt) {
    Vue.prototype.teamPeople = [
      { img: require('../images/team/people/13.png') },
      { img: require('../images/team/people/15.png') },
      { img: require('../images/team/people/7.png') },
      { img: require('../images/team/people/8.png') },

      { img: require('../images/team/people/1.png') },
      { img: require('../images/team/people/11.png') },
      { img: require('../images/team/people/6.png') },
      { img: require('../images/team/people/2.png') },

      { img: require('../images/team/people/5.png') },
      { img: require('../images/team/people/4.png') },
      { img: require('../images/team/people/9.png') },
      { img: require('../images/team/people/10.png') },

      { img: require('../images/team/people/3.png') },
      { img: require('../images/team/people/14.png') },
      { img: require('../images/team/people/17.png') },
      { img: require('../images/team/people/16.png') },
    ]

    Vue.prototype.teamDevelop = [
      { img: require('../images/team/develop/2.png') },
      { img: require('../images/team/develop/3.png') },
      { img: require('../images/team/develop/0.png') },
      { img: require('../images/team/develop/1.png') },
      { img: require('../images/team/develop/pk1.jpg') },
      { img: require('../images/team/develop/pk2.jpg') },
      { img: require('../images/team/develop/pk3.jpg') },
      { img: require('../images/team/develop/pk4.jpg') },
    ]

    Vue.prototype.teamBuliding = [
      { img: require('../images/team/buliding/1.png') },
      { img: require('../images/team/buliding/2.png') },
      { img: require('../images/team/buliding/3.png') },
    ]

    Vue.prototype.teamOutdoor = [
      { img: require('../images/team/outdoor/1.png') },
      { img: require('../images/team/outdoor/6.png') },
      { img: require('../images/team/outdoor/8.png') },
      { img: require('../images/team/outdoor/7.png') },
      { img: require('../images/team/outdoor/2.png') },
      { img: require('../images/team/outdoor/3.png') },
      { img: require('../images/team/outdoor/4.png') },
      { img: require('../images/team/outdoor/5.png') },
      { img: require('../images/team/outdoor/17.jpg') },
      { img: require('../images/team/outdoor/9.jpg') },
      { img: require('../images/team/outdoor/10.jpg') },
      { img: require('../images/team/outdoor/11.jpg') },
      { img: require('../images/team/outdoor/12.jpg') },
      { img: require('../images/team/outdoor/13.jpg') },
      { img: require('../images/team/outdoor/14.jpg') },
      { img: require('../images/team/outdoor/15.jpg') },
    ]

    Vue.prototype.teamParty = [
      { img: require('../images/team/party/1.png') },
      { img: require('../images/team/party/2.png') },
      { img: require('../images/team/party/4.png') },
      { img: require('../images/team/party/3.png') },
    ]

  }
}
