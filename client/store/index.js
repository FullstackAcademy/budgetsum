import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
  combineReducers({

  }),
  applyMiddleware(thunkMiddleware, createLogger()
  )
)

export default store
