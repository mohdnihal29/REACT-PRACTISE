import React, { Component } from "react";
import classes from "./App.css";
import Person from "../components/Persons/Person/Person";

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
    let btnClass = "";

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.nameChangeHandler(event, person.id)}
                key={person.id}
              />
            );
          })}
        </div>
      );

      btnClass = classes.Red;
    }

    const assignedClasses = [];
    if (this.state.persons.length <= 2) {
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
        <h1>Hi! im a React App</h1>
        <p className={assignedClasses.join(" ")}> Wow! this works</p>
        <button className={btnClass} onClick={this.togglePersonsHandler}>
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