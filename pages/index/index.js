//index.js
//获取应用实例
const app = getApp()
var bmap = require('../../libs/bmap-wx.min.js')
Page({
  data: {
    motto: '柴俊烨大傻逼',
    getWerther: '获取天气',
    currentCountryName: '',
    temperatureData: '',
    userInfo: {},
    weatherData: '',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    weatherImage: ''
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: 'y4a5tpfy3T6PWlUppR5lzh9eSqcZPUql'
    })
    var fail = function (data) {
      console.log(data)
    }
    var success = function (data) {
      var allWeatherData = data.originalData.results[0]
      var weatherData = data.currentWeather[0];
      var temperatureData = '温度' + weatherData.temperature;
      that.setData({
        weatherData: weatherData,
        temperatureData: temperatureData,
        currentCountryName: weatherData.currentCity
      });
      console.log(weatherData)
      console.log(data)
    }

    BMap.weather({
      fail: fail,
      success: success
    })


    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse) {
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  getWeather: function (e) {
    var that = this;
    var BMap = new bmap.BMapWX({
      ak: 'y4a5tpfy3T6PWlUppR5lzh9eSqcZPUql'
    })
    var fail = function (data) {
      console.log(data)
    }
    var success = function (data) {
      var weatherData = data.currentWeather[0];
      weatherData = '温度' + weatherData.temperature;
      that.setData({
        weatherData: weatherData,
        weather: weatherData
      });
      console.log(weatherData)
      console.log(data)
    }

    BMap.weather({
      fail: fail,
      success: success
    })

  }
})
