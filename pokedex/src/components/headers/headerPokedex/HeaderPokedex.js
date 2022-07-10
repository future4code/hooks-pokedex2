import React from 'react'
import {useNavigate} from "react-router-dom";
import { goToHomePage } from '../../../coordinator/Coordinator';
import { FluxoryButtons, Header, Title } from '../../../styles';

const HeaderPokedex = () => {
  const navigate = useNavigate()
    
  return (
    <Header>
        <Title>Pokedex!!</Title>
        <FluxoryButtons onClick={()=> goToHomePage(navigate)} >Voltar</FluxoryButtons>
    </Header>
  )
}

export default HeaderPokedex