import axios from 'axios'
axios.defaults.baseURL = 'http://localhost:8888/api/private/v1/'
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    const token = localStorage.getItem("mytoken")
    if(token) {
        config.headers['Authorization'] = token;
    }
    return config
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
export const getLogin = params=> axios.post('login',params).then(res=>res.data)