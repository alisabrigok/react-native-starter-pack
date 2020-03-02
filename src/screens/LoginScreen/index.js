import React from "react";
import { View, Text } from "react-native";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { useIntl } from "react-intl";
import reducer from "./slice";
import saga from "./saga";
import messages from "./messages";
import { scope as key } from "./config";

const LoginScreen = props => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
  const { formatMessage: f } = useIntl();

  return (
    <View>
      <Text>{f(messages.login)}</Text>
    </View>
  );
};

export default LoginScreen;
