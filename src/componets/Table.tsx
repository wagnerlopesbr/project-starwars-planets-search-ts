import { data } from 'cypress/types/jquery';
import usePlanets from '../hooks/usePlanets';
import { PlanetsType } from '../types';

function Table() {
  const { planets, loading } = usePlanets();
  const headerKeys = planets.length > 0 ? Object.keys(planets[0]) : [];

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        (
          <table>
            <thead>
              <tr>
                {headerKeys.map((headerKey) => (
                  <th key={ headerKey }>
                    { headerKey }
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {planets.map((planet: PlanetsType) => (
                <tr key={ planet.name }>
                  {headerKeys.map((headerKey) => (
                    <td key={ headerKey }>
                      { planet[headerKey as keyof PlanetsType] }
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </div>
  )
}

export default Table;
