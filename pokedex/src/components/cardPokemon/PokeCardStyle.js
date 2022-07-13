import styled from "styled-components"

export const Img = styled.img`
width: 100%;
height: 200px;
filter: drop-shadow(0 0 20px black) ;
`

export const DivImg = styled.div`
  height: 250px;
  width: 100%;
  `

export const defineBgColor = (pokemon)=>{
    if(pokemon.name){ 
      switch (pokemon.types[0].type.name) {
      case 'dark':
        return '#030404'
        
      case 'dragon':
        return '#018A95'
        ;
      case 'eletric':
        return '#E1E400'
        
      case 'fairy':
        return '#B11344'
        ;
      case 'fighting':
        return '#AF3E1C'
        
      case 'bug':
        return '#024A1C'
        ;
      case 'fire':
        return '#C81A1C'
        ;
      case 'flying':
        return '#85B3C8'
        
      case 'ghost':
        return '#936E90'
        ;
      case 'psychic':
        return '#bb1d6a'
        
      case 'poison':
        return '#6b2991'
        ;
      case 'normal':
        return '#a58a90'
        
      case 'ice':
        return '#4cd4f8'
        ;
      case 'ground':
        return '#77440f'
        
      case 'grass':
        return '#00cc46'
        
      case 'water':
        return ' #71a5f7'
        
      case 'steel':
        return '#338473'
        
      case 'rock':
        return '501204'
        
      default:
        return 'pink'
     }}
  }
