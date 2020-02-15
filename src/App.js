import React from "react";

import { enableScreens } from "react-native-screens";
import Icon from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigation from "./navigations";

enableScreens();
Icon.loadFont();

const App = () => {
  return (
    <NavigationContainer>
      <DrawerNavigation />
    </NavigationContainer>
  );
};

export default App;
