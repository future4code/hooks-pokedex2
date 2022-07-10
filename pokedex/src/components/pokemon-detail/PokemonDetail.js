import React from 'react'
import {DetailsDiv, ButtonGoBack, Div, InfosDiv} from './PokemonDetailStyle'

const PokemonDetail = ({pokemonDetail, seeDetails, typeColor}) => {
 
  // card de detalhes de cada pokemon
  const Card =  pokemonDetail.name && pokemonDetail.moves.length>0? <Div>
  <DetailsDiv style={{backgroundColor: `${typeColor}`}}>


    <h1>DETALHES</h1>
    <h2>{ pokemonDetail.name}</h2>  
    <img alt={`imagem do ${pokemonDetail.name}`} src={pokemonDetail.sprites.versions["generation-v"]["black-white"].animated.front_default} />
    <img alt={`imagem do ${pokemonDetail.name}`} src={pokemonDetail.sprites.versions["generation-v"]["black-white"].animated.back_default} />
    
    <div>

      <InfosDiv>

        <div>
          <h3>Type(s)</h3>
          {pokemonDetail.types.map((type)=>{
            return <p>{type.type.name}</p>
          })}
        </div>

        <div>
            <h3>Height</h3>
            <p>{pokemonDetail.height/10}m</p>
        </div>

      </InfosDiv>
        
      <InfosDiv>
          
        <div>
          <h3>Weight</h3>
          <p>{pokemonDetail.weight/10}kg</p>
        </div>
        
        <div>
          <h3>Base Stats</h3>
          {pokemonDetail.stats.map((stat)=>{
          return <p>{stat.stat.name}: {stat.base_stat}</p>
        })}
        </div>

      </InfosDiv>

          <InfosDiv>
      <div>
            <h3>Moves</h3>
            <p>{pokemonDetail.moves[0].move.name}</p><p>{pokemonDetail.moves[1].move.name}</p>
      </div>
          </InfosDiv>

        
    </div>
    <ButtonGoBack onClick={seeDetails} >x</ButtonGoBack>
  </DetailsDiv>
  </Div> 
    :
    <Div><DetailsDiv style={{backgroundColor: `${typeColor}`}} >
    <h1>nenhum detalhe encontrado</h1>
   <ButtonGoBack onClick={seeDetails} >x</ButtonGoBack> </DetailsDiv></Div>
  
  return (
   <>{Card}</>
  )
}

export default PokemonDetail