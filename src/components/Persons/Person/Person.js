import React, { Component } from "react";
import PropTypes from "prop-types";
import WithClass from "../../../hoc/WithClass";

import classes from "./Person.css";
import Aux from "../../../hoc/Aux.js";

class Person extends Component {
  render() {
    console.log("[Persons.js] rendering..");
    return (
      <Aux>
        <p onClick={this.props.click}>
          I am {this.props.name} and i am {this.props.age} years old{" "}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;
