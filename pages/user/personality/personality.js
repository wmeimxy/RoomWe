Page({
  onLoad: function (options) {
  var mbti = wx.getStorageSync('MBTI')
  },

  data: {
    personalities : ["Please select here","ESTJ","ESTP","ESFJ","ESFP","ENTJ", "ENTP","ENFJ","ENFP","ISTJ","ISTP","ISFJ","ISFP","INTJ", "INTP","INFJ","INFP"],
    index: 0
    },
    bindPickerChange: function(e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        index: e.detail.value
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
    }
})

