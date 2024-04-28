import axios from 'axios';
import Config from 'react-native-config';
import {userData} from 'utils/constants/userData';
console.log('BASE_URL', Config.BASE_URL);

const axiosInstance = axios.create({
  baseURL: Config.BASE_URL,
});

axiosInstance.interceptors.request.use(
  async config => {
    if (!config.headers.Authorization) {
      const accessToken = userData.token;
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    console.log('configg', config);

    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export const apiCall = {
  get: async (url: string, params: any = {}) => {
    const response = await axiosInstance.get(url, {params});
    return response;
  },
  post: async (url: string, data: any = {}) => {
    const response = await axiosInstance.post(url, data);
    return response;
  },
  patch: async (url: string, data: any = {}) => {
    const response = await axiosInstance.patch(url, data);
    return response;
  },
  delete: async (url: string, params: any = {}) => {
    const response = await axiosInstance.delete(url, {params});
    return response;
  },
};
