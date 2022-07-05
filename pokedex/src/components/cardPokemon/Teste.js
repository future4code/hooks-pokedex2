
import HookTeste from "./HookTeste";
import PokeCard from "./PokeCard";

const Teste = () =>{

    const [pokemonsData] = HookTeste('pokemon')

    console.log(pokemonsData)
    const pokeCard = pokemonsData.results && pokemonsData.results.map((poke)=>{
        return <PokeCard pokemon={poke} />
    })

    return <>
    {pokeCard}
    </>
}

export default Teste