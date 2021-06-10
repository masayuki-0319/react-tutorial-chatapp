import { makeStyles } from '@material-ui/core';
import { VFC } from 'react';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

export const MessageList: VFC = () => {
  const classes = useStyles();

  return <div className={classes.root}>MessageList</div>;
};
