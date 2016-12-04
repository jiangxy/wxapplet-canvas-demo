// pages/list/index.js
Page({
  data: {
    listData: [
      { name: 'xxx', pic: '../../images/jxy.jpg', score: 200 },
      { name: 'xxx', score: 100 },
      { name: 'xxx', score: 99 },
      { name: 'xxx', score: 88 },
      { name: 'xxx', score: 77 },
      { name: 'xxx', score: 66 }
    ]  // 排行榜数据，包括：用户名/头像/分数，没有头像就显示默认头像
  },
  onLoad: function (options) {

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    wx.setNavigationBarTitle({
      title: 'Top50达人榜'
    });
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})