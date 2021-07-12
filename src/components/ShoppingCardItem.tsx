import React from 'react';
import { SingleCardProd } from 'models/card';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { firstUpperCase } from 'utils/funcs';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      alignItems: 'center',
    },
    imageContainer: {
      position: 'relative',
      '&::after': {
        content: '"X"',
        placeItems: 'center',
        color: '#fff',
        display: 'grid',
        opacity: 0,
        position: 'absolute',
        cursor: 'pointer',
        top: 0,
        left: 0,
        width: '100%',
        height: '90%',
        backgroundColor: 'rgba(0,0,0,0.4)',
        zIndex: 10,
        transition: 'all 0.2s ease',
      },
      '&:hover&::after': {
        opacity: 1,
      },
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
      textDecoration: 'none',
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
  removeItem: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ShoppingCardItem = ({ prod, removeItem }: Props) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.imageContainer} onClick={removeItem}>
        <img
          className={classes.image}
          src={prod.product.image}
          alt={prod.product.title}
        />
      </div>
      <div className={classes.content}>
        <Link to={`/product/${prod.product.id}`} className={classes.title}>
          {firstUpperCase(prod.product.title.split(' ').slice(0, 2).join(' '))}
        </Link>
        <span className={classes.price}>
          {prod.amount} X ${prod.product.price.toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ShoppingCardItem;
