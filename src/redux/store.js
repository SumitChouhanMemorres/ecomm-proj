// import { createStore } from "redux";
import rootReducer from "./rootReducer";
import productSaga from "./productSaga";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export default store;
