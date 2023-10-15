import { useContext } from 'react';
import { PlanetsContext } from '../context/Provider';
import useSearch from '../hooks/useSearch';
import { ColumnOptionsType, ComparisonOptionsType } from '../types';
import FilterList from './FilterList';

function Filter() {
  const { filters } = useContext(PlanetsContext);
  const { filterList, addFilter } = filters;
  const { search, handleSearch, resetSearch } = useSearch({
    columnFilter: 'population' as ColumnOptionsType,
    comparisonFilter: 'maior que' as ComparisonOptionsType,
    valueFilter: 0,
  });

  const columnFields = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ] as ColumnOptionsType[];

  const comparisonFields = ['maior que', 'menor que', 'igual a'];

  const filterColumns = filterList.map((filter) => filter.column);
  const filteredColumns = columnFields.filter((field) => !filterColumns.includes(field));

  const applyFilter = () => {
    addFilter({
      column: search.columnFilter,
      comparison: search.comparisonFilter,
      value: Number(search.valueFilter),
    });
    resetSearch();
  };

  return (
    <div>
      <label>
        Coluna
        <select
          name="columnFilter"
          id="column-filter"
          data-testid="column-filter"
          value={ search.columnFilter }
          onChange={ handleSearch }
        >
          {filteredColumns.map((column) => (
            <option key={ column } value={ column }>
              {column}
            </option>
          ))}
        </select>
      </label>
      <label>
        Operador
        <select
          name="comparisonFilter"
          id="comparison-filter"
          data-testid="comparison-filter"
          value={ search.comparisonFilter }
          onChange={ handleSearch }
        >
          {comparisonFields.map((comparison) => (
            <option key={ comparison } value={ comparison }>
              {comparison}
            </option>
          ))}
        </select>
      </label>
      <input
        type="number"
        name="valueFilter"
        data-testid="value-filter"
        value={ search.valueFilter }
        onChange={ handleSearch }
      />
      <button data-testid="button-filter" onClick={ applyFilter }>
        Filtrar
      </button>
      <FilterList />
    </div>
  );
}

export default Filter;
