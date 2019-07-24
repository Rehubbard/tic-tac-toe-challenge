import React from 'react'
import { StyleSheet } from 'react-native'
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";

import Game from '../screens/Game';
import Stats from '../screens/Stats';
import { Drawer, HeaderRight } from '../components';

const GameStack = createStackNavigator({
  Game
},{
  defaultNavigationOptions: {
    headerRight: <HeaderRight />
  }
})

const StatsStack = createStackNavigator({
  Stats
}, {
  navigationOptions: {
    headerRight: <HeaderRight />
  }
})

const DrawerNavigator = createDrawerNavigator({
  GameStack,
  StatsStack
}, {
  contentComponent: props => <Drawer {...props} />,
  drawerPosition: "right"
})

export default createAppContainer(DrawerNavigator)


