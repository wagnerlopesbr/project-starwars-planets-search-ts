import { useContext } from 'react';
import { PlanetsType } from '../types';
import { PlanetsContext } from '../context/Provider';

function Table() {
  const { filteredPlanets, loading } = useContext(PlanetsContext);
  const headerKeys = filteredPlanets && filteredPlanets.length > 0
    ? Object.keys(filteredPlanets[0])
    : [];

  return (
    <div data-testid='table'>
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
              {filteredPlanets && filteredPlanets.map((planet: PlanetsType) => (
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
  );
}

export default Table;
