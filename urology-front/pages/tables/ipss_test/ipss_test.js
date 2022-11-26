
Page({
  
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  
  create: function() {

    var ipssvalue = {
      ipss1: Math.round(Math.random() * 5),
      ipss2: Math.round(Math.random() * 5),
      ipss3: Math.round(Math.random() * 5),
      ipss4: Math.round(Math.random() * 5),
      ipss5: Math.round(Math.random() * 5),
      ipss6: Math.round(Math.random() * 5),
      ipss7: Math.round(Math.random() * 5),
      qol: Math.round(Math.random() * 5)};

    getApp().request({
      url: '/ipss',
      method: 'POST',
      data: ipssvalue,
      success: function() {
        console.log("post ipss data success fully")
        //wx.hideLoading();
        //getApp().writeHistory(todo, 'create', +new Date());
        //wx.navigateBack();
      }
    });
    
  }
})