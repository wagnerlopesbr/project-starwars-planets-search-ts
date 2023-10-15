import { useContext, useEffect, useState } from 'react';
import { PlanetsContext } from '../context/Provider';
import useFilter from '../hooks/useFilter';
import { ColumnOptionsType, ComparisonOptionsType } from '../types';

const columnFields = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function Filter() {
  const { planetsFilter, selectFilter } = useContext(PlanetsContext);
  const [inputFilter, setInputFilter] = useState('');
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);
  const [availableColumns, setAvailableColumns] = useState<string[]>(columnFields);
  const [appliedFilters, setAppliedFilters] = useState<any[]>([]);

  const { filter, handleFilter } = useFilter({
    columnFilter: 'population' as ColumnOptionsType,
    comparisonFilter: 'maior que' as ComparisonOptionsType,
    valueFilter: 0,
  });

  const comparisonFields = ['maior que', 'menor que', 'igual a'];

  useEffect(() => {
    planetsFilter(inputFilter);
  }, [inputFilter, planetsFilter]);

  const applyFilter = () => {
    selectFilter({
      column: filter.columnFilter,
      comparison: filter.comparisonFilter,
      value: Number(filter.valueFilter),
    });

    const selectedFilterText = `
      Coluna: ${filter.columnFilter} //
      Operador: ${filter.comparisonFilter} //
      Valor: ${filter.valueFilter}`;
    setSelectedFilters([...selectedFilters, selectedFilterText]);

    setAppliedFilters([...appliedFilters, filter]);

    setAvailableColumns(
      (prevColumns) => prevColumns.filter((col) => col !== filter.columnFilter),
    );
  };

  const removeFilter = (index: any) => {
    const removedFilter = appliedFilters.splice(index, 1)[0];
    setAvailableColumns((prevColumns) => [
      ...prevColumns,
      removedFilter.column,
    ]);

    selectedFilters.splice(index, 1);
    setSelectedFilters([...selectedFilters]);
    setAppliedFilters(appliedFilters);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={ inputFilter }
          onChange={ ({ target }) => setInputFilter(target.value) }
          data-testid="name-filter"
          placeholder="teste"
        />
      </div>
      <label>
        Coluna
        <select
          name="columnFilter"
          id="column-filter"
          data-testid="column-filter"
          value={ filter.columnFilter }
          onChange={ handleFilter }
        >
          {availableColumns.map((column) => (
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
          value={ filter.comparisonFilter }
          onChange={ handleFilter }
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
        value={ filter.valueFilter }
        onChange={ handleFilter }
      />
      <button data-testid="button-filter" onClick={ applyFilter }>
        Filtrar
      </button>

      <div>
        {selectedFilters.map((selectedFilter, index) => (
          <div key={ index } data-testid="filter">
            {selectedFilter}
            <button onClick={ () => removeFilter(index) }>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Filter;
