import React, { Component } from 'react';
import './App.css';
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
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

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
      // style.backgroundColor = 'red';
      // style[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }


    return (
      //<StyleRoot>
        <div className="App">
          <h1>Hello, i am React App!</h1>
          <p className={classes.join(' ')}>This is really working</p>
          {/* <StyledButton alt={this.state.showPersons} onClick={this.togglePersonsHandler}>Toggle Persons</StyledButton> */}
          <button onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {persons}
        </div>
      //</StyleRoot>
    );
    //return React.createElement('div', {className: 'App' }, React.createElement('h1', null, "Hello, i'm React App!"));
  }
}

//export default Radium(App);
export default App;


// const App = props => {
//   const [ personState, setPersonsState ] = useState({
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Manu", age: 29 },
//       { name: "Stephanie", age: 26 },
//     ],

//   });

//   const [ otherState, setOtherState ] = useState({otherState: "some value"});

//   console.log(personState, otherState);

//   const switchNameHandler = () => {
//     setPersonsState({
//       persons: [
//         { name: "Maximilian", age: 28 },
//         { name: "Manu", age: 29 },
//         { name: "Stephanie", age: 27 },
//       ],
//       otherState: personState.otherState
//     })
//   }
// }