import React from "react";
import { SafeAreaView, View, StyleSheet } from "react-native";
import {
  createDrawerNavigator,
  DrawerItemList,
} from "@react-navigation/drawer";

import HomeDrawerNavigator from "./HomeNavigator";
import LoginDrawerNavigator from "./LoginNavigator";

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
    {HomeDrawerNavigator(Drawer.Screen)}
    {LoginDrawerNavigator(Drawer.Screen)}
  </Drawer.Navigator>
);

const drawerStyles = StyleSheet.create({ flex: 1, paddingTop: 20 });

export default DrawerNavigation;
