import React from "react";
import classes from "./Cockpit.css";

const Cockpit = (props) => {
  const assignedClasses = [];

  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red);
  }
  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold);
  }
  return (
    <div className={classes.Cockpit}>
      <h1>Hi! im a React App</h1>
      <p className={assignedClasses.join(" ")}> Wow! this works</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default Cockpit;
