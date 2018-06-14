//app.js
App({
  onLaunch: function () {

    wx.setTabBarStyle({
      color: '#929292',
      selectedColor: '#904617',

      borderStyle: 'white'
    })


    // 获取用户信息
    wx.getUserInfo({
      success: res => {
        console.log(res);
        this.globalData.userInfo = res.userInfo;
      }
    })


  },
  getMyPorition: function () {
    wx.getLocation({
      type: 'gcj02',
      altitude: true,
      success: function (res) {
        that.globalData.longitude = res.longitude;
        that.globalData.latitude = res.latitude;
      },
    })
  },
  globalData: {
    userInfo: null,
    longitude: null,
    latitude: null
  }
})