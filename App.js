import React from 'react';
import { View, StyleSheet } from 'react-native';
import Accueil from './components/screens/accueil/Accueil';
import Login from './components/screens/login/Login';

export default class App extends React.Component {
    render() {
    return (
      <View style={style.view}>
        <Login />
      </View>
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