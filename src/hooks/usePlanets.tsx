import { useCallback, useEffect, useState } from 'react';
import { PlanetsType } from '../types';

function usePlanets() {
  const [planets, setPlanets] = useState<PlanetsType[]>([]);
  const [loading, setLoading] = useState(false);
  const [filteredPlanets, setFilteredPlanets] = useState<PlanetsType[]>(planets);

  const fetchPlanets = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://swapi.dev/api/planets');
      const data = await response.json();
      const dataPlanets = data.results.map((planet: PlanetsType) => {
        const { residents, ...rest } = planet; // "separando" a chave 'residents' do objeto
        return rest;
      });
      setPlanets(dataPlanets);
      setFilteredPlanets(dataPlanets);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const planetsFilter = useCallback((search: string) => {
    if (search.length > 0) { // se a busca tiver conteúdo, filtra os planetas
      setFilteredPlanets(planets.filter((planet) => planet.name.includes(search)));
    } else { // se não, exibe a lista completa de planetas
      setFilteredPlanets(planets);
    }
  }, [planets]);

  return { filteredPlanets, loading, planetsFilter };
}

export default usePlanets;
