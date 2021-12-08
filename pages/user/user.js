const app = getApp()
let userInfo = app.globalData.userInfo;
//cloud
const db = wx.cloud.database()

Page({
	data:{
		userInfo:{},
		openid: "",
		name: ""
	},
	onGotUserInfo: function(e){
    //将this对象保存到that中
    const that = this
    wx.cloud.callFunction({
      name: 'login',
      success: res => {
        console.log('云函数调用成功')
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
	},

	onLoad() {
		const that = this;
		//获得设备信息
		wx.getSystemInfo({
			success(res) {
				that.setData({
					phoneHeight: res.windowHeight,
				})
			}
		})
		this.setData({
			name: wx.getStorageSync('name')
		})
	},
	onShow() {
    const that = this
    if (!that.login) {
      wx.getStorage({
				key: 'userinfo',
				success(res) {
					if (res.data) {
						const userinfo = JSON.parse(res.data)
						that.setData({
							login: true,
							avatarUrl: userinfo.avatarUrl,
							nickName: userinfo.nickName
						})
					}
				}
			})
    }
  },
	// 获取用户的头像和昵称信息
	bindGetUserInfo(e) {
		const that = this;
		wx.getUserInfo({
			success: function (res) {
				var userInfo = res.userInfo
				var nickName = userInfo.nickName
				var avatarUrl = userInfo.avatarUrl
				var gender = userInfo.gender //性别 0：未知、1：男、2：女
				
				db.collection('Users').add({
					data:{
					'_id': nickName
					},
        success: function(res){
          console.log("add successfully", res)
				}
				})
		}
	})
	},

	phoneLogin() {
		wx.navigateTo({
			url: './phoneLogin/phoneLogin',
		});
	},
	gotoLogin() {
		wx.navigateTo({
			url: './phoneLogin/phoneLogin',
		});
	},
	close() {
		const that = this;
		that.setData({
			show: false
		})
	},
	chooseTimeOut(e) {
		const that = this;
		that.setData({
			activeIndex: e.currentTarget.dataset.activeindex
		})
	},
	gotoUserinfo() {
		wx.navigateTo({
			url: './userinfo/userinfo',
		});
	},
	personality() {
        wx.navigateTo({
          url: '/packageC/pages/personality/personality',
        });
		},
	gotointro(){
		wx.navigateTo({
			url: '/packageA/pages/intros/intros',
		})
	},
	//test
	gototest(){
		wx.navigateTo({
			url: '/pages/test_page/test',
		})
	}

})