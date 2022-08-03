// 对于axios进行二次封装
import axios from "axios";
// 引入进度条
import nprogress from "nprogress"; // start:进度条开始  done:进度条结束
import "nprogress/nprogress.css";

const requests = axios.create({
  // 配置对象
  baseURL: "/mock",
  timeout: 5000,
});

// 请求拦截器
requests.interceptors.request.use((config) => {
  // config：配置对象，对象里面的headers请求头这个属性很重要
  nprogress.start();
  return config;
});
// 响应拦截器
requests.interceptors.response.use(
  (res) => {
    nprogress.done();
    return res.data;
  },
  (error) => {
    return Promise.reject(new Error("fail"));
  }
);

export default requests;
