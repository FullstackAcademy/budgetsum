import React from "react";
import GoalStateless from "./GoalStateless";
import { Link } from "react-router-dom";
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class Discover extends React.Component {
  render() {
    const linkButton = (
      <Link to="/goals" className="btn btn-primary">
        Let's Get Started
      </Link>
    );
    return (
      <div>
      <ProgressBar animated now={25} />
      <GoalStateless
        title={"Reach your goals for free with BudgetSum."}
        bodyInfo={
          "Take the first step by using our calculator to compare your spending with that of the national average."
        }
        inspirationalQuote={
          "'You don’t have to see the whole staircase, just take the first step.'"
        }
        button={linkButton}
      />
      </div>
    );
  }
}
