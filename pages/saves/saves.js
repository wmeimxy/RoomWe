const app = getApp()
Page({
  data: {
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
      tags: ['Night Bird','Never Smoke','Neat']}
    ]
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
  }
})