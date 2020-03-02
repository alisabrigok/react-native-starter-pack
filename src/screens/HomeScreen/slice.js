import { createSlice } from "@reduxjs/toolkit";

import { scope as name } from "./config";

const homeSlice = createSlice({
  name,
  initialState: {},
  reducers: {
    getHome(state, action) {
      state = action.payload;
    },
  },
});

export const { actions, reducer } = homeSlice;

export const { getHome } = actions;

export default reducer;
