import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

export default function ButtonRouter() {
  return (
    <Button
      component={Link}
      to='/shop'
      variant='contained'
      color='secondary'
      size='large'
      endIcon={<ShoppingCartIcon />}>
      Go to shop
    </Button>
  );
}
