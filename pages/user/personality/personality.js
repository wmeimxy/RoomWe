const years = ["ESTJ","ESTP","ESFJ","ESFP","ENTJ", "ENTP","ENFJ","ENFP","ISTJ","ISTP","ISFJ","ISFP","INTJ", "INTP","INFJ","INFP"]

Page({
  onLoad: function (options) {
  var mbti = wx.getStorageSync('MBTI')
  },

  data: {
    years: years,
    },
    bindChange: function(e) {
    this.setData({
    year: this.data.years[0],
    })
    },
     
	yes() {
        wx.navigateTo({
          url: './yes/yes',
        });
    },

    gotombti(options) {
        wx.navigateTo({
          url: './no/no',
        })
    }
    
})

