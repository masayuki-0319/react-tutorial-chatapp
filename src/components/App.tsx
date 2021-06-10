import { useState } from 'react';
import './App.css';
import { SignIn } from './Signin';
import { Main } from './Main';
import config from '../config.json';

function App() {
  const [name, setName] = useState('');
  console.log(config);

  return config.signInEnabled === true && name === '' ? (
    <SignIn setName={setName} />
  ) : (
    <Main name={name} />
  );
}

export default App;
