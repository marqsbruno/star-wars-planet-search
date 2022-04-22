import React from 'react';
import './App.css';
import Table from './components/Table';
import PlanetsProvider from './context/PlanetsProvider';

function App() {
  return (
    <PlanetsProvider>
      <>
        <span>Hello, App testando!</span>
        <Table />
      </>
    </PlanetsProvider>
  );
}

export default App;
