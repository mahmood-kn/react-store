import { useEffect } from 'react';
import Navbar from 'components/Navbar';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import ProductDetail from './ProductDetail';
import Container from '@material-ui/core/Container';
import { getSingleProduct } from 'store/mainAsync';

interface Props {}

const Product = (props: Props) => {
  const dispatch = useAppDispatch();
  const params = useParams<{ id: string }>();
  useEffect(() => {
    dispatch(getSingleProduct(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);
  const product = useAppSelector((state) => state.main.singleProd);
  const loading = useAppSelector((state) => state.loading.prodLoading);
  // const product = products.filter((p) => p.id === +params?.id)[0];
  return (
    <>
      <Navbar />
      <Container maxWidth='md'>
        {product !== null && !loading ? (
          <ProductDetail product={product} />
        ) : product === null && !loading ? (
          'Not Found'
        ) : (
          'Loading...'
        )}
      </Container>
    </>
  );
};

export default Product;
