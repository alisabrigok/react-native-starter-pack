import React from "react";
import { Provider } from "react-redux";
import { enableScreens } from "react-native-screens";
import Icon from "react-native-vector-icons/MaterialIcons";
import { NavigationContainer } from "@react-navigation/native";
import LanguageProvider from "./config/i18n/LanguageProvider";
import configureStore from "./config/store";
import DrawerNavigation from "./navigations";
import { translationMessages } from "./config/i18n";

enableScreens();
Icon.loadFont();

const preloadedState = {};
const store = configureStore(preloadedState);

const App = () => (
  <Provider store={store}>
    <LanguageProvider messages={translationMessages}>
      <NavigationContainer>
        <DrawerNavigation />
      </NavigationContainer>
    </LanguageProvider>
  </Provider>
);

export default App;
