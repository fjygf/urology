// pages/tablehistory/tablehistory.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    history: [],
    dates: [],
    groupedHistory: {},
    hasLoaded: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info('loading tablehistory...');
    getApp().checkLogin(function(){});
    this.load();
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if(this.data.hasLoaded) {
      this.load();
    }
    this.data.hasLoaded = true;
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.load();
  },

  load: function() {

    var that = this;
    
    wx.showLoading({
      title: '加载历史数据',
      mask: true
    });
    console.log(getApp().globalData.userInfo.phone);
    
    getApp().request({
      url: '/ipss/history',
      method: 'POST',
      data: { phone : getApp().globalData.userInfo.phone },
      success: function (res) {
        wx.hideLoading();

        console.log(res);
        
        if(res.statusCode !== 200) {
          wx.showToast({
            icon : 'none',
            title: '请求出错'
          });
          return;
        }

        //测试用
        /*
        that.setData({
          history : [
            {"create_date":"2020-11-09T06:06:30.000Z","ipss1":0,"ipss2":1,"ipss3":2,"ipss4":3,"ipss5":4,"ipss6":5,"ipss7":0,"qol":1},
            {"create_date":"2020-11-09T06:15:09.000Z","ipss1":5,"ipss2":4,"ipss3":3,"ipss4":4,"ipss5":5,"ipss6":0,"ipss7":1,"qol":2},
            {"create_date":"2020-11-13T06:56:23.000Z","ipss1":4,"ipss2":3,"ipss3":4,"ipss4":5,"ipss5":0,"ipss6":1,"ipss7":2,"qol":3},
            {"create_date":"2020-11-20T08:05:09.000Z","ipss1":3,"ipss2":4,"ipss3":5,"ipss4":0,"ipss5":1,"ipss6":2,"ipss7":3,"qol":4}
          ]
        });
        console.log("history.length：" + this.data.history.length);
        */

        that.setData({
          history : res.data
        });
        console.log("history.length：" + that.data.history.length);

        var history = that.data.history;
        var dates = [];
        var groupedHistory = history.map(function (item, index) {
          item.pos = index;
          return item;
        }).reverse().reduce(function (prev, cur) {
          if (!prev[cur.create_date]) {
            prev[cur.create_date.substring(0, 10).concat('  ').concat(cur.create_date.substring(11, 19))] = [];
            dates.push(cur.create_date.substring(0, 10).concat('  ').concat(cur.create_date.substring(11, 19)));
          }
          prev[cur.create_date.substring(0, 10).concat('  ').concat(cur.create_date.substring(11, 19))].push(cur);
          return prev;
        }, {});

        that.setData({
          groupedHistory: groupedHistory,
          dates: dates
        });
      },
      fail: function() {
        wx.hideLoading();
        wx.showToast({
          icon : 'none',
          title: '请求出错'
        });
      }
    });
  },

  click: function (event) {
    let id = event.currentTarget.dataset.id;
    console.log("id：" + id);
    console.log("ipss1：" + this.data.history[id].ipss1);
    wx.navigateTo({
     url: '/pages/tablehistory/tablehistorydetail/tablehistorydetail?id=' + id + '&create_date=' + this.data.history[id].create_date + '&ipss1=' + this.data.history[id].ipss1 + '&ipss2=' + this.data.history[id].ipss2 + '&ipss3=' + this.data.history[id].ipss3 + '&ipss4=' + this.data.history[id].ipss4 + '&ipss5=' + this.data.history[id].ipss5 + '&ipss6=' + this.data.history[id].ipss6 + '&ipss7=' + this.data.history[id].ipss7 + '&qol=' + this.data.history[id].qol
    })
   }

})