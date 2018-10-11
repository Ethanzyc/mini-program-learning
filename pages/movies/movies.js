// pages/movies/movies.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    movies: [],
    header: '加载中...'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '加载中'
    })
    wx.request({
      // url: 'http://t.yushu.im/v2/movie/in_theaters', //仅为示例，并非真实的接口地址
      url: 'http://localhost:8085',
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res) => {
        console.log(res.data);
        wx.hideLoading();
        this.setData({
          movies: res.data.subjects,
          header: res.data.title
        })
      },
      fail: (res) => {
        console.log('失败');
        wx.hideLoading();
        wx.showToast({
          title: '数据获取失败',
          icon: 'none'
        });
        this.setData({
          header: '加载失败'
        });
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