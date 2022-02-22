import { View, Text, StyleSheet, FlatList, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack';
import type { RootStackParamList } from '../components/TabNavigator';


interface Pokemon {
  name: string;
  url: string;
}

interface ListItemProps {
  pokemon: Pokemon
}

type PokemonDetailsScreenProp = StackNavigationProp<RootStackParamList, 'PokemonDetails'>;

const ListItem = ({ pokemon }: ListItemProps) => {
  const navigation = useNavigation<PokemonDetailsScreenProp>()

  return (
    <TouchableOpacity
      style={styles.item}
      onPress={() => navigation.navigate('PokemonDetails', { pokemon: pokemon })}
    >
      <Text style={styles.title}>
        {pokemon.name}
      </Text>
    </TouchableOpacity>)
}



const HomeScreen = () => {
  const [pokemons, setPokemons] = useState<ReadonlyArray<Pokemon>>([])

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon-species')
      .then((response) => response.json())
      .then((json) => {
        setPokemons(json.results)
      })
      .catch((error) => {
        console.error(error);
      });
  }, [])


  return (
    <SafeAreaView style={styles.container}>
      <FlatList<Pokemon>
        style={styles.list}
        data={pokemons}
        keyExtractor={item => item.name}
        renderItem={({ item }) => (
          <ListItem
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
  },
  item: {
    backgroundColor: '#ddd',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  list: {
    backgroundColor: "red"
  }
});

export default HomeScreen