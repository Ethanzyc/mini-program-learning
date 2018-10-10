// pages/canvas/canvas.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
    const canvasCtx = wx.createCanvasContext('myCanvas', this)
    canvasCtx.setStrokeStyle("#00ff00")
    canvasCtx.setLineWidth(5)
    canvasCtx.rect(0, 0, 200, 200)
    canvasCtx.stroke()
    canvasCtx.setStrokeStyle("#ff0000")
    canvasCtx.setLineWidth(2)
    canvasCtx.moveTo(160, 100)
    canvasCtx.arc(100, 100, 60, 0, 2 * Math.PI, true)
    canvasCtx.moveTo(140, 100)
    canvasCtx.arc(100, 100, 40, 0, Math.PI, false)
    canvasCtx.moveTo(85, 80)
    canvasCtx.arc(80, 80, 5, 0, 2 * Math.PI, true)
    canvasCtx.moveTo(125, 80)
    canvasCtx.arc(120, 80, 5, 0, 2 * Math.PI, true)
    canvasCtx.stroke()
    canvasCtx.draw()
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