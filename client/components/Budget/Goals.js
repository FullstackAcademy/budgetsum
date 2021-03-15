import React from "react";
import { Redirect, Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import GoalStateless from "../Budget/GoalStateless";

export default class Goals extends React.Component {
  constructor() {
    super();
  }

  render() {
    const dropdownButton = (
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        <Dropdown.Item
        as={Link} to="/income"
        href="#/action-1">Pay off debt</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Save for retirement</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Buy a home</Dropdown.Item>
        <Dropdown.Item href="#/action-4">Travel</Dropdown.Item>
        <Dropdown.Item href="#/action-5">Other</Dropdown.Item>
      </DropdownButton>
    );

    return (
      <GoalStateless
        inspirationalQuote={
          "'The best way to stick to your budget is to start one.'"
        }
        title={"Tell us your financial goals"}
        bodyInfo={"Select from the dropdown menu"}
        button={dropdownButton}
      />
    );
  }
}
