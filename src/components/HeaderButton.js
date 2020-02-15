import React from "react";
import { Platform } from "react-native";
import { HeaderButton } from "react-navigation-header-buttons";
import Icon from "react-native-vector-icons/MaterialIcons";

import { Colors } from "../shared/styles";

const CustomHeaderButton = props => (
  <HeaderButton
    {...props}
    IconComponent={Icon}
    iconSize={23}
    color={Platform.OS === "android" ? "white" : Colors.primary}
  />
);

export default CustomHeaderButton;
