import React from 'react'
import styled from 'styled-components'
import HeaderDetail from '../../components/headerDetail/HeaderDetail'

const DetailsDiv = styled.div`
height: calc(350px*1.5);
width: calc(250px*1.5);
background-color: aquamarine;
overflow-y: scroll;
display: flex;
flex-direction: column;
align-items: center;

div{
  display: flex;
flex-direction: column;
align-items: center;
}
`

const Div = styled.div`
position: fixed;
height: 100vh;
width: 100vw;
top: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(255,255,255,0.5);
`

const PokemonDetail = ({pokemonDetail, seeDetails}) => {
 

  const Card =  pokemonDetail.name && <Div>
  <DetailsDiv>
    <h1>PokemonDetail</h1>
    <h2>{ pokemonDetail.name}</h2>  
    <img src={pokemonDetail.sprites.front_default} />
    <img src={pokemonDetail.sprites.back_default} />
    
    <h3>Type(s)</h3>
    {pokemonDetail.types.map((type)=>{
      return <p>{type.type.name}</p>
      })}
      <h3>Height</h3>
      <p>{pokemonDetail.height/10}m</p>
      
      <h3>Weight</h3>
      <p>{pokemonDetail.weight/10}kg</p>
      
      <div>
        <h3>Stats</h3>
        {pokemonDetail.stats.map((stat)=>{
        return <p>{stat.stat.name}: {stat.base_stat}</p>
      })}</div>
      <div>
        <h3>Moves</h3>
        <p>{pokemonDetail.moves[0].move.name}</p><p>{pokemonDetail.moves[1].move.name}</p></div>
    <button onClick={seeDetails} >go back</button>
  </DetailsDiv>
  </Div>
  
  return (
   <>{Card}</>
  )
}

export default PokemonDetail