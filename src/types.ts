export type PlanetsType = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: string[];
  films: string[];
  created: string;
  edited: string;
  url: string;
};

export type ColumnOptionsType = 'population' |
  'orbital_period' |
  'diameter' |
  'rotation_period' |
  'surface_water';

export type ComparisonOptionsType = 'maior que' |
  'menor que' |
  'igual a';

export type FilterOptionType = {
  column: ColumnOptionsType,
  comparison: ComparisonOptionsType,
  value: number;
};