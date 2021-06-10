import { VFC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid } from '@material-ui/core';
import { gravatarPath } from '../gravatar';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px',
  },
});

type Props = {
  name: string;
};

export const MessageInputField: VFC<Props> = ({ name }) => {
  console.log('name:', name);
  const classes = useStyles();
  const avatarPath = gravatarPath(name);

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar src={avatarPath} />
        </Grid>
        <Grid item xs={10}>
          入力
        </Grid>
        <Grid item xs={1}>
          ボタン
        </Grid>
      </Grid>
    </div>
  );
};
