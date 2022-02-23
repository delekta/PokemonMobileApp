import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Pokemon } from '../interfaces/Pokemon';
import PokemonListItem from '../components/PokemonListItem';
import { getPokemonsAPI } from '../api/PokemonAPI';



const PokedexScreen = () => {
  const [pokemons, setPokemons] = useState<ReadonlyArray<Pokemon>>([])

  useEffect(() => {
    const getPokemons = async () => {
      const json = await getPokemonsAPI()
      setPokemons(json.results)
    }
    getPokemons()
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <FlatList<Pokemon>
        data={pokemons}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <PokemonListItem
            pokemon={item}
          />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#eee'
  },
  item: {
    backgroundColor: '#ddd',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  }
});

export default PokedexScreen