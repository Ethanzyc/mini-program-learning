// pages/upload/upload.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    temImg: ''
  },
  uploadImg() {
    wx.chooseImage({
      count: 1,
      success: (res) => {
        console.log(res);
        this.setData({
          temImg: res.tempFilePaths
        });
        wx.uploadFile({
          url: 'https://1.ethan.applinzi.com/upload_handler.php',
          filePath: res.tempFilePaths[0],
          name: 'fileup',
          success: (result) => {
            console.log(result);
          },
          fail: (e) => {
            console.log(e);
          }
        })
      },
    })
  },
  downloadImg() {
    wx.showLoading({
      title: '下载中...',
    });
    wx.downloadFile({
      url: 'https://ws4.sinaimg.cn/large/006tNbRwgy1fv089k7kjdj31gy0pggnu.jpg',
      success: (res) => {
        console.log(res);
        wx.hideLoading();
        this.setData({
          temImg: [res.tempFilePath]
        });
      }
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