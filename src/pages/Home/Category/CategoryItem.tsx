import { makeStyles, createStyles } from '@material-ui/core/styles';
import { firstUpperCase } from 'utils/funcs';
import { Link } from 'react-router-dom';
interface Props {
  img: string;
  alt: string;
  desc: string;
}
const useStyles = makeStyles(() =>
  createStyles({
    imageContainer: {
      position: 'relative',
      cursor: 'pointer',
      '&:before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 6,
        right: -1,
        boxSizing: 'border-box',
        backgroundColor: 'transparent',
        zIndex: 2,
        transition: 'all 0.3s ease-in-out',
      },
      '&:hover': {
        '&:before': {
          backgroundColor: 'rgba(103,117,214,.8)',
        },
        '& $title': {
          color: '#fff',
        },
        '& $desc': {
          color: '#fff',
        },
        '& $shopBlock': {
          opacity: 1,
          transform: 'scale(1)',
        },
        '& $shop': {
          transform: 'translateY(0) ',
        },
      },
    },
    title: {
      position: 'absolute',
      top: '10%',
      left: '10%',
      color: '#000',
      zIndex: 12,
      margin: 0,
      transition: 'all 0.3s ease-in-out',
    },
    desc: {
      position: 'absolute',
      top: '25%',
      left: '10%',
      color: '#555',
      zIndex: 12,
      transition: 'all 0.3s ease-in-out',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      border: '1px solid #ddd',
    },
    shopBlock: {
      position: 'absolute',
      bottom: '10%',
      left: '10%',
      color: '#fff',
      margin: 0,
      textAlign: 'center',
      zIndex: 12,
      display: 'inline-block',
      transform: 'scaleX(0)',
      transition: 'all 300ms ease',
      transitionDelay: '0.3s',
      paddingBottom: '0.3rem',
      overflow: 'hidden',
      borderBottom: 'solid 2px #fff',
    },
    shop: {
      display: 'block',
      content: '""',
      transform: 'translateY(250%) ',
      transformOrigin: 'top',
      transition: 'all 500ms ease-in-out',
      transitionDelay: '0.4s',
    },
  })
);

const CategoryItem = (props: Props) => {
  const classes = useStyles();
  return (
    <Link to='/shop'>
      <div className={classes.imageContainer}>
        <h2 className={classes.title}>{firstUpperCase(props.alt)}</h2>
        <div className={classes.shopBlock}>
          <div className={classes.shop}>Shop now</div>
        </div>
        <small className={classes.desc}>{firstUpperCase(props.desc)}</small>
        <img className={classes.img} src={props.img} alt={props.alt} />
      </div>
    </Link>
  );
};

export default CategoryItem;
