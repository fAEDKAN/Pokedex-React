import { createContext } from "react";
import { PokemonData } from '../interfaces/PokemonData';

interface PokemonContext {
  allPokemon: PokemonData[];
  globalPokemon: PokemonData[];
}

export const PokemonContext = createContext<PokemonContext>({
  allPokemon: [],
  globalPokemon: [],
});
