import React, { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "../hook/useForm";
import { PokemonData } from "../interfaces/PokemonData";
import { PokemonContext } from "./PokemonContext";

interface PokemonContextData {
  valueSearch: string;
  onInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onResetForm: () => void;
  allPokemon: PokemonData[];
  globalPokemon: PokemonData[];
  getPokemonById: (id: string | undefined) => Promise<PokemonData>;
  onClickLoadMore: React.MouseEventHandler<HTMLButtonElement>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  handleCheckbox: (e: React.ChangeEvent<HTMLInputElement>) => void;
  filteredPokemon: PokemonData[];
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
    setAllPokemon([...allPokemon, ...results]);
    setLoading(false);
  };

  // Listar todos los Pokémon
  const getGlobalPokemon = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
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
  const getPokemonById = async (
    id: string | undefined
  ): Promise<PokemonData> => {
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

  // Botón "Cargar Más"
  const onClickLoadMore: React.MouseEventHandler<HTMLButtonElement> = () => {
    setOffset(offset + 50);
  };

  // Función de filtrado + State
  const [typeSelected, setTypeSelected] = useState({
    grass: false,
    normal: false,
    fighting: false,
    flying: false,
    posion: false,
    ground: false,
    rock: false,
    bug: false,
    ghost: false,
    steel: false,
    fire: false,
    water: false,
    electric: false,
    psychic: false,
    ice: false,
    dragon: false,
    dark: false,
    fairy: false,
    unknown: false,
    shadow: false,
  });

  const [filteredPokemon, setFilteredPokemon] = useState<PokemonData[]>([]);

  const handleCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
    setTypeSelected({
      ...typeSelected,
      [e.target.name]: e.target.checked,
    });

    if (e.target.checked) {
      const filteredResults = globalPokemon.filter((pokemon) =>
        pokemon.types.map((type) => type.type.name).includes(e.target.name)
      );

      setFilteredPokemon([...filteredPokemon, ...filteredResults]);
    } else {
      const filteredResults = filteredPokemon.filter(
        (pokemon) =>
          !pokemon.types.map((type) => type.type.name).includes(e.target.name)
      );
      setFilteredPokemon([...filteredResults]);
    }
  };

  const contextValue: PokemonContextData = {
    valueSearch,
    onInputChange,
    onResetForm,
    allPokemon,
    globalPokemon,
    getPokemonById,
    onClickLoadMore,
    // Loader
    loading,
    setLoading,
    //Button Filter
    active,
    setActive: setActive,
    // Checkbox Filter
    handleCheckbox,
    filteredPokemon,
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;