import { createContext } from "react";

interface PokemonContext {}

export const PokemonContext = createContext<PokemonContext | undefined>(undefined);