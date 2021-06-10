import { VFC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Grid } from '@material-ui/core';

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
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={1}>
          <Avatar />
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
