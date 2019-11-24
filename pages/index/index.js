//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    listData: ['热销推荐', '鲜果鲜茶', '益菌多多', '法式奶霜','香浓牛奶'],
    imgUrls: [
      '../../images/1.png',
      '../../images/3.png',
      '../../images/4.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    goodsData:[
      {url: '../../images/goodsimg.png', name : '17岁轻茶奶霜（大杯）', price : 14.00},
      {url: '../../images/goodsimg.png', name : '鲜百香双响炮（大杯）', price : 13.00},
      {url: '../../images/goodsimg.png', name : '17岁轻茶奶霜（大杯）', price : 12.00},
      {url: '../../images/goodsimg.png', name : '鲜百香双响炮（大杯）', price : 11.00},
      {url: '../../images/goodsimg.png', name : '17岁轻茶奶霜（大杯）', price : 10.50},
      {url: '../../images/goodsimg.png', name : '鲜百香双响炮（大杯）', price : 8.00},
      {url: '../../images/goodsimg.png', name : '17岁轻茶奶霜（大杯）', price : 14.00},
      {url: '../../images/goodsimg.png', name : '鲜百香双响炮（大杯）', price : 13.00},
      {url: '../../images/goodsimg.png', name : '17岁轻茶奶霜（大杯）', price : 12.00},
      {url: '../../images/goodsimg.png', name : '鲜百香双响炮（大杯）', price : 11.00},
      {url: '../../images/goodsimg.png', name : '17岁轻茶奶霜（大杯）', price : 10.50},
      {url: '../../images/goodsimg.png', name : '鲜百香双响炮（大杯）', price : 8.00},
    ],
    cartPrice: 0
  },
  addToCart:function(event){
    this.setData({cartPrice: this.data.cartPrice+this.data.goodsData[event.currentTarget.dataset.index].price});
  },
  goToPay:function(){
    if(this.data.cartPrice != 0){
      wx.setStorageSync('cartPrice', this.data.cartPrice);
      wx.navigateTo({
        url: '../payment/payment'
      })
    }
  }
})
