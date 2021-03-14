import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";
import Login from '../Login/Login'

export default class Discover extends React.Component{
  constructor(){
    super()
    this.handleClick = this.handleClick.bind(this)
  }

    handleClick(){
      return <Redirect to='/login' />
    }

  render(){
    return (
      <Card className="text-center">
  <Card.Header>“You don’t have to see the whole staircase, just take the first step.”</Card.Header>
  <Card.Body>
    <Card.Title>Reach your goals for free with BudgetSum. </Card.Title>
    <Card.Text>
      Take the first step by using our calculator to compare your spending with that of the national average.
    </Card.Text>
    <Link to="/login" className="btn btn-primary">Let's Get Started</Link>
    {/* <Button variant="primary" onClick={this.handleClick}>Let's Get Started</Button> */}
  </Card.Body>
  <Card.Footer className="text-muted">Login to save your results</Card.Footer>
</Card>
    )
  }
}



// export default connect(null, mapDispatch)(Discover);

