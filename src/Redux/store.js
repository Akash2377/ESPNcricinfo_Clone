import { legacy_createStore } from "redux";
import { newsReducer } from "./centrebox/reducer";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const rootmiddleware = applyMiddleware(thunk);
export const store = legacy_createStore(newsReducer, rootmiddleware);
