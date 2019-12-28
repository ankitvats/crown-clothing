// this is our central store

import { createStore, applyMiddleware } from "redux";

// importing our middleware
import logger from "redux-logger";

import rootReducer from "./root-reducer";

const middlewares = [logger]; // array of all middlewares

//creating out store that will take our rootreducer & all middlewares
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
