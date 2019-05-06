import React from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import './App.css';

function App() {
  return (
    <div className="App">
      <UserInput />
      <UserOutput />
      <UserOutput />
      <UserOutput />
    </div>
  );
}

export default App;
