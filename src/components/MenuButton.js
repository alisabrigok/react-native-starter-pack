import React from "react";

import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "./HeaderButton";

const MenuButton = ({ navigation }) => (
  <HeaderButtons HeaderButtonComponent={HeaderButton}>
    <Item title="Menu" iconName="menu" onPress={navigation.toggleDrawer} />
  </HeaderButtons>
);

export default MenuButton;
