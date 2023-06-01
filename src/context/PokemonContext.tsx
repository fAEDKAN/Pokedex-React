import { createContext } from "react";

interface PokemonContext {
  numero: number;
}

export const PokemonContext = createContext<PokemonContext | null>(null);
