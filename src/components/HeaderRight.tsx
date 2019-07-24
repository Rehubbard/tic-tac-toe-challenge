import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { withNavigation, NavigationInjectedProps } from "react-navigation";

import Text from "./Text";
import globalColors from "../styles/globalColors";

type Props = {} & NavigationInjectedProps;

const HeaderRight: React.FunctionComponent<Props> = props => (
  <TouchableOpacity
    onPress={() => props.navigation.toggleDrawer()}
    style={{ marginRight: 20 }}
    hitSlop={{ top: 20, left: 20, bottom: 20, right: 20 }}
  >
    <Icon name="bars" color={globalColors.green} size={20} />
  </TouchableOpacity>
);

export default withNavigation(HeaderRight);
