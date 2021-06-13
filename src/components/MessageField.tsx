import { TextField } from '@material-ui/core';
import { VFC, useState } from 'react';

type Props = {
  name: string;
  text: string;
  setText: (args?: any) => any;
};

export const MessageField: VFC<Props> = ({ name, text, setText }) => {
  const [isComposed, setIsComposed] = useState(false);

  console.log(name);

  return (
    <TextField
      fullWidth
      value={text}
      onChange={(e) => setText(e.target.value)}
      onKeyDown={(e: any) => {
        if (isComposed === true) return;

        const text = e.target.value;
        if (text === '') return;

        if (e.key === 'Enter') {
          console.log('push message to firebase!');

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
