import { createSlice } from "@reduxjs/toolkit";

const DEFAULT_LOCALE = "en";

export const initialState = { locale: DEFAULT_LOCALE };

const languageProviderSlice = createSlice({
  name: "languageProvider",
  initialState,
  reducers: {
    changeLocale(state, action) {
      state.locale = action.locale;
    },
  },
});

export const { actions, reducer } = languageProviderSlice;

export const { changeLocale } = actions;

export default reducer;
