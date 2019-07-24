import React from "react";
import { StyleSheet } from "react-native";
import {
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";

import Game from "../screens/Game";
import Stats from "../screens/Stats";
import { Drawer, HeaderRight } from "../components";

const defaultScreenNavigationOptions = {
  headerRight: <HeaderRight />,
  headerStyle: {
    borderBottomWidth: 0
  }
};

const GameStack = createStackNavigator(
  {
    Game
  },
  {
    defaultNavigationOptions: defaultScreenNavigationOptions
  }
);

const StatsStack = createStackNavigator(
  {
    Stats
  },
  {
    defaultNavigationOptions: defaultScreenNavigationOptions
  }
);

const DrawerNavigator = createDrawerNavigator(
  {
    GameStack,
    StatsStack
  },
  {
    contentComponent: props => <Drawer {...props} />,
    drawerPosition: "right"
  }
);

export default createAppContainer(DrawerNavigator);
