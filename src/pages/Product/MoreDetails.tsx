import { makeStyles, createStyles } from '@material-ui/core/styles';
import Tags from './Tags';
const useStyles = makeStyles(() =>
  createStyles({
    container: {
      border: '1px solid #e6e6e6',
      padding: '2rem',
      marginBottom: '2rem',
    },
  })
);

interface Props {
  desc: string;
}

const MoreDetails = ({ desc }: Props) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Tags desc={desc} />
    </div>
  );
};

export default MoreDetails;
