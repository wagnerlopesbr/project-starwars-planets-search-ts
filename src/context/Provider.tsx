import { createContext, useState } from 'react';
import usePlanets from '../hooks/usePlanets';
import useFilter from '../hooks/useFilter';
import { ContextType, SortType } from '../types';

export const PlanetsContext = createContext({} as ContextType);

function Provider({ children }: React.PropsWithChildren) {
  const planets = usePlanets();
  const filters = useFilter();
  const [sort, setSort] = useState<SortType>({ column: 'population', sort: '' });

  return (
    <PlanetsContext.Provider value={ { planets, filters, sort, setSort } }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default Provider;
