function getMyPosition(success,fail){
  wx.getLocation({
    success: function(res) {
      console.log(res);
    },
    fail:function(){
      fail()
    },
    complete: function (res) {

    }
  })
}

module.exports = {
  getMyPosition: getMyPosition
}