import React from "react";
import { connect } from "react-redux";
import { login } from "../../store/user";

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
        <form
          onSubmit={(evt) => {
            evt.preventDefault();
            this.props.login(this.state);
            this.setState({
              email: "",
              password: "",
            });
          }}
        >
          <input
            type="text"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <input
            type="password"
            name="password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <button type="submit">Log In</button>
        </form>
        <a href="/auth/google">Login with Google</a>
      </div>
    );
  }
}

const mapDispatch = (dispatch) => ({
  login: (body) => dispatch(login(body)),
});

export default connect(null, mapDispatch)(Login);
