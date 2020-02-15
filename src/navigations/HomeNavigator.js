import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import HomeScreenOptions from "../screens/HomeScreen/navigationOptions";
import { defaultScreenOptions } from "../shared/navigatorOptions";

const HomeStackNavigator = createStackNavigator();

const HomeNavigator = props => (
  <HomeStackNavigator.Navigator screenOptions={defaultScreenOptions}>
    <HomeStackNavigator.Screen
      name="Home"
      component={HomeScreen}
      options={HomeScreenOptions}
    />
  </HomeStackNavigator.Navigator>
);

export default HomeNavigator;
