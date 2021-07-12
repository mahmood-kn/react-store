import { makeStyles, createStyles } from '@material-ui/core/styles';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'store/hooks';
import { setQuickModal, setCurrentQuick } from 'store/main';
const useStyles = makeStyles(() =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      height: '100vh',
      margin: '1rem',
    },
    imgContainer: {
      position: 'relative',
      overflow: 'hidden',

      '&:hover $btn': {
        top: '80%',
      },
      '&:hover $image': {
        transform: 'scale(1.12)',
      },
    },
    image: {
      maxWidth: '100%',
      height: 'auto',
      transition: 'all 0.7s ease',
    },
    content: {
      display: 'flex',
      marginTop: '1rem',
      justifyContent: 'space-between',
      alignItems: 'center',
      color: '#999',
    },
    title: {
      color: '#999',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'all 0.3s ease-in',
      '&:hover': {
        color: '#8E99E6',
      },
    },
    icon: {
      fontSize: '20px',
      cursor: 'pointer',
    },
    price: {
      color: '#666',
      margin: '0.5rem 0',
    },
    btn: {
      position: 'absolute',
      left: '50%',
      top: '250%',
      transform: 'translateX(-50%)',
      transition: 'all 0.7s ease',
    },
  })
);

interface Props {
  img: string;
  alt: string;
  title: string;
  price: number;
  id: number;
}

const ProductItem = ({ img, alt, title, price, id }: Props) => {
  const classes = useStyles();

  const dispatch = useAppDispatch();
  const handleQuickModal = () => {
    dispatch(setQuickModal(true));
    dispatch(setCurrentQuick(id));
  };
  return (
    <div className={classes.container}>
      <div className={classes.imgContainer}>
        <img className={classes.image} src={img} alt={alt} />
        <Button
          className={classes.btn}
          size='small'
          onClick={handleQuickModal}
          variant='contained'>
          Quick View
        </Button>
      </div>
      <div>
        <div className={classes.content}>
          <Link to={`/product/${id}`} className={classes.title}>
            {title}
          </Link>
          <FavoriteBorderIcon className={classes.icon} />
        </div>
        <div className={classes.price}>${price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default ProductItem;
