import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";

import HomeNavigator from "./HomeNavigator";
import LoginNavigator from "./LoginNavigator";

import Icon from "react-native-vector-icons/MaterialIcons";

import { Colors } from "../shared/styles";

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    drawerContentOptions={{ activeTintColor: Colors.primary }}
    drawerContent={props => (
      <View style={drawerStyles}>
        <SafeAreaView forceInset={{ top: "always", horizontal: "never" }}>
          <DrawerItemList {...props} />
        </SafeAreaView>
      </View>
    )}>
    <Drawer.Screen
      name="Home"
      component={HomeNavigator}
      options={{
        drawerIcon: ({ color }) => <Icon name="home" size={23} color={color} />,
      }}
    />
    <Drawer.Screen
      name="Login"
      component={LoginNavigator}
      options={{
        drawerIcon: ({ color }) => (
          <Icon name="account-circle" size={23} color={color} />
        ),
      }}
    />
  </Drawer.Navigator>
);

const drawerStyles = StyleSheet.create({ flex: 1, paddingTop: 20 });

export default DrawerNavigation;
