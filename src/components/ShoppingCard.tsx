import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { SingleCardProd } from 'models/card';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCardItem from './ShoppingCardItem';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';
import { useAppDispatch } from 'store/hooks';
import { removeProduct } from 'store/card';
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      padding: '2rem',
      width: 300,
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    close: {
      cursor: 'pointer',
    },
    items: {
      height: '60vh',
      overflowY: 'scroll',
      '&::-webkit-scrollbar': {
        width: '10px',
      },
      '&::-webkit-scrollbar-track': {
        background: '#f1f1f1',
      },
      '&::-webkit-scrollbar-thumb': {
        background: '#888',
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: '#555',
      },
    },
    total: {
      position: 'absolute',
      bottom: '20%',
      display: 'block',
      fontSize: '1.2em',
    },
  })
);

interface Props {
  products: SingleCardProd[];
  handleClose: (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const ShoppingCard = ({ products, handleClose }: Props) => {
  const [openAlert, setOpenAlert] = React.useState(false);
  const handleAlertClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenAlert(false);
  };
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const removeItem = (id: number) => {
    dispatch(removeProduct(id));
    setOpenAlert(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Your Card</h2>
        <CloseIcon className={classes.close} onClick={handleClose} />
      </div>
      <div className={classes.items}>
        {products.length > 0
          ? products.map((p) => (
              <ShoppingCardItem
                removeItem={() => removeItem(p.product.id)}
                key={p.product.id}
                prod={p}
              />
            ))
          : null}
      </div>
      <span className={classes.total}>
        Total: $
        {products.length > 0
          ? products
              .map((p) => p.amount * p.product.price)
              .reduce((acc, curr) => acc + curr)
              .toFixed(2)
          : 0}
      </span>
      <Snackbar
        open={openAlert}
        autoHideDuration={6000}
        onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity='error'>
          Product Removed!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default ShoppingCard;
