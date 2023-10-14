import { useState } from 'react';

function useFilter<AnyState>(initialState: AnyState) {
  const [filter, setFilter] = useState(initialState);

  const handleFilter = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  return { filter, handleFilter };
}

export default useFilter;
