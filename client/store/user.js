import axios from 'axios'

const initialState = {
  name: 'anonymous'
}

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
  } catch(err){
    console.error(err)
  }
}

export const me = () => async (dispatch) => {
  try{
    const { data } =  await axios.get('/auth/me')
    dispatch(gotUser(data || initialState))
  } catch(err){
    console.error(err)
  }
}


export default (state = initialState, action) => {
  switch (action.type){
    case GOT_USER:
      return action.user
    default: return state
  }
}
