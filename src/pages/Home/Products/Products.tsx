import { makeStyles, createStyles } from '@material-ui/core/styles';
import Tags from './Tags';
const useStyles = makeStyles(() =>
  createStyles({
    heading: {
      textTransform: 'uppercase',
    },
  })
);
interface Props {}

const Products = (props: Props) => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.heading}>Product overview</h1>
      <Tags />
    </div>
  );
};
export default Products;
