import { useContext, useState } from 'react';
import { PlanetsType } from '../types';
import { PlanetsContext } from '../context/Provider';
import Filter from './Filter';

function Table() {
  const { planets, filters } = useContext(PlanetsContext);
  const [search, setSearch] = useState('');
  const headerKeys = planets && planets.data.length > 0
    ? Object.keys(planets.data[0])
    : [];

  const { data, loading } = planets;
  const { filterList } = filters;

  const filterPlanetsByName = data.filter((planet: any) => {
    return planet.name.includes(search);
  });

  const filterPlanets = filterPlanetsByName
    .filter((p: any) => filterList.every((f: any) => {
      if (f.comparison === 'igual a') {
        return Number(p[f.column]) === f.value;
      }
      if (f.comparison === 'maior que') return Number(p[f.column]) > f.value;
      if (f.comparison === 'menor que') return Number(p[f.column]) < f.value;
      return true;
    }));

  return (
    <div data-testid="table">
      <div>
        <input
          type="text"
          value={ search }
          onChange={ ({ target }) => setSearch(target.value) }
          data-testid="name-filter"
        />
      </div>
      <Filter />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              {headerKeys.map((headerKey) => (
                <th key={ headerKey }>{headerKey}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {filterPlanets
              && filterPlanets.map((planet: PlanetsType) => (
                <tr key={ planet.name }>
                  {headerKeys.map((headerKey) => (
                    <td key={ headerKey }>
                      {planet[headerKey as keyof PlanetsType]}
                    </td>
                  ))}
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
