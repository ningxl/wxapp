//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    listData: ['热销推荐', '鲜果鲜茶', '益菌多多', '法式奶霜', '香浓牛奶'],
    imgUrls: [
      '../../images/1.png',
      '../../images/3.png',
      '../../images/4.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    goodsData: [
      { url: '../../images/goodsimg.png', name: '17岁轻茶奶霜（大杯）', price: 14.00 },
      { url: '../../images/goodsimg.png', name: '鲜百香双响炮（大杯）', price: 13.00 },
      { url: '../../images/goodsimg.png', name: '17岁轻茶奶霜（大杯）', price: 12.00 },
      { url: '../../images/goodsimg.png', name: '鲜百香双响炮（大杯）', price: 11.00 },
      { url: '../../images/goodsimg.png', name: '17岁轻茶奶霜（大杯）', price: 10.50 },
      { url: '../../images/goodsimg.png', name: '鲜百香双响炮（大杯）', price: 8.00 },
      { url: '../../images/goodsimg.png', name: '17岁轻茶奶霜（大杯）', price: 14.00 },
      { url: '../../images/goodsimg.png', name: '鲜百香双响炮（大杯）', price: 13.00 },
      { url: '../../images/goodsimg.png', name: '17岁轻茶奶霜（大杯）', price: 12.00 },
      { url: '../../images/goodsimg.png', name: '鲜百香双响炮（大杯）', price: 11.00 },
      { url: '../../images/goodsimg.png', name: '17岁轻茶奶霜（大杯）', price: 10.50 },
      { url: '../../images/goodsimg.png', name: '鲜百香双响炮（大杯）', price: 8.00 },
      { url: '../../images/goodsimg.png', name: '17岁轻茶奶霜（大杯）', price: 14.00 },
      { url: '../../images/goodsimg.png', name: '鲜百香双响炮（大杯）', price: 13.00 },
      { url: '../../images/goodsimg.png', name: '17岁轻茶奶霜（大杯）', price: 12.00 },
      { url: '../../images/goodsimg.png', name: '鲜百香双响炮（大杯）', price: 11.00 },
      { url: '../../images/goodsimg.png', name: '17岁轻茶奶霜（大杯）', price: 10.50 },
      { url: '../../images/goodsimg.png', name: '鲜百香双响炮（大杯）', price: 8.00 },
      { url: '../../images/goodsimg.png', name: '17岁轻茶奶霜（大杯）', price: 14.00 },
      { url: '../../images/goodsimg.png', name: '鲜百香双响炮（大杯）', price: 13.00 },
      { url: '../../images/goodsimg.png', name: '17岁轻茶奶霜（大杯）', price: 12.00 },
      { url: '../../images/goodsimg.png', name: '鲜百香双响炮（大杯）', price: 11.00 },
      { url: '../../images/goodsimg.png', name: '17岁轻茶奶霜（大杯）', price: 10.50 },
      { url: '../../images/goodsimg.png', name: '鲜百香双响炮（大杯）', price: 8.00 },
      { url: '../../images/goodsimg.png', name: '17岁轻茶奶霜（大杯）', price: 14.00 },
      { url: '../../images/goodsimg.png', name: '鲜百香双响炮（大杯）', price: 13.00 },
      { url: '../../images/goodsimg.png', name: '17岁轻茶奶霜（大杯）', price: 12.00 },
      { url: '../../images/goodsimg.png', name: '鲜百香双响炮（大杯）', price: 11.00 },
      { url: '../../images/goodsimg.png', name: '17岁轻茶奶霜（大杯）', price: 10.50 },
      { url: '../../images/goodsimg.png', name: '鲜百香双响炮（大杯）', price: 8.00 },
    ],
    listSelect: 0,
    showCart: false,
    cartData: [],
    cartPrice: 0,
  },
  changeCart: function(){
    if(this.data.cartPrice != 0)
    this.setData({
      showCart: !this.data.showCart
    })
  },
  addToCart: function (event) {
    this.setData({
      cartData: this.data.cartData.concat([{name: this.data.goodsData[event.currentTarget.dataset.index].name, price: this.data.goodsData[event.currentTarget.dataset.index].price}])
    })
    this.setData({
      cartPrice: this.data.cartPrice + this.data.goodsData[event.currentTarget.dataset.index].price
    });
  },
  removeItemFromCart: function(event){
    this.setData({
      cartPrice: this.data.cartPrice - this.data.cartData[event.currentTarget.dataset.index].price
    });
    var t = this.data.cartData;
    t.splice(event.currentTarget.dataset.index,1)
    this.setData({
      cartData: t
    })
    if(this.data.cartPrice == 0)
    this.setData({
      showCart: false
    })
  },
  goToPay: function () {
    if (this.data.cartPrice != 0) {
      wx.setStorageSync('cartPrice', this.data.cartPrice);
      wx.navigateTo({
        url: '../payment/payment'
      })
    }
  },
  scroll: function (e) {
    var dis = e.detail.scrollTop
    if (dis > 0 && dis < 300) {
      this.setData({
        listSelect: 0,
      })
    }
    if (dis > 300 && dis < 600) {
      this.setData({
        listSelect: 1,
      })
    }
    if (dis > 600 && dis < 900) {
      this.setData({
        listSelect: 2,
      })
    }
    if (dis > 900 && dis < 1200) {
      this.setData({
        listSelect: 3,
      })
    }
    if (dis > 1200) {
      this.setData({
        listSelect: 4,
      })
    }
  },
})
