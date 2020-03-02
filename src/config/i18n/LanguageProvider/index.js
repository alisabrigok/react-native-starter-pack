import React from "react";
import { useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import { selectLocale } from "./selectors";

export default function LanguageProvider(props) {
  const locale = useSelector(selectLocale);
  return (
    <IntlProvider
      locale={locale}
      key={locale}
      messages={props.messages[locale]}>
      {React.Children.only(props.children)}
    </IntlProvider>
  );
}
