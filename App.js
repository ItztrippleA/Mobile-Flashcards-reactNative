import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
} from "@react-navigation/native";
import {
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from "react-native-paper";
import { createStore } from "redux";
import { Provider as StoreProvider } from "react-redux";
import reducer from "./redux/reducers";
import middleware from "./redux/middleware";
import { setLocalNotification } from "./utils/notifications";
import HomeNavigation from "./components/HomeNavigation";

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: { ...PaperDefaultTheme.colors, ...NavigationDefaultTheme.colors },
};

export default function App() {
  useEffect(() => {
    setLocalNotification;
  });
  return (
    <StoreProvider store={createStore(reducer, middleware)}>
      <PaperProvider theme={CombinedDefaultTheme}>
        <NavigationContainer theme={CombinedDefaultTheme}>
          <HomeNavigation />
        </NavigationContainer>
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
