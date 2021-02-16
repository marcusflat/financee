import { create } from "domain";
import { createStore, combineReducers } from "redux";

import userSchema from "./user/userSchema";
import userReducer from "./user/userReducer";

const schema = {
  user: userSchema
};

const reducers = combineReducers({
  user: userReducer
})

export const store = createStore(reducers, schema);

export type RootState = ReturnType<typeof reducers>