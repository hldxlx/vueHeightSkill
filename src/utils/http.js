//引入axios和qs
import axios from 'axios'
//有时候向后端发送数据，后端无法接收,考虑使用qs模块
import qs from 'qs'
//判定开发模式
if (process.env.NODE_ENV == 'development') {
  axios.defaults.baseURL = '/';
}else if (process.env.NODE_ENV == 'debug') {
  // axios.defaults.baseURL = 'http://v.juhe.cn';
}else if (process.env.NODE_ENV == 'production') {
  // axios.defaults.baseURL = 'http://v.juhe.cn';
}
//全局设置头部信息
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
//全局设置超时时间
axios.defaults.timeout = 10000;
//请求路由拦截
//在请求发出去之前，可以做一些判断，看是否是合法用户
axios.interceptors.request.use(function (config) {
  // 一般在这个位置判断token是否存在
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});
//响应拦截
axios.interceptors.response.use(function (response){
  // 处理响应数据
  if (response.status === 200) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(response);
  }
}, function (error){
  // 处理响应失败
  return Promise.reject(error);
});
//get请求

export function get(url, params){
  return new Promise((resolve, reject) =>{
    axios.get(url, {
      params: params
    }).then(res => {
      console.log(res,'-----------utils的get')
      resolve(res.data);
    }).catch(err =>{
      reject(err.data)
    })
  });
}



//post请求
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then(res =>{
        resolve(res.data);
      })
      .catch(err =>{
        reject(err.data)
      })
  });
}
