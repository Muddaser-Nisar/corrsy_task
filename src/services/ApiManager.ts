// import {Auth} from 'aws-amplify';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://yp1k5h3zai.execute-api.us-east-1.amazonaws.com/prod/',
});

axiosInstance.interceptors.request.use(
  async config => {
    if (!config.headers.Authorization) {
      // const accessToken = (await Auth.currentSession())
      //   .getIdToken()
      //   .getJwtToken();
      const accessToken = '';
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

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
