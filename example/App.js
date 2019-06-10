import React from 'react';
import { Alert, Button, Text, View, StyleSheet, TextInput } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';


import { MaterialCommunityIcons } from '@expo/vector-icons';
import GameBegining from './components/GameBegining'
import GameBoard from './components/GameBoard'

export default class App extends React.Component {
  state = {
    player1: [],
    player2: [],
    gameStarted: false,
  };
  startGame() {
    this.setState = ({ gameStarted: true });
  }

  renderGame(){
    if(this.state.gameStarted == 'true')
       return <GameBoard/>;
    return  <GameBegining/>;
  
  }



  render() {
    return (
      //aquí van los componentes
      //player1
      <View style={styles.container}>
           { this.renderGame() }
      
      </View>


    );
  }
}


