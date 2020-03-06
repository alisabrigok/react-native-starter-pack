import {
  useInjectReducer as useReducerInjection,
  useInjectSaga as useSagaInjection,
} from "redux-injectors";
import { useIntl } from "react-intl";

// re-export reducer and saga injection to have injector dependency in a single place
export const useInjectReducer = ({ key, reducer }) => {
  useReducerInjection({ key, reducer });
};

export const useInjectSaga = ({ key, saga }) => {
  useSagaInjection({ key, saga });
};

export const useInjectStore = ({ key, reducer, saga }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });
};

export const useTranslation = () => {
  const { formatMessage: t } = useIntl();
  return { t };
};
