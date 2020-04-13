import React from 'react';
import './App.scss';
import '../src/assets/styles/main.scss';
import BitcoinHistory from './features/BitcoinHistory';

function App() {
  return (
    <div className="full-container">
      <header className="app__header">Aboveit Hjemmeoppgave</header>
      <BitcoinHistory></BitcoinHistory>
    </div>
  );
}

export default App;
