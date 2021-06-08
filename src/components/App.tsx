import { useState } from 'react';
import './App.css';
import { SignIn } from './Signin';

function App() {
  const [name, setName] = useState('');
  console.log(name);

  return <SignIn setName={setName} />;
}

export default App;
