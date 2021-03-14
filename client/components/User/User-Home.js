import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
// import Login from '../Login/Login'



const UserHome = props => {
  const { user } = props;

  if(!user.id){
    console.log('i got git', user)
    return <Redirect to='/' />
  }

  return (
    <div>
      {/* <Login /> */}
      <h3>Welcome, {user.name}</h3>
      {/* {isAdmin ? <AllUsers /> : ''} */}
    </div>
  )
}

const mapState = state => {
 console.log('in user-home', state)
 return {
   user: state.user
 }
}


export default connect(mapState)(UserHome)

UserHome.propTypes = {
  name: PropTypes.string
}
