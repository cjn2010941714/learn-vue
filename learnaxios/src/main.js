import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})

// 1.axios的基本使用
// axios({
//   url: 'http://123.207.32.32:8000/home/multidata',
//   // method: 'post'
// }).then(res => {
//   console.log(res)
// })
//
// axios({
//   url: 'http://123.207.32.32:8000/home/data',
//   // 专门针对get请求的参数拼接
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// axios 全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//
// // 2.axios发送并发请求
// axios.all([
//   axios({
//     url: '/home/multidata'
//   }),
//   axios({
//     url: '/home/data',
//     params: {
//       type: 'sell',
//       page: 1
//     }
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))

// 3.创建对应的axios的实例
// const instance = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
// instance({
//   url: '/home/data',
//   params: {
//     type: 'sell',
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// 4.封装request模块
// import {request} from "./network/request";
//
// request({
//   baseConfig: {
//     url: '/home/multidata'
//   },
//   success: function (res) {
//     console.log(res);
//   },
//   fail: function (err) {
//     console.log(err);
//   }
// })

// import {request2} from "./network/request";
// request2({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// })

import {request3} from "./network/request";
request3({
  url: '/home/multidata'
}).then(res => {
  // console.log(res);
}).catch(err => {
  // console.log(err);
})
