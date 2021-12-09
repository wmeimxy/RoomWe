Page({
  data:{
    mbti: '',
    name: '',
    campus:'',
    room:'',
    stay:'',
    style:'',
    location:'',
    year:''
  },
  onLoad() {
    var that = this
    this.setData({
      mbti: wx.getStorageSync('MBTI'),
      name: wx.getStorageSync('name'),
      campus: wx.getStorageSync('campus'),
      room: wx.getStorageSync('room'),
      style: wx.getStorageSync('style'),
      stay: wx.getStorageSync('stay'),
      location: wx.getStorageSync('location'),
      year: wx.getStorageSync('schoolyear'),
    })
    console.log(this.data.mbti)
  }
})
