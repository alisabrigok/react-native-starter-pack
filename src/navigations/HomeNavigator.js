import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";

import WithHomeScreen from "../screens/HomeScreen/config";
import { defaultScreenOptions } from "../shared/navigatorOptions";

const HomeStackNavigator = createStackNavigator();

const HomeNavigator = props => (
  <HomeStackNavigator.Navigator screenOptions={defaultScreenOptions}>
    {WithHomeScreen(HomeStackNavigator.Screen)}
  </HomeStackNavigator.Navigator>
);

const HomeDrawerNavigator = DrawerScreen => (
  <DrawerScreen
    name="Home"
    component={HomeNavigator}
    options={{
      drawerIcon: ({ color }) => <Icon name="home" size={23} color={color} />,
    }}
  />
);

export default HomeDrawerNavigator;
