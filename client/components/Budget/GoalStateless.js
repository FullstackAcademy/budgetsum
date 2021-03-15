import React from "react";
import { connect } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

export default class GoalStateless extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    return <Redirect to="/goals" />;
  }

  render() {
    return (
      <Card className="text-center">
        <Card.Header>
          {this.props.inspirationalQuote}
        </Card.Header>

        <Card.Body>

          <Card.Title>
          {this.props.title}
          </Card.Title>

          <Card.Text>
            {this.props.bodyInfo}
          </Card.Text>


         {this.props.button}

        </Card.Body>

        <Card.Footer className="text-muted">
          Login to save your results
        </Card.Footer>
      </Card>
    );
  }
}

