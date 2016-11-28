/**
 * Created by Administrator on 2016/11/28.
 */
import axios from 'axios';
import Cookie from 'tiny-cookie';

// Set config defaults when creating the instance
const instance = axios.create({});

// Add a request interceptor
instance.interceptors.request.use(
  // Do something before request is sent
  (config) => {
    const reqConfig = config;
    const ticket = Cookie.getRaw('USER-TICKET') || '';
    reqConfig.headers.ticket = ticket;
    //reqConfig.headers.os = 'h5';
    //reqConfig.headers.source = 'dingtalk';
    // 不加这个会使得content-type无法设置到request的headers中
    if (!reqConfig.data) {
      reqConfig.data = {};
    }
    return reqConfig;
  },
  // Do something with request error
  error => Promise.reject(error)
);

// Add a response interceptor
instance.interceptors.response.use(
  // Do something with response data
  response => response,
  // response => {
  //   alert(response.data)
  //   return response
  // },
  // Do something with response error
  (error) => {

      const status = error.response.status;
      if (status === 403) {
        window.location = '/account.html';
      }
    return Promise.reject(error);
  }
);

export default instance;
