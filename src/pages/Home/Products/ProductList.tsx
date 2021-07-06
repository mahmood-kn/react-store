import ProductItem from './ProductItem';
import img from 'assets/img/women.jpg';
import Grid from '@material-ui/core/Grid';
interface Props {}

const ProductList = (props: Props) => {
  return (
    <Grid container spacing={5} alignItems='center'>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProductItem
          img={img}
          alt='women'
          title='Esprit Ruffle Shirt'
          price={16.64}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProductItem
          img={img}
          alt='women'
          title='Esprit Ruffle Shirt'
          price={16.64}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProductItem
          img={img}
          alt='women'
          title='Esprit Ruffle Shirt'
          price={16.64}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProductItem
          img={img}
          alt='women'
          title='Esprit Ruffle Shirt'
          price={16.64}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <ProductItem
          img={img}
          alt='women'
          title='Esprit Ruffle Shirt'
          price={16.64}
        />
      </Grid>
    </Grid>
  );
};

export default ProductList;
