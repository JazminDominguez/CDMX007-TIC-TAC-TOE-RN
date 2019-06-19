import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Alert, Button } from 'react-native';
import { player1, player2 } from '../App';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';

export default class GameBoard extends Component {
  constructor(props){
    super(props);
    this.state={
      gameState:[
        [0,0,0],
        [0,0,0],
        [0,0,0]],
      currentPlayer: 1,
    }
  }

componentDidMount(){
  this.initializeGame();
}

  initializeGame=()=>{
    this.setState({gameState:
    [
      [0,0,0],
      [0,0,0],
      [0,0,0]
    ]
    });
  }

  getWinner =()=>{
    const num_tiles = 3;
    let arr = this.state.gameState;
    let sum;
//check rows
for(let i=0; i< num_tiles; i++){
  sum = arr[i][0] + arr[i][1] + arr[i][2];
  if(sum ==3){ return 1;}
  else if(sum == -3){ return -1;}
}
//check columns
for(let i=0; i< num_tiles; i++){
  sum = arr[0][i] + arr[1][i] + arr[2][i];
  if(sum ==3){ return 1;}
  else if(sum == -3){ return -1;}
}
//check diagonals
sum = arr[0][0]+arr[1][1]+arr[2][2];
if(sum == 3 ){return 1;}
else if(sum == -3){ return -1;}

sum = arr[2][0]+arr[1][1]+arr[2][0];
if(sum == 3 ){return 1;}
else if(sum == -3){ return -1;}

//there are no winners
return 0;
  }

  onTilePress = (row, col)=>{
//para que no se pueda cambiar de jugada
let value =this.state.gameState[row][col];
if (value !== 0){return ;}


    let currentPlayer = this.state.currentPlayer;
    let arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr})

    let nextPlayer= (currentPlayer == 1)? -1 :1;
    this.setState({currentPlayer: nextPlayer})


    //check for winners
    let winner = this.getWinner();
    if (winner == 1){
      Alert.alert('¡Jugador 1 ha ganado!');
      this.initializeGame();
    }else if(winner == -1){
      Alert.alert("¡Jugador 2 ha ganado!");
      this.initializeGame();
    }
  }

  renderIcon = (row, col)=>{
    let value= this.state.gameState[row][col];
    switch(value)
    {
      case 1: return <Icon name='cat' style={styles.cat}/>;
      case -1: return <Icon name='dog' style={styles.dog}/>;
      default: return <View />;
    }
  }



renderName=()=>{
  let value= this.state.currentPlayer;
  switch(value)
  { case 1: return <Text style={styles.player1color}>{this.props.player1Name}</Text>;
   case -1: return <Text style={styles.player2color}>{this.props.player2Name}</Text>;
  default: return <Text style={styles.textColor1}> Jugador </Text>
  }
}

onNewGamePress=()=>{
  this.initializeGame();
}

  render() {
    return (
      <View style={styles.container}>

< View style={styles.turnContainer}>
 <Text style={styles.textColor1}> Tu turno: </Text>

      <View>
    {this.renderName()}
      </View>
       </View>

        <View style={styles.boardContainer}>

        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={()=> this.onTilePress(0,0)} style={styles.square}>
          {this.renderIcon(0,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(0,1)} style={styles.square}>
            {this.renderIcon(0,1)}
            </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(0,2)} style={styles.square}>
            {this.renderIcon(0,2)}
            </TouchableOpacity>
          </View>

        <View style={styles.rowContainer}>
          <TouchableOpacity onPress={()=> this.onTilePress(1,0)} style={styles.square}>
          {this.renderIcon(1,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(1,1)} style={styles.square}>
            {this.renderIcon(1,1)}
            </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(1,2)} style={styles.square}>
            {this.renderIcon(1,2)}
            </TouchableOpacity>
          </View>

        <View style={styles.rowContainer}>
           <TouchableOpacity onPress={()=> this.onTilePress(2,0)} style={styles.square}>
          {this.renderIcon(2,0)}
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(2,1)} style={styles.square}>
            {this.renderIcon(2,1)}
            </TouchableOpacity>
          <TouchableOpacity onPress={()=> this.onTilePress(2,2)} style={styles.square}>
            {this.renderIcon(2,2)}
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.buttonStart}>
      <Button title="Nuevo Juego" onPress={this.onNewGamePress} color="#00FF00"/>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#141414',
  },
  boardContainer: {
    marginTop: 60,
    marginLeft: 29,
    borderColor: '#fff',
    borderWidth: 1,
    height: 300,
    width: 300,
  },
  rowContainer:{
  flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  square: {
    borderColor: '#fff',
    borderWidth: 1,
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',

  },
  cat:{
    color: 'red',
    fontSize: 70,
    textShadowColor: '#ff1139',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 99
  },
  dog:{
    color: 'blue',
    fontSize: 70,
    textShadowColor: '#3d7dff',
  textShadowOffset: {width: -1, height: 1},
  textShadowRadius: 99
  },
  turnContainer:{
  marginTop: 120,
  marginLeft: 110,
  alignItems: 'center',
    width: 150,
    height: 45,
  },
  player1color:{
    color: 'red',
    fontSize: 25,
  },
  player2color:{
 color: 'blue',
    fontSize: 25,
  },
    textColor1:{
 color: '#fff',
    fontSize: 25,
  },
  buttonStart: {
    margin: 10,
    width: 80,
    height: 40,
    marginLeft: 143,
  }
});
