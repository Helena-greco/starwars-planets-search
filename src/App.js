import React from 'react';
import Provider from './context/contextProvider';
import TablePlanets from './components/TablePlanets';
import Header from './components/Header';
import FilterInputs from './components/FilterInputs';
import './App.css';

function App() {
  return (
    <Provider>
      <Header />
      <FilterInputs />
      <TablePlanets />
    </Provider>
  );
}

export default App;
