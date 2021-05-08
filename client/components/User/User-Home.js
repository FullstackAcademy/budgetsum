import React from "react";
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
// import Login from '../Login/Login'

const UserHome = props => {
  const { user } = props;

  if(!user.id){
    return <Redirect to='/home' />
  }

  return (
    <div>
      <h3>Welcome, {user.name}</h3>
    </div>
  )
}

const mapState = state => {
 console.log('in user-home', state.user)
 return {
   user: state.user
 }
}
export default connect(mapState)(UserHome)

UserHome.propTypes = {
  name: PropTypes.string
}
