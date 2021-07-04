import * as React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import homeImg from 'assets/img/home.jpg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// interface Props {}

const useStyle = makeStyles(() => ({
  imgDiv: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '&::before': {
      content: '""',
      backgroundColor: 'black',
      opacity: '0.5',
      position: 'absolute',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
    },
    background: `url(${homeImg}) center center/cover no-repeat`,
    width: '100%',
    height: '70vh',
    marginBottom: '3rem',
  },
  heading: {
    color: '#fff',
    zIndex: 15,
    margin: '2rem 0',
  },
}));

function Banner(): JSX.Element {
  const classes = useStyle();
  return (
    <div className={classes.imgDiv}>
      <h1 className={classes.heading}>Welcome To React Face Store</h1>
      <Button
        variant='contained'
        color='secondary'
        href='#'
        size='large'
        endIcon={<ShoppingCartIcon />}>
        Go to Shop
      </Button>
    </div>
  );
}

export default Banner;
