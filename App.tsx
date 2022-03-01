import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";
import { StackNavigator } from "./components/TabNavigator";
import PokemonProvider from "./context/PokemonContext";

export default function App() {
  return (
    <PokemonProvider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </PokemonProvider>
  );
}
