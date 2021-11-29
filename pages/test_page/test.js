const db = wx.cloud.database()

Page({
  data: {
    userInfo:{},
    //新加一个openid变量，保存获取到的openid字段
    openid:""
  },

  insert(e){
      let that = this
      db.collection('Users').add({
        data:{
            "_id": 'winnie',
            "On/off-Campus": 'on',
            "Personality": '2'
        },
        success: function(res){
          console.log("add successfully", res)
        }
      })
  },
  
  onGotUserInfo: function(e){
    //将this对象保存到that中
    const that = this
    wx.cloud.callFunction({
      name: 'login',
      success: res => {
        console.log('云函数调用成功', res.result.openid)
        that.setData({
          openid: res.result.openid,
          userInfo: e.detail.userInfo
        })
        console.log("userInfo", this.data.userInfo)
        console.log("openid", this.data.openid)
      },
      fail: err => {
        console.error('[云函数] [login] 调用失败', err)
      }
    })
  }
})