import React from "react";
import { userPokemonsTypes } from "../utils/Types";

export const PokemonCardGrid = ({
  pokemons,
}: {
  pokemons: userPokemonsTypes[];
}) => {
  console.log(pokemons);
  return (
    <div className="pokemon-card-grid-container">
      <div className="pokemon-card-grid">
        {pokemons &&
          pokemons.length > 0 &&
          pokemons?.map((data: userPokemonsTypes) => {
            return (
              <div className="pokemon-card" key={data.id}>
                <div className="pokemon-card-list"></div>
                <div className="pokemon-cars-compare"></div>
                <h3 className="pokemon-card-title">{data.name}</h3>
                <img src={data.image} alt="pokemon" className="pokemon-card-image"/>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default PokemonCardGrid;
