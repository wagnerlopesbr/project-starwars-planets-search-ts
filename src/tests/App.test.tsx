import { act, render, screen, waitFor } from '@testing-library/react';
import {vi} from 'vitest';
import planetsData from '../mocks/planetsData';
import App from '../App';

describe('Tests - App StarWars Planets Search', () => {
  test('O cabeçalho da tabela aparece corretamente', async () => {
    const MOCK_RETURN = { json: async () => planetsData } as Response;
    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RETURN);

    await act(async () => {
      render(<App />);
    });

    await waitFor(() => screen.getByText('Name'));
    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Rotation period')).toBeInTheDocument();
    expect(screen.getByText('Orbital period')).toBeInTheDocument();
    expect(screen.getByText('Diameter')).toBeInTheDocument();
    expect(screen.getByText('Climate')).toBeInTheDocument();
    expect(screen.getByText('Gravity')).toBeInTheDocument();
    expect(screen.getByText('Terrain')).toBeInTheDocument();
    expect(screen.getByText('Surface water')).toBeInTheDocument();
    expect(screen.getByText('Population')).toBeInTheDocument();
    expect(screen.getByText('Residents')).not.toBeInTheDocument();
    expect(screen.getByText('Films')).toBeInTheDocument();
    expect(screen.getByText('Created')).toBeInTheDocument();
    expect(screen.getByText('Edited')).toBeInTheDocument();
    expect(screen.getByText('URL')).toBeInTheDocument();
  });

  test('O render funciona corretamente', async () => {
    const MOCK_RETURN = { json: async () => planetsData } as Response;
    vi.spyOn(global, 'fetch').mockResolvedValue(MOCK_RETURN);

    await act(async () => {
      render(<App />);
    });

    await waitFor(() => screen.getByText('Tatooine'));
    expect(screen.getByText('Tatooine')).toBeInTheDocument();
    expect(screen.getByText('Alderaan')).toBeInTheDocument();
    expect(screen.getByText('Yavin IV')).toBeInTheDocument();
    expect(screen.getByText('Hoth')).toBeInTheDocument();
    expect(screen.getByText('Dagobah')).toBeInTheDocument();
    expect(screen.getByText('Bespin')).toBeInTheDocument();
    expect(screen.getByText('Endor')).toBeInTheDocument();
    expect(screen.getByText('Naboo')).toBeInTheDocument();
    expect(screen.getByText('Coruscant')).toBeInTheDocument();
    expect(screen.getByText('Kamino')).toBeInTheDocument();
  });
});
