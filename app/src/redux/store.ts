import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import userSchema from "./user/userSchema";
import userReducer from "./user/userReducer";

const schema = {
  user: userSchema
};

const reducers = combineReducers({
  user: userReducer
})

export const store = createStore(
  reducers, 
  schema,
  composeWithDevTools()
  );

export type RootState = ReturnType<typeof reducers>