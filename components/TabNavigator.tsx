import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  Second: undefined;
  Third: undefined;
  TabNavigator: undefined;
  PokemonDetailsScreen: undefined;
}

export class TabNavigator extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Second" component={SecondScreen} />
        <Tab.Screen name="Third" component={ThirdScreen} />
        <Tab.Screen name="PokemonDetails" component={PokemonDetailsScreen} />
      </Tab.Navigator>
    )
  }
}

export default TabNavigator