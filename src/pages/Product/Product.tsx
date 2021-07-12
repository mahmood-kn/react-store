import { useEffect } from 'react';
import Navbar from 'components/Navbar';
import { useParams } from 'react-router-dom';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import ProductDetail from './ProductDetail';
import Container from '@material-ui/core/Container';
import { getSingleProduct } from 'store/mainAsync';
import MoreDetails from './MoreDetails';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    skeleton: {
      display: 'flex',
      justifyContent: 'space-between',
      [theme.breakpoints.down('md')]: {
        flexDirection: 'column',
      },
    },
    skeletonImg: {
      width: '100%',
    },
    skeletonLineContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    skeletonLine: {
      margin: '0.5rem 0',
    },
  })
);

interface Props {}

const Product = (props: Props) => {
  const classes = useStyles();
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
          <>
            <ProductDetail product={product} />
            <MoreDetails desc={product.description} />
          </>
        ) : product === null && !loading ? (
          'Not Found'
        ) : (
          <div className={classes.skeleton}>
            <Skeleton
              animation='wave'
              className={classes.skeletonImg}
              height='500px'
            />
            <div className={classes.skeletonLineContainer}>
              <Skeleton
                animation='wave'
                className={classes.skeletonLine}
                width='40%'
                height='20px'
              />
              <Skeleton
                animation='wave'
                className={classes.skeletonLine}
                width='40%'
                height='20px'
              />
              <Skeleton
                animation='wave'
                className={classes.skeletonLine}
                width='40%'
                height='20px'
              />
              <Skeleton
                animation='wave'
                className={classes.skeletonLine}
                width='40%'
                height='20px'
              />
            </div>
          </div>
        )}
      </Container>
    </>
  );
};

export default Product;
