import { useRef } from 'react';
import { firstUpperCase } from 'utils/funcs';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { MouseEvent, MouseEventHandler } from 'react';
const useStyles = makeStyles(() =>
  createStyles({
    tag: {
      color: '#888',
      marginRight: '2rem',
      cursor: 'pointer',
      borderBottom: '1px solid transparent',
      transition: 'all 0.4s ease',
      '&:hover , &.active': {
        color: '#333',
        borderColor: '#333',
      },
    },
  })
);
interface Props {
  tag: string;
  handleClick: MouseEventHandler<HTMLSpanElement>;
  customClass?: string;
}

const Tag = (props: Props) => {
  const ref = useRef(null);
  const classes = useStyles();

  return (
    <span
      ref={ref}
      onClick={props.handleClick}
      className={`tagItem ${classes.tag} ${props.customClass}`}>
      {firstUpperCase(props.tag)}
    </span>
  );
};

export default Tag;
