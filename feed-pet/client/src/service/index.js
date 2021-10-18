import axios from 'axios';
import authServices from "./authServices";

export const api = axios.create({
    baseURL:"http://localhost:3000/",
    timeout:1000
})

api.interceptors.request.use(config => {
    const accessToken = authServices.getAccessToken();
    console.log(window.location)
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    if(config.url === '/animais'){
      return config
    }
    return config;
});

api.interceptors.response.use(function (response) {
    return response;
  }, async function (error) {
      const originalRequest = error.config;
      const loginUrl = `http://localhost:3000/auth/login`;
      const homeUrl = `http://localhost:3000/animais`;
      // alert(error.request.responseURL)
      const refreshTokenUrl = "http://localhost:3000/auth/refreshToken";  
      if (error.response?.status === 401 
        && originalRequest.url !== refreshTokenUrl
        && error.request.responseURL !== loginUrl
        && error.request.responseURL !== homeUrl) {      
        await authServices.refreshToken();     
        window.location.replace("/login"); 
        return api(originalRequest);
    }
    return Promise.reject(error);
    
    
});

export const cancelTokenSource = axios.CancelToken.source();