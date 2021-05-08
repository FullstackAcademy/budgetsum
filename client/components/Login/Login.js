import React from "react";
import { connect } from "react-redux";
import { login } from "../../store/user";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  render() {
    return (
      <div>
        {/* <a href="/auth/google">Login with Google</a> */}
        <Form
          onSubmit={(evt) => {
            evt.preventDefault();
            this.props.login(this.state);
            this.setState({
              email: "",
              password: "",
            });
          }}
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={this.handleChange}
              value={this.state.email}
              name="email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  login: (body) => dispatch(login(body)),
});

export default connect(null, mapDispatch)(Login);
