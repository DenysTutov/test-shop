import axios from 'axios';

axios.defaults.baseURL = 'https://62cfc3671cc14f8c087ccb80.mockapi.io';

export const getShops = async () => {
  const response = await axios.get('/shops');
  return response.data;
};

// export const addMaterial = async value => {
//   const response = await axios.post('/shops', value);
//   return response.data;
// };

// export const deleteMaterial = async id => {
//   const response = await axios.delete(`/shops/${id}`);
//   return response.data;
// };

// export const updateMaterial = async update => {
//   const response = await axios.put(`/shops/${update.id}`, update);
//   return response.data;
// };
