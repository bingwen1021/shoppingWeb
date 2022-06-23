// 对于axios进行二次封装
import axios from 'axios'

const requests=axios.create({
  // 配置对象
  baseURL:'/api',
  timeout:5000,
})

// 请求拦截器
requests.interceptors.request.use((config)=>{
  // config：配置对象，对象里面的headers请求头这个属性很重要
  return config;
})
// 响应拦截器
requests.interceptors.response.use((res)=>{
  return res.data;
},(error)=>{
  return Promise.reject(new Error('fail'));
})

export default requests