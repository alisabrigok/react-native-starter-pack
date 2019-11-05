import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer";
import { watchIssues } from "./saga";
import { composeWithDevTools } from "redux-devtools-extension";

const composeEnhancers =
  process.env.NODE_ENV !== "production" ? composeWithDevTools : compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(watchIssues);

export default store;
