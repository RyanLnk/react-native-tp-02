import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/components/TabNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
      <StatusBar />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
