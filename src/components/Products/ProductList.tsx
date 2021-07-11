import ProductItem from './ProductItem';
import { useAppSelector } from 'store/hooks';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Prod.css';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: '2rem',
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: '1fr 1fr',
      },
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: '1fr 1fr 1fr',
      },
      [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
      },
    },
  })
);

interface Props {}

const ProductList = (props: Props) => {
  const classes = useStyles();
  const filteredProducts = useAppSelector(
    (state) => state.main.filteredProducts
  );
  return (
    <TransitionGroup className={classes.container}>
      {filteredProducts?.map((p) => (
        <CSSTransition
          mountOnEnter
          unmountOnExit
          timeout={300}
          key={p.id}
          classNames='product'>
          <ProductItem
            id={p.id}
            img={p.image}
            alt={p.title.split(' ')[0]}
            title={p.title}
            price={p.price}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default ProductList;
