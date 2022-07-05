import React, { useState, useEffect } from "react";
import axios from "axios";
import { base_url } from "../../constants/Constants"

const CardPokemon = () => {
  const [pokemon, setPokemon] = useState([]);

  const setPokemonImagem = (pokemons) => {
    let arry = [];
    for (var i = 0; i < pokemons.length; i++) {
      const urlDetalhesPokemon = `${base_url}pokemon/${pokemons[i].name}`;
      // declarando um url para pegar os detalhes de cada poke
      axios
        .get(urlDetalhesPokemon)
        .then(
          (resposta) =>
          {
          console.log(resposta)
            arry.push({
              name: resposta.data.name,
              url: resposta.data.sprites.other.dream_world.front_default,
            })
        }
        )
        .catch((error) => console.log(error));
    }
    setPokemon(arry);
  };

  useEffect(() => {
    handlePokemons();
  }, []);

  const handlePokemons = () => {
    const url = `${base_url}pokemon${pokemon}`;
    axios
      .get(url)
      .then((res) => {
        setPokemonImagem(res.data.results);
      })
      .catch((erro) => {
        console.log(erro.response.data);
      });
  };

  const listPokemons = pokemon.map((pokemon) => {
    return (
      <div>
        <div>
          <div>{pokemon.name}</div>
          <img src={pokemon.url} />
          <div>
            <button>adicionar a pokedex</button>
            <button>detalhes</button>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div>
      {listPokemons}
    </div>
  );
};

export default CardPokemon;
