import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { StackNavigator } from './components/TabNavigator';
import GlobalState from './state/GlobalState';

export default function App() {
  return (
    <GlobalState>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </GlobalState>
  );
}
