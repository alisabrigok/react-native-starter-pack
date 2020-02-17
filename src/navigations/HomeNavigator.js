import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";

import HomeScreen from "../screens/HomeScreen";
import HomeScreenOptions from "../screens/HomeScreen/screenOptions";
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
