import { createContext } from "react";
import { PokemonData } from "../interfaces/PokemonData";

interface PokemonContext {
  allPokemon: PokemonData[];
  globalPokemon: PokemonData[];
  getPokemonById: (id: string | undefined) => Promise<PokemonData>;
  active: boolean;
}

export const PokemonContext = createContext<PokemonContext>({
  allPokemon: [],
  globalPokemon: [],
  getPokemonById: () => Promise.resolve({} as PokemonData),
  active: false,
});
