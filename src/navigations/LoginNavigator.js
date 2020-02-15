import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import LoginScreenOptions from "../screens/LoginScreen/navigationOptions";
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

export default LoginNavigator;
