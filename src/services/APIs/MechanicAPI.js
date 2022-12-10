import axiosAPI from '../AxiosAPI';
import {MECHANIC_POINT} from './Endpoints';
export const getServicesById = id => {
  return axiosAPI.get(`${MECHANIC_POINT.GET_SERVICES}${id}`);
};

export const addServiceById = (id, param) => {
  return axiosAPI.put(`${MECHANIC_POINT.CREATE_SERVICE}${id}`, param);
};
export const getAverageRatingById = id => {
  return axiosAPI.get(`/getavgrating/${id}`);
};
