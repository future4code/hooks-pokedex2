import React from 'react'
import {useNavigate} from "react-router-dom";
import styled from 'styled-components';
import { goToPokedex} from "../../coordinator/Coordinator"
import { FluxoryButtons, Header, Title } from '../../styles';

const ButtonDiv = styled.div`
justify-self: end;
`

const HeaderHome = () => {
    const navigate = useNavigate()
  return (
    <Header>
      {/* <div> */}
        <Title>Lista de Pokémons</Title>
      {/* </div> */}
      <ButtonDiv>
        <FluxoryButtons onClick={() => goToPokedex(navigate)}>Ir para pokedex</FluxoryButtons>
      </ButtonDiv>
    </Header>
  )
}

export default HeaderHome