import { useEffect, useState } from 'react';
import { PlanetsType } from '../types';

function usePlanets() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<PlanetsType[]>([]);

  const fetchPlanets = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://swapi.dev/api/planets');
      const APIData = await response.json();
      setData(APIData.results.map((planet: any) => {
        const { residents, ...rest } = planet;
        return rest;
      }));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return { data, loading };
}

export default usePlanets;
