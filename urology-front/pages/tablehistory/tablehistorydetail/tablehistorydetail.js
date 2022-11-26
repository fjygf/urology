// pages/tablehistory/tablehistorydetail/tablehistorydetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    create_date: "",
    list: [],
    array1: ['没有', '5次少于一次', '少于半数', '大约半数', '多于半数', '几乎每次'],
    array2: ['没有', '1次', '2次', '3次', '4次', '5次'],
    array3: ['高兴', '满意', '大致满意', '还可以', '不太满意', '苦恼', '很糟'],
    array4: [0, 1, 2, 3, 4, 5, 6],
    ipss_point_sum: "",
    qol_point_sum: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.info('loading tablehistorydetail...');
    console.log("options.id：" + options.id);
    var that = this;
    that.setData({
      id: parseInt(options.id),
      create_date: options.create_date.substring(0, 10).concat('  ').concat(options.create_date.substring(11, 19)),
      list: [
      {
        ques: "1. 是否经常有尿不尽感？",
        ans: this.data.array1[options.ipss1],
        point: this.data.array4[options.ipss1]
      },
      {
        ques: "2. 两次排尿时间是否常小于两小时？",
        ans: this.data.array1[options.ipss2],
        point: this.data.array4[options.ipss2]
      },
      {
        ques: "3. 是否经常有间断性排尿？",
        ans: this.data.array1[options.ipss3],
        point: this.data.array4[options.ipss3]
      },
      {
        ques: "4. 是否经常有憋尿困难的现象？",
        ans: this.data.array1[options.ipss4],
        point: this.data.array4[options.ipss4]
      },
      {
        ques: "5. 是否经常有尿线变细的现象？",
        ans: this.data.array1[options.ipss5],
        point: this.data.array4[options.ipss5]
      },
      {
        ques: "6. 是否经常需要用力才能开始排尿？",
        ans: this.data.array1[options.ipss6],
        point: this.data.array4[options.ipss6]
      },
      {
        ques: "7. 从入睡到早起需起来排尿几次？",
        ans: this.data.array2[options.ipss7],
        point: this.data.array4[options.ipss7]
      },
      {
        ques: "8. 如果后半生始终伴有当前排尿症状，您认为如何？",
        ans: this.data.array3[options.qol],
        point: this.data.array4[options.qol]
      }
    ],
    ipss_point_sum: this.data.array4[options.ipss1] + this.data.array4[options.ipss2] + this.data.array4[options.ipss3] + this.data.array4[options.ipss4] + this.data.array4[options.ipss5] + this.data.array4[options.ipss6] + this.data.array4[options.ipss7],
    qol_point_sum: this.data.array4[options.qol]
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },
})