import axios from './main';

export const getProducts = async () => {
  const res = await axios.get('/products/categories');
  console.log(res.data);
};
