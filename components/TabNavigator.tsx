import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import PokedexScreen from '../screens/PokedexScreen';
import FavouritePokemonsScreen from '../screens/FavouritePokemonsScreen';
import ThirdScreen from '../screens/ThirdScreen';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';
import { Pokemon } from '../interfaces/Pokemon';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export type RootStackParamList = {
  Home: undefined;
  Second: undefined;
  Third: undefined;
  TabNavigator: undefined;
  PokemonDetails: { pokemon: Pokemon };
}

export class TabNavigator extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen
          name="Pokedex"
          component={PokedexScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return <MaterialCommunityIcons name="pokeball" size={30} color={focused ? 'tomato' : 'gray'} />
            }
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={FavouritePokemonsScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return <MaterialCommunityIcons name="heart-outline" size={30} color={focused ? 'tomato' : 'gray'} />
            }
          }} />
        <Tab.Screen name="Third" component={ThirdScreen} />
      </Tab.Navigator>
    )
  }
}

export class StackNavigator extends Component {
  render() {
    const Stack = createStackNavigator();
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen
          name="PokemonDetails"
          component={PokemonDetailsScreen}
          options={{
            headerShown: true
          }} />
      </Stack.Navigator>
    )
  }
}

export default TabNavigator