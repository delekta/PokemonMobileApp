import React from 'react';
import { FavouritePokemonsState, PokemonDetails } from '../interfaces/pokemonDetails';
import Context from './context';
export default class GlobalState extends React.Component {
    state: FavouritePokemonsState = {
        favouritePokemons: [],
    }

    addFavouritePokemon = (pokemon: PokemonDetails) => {
        const list: Array<PokemonDetails> = [...this.state.favouritePokemons, pokemon];
        this.setState({ favouritePokemons: list });
    };

    removeFavouritePokemon = (pokemonId: number) => {
        this.setState({
            favouritePokemons: this.state.favouritePokemons.filter(pokemon => pokemon.id != pokemonId)
        });
    };

    isFavouritePokemon = (pokemonId: number): boolean => {
        return this.state.favouritePokemons.some((pokemonDetails) => pokemonDetails.id === pokemonId)
    };

    render() {
        return (
            <Context.Provider
                value={{
                    favouritePokemons: this.state.favouritePokemons,
                    addFavouritePokemon: this.addFavouritePokemon,
                    removeFavouritePokemon: this.removeFavouritePokemon,
                    isFavouritePokemon: this.isFavouritePokemon
                }}
            >
                {this.props.children}
            </Context.Provider>
        );
    }
}