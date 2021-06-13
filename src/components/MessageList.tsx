import { makeStyles } from '@material-ui/core';
import { VFC, useState, useEffect } from 'react';
import { messageRef } from '../api/firebase';

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  },
});

type Message = {
  key?: string;
  name: string;
  text: string;
};

export const MessageList: VFC = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  const classes = useStyles();

  useEffect(() => {
    messageRef
      .orderByKey()
      .limitToLast(3)
      .on('value', (snapshot) => {
        const response = snapshot.val();
        console.log('Not found messages');
        if (response === null) return;

        const entries = Object.entries(response);
        const newMessages = entries.map((entry) => {
          const [key, message] = entry;

          return { key, ...(message as Message) };
        });

        setMessages(newMessages);
      });
  }, []);
  console.log('Out useEffect', messages);

  return <div className={classes.root}>MessageList</div>;
};
