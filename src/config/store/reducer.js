import { combineReducers } from "@reduxjs/toolkit";
import languageProviderReducer from "../i18n/LanguageProvider/slice";

const createReducer = (injectedReducers = {}) => {
  return combineReducers({
    language: languageProviderReducer,
    ...injectedReducers,
    // other non-injected reducers can go here...
  });
};

export default createReducer;
