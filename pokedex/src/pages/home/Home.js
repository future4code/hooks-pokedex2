import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderHome from "../../components/headerHome/HeaderHome";
import styled from "styled-components";
import CardPokemon from "../../components/cardPokemon/CardPokemon";



export const DivCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Home = () => {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    handlePokemons();
  }, []);

  const handlePokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/")
      .then((res) => {
        setPokemon(res.data.results);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <div>
  
      <HeaderHome />
      <DivCard>
      <CardPokemon />
      
      </DivCard>
      <div>Home</div>
  
     
    </div>
  );
};

export default Home;
