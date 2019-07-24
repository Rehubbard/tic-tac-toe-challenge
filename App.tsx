import React from "react";
import { YellowBox } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import GlobalContextProvider from "./src/context/GlobalContextProvider";

YellowBox.ignoreWarnings(["Warning: componentWillUpdate is deprecated"]);

const App = () => {
  return (
    <GlobalContextProvider>
      <AppNavigator />
    </GlobalContextProvider>
  );
};

export default App;
