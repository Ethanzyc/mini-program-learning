const methods = require("../../utils/methods.js")
Page({
  /**
   * 页面的初始数据
   */
  data: {
    "merchantId": "305611750754488320",
    "merchantName": "瑜伽-权益专用1",
    "merchantLogo": "300000.jpg",
    "businessCategory": "瑜伽会所",
    "introduce": "瑜伽（Yoga）是一个通过提升意识，帮助人类充分发挥潜能的体系。瑜伽姿势运用古老而易于掌握的技巧，改善人们生理、心理、情感和精神方面的能力，是一种达到身体、心灵与精神和谐统一的运动方式。",
    "servicePhone": "132111111111111",
    "merchantImages": [
      "http://resfco.raiyee.cn/fco-images/prod/merchant_img/304558083886075904.jpeg",
      "http://resfco.raiyee.cn/fco-images/prod/merchant_img/304558083886075904.jpeg",
      "http://resfco.raiyee.cn/fco-images/prod/merchant_img/304558083886075904.jpeg",
      "http://resfco.raiyee.cn/fco-images/prod/merchant_img/304558083886075904.jpeg"
    ],
    "shops": [
      {
        "shopId": "305611790384369664",
        "shopName": "瑜伽门店",
        "provinceCode": "530000",
        "cityCode": "530100",
        "districtCode": "530102",
        "address": "云南省昆明市五华区集庆门大街",
        "longitude": 102.84288883209229,
        "latitude": 24.892693954371616
      }
    ],
    "officialName": "瑜伽SaaS",
    "officialPropagation": "公众号宣传语",
    "qrCodeImg": "307283631074758656.png",
    merchant: {}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (params) {
    console.log(params);
    wx.request({
      url: 'http://fco.raiyee.com/fco-customer-api/merchant/init/305610498956070912',
      // url: 'http://localhost:8081',
      dataType: 'json',
      success:(res) => {
        console.log(res);
        this.setData({
          merchant: res.data
        })
        console.log(this.data.merchant);
      },
      fail(e) {
        console.log('error', e);
      }
    })
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
    console.log('路径', this.route);
    console.log(getCurrentPages());
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
    console.log('到底了');
    // wx.reLaunch({
    //   url: '/pages/merchant/merchant',
    // })
    console.log(getApp().globalData);
    console.log(methods.sayHi());
    console.log('hi 完了');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }

})
