import React from 'react'
import {useNavigate} from "react-router-dom";
import styled from 'styled-components';
import { goToPokedex} from "../../../coordinator/Coordinator"
import { FluxoryButtons, Header, Title } from '../../../styles';

const ButtonDiv = styled.div`
justify-self: end;
`

const HeaderHome = () => {
    const navigate = useNavigate()
  return (
    <Header>
        <Title>Lista de Pokémons</Title>
      <ButtonDiv>
        <FluxoryButtons onClick={() => goToPokedex(navigate)}>Pokedex</FluxoryButtons>
      </ButtonDiv>
    </Header>
  )
}

export default HeaderHome