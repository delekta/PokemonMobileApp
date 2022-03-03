import React from "react";
import {
  FavouritePokemonsState,
  PokemonDetails,
} from "../interfaces/PokemonDetails";

export interface InitPokemonContextType {
  favouritePokemons: Array<PokemonDetails>;
  addFavouritePokemon: (pokemon: PokemonDetails) => void;
  removeFavouritePokemon: (pokemonId: number) => void;
  isFavouritePokemon: (pokemonId: number) => boolean;
}

const initPokemonContext: InitPokemonContextType = {
  favouritePokemons: [],
  addFavouritePokemon: (pokemon: PokemonDetails) => {},
  removeFavouritePokemon: (pokemonId: number) => {},
  isFavouritePokemon: (pokemonId: number) => false,
};

export const PokemonContext =
  React.createContext<InitPokemonContextType>(initPokemonContext);

export default class PokemonProvider extends React.Component {
  state: FavouritePokemonsState = {
    favouritePokemons: [],
  };

  addFavouritePokemon = (pokemon: PokemonDetails) => {
    const list: Array<PokemonDetails> = [
      ...this.state.favouritePokemons,
      pokemon,
    ];
    this.setState({ favouritePokemons: list });
  };

  removeFavouritePokemon = (pokemonId: number) => {
    this.setState({
      favouritePokemons: this.state.favouritePokemons.filter(
        (pokemon) => pokemon.id != pokemonId
      ),
    });
  };

  isFavouritePokemon = (pokemonId: number): boolean => {
    return this.state.favouritePokemons.some(
      (pokemonDetails) => pokemonDetails.id === pokemonId
    );
  };

  render() {
    return (
      <PokemonContext.Provider
        value={{
          favouritePokemons: this.state.favouritePokemons,
          addFavouritePokemon: this.addFavouritePokemon,
          removeFavouritePokemon: this.removeFavouritePokemon,
          isFavouritePokemon: this.isFavouritePokemon,
        }}
      >
        {this.props.children}
      </PokemonContext.Provider>
    );
  }
}
