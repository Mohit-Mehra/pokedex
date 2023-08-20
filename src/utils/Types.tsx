export interface AppTypeInitialState {
  toasts: string[];
}

export interface PokemonTypeInitialState {
  allPokemon: undefined | genericPokemonType[];
  randomPokemons: undefined | generatedPokemonTypes[];
  compareQueue: generatedPokemonTypes[];
}
export interface genericPokemonType {
  name: string;
  url: string;
}

export interface generatedPokemonTypes {
  name: string;
  id: number;
  image: string;
  types: pokemonTypesInterface[];
}
export interface pokemonTypesInterface {
  [key: string]: {
    image: string;
    resistance: string[];
    strength: string[];
    weakness: string[];
    vulnerable: string[];
  };
}

export interface userPokemonsTypes extends generatedPokemonTypes {
  firebaseId?: string;
}

export type pokemonStatType =
  | "vulnerable"
  | "weakness"
  | "strength"
  | "resistance";
