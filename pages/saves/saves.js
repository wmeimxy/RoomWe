const app = getApp()
Page({
  data: {
    toView: 'one',
    scrollLeft: 0,
    scrolls:[
      {name: "Pets Friendly",tag:'one', event: "hover1", backcolor: "#ffffff", checked: false},
      {name:"Neat",tag:'two', event: "hover2",backcolor: "#ffffff", checked: false},
      {name: "Night Bird", tag: 'three', event: "hover3", backcolor: "#ffffff", checked: false},
      {name:"Early Bird",tag: 'four', event: "hover4", backcolor: "#ffffff", checked: false},
      {name:"Non Smoker", tag:'five', event: "hover5", backcolor: "#ffffff", checked: false},
      {name: "Party Person", tag:'six', event: "hover6", backcolor: "#ffffff", checked: false},
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
      tags: ['Overnight Guest','Night Bird','Neat'], 
      event: "goto1", icon_change: "icon1", icon: "/image/3994430_bookmark_label_ribbon_save_web_icon的副本-01.png"},
      {name: "Lina Guo, 2024", img: '/image/profilepics/profile_pic.png',
      tags: ['Night Bird','Never Smoke','Neat'], event: "goto2", icon_change: "icon2", icon: "/image/3994430_bookmark_label_ribbon_save_web_icon的副本-01.png"},
      {name:'Mingyue Feng, 2022', img:'/image/profilepics/profile_pic.png', tags:['Party Person', 'Neat','Early Bird'], event: "goto3", icon_change: "icon3", icon: "/image/3994430_bookmark_label_ribbon_save_web_icon的副本-01.png"},
      {name:'Yiran Wei, 2023', img:'/image/profilepics/profile_pic.png', tags:['Night Bird', 'Neat','Non Smoker'], event: "goto4", icon_change: "icon4", icon: "/image/3994430_bookmark_label_ribbon_save_web_icon的副本-01.png"}
    ],
    invitations:[
      {name: "Sherry Ma, 2022", img: '/image/profilepics/profile_pic.png',
      tags: ['Non Smoker','Night Bird','Neat']},
      {name: "Jessica Wu, 2024", img: '/image/profilepics/profile_pic.png',
      tags: ['Night Bird','Party Person','Neat']},
    ],
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
  goto1: function(e){
      wx.navigateTo({
          url: '/pages/detail_page/detail',
      })
  },
  goto2: function(e){
    wx.navigateTo({
        url: '/pages/lina/lina',
    })
},
goto3: function(e){
  wx.navigateTo({
      url: '/pages/detail_page/detail',
  })
},
goto4: function(e){
  wx.navigateTo({
      url: '/pages/detail_page/detail',
  })
},
hover1: function(e){
if (!this.data.scrolls[0].checked){
  this.setData({
  'scrolls[0].backcolor': '#DFDEFF',
  'scrolls[0].checked': 'true'
})
}else{
  this.setData({
    'scrolls[0].backcolor': '#ffffff',
    'scrolls[0].checked': false
  })
}
},
hover2: function(e){
  if (!this.data.scrolls[1].checked){
    this.setData({
    'scrolls[1].backcolor': '#DFDEFF',
    'scrolls[1].checked': 'true'
  })
  }else{
    this.setData({
      'scrolls[1].backcolor': '#ffffff',
      'scrolls[1].checked': false
    })
  }
  },
hover3: function(e){
  if (!this.data.scrolls[2].checked){
    this.setData({
    'scrolls[2].backcolor': '#DFDEFF',
    'scrolls[2].checked': 'true'
  })
  }else{
    this.setData({
      'scrolls[2].backcolor': '#ffffff',
      'scrolls[2].checked': false
    })
  }
    },
hover4: function(e){
  if (!this.data.scrolls[3].checked){
    this.setData({
    'scrolls[3].backcolor': '#DFDEFF',
    'scrolls[3].checked': 'true'
  })
  }else{
    this.setData({
      'scrolls[3].backcolor': '#ffffff',
      'scrolls[3].checked': false
    })
  }
      },
hover5: function(e){
  if (!this.data.scrolls[4].checked){
    this.setData({
    'scrolls[4].backcolor': '#DFDEFF',
    'scrolls[4].checked': 'true'
  })
  }else{
    this.setData({
      'scrolls[4].backcolor': '#ffffff',
      'scrolls[4].checked': false
    })
  }
},
hover6: function(e){
  if (!this.data.scrolls[5].checked){
    this.setData({
    'scrolls[5].backcolor': '#DFDEFF',
    'scrolls[5].checked': 'true'
  })
  }else{
    this.setData({
      'scrolls[5].backcolor': '#ffffff',
      'scrolls[5].checked': false
    })
  }
}
})