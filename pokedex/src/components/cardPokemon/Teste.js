
// import { useContext } from "react";
// import PokeCard from "./PokeCard";
// import {PokemonsContext} from '../../GlobalStateContext/Context'

// const Teste = () =>{

//     const {states}= useContext(PokemonsContext);

//     const {pokemonsList, pokemonsListIsLoading} = states;

    

//     const pokeCard = pokemonsList && pokemonsList.map((poke, i)=>{
//         return <PokeCard key={i} pokemon={poke} />
//     })

//     return <>
//     {pokemonsListIsLoading && <p>carregando...</p>}
//     {!pokemonsListIsLoading && pokeCard}
//     </>
// }

// export default Teste