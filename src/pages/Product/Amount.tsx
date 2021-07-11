import { MouseEvent } from 'react';
import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles } from '@material-ui/core/styles';
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
      marginBottom: '2rem',
    },
  })
);
interface Props {}

const Amount = (props: Props) => {
  const [value, setValue] = useState<number | string>(1);
  const classes = useStyles();
  const handlePlus = (e: MouseEvent<HTMLButtonElement>) => {
    setValue((prev) => +prev + 1);
  };
  const handleMinus = (e: MouseEvent<HTMLButtonElement>) => {
    if (value > 1) {
      setValue((prev) => +prev - 1);
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
      <div>
        <Button variant='contained' color='primary' size='large'>
          ADD TO CARD
        </Button>
      </div>
    </div>
  );
};

export default Amount;
