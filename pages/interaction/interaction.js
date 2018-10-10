// pages/interaction/interaction.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: ['鼠', '牛', '虎', '兔']
  },

  showActionSheet() {
    // 也可以把 success 改成箭头函数的形式来解决 this 的问题
    let that = this;
    wx.showActionSheet({
      itemList: this.data.list,
      itemColor: '#555555',
      success(res) {
        console.log(res);
        console.log(that.data.list[res.tapIndex])
      },
      complete(res) {
        console.log('选完了');
        console.log('com',res);
      }
    })
  },
  showModal() {
    wx.showModal({
      title: '测试showModal',
      content: '你确定吗',
      // showCancel: false,
      cancelText: '就要取消',
      cancelColor: 'red',
      confirmText: '嗯，确认',
      success: (res) => {
        console.log(res);
      }
    })
  },
  showToast() {
    wx.showToast({
      title: '这是一个提醒',
      icon: 'loading',
      duration: 2000,
      mask: true,
      success: (res) => {
        console.log(res);
      }
    })
  },
  showLoading() {
    wx.showLoading({
      title: '转2秒',
      mask: true,
      success: (res) => {
        console.log(res);
        setTimeout(()=>{
          wx.hideLoading()
        },2000)
      }
    })
  }
})