import { FlatList, SafeAreaView, Text, View, StyleSheet } from "react-native";
import React, { Component, Context } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { PokemonDetails } from "../interfaces/PokemonDetails";
import FavouritePokemonListItem from "../components/FavouritePokemonListItem";

export class FavouritePokemonsScreen extends Component {
  static contextType = PokemonContext;

  declare context: React.ContextType<typeof PokemonContext>;

  render() {
    const { favouritePokemons } = this.context;

    return (
      <SafeAreaView>
        <FlatList<PokemonDetails>
          data={favouritePokemons}
          keyExtractor={(pokemonDetails) => pokemonDetails.id.toString()}
          renderItem={({ item }) => (
            <FavouritePokemonListItem pokemonDetails={item} />
          )}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  rowcontainer: {
    flex: 1,
    flexDirection: "column",
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  title: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 30,
  },
  text: {
    padding: 10,
    fontSize: 20,
  },
  delete: {
    alignSelf: "flex-end",
    padding: 8,
    fontSize: 15,
  },
});

export default FavouritePokemonsScreen;
