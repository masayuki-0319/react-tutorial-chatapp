import { VFC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { MessageList } from './MessageList';
import { MessageInputField } from './MessageInputField';

const useStyles = makeStyles({
  root: {
    display: 'grid',
    height: '100vh',
    gridTemplateRows: '1fr auto',
  },
});

type Props = {
  name: string;
};

export const Main: VFC<Props> = ({ name }) => {
  const classes = useStyles();
  console.log(name);

  return (
    <div className={classes.root}>
      <MessageList />
      <MessageInputField name={name} />
    </div>
  );
};
