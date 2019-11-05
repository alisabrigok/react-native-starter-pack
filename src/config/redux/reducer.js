import { combineReducers } from "redux";
import homeReducer from "../../store/reducers/home";

const rootReducer = combineReducers({
  homeReducer,
});

export default rootReducer;
