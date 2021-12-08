Page({
	data: {
		specialId: '',
    query: [], 
    searchList: [
      {
        type: 'radio',
        screenKey: 'Campus',
        screenValue: ['Off-Campus', 'On-Campus']
      },
      {
        type: 'radio',
        screenKey: 'Gender Preference',
        screenValue: ['Female', 'Male', 'Either']
      },
      {
        type: 'checkbox',
        screenKey: 'Location',
        screenValue: ['Fenway', 'Boston', 'Allston', 'Brighton','South Boston', 'Malden']
      },
      {
        type: 'checkbox',
        screenKey: 'Personality Type',
        screenValue: [
          'Architect-INTJ',
          'Logician-INTP',
          'Commander-ENTJ',
          'Debater-ENTP',
          'Advocate-INFJ',
          'Mediator-INFP',
          'Protagonist-ENFJ',
          'Campaigner-ENFP',
          'Logistician-ISTJ',
          'Defender-ISFJ',
          'Executive-ESTJ',
          'Consul-ESFJ',
          'Virtuoso-ISTP',
          'Adventurer-ISFP',
          'Entrepreneur-ESTP',
          'Entertainer-ESFP'
        ]
      }
    ] // 搜索关键词
  },
  onLoad: function(options) {
    console.log(options)
    // 上个页面传递搜索关键词数组，目前在data里query设置
    // this.data.query = options.query
    // 搜索关键词
    this.getSearchItems()
  },
  // 获取搜索选项
  getSearchItems() {
    const _this = this
    // 异步请求数据后处理，这里直接拿假数据
    const searchItems = this.data.searchList.map(n => {
      return Object.assign({}, n, {
        screenValue: n.screenValue.map(m =>
          Object.assign(
            {},
            {
              checked: _this.data.query.includes(m), // 回显query里有返回true
              value: m
            }
          )
        )
      })
    })
    this.setData({
      searchList: searchItems
    })
  },
 // 点击筛选项
  onChange(e) {
    const { parentIndex, item, index } = e.currentTarget.dataset
    // 如果选中状态
    if (item.screenValue[index].checked) {
      item.screenValue[index].checked = false // 取消选择
    } else {
      // 如果不是多选
      if (item.type != 'checkbox') {
        // 全部重置为未选择状态
        item.screenValue.map(n => (n.checked = false))
      }
      // 将点击的设置为选中
      item.screenValue[index].checked = true
    }
    this.setData({
      [`searchList[${parentIndex}]`]: item
    })
  },
  // 取消,清空数据返回上一个页面
  doCancel() {
    // var pages = getCurrentPages() // 获取页面栈
    // var prevPage = pages[pages.length - 2] // 前一个页面
    // prevPage.setData({
    //   query: [], // 重置
    //   isBack: true
    // })
    // // 返回登录之前的页面
    // wx.navigateBack({
    //   delta: 1
    // })
  },
  // 提交，携带数据返回上一个页面
  doSubmit() {
    let selected = []
    // 获取所有选中
    this.data.searchList.map(n => {
      n.screenValue.map(m => {
        if (m.checked == true) {
          selected.push(m.value)
        }
      })
    })
    console.log(selected)
    // var pages = getCurrentPages() // 获取页面栈
    // var prevPage = pages[pages.length - 2] // 前一个页面
    // // 携带数据，返回登录之前的页面
    // prevPage.setData({
    //   query: selected,
    //   isBack: true
    // })
    // wx.navigateBack({
    //   delta: 1
    // })
		searchHistory: []
  },
  onLoad: function(options) {
    console.log(options)
    // 上个页面传递搜索关键词数组，目前在data里query设置
    // this.data.query = options.query
    // 搜索关键词
    this.getSearchItems()
  },
  // 获取搜索选项
  getSearchItems() {
    const _this = this
    // 异步请求数据后处理，这里直接拿假数据
    const searchItems = this.data.searchList.map(n => {
      return Object.assign({}, n, {
        screenValue: n.screenValue.map(m =>
          Object.assign(
            {},
            {
              checked: _this.data.query.includes(m), // 回显query里有返回true
              value: m
            }
          )
        )
      })
    })
    this.setData({
      searchList: searchItems
    })
  },
 // 点击筛选项
  onChange(e) {
    const { parentIndex, item, index } = e.currentTarget.dataset
    // 如果选中状态
    if (item.screenValue[index].checked) {
      item.screenValue[index].checked = false // 取消选择
    } else {
      // 如果不是多选
      if (item.type != 'checkbox') {
        // 全部重置为未选择状态
        item.screenValue.map(n => (n.checked = false))
      }
      // 将点击的设置为选中
      item.screenValue[index].checked = true
    }
    this.setData({
      [`searchList[${parentIndex}]`]: item
    })
  },
  // 取消,清空数据返回上一个页面
  doCancel() {
    var pages = getCurrentPages() // 获取页面栈
    var prevPage = pages;
    prevPage.setData({
    query: [], // 重置
    isBack: true
    })
  },
  // 提交，携带数据返回上一个页面
  doSubmit() {
    let selected = []
    // 获取所有选中
    this.data.searchList.map(n => {
      n.screenValue.map(m => {
        if (m.checked == true) {
          selected.push(m.value)
        }
      })
    })
    console.log(selected)
     var pages = getCurrentPages() // 获取页面栈
     var prevPage = pages[pages.length - 2] // 前一个页面
     // 携带数据，返回登录之前的页面
     prevPage.setData({
       query: selected,
       isBack: true
    })
	},
	/**
	 * 搜索事件
	 * @param {Object} e 
	 */
	search(e){
		this.setData({
			searchHistory: [...this.data.searchHistory,e.detail.value]
		})
	},
	/**
	 * 取消搜索事件
	 */
	cancelSearch(){
		wx.navigateBack({
			delta: 1,
		})
	},
	/**
	 * 清空历史记录
	 */
	clearHistory(){
		this.setData({
			searchHistory: []
		})
  },
  gotoRecommend(){
    wx.navigateTo({
      url: '../search_rec/rec',
    })
  }
})