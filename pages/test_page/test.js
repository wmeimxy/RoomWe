Page({
  data:{
    mbti: '',
    name: '',
    campus:''
  },
  onLoad() {
    var that = this
    this.setData({
      mbti: wx.getStorageSync('MBTI'),
      name: wx.getStorageSync('name'),
      campus: wx.getStorageSync('campus')
    })
  }
})
