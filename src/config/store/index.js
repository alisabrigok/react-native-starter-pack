import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createInjectorsEnhancer } from "redux-injectors";
import createReducer from "./reducer";

const configureAppStore = preloadedState => {
  const sagaMiddleware = createSagaMiddleware();
  const { run: runSaga } = sagaMiddleware;

  const middleware = [...getDefaultMiddleware(), sagaMiddleware];

  const enhancers = [createInjectorsEnhancer({ createReducer, runSaga })];

  const store = configureStore({
    reducer: createReducer(),
    preloadedState,
    middleware,
    enhancers,
    devTools: process.env.NODE_ENV !== "production",
  });

  return store;
};

export default configureAppStore;
