const app = getApp()
let userInfo = app.globalData.userInfo;

Page({
  data: {
    loading: true,
    genderList: [{
    "gender": "Male" 
    },{
    "gender": "Female"
  },{
    "gender": "Prefer Not to Say"
  },],
  state: '',
  },

  select_use: function(e){
    this.setData({
      state: e.currentTarget.dataset.key,
    })
  },

  gotoHome() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  }, 

  tagSwitch: function (options) {
    let that = this;
    // 按钮索引
    var index = options.currentTarget.dataset.index;
    // 索引对应内容
    var item = that.data.tagList[index];
    // 选中，未选中状态切换
    item.checked = !item.checked;
    // 更新
    that.setData({
      tagList: that.data.tagList
    });
  }
})