import React from 'react';
import { Alert, Button, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';



import { MaterialCommunityIcons } from '@expo/vector-icons';
import GameBoard from './components/GameBoard'

export default class App extends React.Component {
  state = {
    player1: [],
    player2: [],
    gameStarted: false,
  };
  startGame() {
    this.setState({ gameStarted: true });
  }



  render() {
    const { gameStarted }= this.state
    let {player1}= this.state
    let {player2}= this.state
    return (
      //aquí van los componentes
      //player1
      <View style={styles.container}>
      { gameStarted ? 
        <GameBoard player1Name={player1} player2Name={player2}/>
      :
        <View style={styles.namesContainer}>
          <Text style={styles.textColor1}> Player 1</Text>
          <View style={styles.inputNamesContainer}>
            <TextInput
              style={styles.playerName}
              placeholder="Type your Name!"
              onChangeText={player1 => this.setState({ player1 })}
            />
            <MaterialCommunityIcons size={24} name="cat" color={'#fff'} />
          </View>

          <Text style={styles.textColor1}> Player 2</Text>
          <View style={styles.inputNamesContainer}>
            <TextInput
              style={styles.playerName}
              placeholder="Type your Name!"
              onChangeText={player2 => this.setState({ player2 })}
            />
            <MaterialCommunityIcons size={24} name="dog" color={'#fff'} />
          </View>
        
          <View style={styles.buttonStart}>
          <Button
            onPress={() => this.startGame()}
            title="Play!"
            color="#00FF00"
          />
        </View>
        </View>
        
      }
        
      
    
      </View>
      

    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
    height: 1080,
    width: 800,
  },
  /*nameBoard: {
    borderColor: '#fff',
    borderWidth: 3,
    height: 312,
    width: 312,
  },*/
  textColor1: {
    color: '#fff',
  },
  playerName: {
    color: '#fff',
    marginTop: 10,
    borderColor: '#fff',
    borderWidth: 3,
    width: 150,
  },
  namesContainer: {
    marginTop: 180,
    borderColor: '#fff',
    borderWidth: 2,
    height: 312,
    width: 312,
  },
  inputNamesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  buttonStart: {
    margin: 10,
    width: 80,
    height: 40,
  },
});
