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
  };

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 63 },
        { name: "Manu", age: 25 },
        { name: "Max", age: 27 },
        { name: "Jonas Schmedmann", age: 89 },
      ],
    });
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

  render = () => {
    return (
      <div className="App">
        <h1>Hi! im a React App</h1>
        <p> Wow! this works</p>
        <button onClick={() => this.switchNameHandler("Maximilian")}>
          Switch Name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, "Maxxxxxx")}
          changed={this.nameChangeHandler}
        >
          My hobbies: Racing{" "}
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
        <Person
          name={this.state.persons[3].name}
          age={this.state.persons[3].age}
        />
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
