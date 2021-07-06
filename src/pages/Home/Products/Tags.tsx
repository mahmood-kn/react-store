import Tag from './Tag';
import { MouseEvent } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useAppSelector, useAppDispatch } from 'store/hooks';
import { filterByCategory } from 'store/main';
const useStyles = makeStyles(() =>
  createStyles({
    tags: {
      margin: '2rem 0',
    },
  })
);
interface Props {}

const Tags = (props: Props) => {
  const categories = useAppSelector((state) => state.main.categories);
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const handleClick = (e: MouseEvent<HTMLSpanElement>) => {
    const tags = document.querySelectorAll(
      '.tagItem'
    ) as NodeListOf<HTMLSpanElement>;
    tags.forEach((t) => t.classList.remove('active'));
    e.currentTarget.classList.add('active');
    dispatch(filterByCategory(e.currentTarget.dataset.cat));
  };
  return (
    <div className={classes.tags}>
      <Tag
        handleClick={handleClick}
        dataCat={'all'}
        customClass='active'
        tag='all products'
      />
      {categories?.map((c, i) => (
        <Tag key={i} handleClick={handleClick} dataCat={c} tag={c} />
      ))}
    </div>
  );
};

export default Tags;
