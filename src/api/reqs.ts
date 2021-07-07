import axios from './main';

export const getProducts = async () => {
  const res = await axios.get('/products');
  return res.data;
};
export const getCategories = async () => {
  const res = await axios.get('/products/categories');
  return res.data;
};
export const getSingleProd = async (id: number | string) => {
  const res = await axios.get(`/products/${id}`);
  return res.data;
};
