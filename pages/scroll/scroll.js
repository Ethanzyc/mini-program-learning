Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: ['a', 'b', 'c', 'd', 'e', 'f'],
    des: 0
  },
  next() {
    this.setData({
      des: this.data.des >= this.data.arr.length-1 ? 0 : this.data.des + 1
    })
  },
  jump(e) {
    this.setData({
      des: e.target.dataset.index
    })
  }
})