import { FlatList, SafeAreaView, Text, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import context from '../state/context';
import { PokemonDetails } from '../interfaces/pokemonDetails';
import FavouritePokemonListItem from '../components/FavouritePokemonListItem';

export class FavouritePokemonsScreen extends Component {
  static contextType = context;

  render() {
    return (
      <SafeAreaView>
        <FlatList<PokemonDetails>
          data={this.context.favouritePokemons}
          keyExtractor={pokemonDetails => pokemonDetails.id}
          renderItem={({ item }) => (
            <FavouritePokemonListItem
              pokemonDetails={item}
            />
          )}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  rowcontainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'gray'
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 30,
  },
  text: {
    padding: 10,
    fontSize: 20
  },
  delete: {
    alignSelf: 'flex-end',
    padding: 8,
    fontSize: 15,
  }
});

export default FavouritePokemonsScreen