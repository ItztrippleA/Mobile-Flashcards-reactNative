import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SingleDeck from "./SingleDeck";
import AddCard from "./AddCard";
import Quiz from "./Quiz";
import BottomTabs from "./BottomTabs";

const Stack = createStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Main" headerMode="screen">
      <Stack.Screen name=" Flash Cards App" component={BottomTabs} />
      <Stack.Screen
        name="Deck"
        component={SingleDeck}
        options={({ route }) => {
          const { deckID } = route.params;
          return {
            title: `${deckID}`,
          };
        }}
      />
      <Stack.Screen
        name="AddCard"
        component={AddCard}
        options={{ headerTitle: "AddCard" }}
      />
      <Stack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerTitle: "Quiz" }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
