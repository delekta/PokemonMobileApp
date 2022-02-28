import React from 'react';
import { PokemonDetails } from '../interfaces/pokemonDetails';

export interface InitialContextType {
    favouritePokemons: Array<PokemonDetails>,
    addFavouritePokemon: (pokemon: PokemonDetails) => void,
    removeFavouritePokemon: (pokemonId: number) => void,
    isFavouritePokemon: (pokemonId: number) => boolean,
}

const initialContext: InitialContextType = {
    favouritePokemons: [],
    addFavouritePokemon: (pokemon: PokemonDetails) => { },
    removeFavouritePokemon: (pokemonId: number) => { },
    isFavouritePokemon: (pokemonId: number) => false,
}

export default React.createContext<InitialContextType>(initialContext);