import React from 'react'
import HeaderHome from '../../components/headerHome/HeaderHome'
import { ButtonsCard, Card } from '../../styles'
import styled from 'styled-components'

const DivImg = styled.div`
background-color: blue;
height: 250px;
width: 100%;
`

const Home = () => {
  return (
    <div>
        <HeaderHome/>
        <div>Home</div>
        <Card>
          <DivImg>a imagem do pokemon fica aqui!!</DivImg>
          <div>

          <ButtonsCard>adicionar a pokedex</ButtonsCard>
          <ButtonsCard>detalhes</ButtonsCard>
          </div>
        </Card>
    </div>
  )
}

export default Home