import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import "react-native-gesture-handler";
import { StackNavigator } from "./components/TabNavigator";
import PokemonProvider from "./context/PokemonContext";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
  cache: new InMemoryCache(),
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <PokemonProvider>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </PokemonProvider>
    </ApolloProvider>
  );
};

AppRegistry.registerComponent("PokemonApp", () => App);

export default App;
