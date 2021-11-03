import React from 'react';
import Provider from './context/contextProvider';
import TablePlanets from './components/TablePlanets';
import './App.css';

function App() {
  return (
    <Provider>
      <TablePlanets />
    </Provider>
  );
}

export default App;
