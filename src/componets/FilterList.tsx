import { useContext } from 'react';
import { PlanetsContext } from '../context/Provider';

function FilterList() {
  const { filters } = useContext(PlanetsContext);
  const { filterList, removeFilter, clearFilters } = filters;

  return (
    <div>
      <div>
        {filterList.map((filter) => (
          <div key={ filter.column } data-testid="filter">
            <p>
              {`
                  Coluna: ${filter.column} //
                  Operador: ${filter.comparison} //
                  Valor: ${filter.value}
                `}
              <button
                type="button"
                onClick={ () => removeFilter(filter.column) }
                data-testid="filter-button"
              >
                X
              </button>
            </p>
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={ clearFilters }
        data-testid="button-remove-filters"
      >
        Remover todas filtragens
      </button>
    </div>
  );
}

export default FilterList;
