import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Tests - App StarWars Planets Search', () => {
  test('Se o App renderiza', () => {
    render(<App />);
  
    const appElement = screen.getByText('App Component');
  
    expect(appElement).toBeInTheDocument();
  });
  
  test('Se o input Filter pode ser utilizado', () => {
    render(<App />);
    const filterInput = screen.getByTestId('name-filter');
  
    fireEvent.input(filterInput, { target: { value: 'Tatooine' } });
  
    expect(filterInput.value).toBe('Tatooine');
  });
  
  test('Se o Filter atualiza a tabela (Table)', () => {
    render(<App />);
  
    const filterInput = screen.getByTestId('name-filter');
    const filterButton = screen.getByTestId('button-filter');
  
    fireEvent.input(filterInput, { target: { value: 'Tatooine' } });
    fireEvent.click(filterButton);
  
    const tableData = screen.getAllByRole('cell');
  
    expect(tableData).toHaveLength(8);
  });  
});
