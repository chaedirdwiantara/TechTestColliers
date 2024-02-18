import axios, {AxiosInstance} from 'axios';
import {getAccessToken} from '../service/refreshToken';

// Define the base URL of your API
const BASE_URL = 'https://employee-api-kappa.vercel.app'; // Replace with your actual API base URL

// Initialize AxiosInstance with base configuration
let API: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    // You can add more default headers here if needed
  },
});

// Optionally, if you need to handle global request or response interceptors, you can add them here
// For example, logging request errors
API.interceptors.request.use(
  config => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Export the configured API instance for use in your app
export default API;
