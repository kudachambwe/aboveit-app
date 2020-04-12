import React from 'react';
import './App.css';
import BitcoinHistory from './features/BitcoinHistory';

function App() {
  return (
    <div className="app">
      <header className="app_header">Aboveit Hjemmeoppgave</header>
      <hr/>
      <BitcoinHistory></BitcoinHistory>
    </div>
  );
}

export default App;
