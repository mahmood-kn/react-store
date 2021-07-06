import { getProducts, getCategories } from 'api/reqs';
import { setCategories, setProducts } from './main';
export const getProds = () => async (dispatch: any) => {
  try {
    const data = await getProducts();
    dispatch(setProducts(data));
  } catch (error) {
    console.log(error);
  }
};
export const getCats = () => async (dispatch: any) => {
  try {
    const data = await getCategories();
    dispatch(setCategories(data));
  } catch (error) {
    console.log(error);
  }
};
