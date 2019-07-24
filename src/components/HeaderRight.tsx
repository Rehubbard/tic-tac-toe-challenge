import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { withNavigation, NavigationInjectedProps } from "react-navigation";

import Text from "./Text";

type Props = {} & NavigationInjectedProps;

const HeaderRight: React.FunctionComponent<Props> = props => (
  <TouchableOpacity
    onPress={() => props.navigation.toggleDrawer()}
    style={{ marginHorizontal: 10 }}
    hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
  >
    <Icon name="bars" color="black" size={18} />
  </TouchableOpacity>
);

export default withNavigation(HeaderRight);
