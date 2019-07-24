import React from 'react'
import { StyleSheet } from 'react-native'
import {
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";

import Game from '../screens/Game';

const DrawerNavigator = createDrawerNavigator({
  Game: {
    screen: Game
  }
})

export default createAppContainer(DrawerNavigator)


