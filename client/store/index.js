import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";
import userReducer from "./user"

const store = createStore(
  combineReducers({
    users: userReducer
  }),
  applyMiddleware(thunkMiddleware, createLogger()
  )
)

export default store
