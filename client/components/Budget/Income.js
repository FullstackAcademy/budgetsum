import React from "react";
import { connect, Link } from "react-router-dom";
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup'
import GoalStateless from "../Budget/GoalStateless";
import ProgressBar from 'react-bootstrap/ProgressBar'

  export default class Income extends React.Component {
  constructor() {
    super();
    this.state = {
      // Transportation = "",
      // Debt = "",
      // Home = ""
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
        <ProgressBar animated now={75} />
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

