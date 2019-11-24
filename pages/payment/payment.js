// pages/payment/payment.js
Page({
  data: {
    cartPrice: 0
  },

  onLoad: function (options) {
    this.setData({cartPrice: wx.getStorageSync('cartPrice')})
  },
})