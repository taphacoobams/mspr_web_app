import React from 'react';
import 'react-native-gesture-handler';
import { View, StyleSheet } from 'react-native';
import Accueil from './components/screens/accueil/Accueil';
import Login from './components/screens/login/Login';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class App extends React.Component {
    render() {
    return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Login"
              component={Login}
            />
            <Stack.Screen
              name="Accueil"
              component={Accueil}
            />
          </Stack.Navigator>
        </NavigationContainer>
    )
  }
}
const style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"

  }
})