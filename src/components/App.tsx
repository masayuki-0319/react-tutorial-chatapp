import { useState } from 'react';
import './App.css';
import { SignIn } from './Signin';

function App() {
  const [name, setName] = useState('');

  return <SignIn setName={setName} />;
}

export default App;
