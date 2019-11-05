import React from "react";
import { View, Text } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const HomeScreen = props => (
  <View>
    <Text>HomeScreen</Text>
  </View>
);

HomeScreen.navigationOptions = props => ({
  headerTitle: "Home",
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="menu"
        onPress={props.navigation.toggleDrawer}
      />
    </HeaderButtons>
  ),
});

export default HomeScreen;
