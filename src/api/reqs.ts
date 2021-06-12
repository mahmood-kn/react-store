import axios from './main';

export const getProducts = async () => {
  const res = await axios.get('/products');
  return res.data;
};
