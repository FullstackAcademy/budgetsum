import axios from 'axios'
import history from '../history'
const initialState = {}

//action type
const GOT_USER = "GOT_USER"

//action creator
const gotUser = (user) => ({
  type: GOT_USER,
  user
})

//thunk
export const login = (body) => async (dispatch) => {
  try{
    const { data } =  await axios.put('/auth/login', body)
    dispatch(gotUser(data))
    history.push('/home')
  } catch(err){
    console.error(err)
  }
}

export const me = () => async (dispatch) => {
  try{
    const { data } =  await axios.get('/auth/me')
    dispatch(gotUser(data || initialState));
    history.push('/home')
  } catch(err){
    console.error(err)
  }
}


const userReducer = (state = initialState, action) => {
  switch (action.type){
    case GOT_USER:
      return action.user
    default: return state
  }
}

export default userReducer
