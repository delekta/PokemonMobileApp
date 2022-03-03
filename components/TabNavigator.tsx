import React, { Component } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import PokedexScreen from "../screens/PokedexScreen";
import FavouritePokemonsScreen from "../screens/FavouritePokemonsScreen";
import ItemsScreen from "../screens/ItemsScreen";
import {
  createStackNavigator,
  StackNavigationProp,
  StackScreenProps,
} from "@react-navigation/stack";
import PokemonDetailsScreen from "../screens/PokemonDetailsScreen";
import Pokemon from "../interfaces/Pokemon";
import {
  MaterialCommunityIcons,
  FontAwesome5,
  Ionicons,
} from "@expo/vector-icons";
import Item from "../interfaces/Item";
import { Button } from "react-native";
import SettingsScreen from "../screens/SettingsScreen";

export type RootStackParamList = {
  Home: undefined;
  Second: undefined;
  Third: undefined;
  TabNavigator: undefined;
  PokemonDetails: { pokemon: Pokemon };
  SettingsScreen: undefined;
};

type TabNavigatorProps = StackScreenProps<RootStackParamList, "TabNavigator">;

export class TabNavigator extends Component<TabNavigatorProps> {
  render() {
    const Tab = createBottomTabNavigator();
    return (
      <Tab.Navigator
        screenOptions={{
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
            headerRight: () => (
              <Ionicons
                onPress={() => this.props.navigation.navigate("SettingsScreen")}
                name="settings-outline"
                size={25}
                style={{ paddingRight: 10 }}
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
          component={ItemsScreen}
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
          name="SettingsScreen"
          component={SettingsScreen}
          options={{
            headerShown: false,
            presentation: "modal",
          }}
        />
      </Stack.Navigator>
    );
  }
}

export default TabNavigator;
