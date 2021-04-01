import React, { Component } from "react";
import "./App.css";

import Person from "./Person/Person";

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
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      padding: "10px",
      border: "1px solid blue",
      cursor: "pointer",
      ":hover": {
        backgroundColor: "lightGreen",
        color: "black",
      },
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangeHandler(event, person.id)}
              />
            );
          })}
        </div>
      );

      style.backgroundColor = "red";
      style[":hover"] = {
        backgroundColor: "salmon",
        color: "black",
      };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi! im a React App</h1>
        <p className={classes.join(" ")}> Wow! this works</p>
        <button className="button" onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
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
