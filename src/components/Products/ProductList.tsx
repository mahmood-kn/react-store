import ProductItem from './ProductItem';
import Grid from '@material-ui/core/Grid';
import { useAppSelector } from 'store/hooks';
interface Props {}

const ProductList = (props: Props) => {
  const products = useAppSelector((state) => state.main.filteredProducts);
  return (
    <Grid container spacing={6} alignItems='center'>
      {products?.map((p) => (
        <Grid key={p.id} item xs={12} sm={6} md={4} lg={3}>
          <ProductItem
            img={p.image}
            alt={p.title.split(' ')[0]}
            title={p.title}
            price={p.price}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
