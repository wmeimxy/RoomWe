//index.js
//获取应用实例
var app = getApp()
const myRequest = require('../../api/index.js')
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		isSavedRoommate: false,
		toView: 'one',
    scrollLeft: 0,
    scrolls:[
      {name: "Pets Friendly",tag:'one', event: "hover1", backcolor: "#ffffff", checked: false},
      {name:"Neat",tag:'two', event: "hover2",backcolor: "#ffffff", checked: false},
      {name: "Night Bird", tag: 'three', event: "hover3", backcolor: "#ffffff", checked: false},
      {name:"Early Bird",tag: 'four', event: "hover4", backcolor: "#ffffff", checked: false},
      {name:"Non Smoker", tag:'five', event: "hover5", backcolor: "#ffffff", checked: false},
      {name: "Party Person", tag:'six', event: "hover6", backcolor: "#ffffff", checked: false},
    ],
		toImage: 'imgone',
		imgList: [
			{name: '/image/swiper/roomwe banner 1_画板 1.png',tag: "imgone", event:'gotoworkshop'},
			{name: '/image/swiper/roomwe banner 2_画板 1.png',tag: "imgone", event: 'comingsoon'}
		],
		userinfo:[
			{name: "Ziran Liu, 2022", avatar: '/image/profilepics/profile_pic.png', event:'detail1'},
			{name: "Cherry Li, 2022", avatar: '/image/profilepics/pic1.jpeg', event:'detail2'},
			{name: "Micky Xu, 2022", avatar: '/image/profilepics/pic2.jpeg', event:'detail3'},
			{name: "Lina Guo, 2022", avatar: '/image/profilepics/pic3.jpeg', event:'detail4'}
		],
		
		swiperCurrent: 0,
	},
	toCollect: function(){
		let value = this.data.isSavedRoommate;
		this.setData({
			isSavedRoommate: !value
		})
	},

	onReady: function () {
		const arr = ["Ziran Liu, 2022",
					"Cherry Li, 2022",
					"Micky Xu, 2022",
					"Lina Guo, 2022",
					]
		/*for (let i = 0; i < 20; i++) arr.push("Ziran Liu, 2022")*/
		this.setData({
		arr
		})
		},
	onLoad: function (options) {
		const that = this
		myRequest.getData().then(res => {
			const {guess,hotRecommends} = res.data
			that.setData({
				showitem: true,
				guess: guess.list.slice(0, 3),
			})
		}).catch(err => {
			console.log('error :>> ', err);
			that.setData({
				showitem: false
			})
		})
	},
	gotoRecommend(){
		wx.navigateTo({
			url: '../recommend/recommend',
		})
	},

	gotodetail(){
		wx.navigateTo({
			url: '../detail_page/detail'
		})
	},
	hover1: function(e){
		if (!this.data.scrolls[0].checked){
			this.setData({
			'scrolls[0].backcolor': '#DFDEFF',
			'scrolls[0].checked': 'true'
		})
		}else{
			this.setData({
				'scrolls[0].backcolor': '#ffffff',
				'scrolls[0].checked': false
			})
		}
		},
		hover2: function(e){
			if (!this.data.scrolls[1].checked){
				this.setData({
				'scrolls[1].backcolor': '#DFDEFF',
				'scrolls[1].checked': 'true'
			})
			}else{
				this.setData({
					'scrolls[1].backcolor': '#ffffff',
					'scrolls[1].checked': false
				})
			}
			},
		hover3: function(e){
			if (!this.data.scrolls[2].checked){
				this.setData({
				'scrolls[2].backcolor': '#DFDEFF',
				'scrolls[2].checked': 'true'
			})
			}else{
				this.setData({
					'scrolls[2].backcolor': '#ffffff',
					'scrolls[2].checked': false
				})
			}
				},
		hover4: function(e){
			if (!this.data.scrolls[3].checked){
				this.setData({
				'scrolls[3].backcolor': '#DFDEFF',
				'scrolls[3].checked': 'true'
			})
			}else{
				this.setData({
					'scrolls[3].backcolor': '#ffffff',
					'scrolls[3].checked': false
				})
			}
					},
		hover5: function(e){
			if (!this.data.scrolls[4].checked){
				this.setData({
				'scrolls[4].backcolor': '#DFDEFF',
				'scrolls[4].checked': 'true'
			})
			}else{
				this.setData({
					'scrolls[4].backcolor': '#ffffff',
					'scrolls[4].checked': false
				})
			}
		},
		hover6: function(e){
			if (!this.data.scrolls[5].checked){
				this.setData({
				'scrolls[5].backcolor': '#DFDEFF',
				'scrolls[5].checked': 'true'
			})
			}else{
				this.setData({
					'scrolls[5].backcolor': '#ffffff',
					'scrolls[5].checked': false
				})
			}
		},
		detail1: function(){
			wx.navigateTo({
				url: '/pages/detail_page/detail',
			})
		},

		gotoworkshop: function(){
			wx.navigateTo({
				url: '/pages/index_detail/detail',
			})
		},

		comingsoon: function(){
			wx.navigateTo({
				url: '/pages/comingsoon/comingsoon',
			})
		}
})