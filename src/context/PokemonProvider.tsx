import React, { useEffect, useState } from "react";
import { PokemonContext } from "./PokemonContext";
import { useForm } from "../hook/useForm";

interface PokemonData {
  id: number;
  name: string;
  image: string;
  weight: number;
  abilities: string[];
}

interface PokemonProviderProps {
  children: React.ReactNode;
}

const PokemonProvider: React.FC<PokemonProviderProps> = ({ children }) => {
  const [allPokemon, setAllPokemon] = useState<PokemonData[]>([]);
  const [globalPokemon, setGlobalPokemon] = useState<PokemonData[]>([]);
  const [offset, setOffset] = useState(0);

  // Custom Hook - useForm
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  // Estados Para la App
  const [loading, setLoading] = useState<boolean>(true);
  const [active, setActive] = useState<boolean>(false);

  // Listar 50 Pokémon
  const getAllPokemon = async (limit = 50) => {
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
    setAllPokemon((prevAllPokemon) => [...prevAllPokemon, ...results]);
    setLoading(false);
  };

  // Listar todos los Pokémon
  const getGlobalPokemon = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    const promises: Promise<PokemonData>[] = data.results.map(
      async (pokemon: { url: string }) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        return data;
      }
    );
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
  }, []);

  useEffect(() => {
    getGlobalPokemon();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemon,
        globalPokemon,
        getPokemonById,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
