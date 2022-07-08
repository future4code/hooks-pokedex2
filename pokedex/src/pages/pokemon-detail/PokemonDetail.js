import React from 'react'
import styled from 'styled-components'

const DetailsDiv = styled.div`
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
height: calc(350px*1.5);
width: calc(300px*1.5);
overflow-y: scroll;
display: flex;
flex-direction: column;
align-items: center;
position: relative;
scrollbar-width:none;
    -ms-overflow-style:none;
    
    h1,h2,h3{
      -webkit-text-stroke: 1px black;
      text-transform: uppercase;
      color: white;
    }
    p{
      color: white;
    }

    &::-webkit-scrollbar{
    width:0;
    height:0;
  }

&>div{
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;

  &>div{
    margin-bottom: 15px;
  }
}

img{
  filter: drop-shadow(5px 5px 5px #222);
  position: relative;
  &:after {
    /* content:"";
    box-shadow: 0 5px 5px 2px #000;
    border-radius: 50%;
    bottom: 5px;
    height: 5px;
    left: 50%;
    margin-left: -190px;
    position: absolute;
    width: 380px;
    z-index: -1; */
  }

  height: 200px;
  /* min-width: 100px; */
  width: 200px;
}
img:nth-of-type(1){
  align-self: flex-end;
}
img:nth-of-type(2){
  align-self: flex-start;
}
`
const ButtonGoBack = styled.button`
position: fixed;
margin-left: 510px;
transition: 300ms;
background-color: transparent;
&:hover{
  transition: 300ms;
  background-color: red;
}

font-size: 1.5em;
font-weight: 600;
border-radius: 50%;

cursor: pointer;
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
z-index: 1;
`

const InfosDiv = styled.div`
width: 100%;
display: flex;
justify-content: space-evenly;
text-align: center;
&>div{
  width: 50%;
}
`



const PokemonDetail = ({pokemonDetail, seeDetails, typeColor}) => {
 

  const Card =  pokemonDetail.name && <Div>
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
          <h3>Stats</h3>
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
  
  return (
   <>{Card}</>
  )
}

export default PokemonDetail