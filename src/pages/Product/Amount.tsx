import React, { MouseEvent } from 'react';
import { useState, useRef } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Product from 'models/product';
import { addProduct } from 'store/card';
import { useAppDispatch } from 'store/hooks';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

const useStyles = makeStyles(() =>
  createStyles({
    btnContainer: {
      margin: '2rem 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    btn: {
      fontSize: '1.2rem',
    },
    input: {
      width: '20%',
      textAlign: 'center',
    },
    amount: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '1rem',
    },
    validation: {
      color: 'red',
      marginBottom: '0.8rem',
      opacity: 0,
    },
  })
);
interface Props {
  product: Product;
}
function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant='filled' {...props} />;
}

const Amount = ({ product }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState<number | string>(1);
  const classes = useStyles();
  const validation = useRef<HTMLElement>(null);
  const dispatch = useAppDispatch();
  const handlePlus = (e: MouseEvent<HTMLButtonElement>) => {
    setValue((prev) => +prev + 1);
  };
  const handleMinus = (e: MouseEvent<HTMLButtonElement>) => {
    if (value > 1) {
      setValue((prev) => +prev - 1);
    }
  };
  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  const addToCard = () => {
    if (value > 0) {
      if (validation.current !== null) {
        validation.current.style.opacity = '0';
      }
      const cardProduct = { product, amount: +value };
      dispatch(addProduct(cardProduct));
      setOpen(true);
    } else {
      if (validation.current !== null) {
        validation.current.style.opacity = '1';
      }
    }
  };
  return (
    <div className={classes.btnContainer}>
      <div className={classes.amount}>
        <Button
          className={classes.btn}
          variant='contained'
          size='large'
          onClick={handleMinus}
          color='primary'>
          -
        </Button>
        <TextField
          className={classes.input}
          id='filled-number'
          type='tel'
          variant='filled'
          value={value}
          inputProps={{
            style: {
              textAlign: 'center',
              height: '14px',
            },
          }}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          className={classes.btn}
          onClick={handlePlus}
          variant='contained'
          size='large'
          color='primary'>
          +
        </Button>
      </div>
      <small ref={validation} className={classes.validation}>
        Not Valid Amount
      </small>
      <div>
        <Button
          variant='contained'
          color='primary'
          size='large'
          onClick={addToCard}>
          ADD TO CARD
        </Button>
      </div>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='success'>
          Product Added To Card!
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Amount;
