Page({
  data:{
    background:[
      {img:"/image/背景.jpg"}
    ],
    QRcode:[
      "/image/QRcode.png"
    ]
  },
  previewImage: function (e) {
    var current=e.target.dataset.src;
    wx.previewImage({
      current: current,
      urls: this.data.QRcode
    })
  }
})