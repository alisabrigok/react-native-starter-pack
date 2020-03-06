import React from "react";
import { View, Text } from "react-native";
import reducer from "./slice";
import saga from "./saga";
import messages, { scope as key } from "./messages";
import { useInjectStore, useTranslation } from "../../shared/hooks";

const HomeScreen = props => {
  useInjectStore({ key, saga, reducer });
  const { t } = useTranslation();

  return (
    <View>
      <Text>{t(messages.home)}</Text>
    </View>
  );
};

export default HomeScreen;
