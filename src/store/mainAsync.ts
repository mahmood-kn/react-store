import { getProducts } from '../api/reqs';
import { mainActions } from './main';
export const getProds = () => async (dispatch: any) => {
  try {
    const data = await getProducts();
    dispatch(mainActions.setProducts(data));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
