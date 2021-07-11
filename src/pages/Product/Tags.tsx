import { MouseEvent, useState } from 'react';
import Tag from 'components/Tags/Tag';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Review from 'components/Review';
import Container from '@material-ui/core/Container';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './Tags.css';
const useStyles = makeStyles(() =>
  createStyles({
    tags: {
      display: 'flex',
      justifyContent: 'center',
      margin: '1rem 0 2rem 0',
    },
    desc: {
      color: '#666',
      lineHeight: '2',
    },
  })
);
interface Props {
  desc: string;
}

const Tags = ({ desc }: Props) => {
  const classes = useStyles();
  enum TagState {
    Description = 'description',
    Review = 'review',
  }
  const [tagState, setTagState] = useState<string | undefined>('description');
  const handleClick = (e: MouseEvent<HTMLSpanElement>) => {
    const tags = document.querySelectorAll(
      '.tagItem'
    ) as NodeListOf<HTMLSpanElement>;
    tags.forEach((t) => t.classList.remove('active'));
    e.currentTarget.classList.add('active');

    setTagState(e?.currentTarget?.dataset?.cat);
  };
  return (
    <div>
      <div className={classes.tags}>
        <Tag
          customClass='active'
          dataCat='description'
          tag='description'
          handleClick={handleClick}
        />
        <Tag dataCat='review' tag='review' handleClick={handleClick} />
      </div>
      <Container maxWidth='sm'>
        <TransitionGroup>
          {TagState.Description === tagState ? (
            <CSSTransition
              key={TagState.Description}
              unmountOnExit
              timeout={300}
              classNames='desc'>
              <p className={classes.desc}>{desc}</p>
            </CSSTransition>
          ) : null}
          {TagState.Review === tagState ? (
            <CSSTransition
              key={TagState.Review}
              unmountOnExit
              timeout={500}
              classNames='review'>
              <Review />
            </CSSTransition>
          ) : null}
        </TransitionGroup>
      </Container>
    </div>
  );
};

export default Tags;
