import React from "react";
import { Redirect, Link } from "react-router-dom";
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup'
import GoalStateless from "../Budget/GoalStateless";

export default class Goals extends React.Component {
  constructor() {
    super();
    this.state = {

    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(evt) {
      this.setState({
        [evt.target.name]: evt.target.value,
      });
    }

    handleSubmit(evt){
      evt.preventDefault();
    }


  render() {
    const inputVal = (
      <div>
        <InputGroup size="sm" className="mb-3" onChange={this.handleChange}>
          <InputGroup.Prepend>
            <InputGroup.Text
            id="inputGroup-sizing-sm">$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl onSubmit={this.handleSubmit}
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
        </InputGroup>
      </div>
    );
    return <GoalStateless
    inspirationalQuote={"Tell us your annual income"}
    button={inputVal}
     />;
  }
}
