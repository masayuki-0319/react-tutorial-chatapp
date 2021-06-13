import firebase from 'firebase';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  databaseURL: process.env.REACT_APP_databaseURL,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messageRef = database.ref('messages');

type PushMessage = (props: { name: string; text: string }) => void;
export const pushMessage: PushMessage = ({ name, text }) => {
  messageRef.push({ name, text });
};
