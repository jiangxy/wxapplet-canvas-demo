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

  // 设置当前页面标题
  setTitle: function () {
    // 尼玛，手机上调试的时候设置标题无效
    wx.setNavigationBarTitle({
      title: 'Top50达人榜'
    });
  },

  onLoad: function (options) {
    this.setTitle();
  },
  onShow: function () {
    this.setTitle();
  }
})
