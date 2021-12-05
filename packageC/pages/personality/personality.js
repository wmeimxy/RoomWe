Page({
  onLoad: function (options) {
  },

  data: {
    personalities : ["Please select here",
    "ISTJ", "ISFJ", "INFJ", "INTJ",
    "ISTP", "ISFP", "INFP", "INTP",
    "ESTP", "ESFP", "ENFP", "ENTP",
    "ESTJ", "ESFJ", "ENFJ", "ENTJ"],
    index: 0,
    mbti_save: []
    },
    bindPickerChange: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value,
        mbti_save: this.data.personalities[this.data.index]
      })
      wx.setStorage({
        key: 'MBTI',
        data: this.data.personalities[this.data.index],
        success:function(){
            console.log("本地缓存成功")
        }
      })
    },
    
 yes() {
        wx.navigateTo({
          url: './yes/yes',
        });
    },

    gotombti(options) {
        wx.navigateTo({
          url: '/pages/test/test',
        })
    },
    savembti(){
      //wx.cloud.database().collection('Users').doc('winnie')
      //.update({
      // data: {
      //    personality: this.data.mbti_save
      //  }
      //}).then(res=>{
      //  console.log('update success', res)
      //}).catch(res=>{
      //  console.log('update failure', res)
      //})
      wx.navigateTo({
        url: '../result2/result2',
      })
    }
    
})