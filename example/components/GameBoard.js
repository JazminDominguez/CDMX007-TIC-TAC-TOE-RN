import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
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

  onTilePress = (row, col)=>{
    let currentPlayer = this.state.currentPlayer;
    let arr = this.state.gameState.slice();
    arr[row][col] = currentPlayer;
    this.setState({gameState: arr})

    let nextPlayer= (currentPlayer == 1)? -1 :1;
    this.setState({currentPlayer: nextPlayer})
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
    fontSize: 50,
    flex: 1,
  },
  dog:{
    color: 'blue',
    fontSize: 50,
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
  }
  
});
