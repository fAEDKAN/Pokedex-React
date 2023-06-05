import React, { useContext } from "react";
import { FilterBar, PokemonList } from "../components";
import { PokemonContext } from "../context/PokemonContext";
import { AiOutlineMenu } from "react-icons/Ai";
import {
  FilterContainer,
  IconFilter,
  LoadMoreBtn,
  LoadMoreBtnContainer,
} from "../styles/components/FilterBar";

const HomePage: React.FC = () => {
  const { onClickLoadMore, active, setActive, loading } =
    useContext(PokemonContext);

  return (
    <>
      <FilterContainer>
        <IconFilter onClick={() => setActive(!active)}>
          <AiOutlineMenu size={80}/>
        </IconFilter>
      </FilterContainer>
      <PokemonList />
      <FilterBar />
      {loading ? null : (
        <LoadMoreBtnContainer>
          <LoadMoreBtn onClick={onClickLoadMore}>LOAD MORE</LoadMoreBtn>
        </LoadMoreBtnContainer>
      )}
    </>
  );
};

export default HomePage;
