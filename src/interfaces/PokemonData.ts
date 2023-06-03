export interface PokemonData {
  id: number;
  name: string;
  image: string;
  weight: number;
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
