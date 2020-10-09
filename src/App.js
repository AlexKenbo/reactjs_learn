import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

//import styled from 'styled-components';
//import Radium, { StyleRoot } from 'radium'

// const StyledButton = styled.button`
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   color: white;
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;
//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }`;

class App extends Component {
  state = {
    persons: [
      { id: "sdfdf", name: "Max", age: 28 },
      { id: "23rf", name: "Manu", age: 29 },
      { id: "sddsf1", name: "Stephanie", age: 26 },
    ],
    otherState: "some value",
    showPersons: false,
  }


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    //const person = Object.assign({}, this.state.persons[personIndex]);
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });

  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);

    this.setState({ persons });

  }

  render() {
    let persons = null;
    let btnClass = '';


    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div>
      );
      btnClass = classes.Red;
    }

    const asignedClasses = [];
    if (this.state.persons.length <= 2) {
      asignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      asignedClasses.push(classes.bold);
    }


    return (
      //<StyleRoot>
        <div className={classes.App}>
          <h1>Hello, i am React App!</h1>
          <p className={asignedClasses.join(' ')}>This is really working</p>
          <button className={btnClass} onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
    );

  }
}

//export default Radium(App);
export default App;


