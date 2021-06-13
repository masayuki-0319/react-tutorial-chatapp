import { TextField } from '@material-ui/core';
import { VFC, useState } from 'react';
import { pushMessage } from '../api/firebase';

type Props = {
  name: string;
  text: string;
  setText: (args?: any) => any;
  inputEl: React.MutableRefObject<null>;
};

export const MessageField: VFC<Props> = ({ name, text, setText, inputEl }) => {
  const [isComposed, setIsComposed] = useState(false);

  return (
    <TextField
      fullWidth
      autoFocus
      inputRef={inputEl}
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e: any) => {
        if (isComposed === true) return;

        const text = e.target.value;
        if (text === '') return;

        if (e.key === 'Enter') {
          console.log('push message to firebase!');
          pushMessage({ name: 'Example Name', text });

          setText('');
          e.preventDefault();
        }
      }}
      onCompositionStart={() => {
        setIsComposed(true);
      }}
      onCompositionEnd={() => {
        setIsComposed(false);
      }}
    />
  );
};
