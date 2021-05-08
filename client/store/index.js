import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import userReducer from "./user";


export default createStore(
  combineReducers({
    user: userReducer,
  }),
  applyMiddleware(thunkMiddleware, createLogger()
  )
)
