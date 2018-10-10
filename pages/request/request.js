// pages/request/request.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getMovies() {
    wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters', //仅为示例，并非真实的接口地址
      // url: 'http://localhost:8085',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res.data)
      },
      fail: (res) => {
        console.log('失败')
      }
    })
  }
})