import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import homeImg from 'assets/img/home.jpg';

import ShopButton from 'components/ShopButton';
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
      <h1 className={classes.heading}>Welcome To React Fake Store</h1>
      <Link to='/shop' component={ShopButton}></Link>
    </div>
  );
}

export default Banner;
