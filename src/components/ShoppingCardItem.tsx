import React from 'react';
import { SingleCardProd } from 'models/card';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { firstUpperCase } from 'utils/funcs';
const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    image: {
      width: '60px',
      height: 'auto',
      margin: '1rem 0',
    },
    title: {
      color: '#999',
      cursor: 'pointer',
      margin: '0 1rem',
      transition: 'all 0.3s ease-in',
      '&:hover': {
        color: '#8E99E6',
      },
    },
    content: {
      display: 'flex',
      flexDirection: 'column',
    },
    price: {
      color: '#888',
      fontSize: '14px',
      marginTop: '1rem',
      marginLeft: '1rem',
    },
  })
);

interface Props {
  prod: SingleCardProd;
}

const ShoppingCardItem = ({ prod }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <img
        className={classes.image}
        src={prod.product.image}
        alt={prod.product.title}
      />
      <div className={classes.content}>
        <span className={classes.title}>
          {firstUpperCase(prod.product.title.split(' ').slice(0, 2).join(' '))}
        </span>
        <span className={classes.price}>
          {prod.amount} X ${prod.product.price}
        </span>
      </div>
    </div>
  );
};

export default ShoppingCardItem;
