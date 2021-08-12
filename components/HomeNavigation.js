import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SingleDeck from "./SingleDeck";
import AddCard from "./AddCard";
import Quiz from "./Quiz";
import BottomTabs from "./BottomTabs";

const MainStack = createStackNavigator();
// const ButTab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    // <ButTab.Navigator>
    //   <ButTab.Screen name="AddCard" component={AddCard} />
    //   <ButTab.Screen name="Quiz" component={Quiz} />
    // </ButTab.Navigator>
    <MainStack.Navigator initialRouteName="Main" headerMode="screen">
      <MainStack.Screen name="🂦 Flash-Cards 🂦" component={BottomTabs} />
      <MainStack.Screen
        name="Deck"
        component={SingleDeck}
        options={({ route }) => {
          const { deckID } = route.params;
          return {
            title: `${deckID}`,
          };
        }}
      />
      <MainStack.Screen
        name="AddCard"
        component={AddCard}
        options={{ headerTitle: "AddCard" }}
      />
      <MainStack.Screen
        name="Quiz"
        component={Quiz}
        options={{ headerTitle: "Quiz" }}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigation;
