import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { AvatarGenerator } from 'random-avatar-generator';
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    avatar: {
      marginRight: '2rem',
    },
    heading: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

interface Props {}

const Review = (props: Props) => {
  const classes = useStyles();
  const generator = new AvatarGenerator();
  generator.generateRandomAvatar();
  return (
    <div className={classes.container}>
      <div className={classes.avatar}>
        <Avatar
          className={classes.large}
          src={generator.generateRandomAvatar()}
        />
      </div>
      <div>
        <div className={classes.heading}>
          <h3>John</h3>
          <Rating name='read-only' value={4} readOnly />
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. At laborum
          placeat nihil error explicabo voluptas nesciunt consequuntur excepturi
          velit iusto?
        </p>
      </div>
    </div>
  );
};

export default Review;
