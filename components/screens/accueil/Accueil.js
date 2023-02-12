import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator();

export default class Accueil extends React.Component {

    render(){
        return (
            <Button
            title="Back to home"
            onPress={() =>
              this.props.navigation.navigate('Login')
          }
        />
        )
    }
}


const style = StyleSheet.create({

})
