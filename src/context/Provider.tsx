import React, { createContext } from 'react';
import { PlanetsType, FilterOptionType } from '../types';
import usePlanets from '../hooks/usePlanets';

export type ContextType = {
  loading: boolean;
  filteredPlanets: PlanetsType[];
  planetsFilter: (search: string) => void;
  selectFilter: ({ column, comparison, value }: FilterOptionType) => void;
};

export const PlanetsContext = createContext({} as ContextType);

function Provider({ children }: React.PropsWithChildren) {
  const { loading, filteredPlanets, planetsFilter, selectFilter } = usePlanets();

  const contextValue = {
    loading,
    filteredPlanets,
    planetsFilter,
    selectFilter,
  };

  return (
    <PlanetsContext.Provider value={ contextValue }>
      {children}
    </PlanetsContext.Provider>
  );
}

export default Provider;
