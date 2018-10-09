// pages/form/form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cities: ['美国', '中国', '巴西', '日本'],
    index: 0,
    time: '08:00',
    date: '1994-11-29',
    years: ['94', '95', '96', '97', '98', '99', '00', '01', '02', '03', '04', '05'],
    year: 94
  },

  bindgetuserinfo(e) {
    console.log(e);
  },
  submitInfo(e) {
    console.log(e);
  },
  resetInfo(e) {
    console.log(e);
  },
  checkboxChange(e) {
    console.log(e);
  },
  inputChange(e) {
    console.log(e.detail)
    if(e.detail.value=='zyc') {
      console.log('相等了');
      return '朱宇晨';
    }
  },
  pickerChange(e) {
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },
  timePickerChange(e) {
    this.setData({
      time: e.detail.value
    })
  },
  datePickerChange(e) {
    this.setData({
      date: e.detail.value
    })
  },
  innerPickerChange(e) {
    console.log(e)
    this.setData({
      year: this.data.years[e.detail.value]
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