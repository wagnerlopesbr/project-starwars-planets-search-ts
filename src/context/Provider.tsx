import { createContext } from 'react';
import usePlanets from '../hooks/usePlanets';
import useFilter from '../hooks/useFilter';
import { ContextType } from '../types';

export const PlanetsContext = createContext({} as ContextType);

function Provider({ children }: React.PropsWithChildren) {
  const planets = usePlanets();
  const filters = useFilter();

  return (
    <PlanetsContext.Provider value={ { planets, filters } }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default Provider;
