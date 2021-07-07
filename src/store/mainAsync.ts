import { getProducts, getCategories, getSingleProd } from 'api/reqs';
import { setCategories, setProducts, setSingleProd } from './main';
import { setCatsLoading, setProdLoading, setProdsLoading } from './loading';
export const getProds = () => async (dispatch: any) => {
  try {
    dispatch(setProdsLoading(true));
    const data = await getProducts();
    dispatch(setProducts(data));
    dispatch(setProdsLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(setProdsLoading(false));
  }
};
export const getCats = () => async (dispatch: any) => {
  try {
    const data = await getCategories();
    dispatch(setCatsLoading(true));
    dispatch(setCategories(data));
    dispatch(setCatsLoading(false));
  } catch (error) {
    console.log(error);
    dispatch(setCatsLoading(false));
  }
};
export const getSingleProduct =
  (id: number | string) => async (dispatch: any) => {
    try {
      dispatch(setProdLoading(true));
      const data = await getSingleProd(id);
      console.log(data);
      dispatch(setSingleProd(data));
      dispatch(setProdLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setProdLoading(false));
    }
  };
