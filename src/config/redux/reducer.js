import { combineReducers } from "redux-starter-kit";
import homeReducer from "../../screens/HomeScreen/slice";
import userReducer from "../../screens/LoginScreen/slice";

const reducer = combineReducers({
  home: homeReducer,
  user: userReducer,
});

export default reducer;
