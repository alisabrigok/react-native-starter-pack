import React from "react";
import { Provider } from "react-redux";
import store from "./config/redux";
import Navigator from "./config/navigation";
import { enableScreens } from "react-native-screens";
import Icon from "react-native-vector-icons/MaterialIcons";

enableScreens();
Icon.loadFont();

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
