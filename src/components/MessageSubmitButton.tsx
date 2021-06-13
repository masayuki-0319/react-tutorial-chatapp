import { VFC } from 'react';
import { IconButton } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { pushMessage } from '../api/firebase';

type Props = {
  name: string;
  text: string;
  setText: (args?: any) => any;
};

export const MessageSubmitButton: VFC<Props> = ({ name, text, setText }) => {
  return (
    <IconButton
      disabled={text === ''}
      onClick={() => {
        pushMessage({ name: 'Example Name', text });
        setText('');
      }}
    >
      <SendIcon />
    </IconButton>
  );
};
