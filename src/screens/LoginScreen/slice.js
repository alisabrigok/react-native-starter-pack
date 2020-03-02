import { createSlice } from "@reduxjs/toolkit";

import { scope as name } from "./config";

const userSlice = createSlice({
  name,
  initialState: {},
  reducers: {
    getUser(state, action) {
      state = action.payload;
    },
  },
});

export const { actions, reducer } = userSlice;

export const { getUser } = actions;

export default reducer;
