import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  SafeAreaView,
  NavigationScreenProps,
  DrawerItemsProps
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";

import { Text } from ".";
import globalColors from "../styles/globalColors";

type Props = {} & NavigationScreenProps & DrawerItemsProps;

class Drawer extends React.Component<Props> {
  navigateAndCloseDrawer = (route: string) => {
    this.props.navigation.closeDrawer();
    requestAnimationFrame(() => this.props.navigation.navigate(route));
  };

  render() {
    console.log(this.props.activeItemKey);
    return (
      <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => this.navigateAndCloseDrawer("GameStack")}
        >
          {this.props.activeItemKey === "GameStack" && (
            <Icon
              name="circle"
              color={globalColors.lightGreen}
              size={10}
              style={styles.activeIndicator}
            />
          )}
          <Text style={styles.drawerLink} type="bold">
            Play
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.drawerItem}
          onPress={() => this.navigateAndCloseDrawer("StatsStack")}
        >
          {this.props.activeItemKey === "StatsStack" && (
            <Icon
              name="circle"
              color={globalColors.lightGreen}
              size={10}
              style={styles.activeIndicator}
            />
          )}
          <Text style={styles.drawerLink} type="bold">
            Stats
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalColors.green,
    paddingHorizontal: 20
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginVertical: 30
  },
  drawerLink: {
    fontSize: 32,
    color: globalColors.white
  },
  activeIndicator: {
    marginRight: 10
  }
});

export default Drawer;
