import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonStatsType, pokemonTypesInterface } from "../../utils/Types";
import { RootState } from "../store";

export const appPokemonToList = createAsyncThunk(
    "pokemon/addPokemon",
    async (pokemon: {
        id: number;
        name: string;
        types: pokemonTypesInterface[] | string[];
        stats?: pokemonStatsType[];
    }, { getState, dispatch }) => {
        try {
            const { app: { userInfo }, pokemon: { userPokemons } } = getState() as RootState;
        } catch (err) {
            console.log(err)
        }
    }
);
