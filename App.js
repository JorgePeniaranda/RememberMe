// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import NavigationTab from './src/navegation/NavegationTab';

export default function App() {
  const navTheme = {
    dark: true,
  }
  return (
    <NavigationContainer theme={navThemennn}>
      <NavigationTab/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
