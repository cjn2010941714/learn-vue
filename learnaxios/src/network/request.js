import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })

  instance(config.baseConfig)
    .then(res => {
      config.success(res)
    })
    .catch(err => {
      config.fail(err)
    })
}
// 2.使用Promise
export function request2(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000,
    })

    instance(config)
      .then(res => {
        resolve(res)
      })
      .catch(err => {
        reject(err)
      })
  })
}
// 3.最终方案
export function request3(config) {
  // 1.创建axios实例
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000,
  })
  // 2.axios拦截器
  // instance.interceptors.request.use(res => {
  //   // 拿到的是config
  //   console.log(res);
  //   return res
  // },err => {
  //   console.log(err);
  // })

  instance.interceptors.response.use(res => {
    console.log(res);
  },err => {
    console.log(err);
  })

  // 3.发送请求
  return instance(config)
}

