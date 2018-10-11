// pages/socket/socket.js
let hasCon = false;
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  connect() {
    wx.connectSocket({
      url: 'ws://192.168.3.76:3001',
      header: {
        'content-type': 'application/json'
      },
      method: "GET",
      success: res => {
        console.log('客户端连接成功');
        console.log(res);
      },
      complete: () => {
        wx.onSocketOpen(() => {
          hasCon = true;
        })
      }
    }),
    wx.onSocketMessage(res => {
      console.log(res);
    })
  },
  sendMsg() {
    if(hasCon) {
      wx.sendSocketMessage({
        data: '我是 ethan',
        success: res => {
          console.log(res);
        }
      })
    }else{
      wx.showModal({
        title: '警告',
        content: '请先连接',
        showCancel: false
      })
    }
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