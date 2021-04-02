import React, { Component } from "react";
import classes from "./App.css";

import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: "errer", name: "Nihal", age: 27 },
      { id: "dsvdbb", name: "Manu", age: 25 },
      { id: "dsgsrg", name: "Max", age: 27 },
      { id: "sdfsde", name: "Jonas", age: 45 },
    ],
    showPersons: false,
  };

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });
    console.log(personIndex);

    const person = { ...this.state.persons[personIndex] };
    console.log(person);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    console.log(persons);
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render = () => {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}
        />
        {persons}
      </div>
    );
  };
  // return React.createElement(
  //   "div",
  //   { className: "App" },
  //   createElement("h1", { className: "h1" }, "Does this work?")
  // );
}

export default App;
