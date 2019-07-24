import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-navigation";
import { Icon } from "react-native-vector-icons/Icon";

import { Text } from ".";
import globalColors from "../styles/globalColors";

interface Props {}

class Drawer extends React.Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
        <TouchableOpacity style={styles.drawerItem} onPress={onPress}>
          <Text style={styles.drawerLink}>{label}</Text>
          {hasArrow && (
            <Icon
              name="chevron-right"
              color={globalColors.blue}
              iconStyle={styles.arrow}
              size={14}
            />
          )}
        </TouchableOpacity>
        <View style={styles.drawerItem}>Stats</View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  }
});

export default Drawer;
