import { createContext } from "react";
import { PokemonData } from "../interfaces/PokemonData";

interface PokemonContext {
  allPokemon: PokemonData[];
  globalPokemon: PokemonData[];
  getPokemonById: (id: string | undefined) => Promise<PokemonData>;
  onClickLoadMore: React.MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PokemonContext = createContext<PokemonContext>({
  allPokemon: [],
  globalPokemon: [],
  getPokemonById: () => Promise.resolve({} as PokemonData),
  onClickLoadMore: () => {},
  loading: true,
  setLoading: () => {},
  active: false,
  setActive: () => {},
});
