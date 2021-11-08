const app = getApp()
let userInfo = app.globalData.userInfo;
Page({

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
				wx.setStorage({
					key: "userinfo",
					data: JSON.stringify(res.userInfo)
				})
				that.setData({
					login: true,
					avatarUrl: res.userInfo.avatarUrl,
					nickName: res.userInfo.nickName
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
	gotoPreference() {
		wx.navigateTo({
			url: './preference/preference',
		});
	},
	personality() {
        wx.navigateTo({
          url: './personality/personality',
        });
    }

})