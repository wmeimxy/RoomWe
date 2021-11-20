const app = getApp()
let userInfo = app.globalData.userInfo;

Page({
  data: {
    loading: true,
    username: '',
    gender:'',
    campusList: [{
      "campus": "On-campus" 
    },
    {
      "campus": "Off-campus"
    },
    ],
    state: '',

  },
  select_use: function(e){
    this.setData({
      state: e.currentTarget.dataset.key,
    })
  },
  usernameInput:function(e){
    this.setData({
      username: e.detail.vlaue
    })
  },
  genderInput:function(e){
    this.setData({
      gender: e.detail.vlaue
    })
  },
  campusInput:function(e){
    this.setData({
      campus: e.detail.vlaue
    })
  },
  gotoIntro2() {
		wx.navigateTo({
      url: '/pages/intro2/intro2',
    });
	},
})
