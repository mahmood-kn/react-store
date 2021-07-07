import { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles, createStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() =>
  createStyles({
    btnContainer: {
      margin: '2rem 0',
    },
    btn: {
      fontSize: '1.2rem',
    },
    input: {
      width: '15%',
      textAlign: 'center',
    },
  })
);
interface Props {}

const Amount = (props: Props) => {
  const [value, setValue] = useState<number | string>(1);
  const classes = useStyles();
  return (
    <div className={classes.btnContainer}>
      <Button className={classes.btn} variant='contained' size='large'>
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
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
        }}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button className={classes.btn} variant='contained' size='large'>
        +
      </Button>
    </div>
  );
};

export default Amount;
