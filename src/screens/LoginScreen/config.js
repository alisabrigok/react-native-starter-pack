import React from "react";
import LoginScreen from ".";
import messages from "./messages";
import { useTranslation } from "../../shared/hooks";
import MenuButton from "../../components/MenuButton";

const WithLoginScreen = LoginStackNavigatorScreen => {
  const { t } = useTranslation();
  return (
    <LoginStackNavigatorScreen
      name="Login"
      component={LoginScreen}
      options={({ navigation }) => ({
        headerTitle: t(messages.login),
        headerLeft: () => <MenuButton navigation={navigation} />,
      })}
    />
  );
};

export default WithLoginScreen;
