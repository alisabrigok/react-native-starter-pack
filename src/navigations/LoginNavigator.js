import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/MaterialIcons";

import LoginScreen from "../screens/LoginScreen";
import LoginScreenOptions from "../screens/LoginScreen/screenOptions";
import { defaultScreenOptions } from "../shared/navigatorOptions";

const LoginStackNavigator = createStackNavigator();

const LoginNavigator = props => (
  <LoginStackNavigator.Navigator screenOptions={defaultScreenOptions}>
    <LoginStackNavigator.Screen
      name="Login"
      component={LoginScreen}
      options={LoginScreenOptions}
    />
  </LoginStackNavigator.Navigator>
);

const LoginDrawerNavigator = DrawerScreen => (
  <DrawerScreen
    name="Login"
    component={LoginNavigator}
    options={{
      drawerIcon: ({ color }) => (
        <Icon name="account-circle" size={23} color={color} />
      ),
    }}
  />
);

export default LoginDrawerNavigator;
