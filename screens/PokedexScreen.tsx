import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Pokemon from '../interfaces/pokemon';
import PokemonListItem from '../components/PokemonListItem';
import { getPokemonsAPI } from '../api/pokemonAPI';


const PokedexScreen = () => {
  const [pokemons, setPokemons] = useState<ReadonlyArray<Pokemon>>([])
  const [pokemonsLimit, setPokemonsLimit] = useState<number>(20)
  const [isFetching, setIsFetching] = useState<boolean>(false)

  useEffect(() => {
    getPokemons()
  }, [pokemonsLimit])

  const getPokemons = async () => {
    setIsFetching(true)
    const json = await getPokemonsAPI(pokemonsLimit)
    setPokemons(json.results)
    setIsFetching(false)
  }

  const onRefresh = () => {
    getPokemons()
  }

  const onEndRerached = () => {
    setPokemonsLimit((pokemonsLimit + 20))
  }


  return (
    <SafeAreaView style={styles.container}>
      <FlatList<Pokemon>
        data={pokemons}
        keyExtractor={item => item.name}
        onRefresh={() => onRefresh()}
        refreshing={isFetching}
        renderItem={({ item }) => (
          <PokemonListItem
            pokemon={item}
          />
        )}
        onEndReached={onEndRerached}
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