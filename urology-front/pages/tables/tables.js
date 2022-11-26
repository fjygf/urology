// pages/tables/tables.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selfTableList: [{
        name: "前列自测表",
        id: "ipss"
      },
      /*
      {
        name: "IPSS测试用",
        id: "ipss_test"
      }
      */
    ]
  },

  f_ipss: function (e) {
    /*
    if(getApp().globalData.userInfo.realname == '' || getApp().globalData.userInfo.phone == '') {
      wx.switchTab({
        url: '/pages/me/me'
      })
      wx.showToast({title: '请先完善基本信息~', icon: 'none', duration: 2000});
      return;
    }
    */
    if(!getApp().globalData.userInfo.flagRealnameInputted || !getApp().globalData.userInfo.flagPhoneInputted) {
      wx.switchTab({
        url: '/pages/me/me'
      })
      wx.showToast({title: '请先完善基本信息~', icon: 'none', duration: 2000});
      return;
    }
    wx.navigateTo({
      url: '/pages/tables/ipss/ipss'
    })
  },
  
  f_ipss_test: function (e) {
    wx.navigateTo({
      url: '/pages/tables/ipss_test/ipss_test'
    })
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