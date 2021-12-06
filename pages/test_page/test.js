Page({
  data:{
    mbti: '',
  },
  onLoad() {
    var that = this
    this.setData({
      mbti: wx.getStorageSync('MBTI')
    })
  }
})
