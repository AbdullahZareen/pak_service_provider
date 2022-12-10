import axiosAPI from '../AxiosAPI';
import {AUTH_POINT} from './Endpoints';

export const loginUser = params => {
  return axiosAPI.post(AUTH_POINT.LOGIN_USER, params);
};

export const signupCustomer = params => {
  return axiosAPI.post(AUTH_POINT.SIGNUP_CUSTOMER, params);
};
export const signupMechanic = params => {
  return axiosAPI.post(AUTH_POINT.SIGNUP_MECHANIC, params);
};
