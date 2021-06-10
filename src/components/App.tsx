import { useState } from 'react';
import './App.css';
import { SignIn } from './Signin';
import { Main } from './Main';

function App() {
  const [name, setName] = useState('');
  console.log(name);

  return name === '' ? <SignIn setName={setName} /> : <Main name={name} />;
}

export default App;
