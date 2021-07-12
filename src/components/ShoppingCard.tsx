import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { SingleCardProd } from 'models/card';
import CloseIcon from '@material-ui/icons/Close';
import ShoppingCardItem from './ShoppingCardItem';
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
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Your Card</h2>
        <CloseIcon className={classes.close} onClick={handleClose} />
      </div>
      <div className={classes.items}>
        {products.length > 0
          ? products.map((p) => (
              <ShoppingCardItem key={p.product.id} prod={p} />
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
    </div>
  );
};

export default ShoppingCard;
