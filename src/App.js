import React from 'react';
import './App.css';
import Headers from './header';
import Home from './Home'


function App() {
  return (
    // BEM
    <div className="App">
      {/* header */}
      <Headers />
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
