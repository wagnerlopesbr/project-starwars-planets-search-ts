import { useContext } from 'react';
import useSearch from '../hooks/useSearch';
import { ColumnOptionsType, SortType } from '../types';
import { PlanetsContext } from '../context/Provider';

const columnFields = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
] as ColumnOptionsType[];

function SortFilter() {
  const { setSort } = useContext(PlanetsContext);
  const { search, handleSearch } = useSearch(
    { column: 'population', sort: '' } as SortType,
  );

  return (
    <div style={ { display: 'flex', alignItems: 'start' } }>
      <select
        name="column"
        id="sort-filter"
        onChange={ handleSearch }
        data-testid="column-sort"
      >
        {columnFields.map((field, i) => (
          <option key={ i } value={ field }>{field}</option>
        ))}
      </select>
      <div>
        <div>
          <input
            data-testid="column-sort-input-asc"
            id="asc-input"
            type="radio"
            name="sort"
            value="ASC"
            checked={ search.sort === 'ASC' }
            onChange={ handleSearch }
          />
          <label htmlFor="asc-input">Ascendente</label>
        </div>
        <div>
          <input
            data-testid="column-sort-input-desc"
            id="dsc-input"
            type="radio"
            name="sort"
            value="DESC"
            checked={ search.sort === 'DESC' }
            onChange={ handleSearch }
          />
          <label htmlFor="dsc-input">Descendente</label>
        </div>
        <button
          data-testid="column-sort-button"
          onClick={ () => setSort(search) }
        >
          Ordenar
        </button>
      </div>
    </div>
  );
}

export default SortFilter;
