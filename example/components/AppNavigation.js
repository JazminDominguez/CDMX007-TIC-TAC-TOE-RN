import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation';
import GameBegining from './GameBegining';
import GameBoard from './GameBoard';

const AppNavigator = createStackNavigator({
    BeginScreen: { screen: GameBegining },
  Board: { screen: GameBoard },
});

export default AppNavigator;