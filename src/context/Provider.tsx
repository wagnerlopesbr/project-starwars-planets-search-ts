import React, { createContext } from 'react';
import { PlanetsType } from '../types';
import usePlanets from '../hooks/usePlanets';

export type ContextType = {
  loading: boolean;
  filteredPlanets: PlanetsType[];
  planetsFilter: (search: string) => void;
};

export const PlanetsContext = createContext({} as ContextType);

function Provider({ children }: React.PropsWithChildren) {
  const { loading, filteredPlanets, planetsFilter } = usePlanets();

  const contextValue = {
    loading,
    filteredPlanets,
    planetsFilter,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default Provider;
