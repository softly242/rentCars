import axios from 'axios';

const URL_API = 'https://6521a558a4199548356d7241.mockapi.io/catalog';

export const fetchCars = async () => {
  return await axios.get(URL_API);
};

export const addCars = async item => {
  return await axios.post(URL_API, item);
};

export const deleteCars = async id => {
  return await axios.delete(`${URL_API}/${id}`);
};