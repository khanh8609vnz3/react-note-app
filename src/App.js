import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import Counter from './pages/Couter';

function App() {
  return (
    <div style={{textAlign: 'center'}} className="App">
      <Counter data="5"/>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
