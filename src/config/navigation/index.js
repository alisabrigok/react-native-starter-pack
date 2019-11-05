import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Platform } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

import HomeScreen from "../../screens/HomeScreen";

import { Colors } from "../../shared/styles";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === "android" ? Colors.primary : "",
  },
  headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
};

const HomeNavigator = createStackNavigator(
  {
    Home: HomeScreen,
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => (
        <Icon name="home" size={23} color={drawerConfig.tintColor} />
      ),
    },
    defaultNavigationOptions,
  },
);

const Navigator = createDrawerNavigator(
  {
    Home: HomeNavigator,
  },
  {
    contentOptions: {
      activeTintColor: Colors.primary,
    },
  },
);

export default createAppContainer(Navigator);
