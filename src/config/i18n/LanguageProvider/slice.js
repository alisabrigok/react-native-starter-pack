import { createSlice } from "@reduxjs/toolkit";
import { DEFAULT_LOCALE } from "..";

export const initialState = { locale: DEFAULT_LOCALE };

const languageProviderSlice = createSlice({
  name: "languageProvider",
  initialState,
  reducers: {
    changeLocale(state, action) {
      state.locale = action.payload;
    },
  },
});

export const { actions, reducer } = languageProviderSlice;

export const { changeLocale } = actions;

export default reducer;
