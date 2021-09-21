import axios from 'axios';
import authServices from "./authServices";

export const api = axios.create({
    baseURL:"http://localhost:3000/",
    timeout:1000
})

api.interceptors.request.use(config => {
    const accessToken = authServices.getAccessToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
});

api.interceptors.response.use(function (response) {
    return response;
  }, async function (error) {
      const originalRequest = error.config;
      const loginUrl = `/auth/login`;
      const refreshTokenUrl = "http://localhost:3000/auth/refreshToken";    
      if (error.response.status === 401 && originalRequest.url !== refreshTokenUrl && error.request.responseURL !== loginUrl) {      
        await authServices.refreshToken();     
        window.location.replace("/login"); 
        return api(originalRequest);
    }
    return Promise.reject(error);
    
    
});

export const cancelTokenSource = axios.CancelToken.source();