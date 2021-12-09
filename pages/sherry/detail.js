Page({
  data:{
    background:[
      {img:"/image/背景.jpg"}
    ],
    QRcode:[
      "https://lh3.googleusercontent.com/s1Vln1atRwKbFSUJ1PQER-Jt0SDTPLlAn3gZsDtRr8EufM2NN3gDhCNAYYttOArDuVmVJ6Ft70IBYYAmOyIr5dCGHoWi8YXzzoYDuKiEH4zJZ7dp1AggG5L-Y9qlYeADm5gnNLBB=w2400"
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