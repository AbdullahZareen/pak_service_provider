import axios from 'axios';
import {
  requestErrorHandler,
  requestIntercepter,
  responseErrorHandler,
  responseInterceptor,
} from './AxiosHelperMethod';

import {StringConst} from '../constants';
const baseURL = `http://${StringConst.IP_ADDRESS}:8000`;
const axiosAPI = axios.create({
  baseURL: baseURL,
});
axiosAPI.interceptors.request.use(requestIntercepter, requestErrorHandler);
axiosAPI.interceptors.response.use(responseInterceptor, responseErrorHandler);

export default axiosAPI;
