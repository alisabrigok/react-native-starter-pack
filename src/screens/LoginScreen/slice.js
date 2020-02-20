import { createSlice } from "redux-starter-kit";

const user = createSlice({
  name: "user",
  initialState: {},
  reducers: {
    getUser(state, action) {
      state = action.payload;
    },
  },
});

export const { actions, reducer } = user;

export const { getUser } = actions;

export default reducer;
