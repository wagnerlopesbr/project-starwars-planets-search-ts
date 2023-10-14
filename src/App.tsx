import React from 'react';
import './App.css';
import Table from './componets/Table';
import Filter from './componets/Filter';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div data-testid='app-component'>
        <Filter />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
