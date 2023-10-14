import { useContext, useEffect, useState } from 'react';
import { PlanetsContext } from '../context/Provider';

function Filter() {
  const { planetsFilter } = useContext(PlanetsContext);
  const [inputFilter, setInputFilter] = useState('');

  useEffect(() => {
    planetsFilter(inputFilter);
  }, [inputFilter, planetsFilter]);

  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ inputFilter }
        onChange={ ({ target }) => setInputFilter(target.value) }
      />
    </div>
  );
}

export default Filter;
