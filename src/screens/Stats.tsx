import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView, NavigationScreenProps } from "react-navigation";

import { Text } from "../components";
import globalColors from "../styles/globalColors";
import { GlobalContext } from "../context/GlobalContextProvider";

type Props = {} & NavigationScreenProps;

const Stats: React.FunctionComponent<Props> = props => {
  const { oWins, xWins } = useContext(GlobalContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.statContainer}>
        <Text type="bold" style={styles.label}>
          X's wins:
        </Text>
        <Text type="bold" style={styles.count}>
          {xWins}
        </Text>
      </View>
      <View style={styles.statContainer}>
        <Text type="bold" style={styles.label}>
          O's wins:
        </Text>
        <Text type="bold" style={styles.count}>
          {oWins}
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    justifyContent: "center"
  },
  statContainer: {
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
    marginBottom: 25
  },
  label: {
    fontSize: 36,
    color: globalColors.black
  },
  count: {
    fontSize: 80,
    color: globalColors.green
  }
});

export default Stats;
