import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import DeckList from "./DeckList";
import NewDeck from "./NewDeck";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
    //   initialRouteName="Decks"
    //   shifting={true}
    //   sceneAnimationEnabled={false}
    >
      <Tab.Screen
        name="Decks"
        component={DeckList}
        // options={{
        //   tabBarIcon: "home-account",
        // }}
      />
      <Tab.Screen
        name="Add Deck"
        component={NewDeck}
        // options={{
        //   tabBarIcon: "plus",
        // }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
