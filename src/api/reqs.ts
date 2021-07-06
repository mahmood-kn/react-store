import axios from './main';

export const getProducts = async () => {
  const res = await axios.get('/products');
  return res.data;
};
export const getCategories = async () => {
  const res = await axios.get('/products/categories');
  return res.data;
};
