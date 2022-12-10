import axiosAPI from '../AxiosAPI';
import {MECHANIC_POINT} from './Endpoints';
export const getDetailByCategory = category => {
  return axiosAPI.get(`/+${category}`);
};
export const addRating = param => {
  return axiosAPI.post('/createrating', param);
};
export const getServicesByCity = city => {
  return axiosAPI.get(`/get/getServicesByCity/${city}`);
};
export const getMechanicById = id => {
  return axiosAPI.get(`/getMechanicById/${id}`);
};
