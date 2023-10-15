import { useState } from 'react';
import { FilterOptionType, FilterType, ColumnOptionsType } from '../types';

function useFilter(): FilterType {
  const [filterList, setFilterList] = useState<FilterOptionType[]>([]);
  const addFilter = (newFilter: FilterOptionType) => {
    setFilterList([...filterList, newFilter]);
  };

  const removeFilter = (column: ColumnOptionsType) => {
    setFilterList(filterList.filter((f) => f.column !== column));
  };

  const clearFilters = () => setFilterList([]);

  return {
    filterList,
    addFilter,
    removeFilter,
    clearFilters,
  };
}

export default useFilter;
