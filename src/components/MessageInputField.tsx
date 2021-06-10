import { VFC } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    gridRow: 2,
  },
});

type Props = {
  name: string;
};

export const MessageInputField: VFC<Props> = ({ name }) => {
  const classes = useStyles();

  return <div className={classes.root}>MessageInputField</div>;
};
