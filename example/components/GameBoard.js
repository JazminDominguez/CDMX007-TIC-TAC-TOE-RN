import React, {Component} from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';


export default class GameBoard extends Component {

render(){
  return(
    
    <View style={styles.boardContainer}>
      <Text style={styles.boardText}>Holi</Text>
  
    </View>

  )
}



}


const styles = StyleSheet.create({
 boardContainer:{
backgroundColor: '#141414'
 },
 boardText:{
   color:'#fff'
 }
});
