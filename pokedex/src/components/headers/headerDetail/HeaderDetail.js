import React from 'react'
import {useNavigate} from "react-router-dom";
import { goToPokedex, goToHomePage } from "../../../coordinator/Coordinator"
import { FluxoryButtons, Header, Title } from '../../../styles';

const HeaderDetail = () => {
    const navigate = useNavigate()
  return (
    <Header>
        <Title>HeaderDetail!</Title>
        <div>
          <FluxoryButtons onClick={() => goToHomePage(navigate)}>Ir para home</FluxoryButtons>
          <FluxoryButtons onClick={() => goToPokedex(navigate)}>Ir para pokedex</FluxoryButtons>
        </div>
    </Header>
  )
}

export default HeaderDetail