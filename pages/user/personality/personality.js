Page({
  onLoad: function (options) {
  var mbti = wx.getStorageSync('MBTI')
  },

  data: {
    personalities : ["Please select here","ESTJ","ESTP","ESFJ","ESFP","ENTJ", "ENTP","ENFJ","ENFP","ISTJ","ISTP","ISFJ","ISFP","INTJ", "INTP","INFJ","INFP"],
    index: 0
    },
    bindChange: function(e) {
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

