import { useEffect, useState } from 'react';
import { PlanetsType } from '../types';

function usePlanets() {
  const [planets, setPlanets] = useState<PlanetsType[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPlanets = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      const dataPlanets = data.results.map((planet: PlanetsType) => {
        const { residents, ...rest } = planet; // "separando" a chave 'residentes' do objeto
        return rest;
      });
      setPlanets(dataPlanets);
    }	catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  return { planets, loading };
}

export default usePlanets;
