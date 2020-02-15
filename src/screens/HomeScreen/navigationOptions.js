import React from "react";
import MenuButton from "../../components/MenuButton";

const HomeScreenOptions = ({ navigation }) => {
  return {
    headerTitle: "Home Screen",
    headerLeft: () => <MenuButton navigation={navigation} />,
  };
};

export default HomeScreenOptions;
