import axios from 'axios'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'

// 创建axios实例
const service = axios.create({
  timeout: 10000 // 请求超时时间
})

// request拦截器
/* service.interceptors.request.use(config => {
  config.url = `/api/${config.url}`
  config.headers['Version'] = '3.0.2'
  config.headers['Device-type'] = 'web'
  return config
}, error => {
  Promise.reject(error)
}) */

// respone拦截器
/* service.interceptors.response.use(
  res => {
    if (res.data.statusCode !== 200) {
      return Promise.reject(res.data)
    }
    return res.data.datas
  },
  error => {
    return Promise.reject('错误...')
  }
) */

export default service