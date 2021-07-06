import Tag from './Tag';
import { MouseEvent } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(() =>
  createStyles({
    tags: {
      margin: '2rem 0',
    },
  })
);
interface Props {}

const Tags = (props: Props) => {
  const classes = useStyles();
  const handleClick = (e: MouseEvent<HTMLSpanElement>) => {
    const tags = document.querySelectorAll(
      '.tagItem'
    ) as NodeListOf<HTMLSpanElement>;
    tags.forEach((t) => t.classList.remove('active'));
    e.currentTarget.classList.add('active');
  };
  return (
    <div className={classes.tags}>
      <Tag handleClick={handleClick} customClass='active' tag='all products' />
      <Tag handleClick={handleClick} tag='women' />
      <Tag handleClick={handleClick} tag='men' />
    </div>
  );
};

export default Tags;
