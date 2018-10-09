//index.js
//获取应用实例
const app = getApp()
const methods = require('../../utils/methods.js')

Page({
  data: {
    a: 123,
    arr: [1,4,6,77],
    show: true,
    result: '',
    obj1: {
      a:11,
      b:22
    }
  },
  onLoad: function () {
    wx.request({
      // url: 'http://fco.raiyee.com/fco-customer-api/merchant/i2nit/305610498956070912',
      url: 'http://localhost:8081',
      dataType: 'json',
      success(res) {
        console.log(res);
      },
      fail(e) {
        console.log('error',e);
      }
    })
  },
  change: function (e) {
    console.log(e);
    console.log(this.data.show);
    this.setData({ show: !this.data.show });
    console.log(this.data.show);
  },
  scan() {
    console.log('开始扫码了');
    wx.scanCode({
      scanType: 'qrCode',
      success:(res) => {
        console.log(res);
        this.setData({
          result: res.result
        })
      },
      fail(e) {
        console.log('错误',e);
      }
    })
  },
  testModule() {
    methods.sayHi();
  },
  toDes(e) {
    console.log(e);
    wx.navigateTo({
      url: e.target.dataset.des,
      success: function (res) {
        console.log('成功跳转了')
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  }
})
