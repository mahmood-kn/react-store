import Product from 'models/product';
import Grid from '@material-ui/core/Grid';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Amount from './Amount';
const useStyles = makeStyles(() =>
  createStyles({
    gridContainer: {
      margin: '4rem 0',
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
    },
    title: {
      fontWeight: 'normal',
    },
    desc: {
      color: '#666',
      fontSize: '14px',
      lineHeight: '2',
    },
  })
);

interface Props {
  product: Product;
}

const ProductDetail = ({ product }: Props) => {
  const classes = useStyles();
  return (
    <Grid className={classes.gridContainer} container spacing={8}>
      <Grid item md={6} sm={12}>
        <img
          className={classes.image}
          src={product.image}
          alt={product.title}
        />
      </Grid>
      <Grid item md={6} sm={12}>
        <h2 className={classes.title}>{product.title}</h2>
        <h3>${product.price.toFixed(2)}</h3>
        <p className={classes.desc}>{product.description}</p>
        <Amount product={product} />
      </Grid>
    </Grid>
  );
};

export default ProductDetail;
