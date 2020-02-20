import { createSlice } from "redux-starter-kit";

const homeSlice = createSlice({
  name: "home",
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
