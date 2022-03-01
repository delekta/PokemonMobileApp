import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PokedexScreen from "../screens/PokedexScreen";
import FavouritePokemonsScreen from "../screens/FavouritePokemonsScreen";
import ThirdScreen from "../screens/ItemsScreen";
import { createStackNavigator } from "@react-navigation/stack";
import PokemonDetailsScreen from "../screens/PokemonDetailsScreen";
import Pokemon from "../interfaces/pokemon";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import ItemDetailsScreen from "../screens/ItemDetailsScreen";
import Item from "../interfaces/Item";

export type RootStackParamList = {
  Home: undefined;
  Second: undefined;
  Third: undefined;
  TabNavigator: undefined;
  PokemonDetails: { pokemon: Pokemon };
  ItemDetails: { item: Item };
};

export class TabNavigator extends Component {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <Tab.Screen
          name="Pokedex"
          component={PokedexScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="pokeball"
                size={30}
                color={focused ? "tomato" : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Favourite"
          component={FavouritePokemonsScreen}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name="heart-outline"
                size={30}
                color={focused ? "tomato" : "gray"}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Items"
          component={ThirdScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <FontAwesome5
                  name="search"
                  size={30}
                  color={focused ? "tomato" : "gray"}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    );
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
            headerShown: true,
          }}
        />
        <Stack.Screen
          name="ItemDetails"
          component={ItemDetailsScreen}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default TabNavigator;
