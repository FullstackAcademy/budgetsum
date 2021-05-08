import React from "react";
import { connect } from "react-redux";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import GoalStateless from "../Budget/GoalStateless";
import ProgressBar from "react-bootstrap/ProgressBar";
import { setIncome } from "../../store/user";

class Income extends React.Component {
  constructor() {
    super();
    this.state = {
      income: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    //plus sign converts to number or parseInt
    await this.props.setIncome(+this.state.income);

    this.props.history.push("/categories");
  }

  render() {
    const inputVal = (
      <div>
        <ProgressBar animated now={75} />
        <InputGroup size="sm" className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="inputGroup-sizing-sm"
            name="income"
            onChange={this.handleChange}
            value={this.state.income}
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
        inspirationalQuote={"Tell us your annual income"}
        button={inputVal}
      />
    );
  }
}

const mapDispatch = (dispatch) => ({
  setIncome: (income) => dispatch(setIncome(income)),
});

export default connect(null, mapDispatch)(Income);
