import React from 'react';
import './App.css';
import Table from './componets/Table';
import Provider from './context/Provider';

function App() {
  return (
    <Provider>
      <div data-testid="app-component">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
