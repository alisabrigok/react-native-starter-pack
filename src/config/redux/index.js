import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import createSagaMiddleware from "redux-saga";
import reducer from "./reducer";
import { watchIssues } from "./saga";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer,
  middleware: [sagaMiddleware, ...getDefaultMiddleware()],
  devTools: process.env.NODE_ENV !== "production",
});

sagaMiddleware.run(watchIssues);

export default store;
