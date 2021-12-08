const app = getApp()
let userInfo = app.globalData.userInfo;

Page({
  data: {
    query:[],
    loading: true,
    name: '',

    campusid:'',
    campus: '',
    campusList:[
        {Item_id: "1", Item_Name: "On-campus", des: "I wish to live at an on-campus housing"},
        {Item_id: "2", Item_Name: "Off-campus", des: "I wish to live at an off-campus housing"}],
    
    roomid:'',
    room: '',
    roomList:[
      {Item_id: "1", Item_Name:"Single room", des: "I wish to live at a single bedroom"},
      {Item_id: "2", Item_Name:"Shared room", des: "I wish to live at a shared bedroom"},
    ],

    stayid: '',
    stayList:[
      {Item_id: "1", Item_Name:"Staying", des: "I have a place to stay and I need a roommate"},
      {Item_id: "2", Item_Name:"Moving", des: "I need a place to stay and a roommate"},
    ],

    location : ["Please select your location","Allston","Backbay","Brighton","Fenway-Kenmore","Malden", "Chinatown","Downtown","East Boston","Brookline","Jamaica Plain","South Boston","North End","Charlestown", "Other",],
    index: 0,

    styleid: '',
    styleList:[
      {Item_id: "1", Item_Name:"Dorm"},
      {Item_id: "2", Item_Name:"Apartment"},
      {Item_id: "3", Item_Name:"House"},
    ],

    genderList:[
      "Please select your gender here", "Male", "Female", "Non-binary", "Agender", "Trans*", "Other identities",
    ],
    genderindex: 0,

    timeList:[
      "When do you need to find a roommate","Anytime", "Full School Year", "Spring semester", "Fall semester", "Summer",
    ],
    timeindex: 0,

    yearList:[
      "Please select your school year", "Freshmen", "Sophomore", "Junior", "Senior", "Graduate Student"
    ],
    yearindex:0,

    LSList:[
      {Item_id:"1", Item_Name:"Pets Friendly", isSelect: false},
      {Item_id:"2", Item_Name:"Neat", isSelect: false},
      {Item_id:"3", Item_Name:"Non-drinker", isSelect: false},
      {Item_id:"4", Item_Name:"Love to drink", isSelect: false},
      {Item_id:"5", Item_Name:"Early Birds", isSelect: false},
      {Item_id:"6", Item_Name:"Night Birds", isSelect: false},
      {Item_id:"7", Item_Name:"Party Person", isSelect: false},
      {Item_id:"8", Item_Name:"Enjoy Being Alone", isSelect: false},
    ],

    checkboxArr: [{
      name: 'Pets Friendly',
      checked: false
     }, {
      name: 'Neat',
      checked: false
     }, {
      name: 'Non-drinker',
      checked: false
     }, {
      name: 'Love to drink',
      checked: false
     }, {
      name: 'Early Birds',
      checked: false
     }, {
      name: 'Night Birds',
      checked: false
     },{
       name:'Party Person',
       checked: false
     },{
       name: 'Enjoy Being Alone',
       checked: false
     }],
    },

  selectCampus:function(e){
    let campusid = e.target.dataset.id
     this.setData({
       campusid: campusid,
       campus: this.data.campusList[campusid-1]
     })
     console.log("campusid的值为", this.data.campusid)
     console.log("campus的值为", this.data.campus)
    },

  selectRoom:function(e){
    let roomid = e.target.dataset.id
    this.setData({
      roomid: roomid
    })
  },
  selectStay: function(e){
    let stayid=e.target.dataset.id
    this.setData({
      stayid: stayid
    })
  },
  selectGender:function(e){
    let genderid = e.target.dataset.id
    this.setData({
      genderid: genderid
    })
  },
  selectStyle:function(e){
    let styleid = e.target.dataset.id
    this.setData({
      styleid: styleid
    })
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChangeGender: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      genderindex: e.detail.value
    })
  },
  bindPickerChangeTime: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      timeindex: e.detail.value
    })
  },
  bindPickerChangeYear: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      yearindex: e.detail.value
    })
  },
  getinput: function(e){
    console.log('储存data携带值为', e.detail.value)
    this.setData({
      name: e.detail.value
    })
    console.log("name的值为", this.data.name)
  },
  checkbox: function (e) {
    var index = e.currentTarget.dataset.index;//获取当前点击的下标
    var checkboxArr = this.data.checkboxArr;//选项集合
    checkboxArr[index].checked = !checkboxArr[index].checked;//改变当前选中的checked值
    this.setData({
     checkboxArr: checkboxArr
    });
    },
    checkboxChange: function (e) {
    var checkValue = e.detail.value;
    this.setData({
     checkValue: checkValue
    });
    },
    confirm: function() {// 提交
    console.log(this.data.checkValue)//所有选中的项的value
    },

  gotohome() {
  if(this.data.name != ""){
    wx.setStorage({
      key: 'name',
      data: this.data.name
    })
  }
  if(this.data.name != ""){
    wx.setStorage({
      key: 'campus',
      data: this.data.campus
    })
  }

		wx.switchTab({
      url: '/pages/index/index',
    })
  },

  doCancel(){
      wx.navigateTo({
        url: '/pages/user/phoneLogin/phoneLogin',
      })
  }
})
