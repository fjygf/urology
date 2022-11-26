// pages/tables/formDemo/formDemo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    index1: "",
    index2: "",
    index3: "",
    index4: "",
    index5: "",
    index6: "",
    index7: "",
    index8: "",
    array1: ['没有', '5次少于一次', '少于半数', '大约半数', '多于半数', '几乎每次'],
    objectArray1: [{
        id: 0,
        name: '没有'
      },
      {
        id: 1,
        name: '5次少于一次'
      },
      {
        id: 2,
        name: '少于半数'
      },
      {
        id: 3,
        name: '大约半数'
      },
      {
        id: 4,
        name: '多于半数',
      },
      {
        id: 5,
        name: '几乎每次'
      }
    ],
    array2: ['没有', '1次', '2次', '3次', '4次', '5次'],
    objectArray2: [{
        id: 0,
        name: '没有'
      },
      {
        id: 1,
        name: '0次'
      },
      {
        id: 2,
        name: '1次'
      },
      {
        id: 3,
        name: '2次'
      },
      {
        id: 4,
        name: '3次',
      },
      {
        id: 5,
        name: '4次'
      },
      {
        id: 6,
        name: '5次'
      }
    ],
    array3: ['高兴', '满意', '大致满意', '还可以', '不太满意', '苦恼', '很糟'],
    objectArray3: [{
      id: 0,
      name: '高兴'
    },
    {
      id: 1,
      name: '满意'
    },
    {
      id: 2,
      name: '大致满意'
    },
    {
      id: 3,
      name: '还可以'
    },
    {
      id: 4,
      name: '不太满意',
    },
    {
      id: 5,
      name: '苦恼'
    },
    {
      id: 6,
      name: '很糟'
    }
  ],
  array4: [0, 1, 2, 3, 4, 5, 6]
  },

  bindPickerChange1: function(e) {
    console.log('picker1发送选择改变，携带值为', e.detail.value)
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange2: function(e) {
    console.log('picker2发送选择改变，携带值为', e.detail.value)
    this.setData({
      index2: e.detail.value
    })
  },
  bindPickerChange3: function(e) {
    console.log('picker3发送选择改变，携带值为', e.detail.value)
    this.setData({
      index3: e.detail.value
    })
  },
  bindPickerChange4: function(e) {
    console.log('picker4发送选择改变，携带值为', e.detail.value)
    this.setData({
      index4: e.detail.value
    })
  },
  bindPickerChange5: function(e) {
    console.log('picker5发送选择改变，携带值为', e.detail.value)
    this.setData({
      index5: e.detail.value
    })
  },
  bindPickerChange6: function(e) {
    console.log('picker6发送选择改变，携带值为', e.detail.value)
    this.setData({
      index6: e.detail.value
    })
  },
  bindPickerChange7: function(e) {
    console.log('picker7发送选择改变，携带值为', e.detail.value)
    this.setData({
      index7: e.detail.value
    })
  },
  bindPickerChange8: function(e) {
    console.log('picker8发送选择改变，携带值为', e.detail.value)
    this.setData({
      index8: e.detail.value
    })
  },
  
  //提交
  onSubmit: function() {
    console.log('用户姓名为：', getApp().globalData.userInfo.realname);
    console.log('用户手机号为：', getApp().globalData.userInfo.phone);
    if(!this.data.index1 || !this.data.index2 || !this.data.index3 || !this.data.index4 && !this.data.index5 && !this.data.index6 || !this.data.index7 || !this.data.index8) {
      wx.showToast({title: '请完整填写表单~', icon: 'none'});
      return;
    }
    wx.showLoading({
      title: '正在提交表单……',
      mask: true
    });
    var ipss = {
      name: getApp().globalData.userInfo.realname,
      phone: getApp().globalData.userInfo.phone,
      score: [this.data.index1, this.data.index2, this.data.index3, this.data.index4,
              this.data.index5, this.data.index6, this.data.index7, this.data.index8]
    };
    getApp().request({
      url: '/ipss',
      method: 'POST',
      data: ipss,
      success: function() {
        wx.hideLoading();
        wx.showToast({
          title: '提交成功',
          icon: 'success',
          duration: 2000
        });
        setTimeout (() => { 
          wx.navigateBack() 
        } ,  2000 );
      },
      fail: function() {
        wx.hideLoading();
        wx.showToast({
          title: '提交失败',
          icon: 'none',
          duration: 2000
        });
        setTimeout (() => { 
          wx.navigateBack() 
        } ,  2000 );
      }
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})