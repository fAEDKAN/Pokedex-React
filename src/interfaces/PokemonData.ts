export interface PokemonData {
  id: number;
  name: string;
  image: string;
  height: number;
  weight: number;
  stats: StatsData[];
  abilities: AbilityData[];
  sprites: SpritesData;
  types: TypeData[];
}

interface AbilityData {
  ability: {
    name: string;
  };
}

interface SpritesData {
  other: {
    home: any;
    dream_world: {
      front_default: string;
    };
  };
}

interface TypeData {
  type: {
    name: string;
  };
}

interface StatsData {
    stat: any;
    base_stat: number;
}
