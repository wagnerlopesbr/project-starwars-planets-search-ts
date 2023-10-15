import { useContext, useState } from 'react';
import { PlanetsType } from '../types';
import { PlanetsContext } from '../context/Provider';
import Filter from './Filter';
import SortFilter from './SortFilter';

function Table() {
  const { planets, filters, sort } = useContext(PlanetsContext);
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
      if (f.comparison === 'maior que') {
        return Number(p[f.column]) > f.value;
      }
      if (f.comparison === 'menor que') {
        return Number(p[f.column]) < f.value;
      }
      return true;
    })).sort((a, b) => {
      if (sort.sort === 'ASC') {
        if (a[sort.column] === 'unknown') return 1;
        if (b[sort.column] === 'unknown') return -1;
        return Number(a[sort.column]) - Number(b[sort.column]);
      }
      if (sort.sort === 'DESC') {
        if (a[sort.column] === 'unknown') return 1;
        if (b[sort.column] === 'unknown') return -1;
        return Number(b[sort.column]) - Number(a[sort.column]);
      }
      return 1;
    });

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
      <div>
        <Filter />
        <SortFilter />
      </div>
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
                  <th data-testid="planet-name">{planet.name}</th>
                  <th>{planet.rotation_period}</th>
                  <th>{planet.orbital_period}</th>
                  <th>{planet.diameter}</th>
                  <th>{planet.climate}</th>
                  <th>{planet.gravity}</th>
                  <th>{planet.terrain}</th>
                  <th>{planet.surface_water}</th>
                  <th>{planet.population}</th>
                  <th>{planet.films}</th>
                  <th>{planet.created}</th>
                  <th>{planet.edited}</th>
                  <th>{planet.url}</th>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Table;
