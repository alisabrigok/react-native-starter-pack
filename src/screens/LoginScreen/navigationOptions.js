import React from "react";
import MenuButton from "../../components/MenuButton";

const LoginScreenOptions = ({ navigation }) => {
  return {
    headerTitle: "Login Screen",
    headerLeft: () => <MenuButton navigation={navigation} />,
  };
};

export default LoginScreenOptions;
