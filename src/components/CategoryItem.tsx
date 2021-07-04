import { makeStyles, createStyles } from '@material-ui/core/styles';
import { firstUpperCase } from 'utils/funcs';
interface Props {
  img: string;
  alt: string;
  desc: string;
}
const useStyles = makeStyles(() =>
  createStyles({
    imageContainer: {
      position: 'relative',
    },
    title: {
      position: 'absolute',
      top: '10%',
      left: '10%',
      color: '#000',
      zIndex: 2,

      margin: 0,
    },
    desc: {
      position: 'absolute',
      top: '25%',
      left: '10%',
      color: '#555',
      zIndex: 2,
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
      border: '1px solid #ddd',
    },
  })
);

const CategoryItem = (props: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.imageContainer}>
      <h2 className={classes.title}>{firstUpperCase(props.alt)}</h2>
      <small className={classes.desc}>{firstUpperCase(props.desc)}</small>
      <img className={classes.img} src={props.img} alt={props.alt} />
    </div>
  );
};

export default CategoryItem;
