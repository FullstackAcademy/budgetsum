import axios from "axios";
import history from "../history";
const initialState = {};

//action type
const GOT_USER = "GOT_USER";

//action creator
const gotUser = (user) => ({
  type: GOT_USER,
  user,
});

//thunk
export const login = (body) => async (dispatch) => {
  try {
    const { data } = await axios.put("/auth/login", body);
    dispatch(gotUser(data));
    history.push("/home");
  } catch (err) {
    console.error(err);
  }
};

//thunk
export const me = () => async (dispatch) => {
  try {
    console.log("Me gets called");
    const { data } = await axios.get("/auth/me");
    console.log("thunk data", data);
    // dispatch(gotUser(data));
    dispatch(gotUser(data || initialState));
  } catch (err) {
    console.error(err);
  }
};

export const setIncome = (income) => async (dispatch) => {
  try {
    const { data: user } = await axios.post("/api/users/setIncome", {income});
    dispatch(gotUser(user));
  } catch (err) {
    console.error(err);
  }
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_USER:
      return action.user;
    default:
      return state;
  }
};

export default userReducer;
