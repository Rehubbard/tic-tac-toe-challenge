import React from "react";
import { StyleSheet } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import GlobalContextProvider from "./src/context/GlobalContextProvider";

const App = () => {
  return (
    <GlobalContextProvider>
      <AppNavigator />
    </GlobalContextProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
