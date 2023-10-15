import { useState } from 'react';

function useSearch<T>(initialState: T) {
  const [search, setSearch] = useState(initialState);

  const handleSearch = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target;
    setSearch({
      ...search,
      [name]: value,
    });
  };

  const resetSearch = () => {
    setSearch(initialState);
  };

  return {
    search,
    handleSearch,
    resetSearch,
  };
}

export default useSearch;
