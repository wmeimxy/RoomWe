//index.js
//获取应用实例
const app = getApp()
const myRequest = require('../../api/index.js');
Page({
	/**
	 * 页面的初始数据
	 */
	data: {
		imgList: [
			'/image/swiper/roomwe banner 1_画板 1.png',
			'/image/swiper/roomwe banner 2_画板 1.png'
		],
		userinfo:[
			{name: "Ziran Liu, 2022", avatar: '/image/profilepics/profile_pic.png'},
			{name: "Cherry Li, 2022", avatar: '/image/profilepics/pic1.jpeg'},
			{name: "Micky Xu, 2022", avatar: '/image/profilepics/pic2.jpeg'},
			{name: "Lina Guo, 2022", avatar: '/image/profilepics/pic3.jpeg'}
		],
		profilepiclist:[
			'/image/profilepics/profile_pic.png',
			'/image/profilepics/pic1.jpeg',
			'/image/profilepics/pic2.jpeg',
			'/image/profilepics/pic3.jpeg'
		],
		swiperCurrent: 0,
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
	//轮播图改变事件
	swiperChange: function (e) {
		this.setData({
			swiperCurrent: e.detail.current
		})
	},
})