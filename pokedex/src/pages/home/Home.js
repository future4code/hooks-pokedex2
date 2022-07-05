import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderHome from "../../components/headerHome/HeaderHome";
import { ButtonsCard, Card } from "../../styles";
import styled from "styled-components";
import CardPokemon from "../../components/cardPokemon/CardPokemon";

const DivImg = styled.div`
  background-color: blue;
  height: 250px;
  width: 100%;
`;

const DivCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
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
        // console.log(res.data.results)
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  const listPokemons = pokemon.map((pokemon) => {
    return (
      <div>
        <Card>
          <DivImg>{pokemon.name}</DivImg>
          <div>
            <ButtonsCard>adicionar a pokedex</ButtonsCard>
            <ButtonsCard>detalhes</ButtonsCard>
          </div>
        </Card>
      </div>
    );
  });
  return (
    <div>
  
      <HeaderHome />
      <DivCard>
      
      </DivCard>
      <CardPokemon />
      <div>Home</div>
      <CardPokemon />
  
     
    </div>
  );
};

export default Home;
