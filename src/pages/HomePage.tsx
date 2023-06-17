import React, { useContext } from "react";
import { PokemonList } from "../components";
import { PokemonContext } from "../context/PokemonContext";
/* import { AiOutlineMenu } from "react-icons/Ai"; */
import {
  LoadMoreBtn,
  LoadMoreBtnContainer,
} from "../styles/components/FilterBar";

const HomePage: React.FC = () => {
  const { onClickLoadMore, loading } = useContext(PokemonContext);

  return (
    <>
      <PokemonList />
      {loading ? null : (
        <LoadMoreBtnContainer>
          <LoadMoreBtn onClick={onClickLoadMore}>LOAD MORE POKÉMON</LoadMoreBtn>
        </LoadMoreBtnContainer>
      )}
    </>
  );
};

export default HomePage;
