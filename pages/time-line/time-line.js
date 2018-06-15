let
  startPageY = 0,
  lastPageY;

Page({
  data: {
    userInfo: {},
    arrData: [
      {'time': '5月2号·下午3:20', 'text': '老子今天心情不是很好，别惹我。', 'image': ['../../img/dtu1.png', '../../img/dtu2.png']},
      {'time': '5月2号·下午3:20', 'text': '老子今天心情不是很好，别惹我。', 'image': ['../../img/dtu3.png',]},
      {'time': '5月2号·下午3:20', 'text': '老子今天心情不是很好，别惹我。', 'image': ['../../img/dtu3.png',]},
    ],
    auto: {},
    open: false,
  },

  tapStart: function (res) {
    startPageY = res.touches[0].pageY
  },

  tapDrag: function (res) {
    lastPageY = res.touches[0].pageY
  },

  //进行对开关的判断
  tapEnd: function () {
    let scrollUp = lastPageY < startPageY;

    if (this.data.open && scrollUp) {
      this.setData({
        open: false
      })
    }

    if (!this.data.open && !scrollUp) {
      // api usage: https://developers.weixin.qq.com/miniprogram/dev/api/wxml-nodes-info.html#wxcreateselectorquery
      wx.createSelectorQuery().select('.page-top').boundingClientRect(r => {
        if (r.top === 0) {
          this.setData({
            open: true
          })
        }
      }).exec();
    }
  },

  imageLoad: function (e) {
    console.log(e);
    var $width = e.detail.width,    //获取图片真实宽度
      $height = e.detail.height,
      ratio = $width / $height;   //图片的真实宽高比例  
    var viewWidth = '',           //设置图片显示宽度，  
      viewHeight = '';    //计算的高度值    
    wx.getSystemInfo({
      success: function (res) {
        viewWidth = 200;
        viewHeight = 200 / ratio
      }
    });
    var image = this.data.auto;
    image[e.target.dataset.index] = {
      width: viewWidth,
      height: viewHeight
    }
    this.setData({
      auto: image
    })
  }

})
