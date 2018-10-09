let app = getApp();
function printHi() {
  console.log(`Hi,${app.globalData.userInfo.nickName}`);
  console.log('里面 hi 完了')
}

module.exports = {
  sayHi: printHi
}