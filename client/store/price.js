import axios from 'axios'
import history from '../history'

//action type
const GOT_INCOME = "GOT_INCOME"

//action creator
const gotIncome = (income) => ({
  type: GOT_INCOME,
  income
})

//thunk
export const income = () => async (dispatch) => {
  try{
    const { data: income } =  await axios.put('/auth/login', body)
    dispatch(gotIncome(income))
  } catch(err){
    console.error(err)
  }
}

const initialState = {

}

const priceReducer = (state = initialState, action) => {
  switch (action.type){
    case GOT_INCOME:
      return action.income
    default: return state
  }
}

export default userReducer
