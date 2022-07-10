import React  from "react";
import HeaderHome from "../../components/headers/headerHome/HeaderHome";
import styled from "styled-components";
import CardPokemon from "../../components/cardPokemon/CardPokemon";

export const DivCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content:center;
`
const Home = () => {

  return (
    <div>
  
      <HeaderHome />
      
      <DivCard>
        <CardPokemon />
      </DivCard>
   
    </div>
  );
};

export default Home;
