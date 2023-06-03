import React, { useEffect, useState } from "react";
import { useForm } from "../hook/useForm";
import { PokemonData } from "../interfaces/PokemonData";
import { PokemonContext } from "./PokemonContext";

interface PokemonContextData {
  valueSearch: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
  allPokemon: PokemonData[];
  globalPokemon: PokemonData[];
  getPokemonById: (id: number) => Promise<PokemonData>;
}

interface PokemonProviderProps {
  children: React.ReactNode;
}

const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const [allPokemon, setAllPokemon] = useState<PokemonData[]>([]);
  const [globalPokemon, setGlobalPokemon] = useState<PokemonData[]>([]);
  const [offset, setOffset] = useState(0);

  // Custom Hook - useForm
  const { formState, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  const { valueSearch } = formState;

  // Estados Para la App
  const [loading, setLoading] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);

  // Listar 50 Pokémon
  const getAllPokemon = async (limit = 40) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(
      `${baseURL}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const promises: Promise<PokemonData>[] = data.results.map(
      async (pokemon: { url: string }) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      }
    );
    const results = await Promise.all(promises);
    setAllPokemon(results);
    setLoading(false);
  };

  // Listar todos los Pokémon
  const getGlobalPokemon = async (limit = 100) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon?limit=${limit}&offset=0`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon: { url: string }) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);
    setGlobalPokemon(results);
    setLoading(false);
  };

  // Listar Pokémon por su ID
  const getPokemonById = async (id: number) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  useEffect(() => {
    getAllPokemon();
  }, [offset]);

  useEffect(() => {
    getGlobalPokemon();
  }, []);

  const contextValue: PokemonContextData = {
    valueSearch,
    onInputChange,
    onResetForm,
    allPokemon,
    globalPokemon,
    getPokemonById,
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
