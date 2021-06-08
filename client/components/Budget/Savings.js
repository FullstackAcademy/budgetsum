import React from 'react';
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import ProgressBar from "react-bootstrap/ProgressBar";
import GoalStateless from "./GoalStateless";
import { setSavings } from "../../store/user";

class Savings extends React.Component {
  constructor(){
    super();
    this.state = {
      savings: "",
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt){
    evt.preventDefault();
    await this.props.setSavings(+this.state.savings);
    this.props.history.push("/categories");
  }

  render() {
    const inputVal = (
      <div>
        <ProgressBar animated now={85} />
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="inputGroup-sizing-sm"
            name="savings"
            onChange={this.handleChange}
            value={this.state.savings}
            aria-label="Small"
            aria-describedby="inputGroup-sizing-sm"
          />
          <InputGroup.Append>
            <Button
              variant="outline-secondary"
              type="submit"
              onClick={this.handleSubmit}
            >
              Submit
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </div>
    );
    return (
      <GoalStateless
        inspirationalQuote={"Tell us your current savings"}
        button={inputVal}
      />
    );
  }
}

const mapDispatch = (dispatch) => ({
  setSavings: (savings) => dispatch(setSavings(savings)),
});

 export default connect(null, mapDispatch)(Savings);
