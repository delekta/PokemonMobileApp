import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen, { xd } from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';
import ThirdScreen from '../screens/ThirdScreen';
import { createStackNavigator } from '@react-navigation/stack';
import PokemonDetailsScreen from '../screens/PokemonDetailsScreen';

export type RootStackParamList = {
  Home: undefined;
  Second: undefined;
  Third: undefined;
  TabNavigator: undefined;
  PokemonDetails: { pokemon: any };

}

export class TabNavigator extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Second" component={SecondScreen} />
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