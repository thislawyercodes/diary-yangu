import axios from 'axios';
import { getToken } from './baseService';

const instance = axios.create({
  baseURL: 'https://51ea-105-163-156-99.ngrok-free.app',
  timeout: 10000, 
});

instance.interceptors.request.use(
  async (config) => {
    const token = await getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
