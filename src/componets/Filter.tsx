import { useContext, useEffect, useState } from 'react';
import { PlanetsContext } from '../context/Provider';
import useFilter from '../hooks/useFilter';
import { ColumnOptionsType, ComparisonOptionsType } from '../types';

function Filter() {
  const { planetsFilter, selectFilter } = useContext(PlanetsContext);
  const [inputFilter, setInputFilter] = useState('');

  const { filter, handleFilter } = useFilter({
    columnFilter: 'population' as ColumnOptionsType,
    comparisonFilter: 'maior que' as ComparisonOptionsType,
    valueFilter: 0,
  });

  const columnFields = [
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water'
  ];

  const comparisonFields = [
    'maior que',
    'menor que',
    'igual a'
  ];
  
  useEffect(() => {
    planetsFilter(inputFilter);
  }, [inputFilter, planetsFilter]);

  return (
    <div>
      <div>
        <input
          type="text"
          value={ inputFilter }
          onChange={ ({ target }) => setInputFilter(target.value) }
          data-testid="name-filter"
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
          { columnFields.map((column) => (
            <option key={ column } value={ column }>{column}</option>
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
          { comparisonFields.map((comparison) => (
            <option key={ comparison } value={ comparison }>{comparison}</option>
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
      <button
        data-testid="button-filter"
        onClick={ () => selectFilter({
          column: filter.columnFilter,
          comparison: filter.comparisonFilter,
          value: Number(filter.valueFilter),
        }) }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filter;
