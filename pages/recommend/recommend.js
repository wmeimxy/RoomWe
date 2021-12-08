const app = getApp()
Page({
  data: {
    toView: 'one',
    scrollLeft: 0,
    scrolls:[
      {name: "Pets Friendly",tag:'one' },
      {name:"Neat",tag:'two'},
      {name: "Night Bird", tag: 'three'},
      {name:"Early Bird",tag: 'four'},
      {name:"Non Smoker", tag:'five'},
      {name: "Party Person", tag:'six'},
    ],
    currentIndex:0,
    height:0,
    login: false,
    content: [
      {text: "My Saved Roommates"},
      {text: "Invitations"}
    ],
    user_info:[
      {name: "Ziran Liu, 2022", img: '/image/profilepics/profile_pic.png',
      tags: ['Overnight Guest','Night Bird','Neat']},
      {name: "Lina Guo, 2024", img: '/image/profilepics/pic3.jpeg',
      tags: ['Night Bird','Never Smoke','Neat']},
      {name:'Mingyue Feng, 2022', img:'/image/profilepics/profile_pic.png', tags:['Party Person', 'Neat','Early Bird']},
      {name:'Yiran Wei, 2023', img:'/image/profilepics/profile_pic.png', tags:['Night Bird', 'Neat','Non Smoker']}
    ],
    invitations:[
      {name: "Sherry Ma, 2022", img: '/image/profilepics/profile_pic.png',
      tags: ['Non Smoker','Night Bird','Neat']},
      {name: "Jessica Wu, 2024", img: '/image/profilepics/pic3.jpeg',
      tags: ['Night Bird','Party Person','Neat']},
    ],
    icon:"/image/3994430_bookmark_label_ribbon_save_web_icon-01.png"
  },
  onLoad() {
    const that = this;
    wx.getSystemInfo({
      success (res) {
        that.setData({
          height :res.windowHeight
        })
      }
    })
  },
  onShow() {
    const that = this
    if (!that.login) {
      wx.getStorage({
        key: 'userinfo',
        success(res){
          that.setData({
            login: res.data ? true : false,
          })
        }
      })
    }
  },
  checkItem(e) {
    const that = this;
    if (this.data.currentIndex === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentIndex: e.target.dataset.index
      })
    }
  },
  // 滑动切换tab
  changeTab(e) {
    const that = this;
    that.setData({
      currentIndex:e.detail.current
    })
  },
  gotodetail(){
    wx.navigateTo({
      url: '../detail_page/detail',
    })
  }

})