Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg',
    ],
    intervalTime: 2000,
    autoPlay: false
  },
  swiperd (e) {
    // console.log('滑动了一下');
    // console.log(e);
  },
  changeInterval(e) {
    console.log(e);
    console.log(e.detail.value)
    this.setData({
      intervalTime: e.detail.value
    })
  },
  changeAutoPlay(e) {
    console.log(e);
    this.setData({
      autoPlay: e.detail.value
    })
  }
})