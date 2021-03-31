import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Nihal", age: 27 },
      { name: "Manu", age: 25 },
      { name: "Max", age: 27 },
      { name: "Jonas", age: 45 },
    ],
    showPersons: false,
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "Nihal", age: 63 },
        { name: event.target.value, age: 25 },
        { name: "Max", age: 27 },
        { name: "Jonas Schmedmann", age: 89 },
      ],
    });
  };

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render = () => {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      padding: "10px",
      border: "1px solid blue",
      cursor: "pointer",
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
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi! im a React App</h1>
        <p> Wow! this works</p>
        <button style={style} onClick={this.togglePersonsHandler}>
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
