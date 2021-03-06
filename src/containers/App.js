import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux'


class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] conctructor');
  }

  state = {
    persons: [
      { id: "sdfdf", name: "Max", age: 28 },
      { id: "23rf", name: "Manu", age: 29 },
      { id: "sddsf1", name: "Stephanie", age: 26 },
    ],
    otherState: "some value",
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(state, props) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }


  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

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
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons });
  }

  render() {
    console.log('[App.js render]')
    let persons = null;

    if (this.state.showPersons) {
      persons = 
          <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>;
    }

    return (
        <Aux>
          <button 
            onClick={() => {
              this.setState({showCockpit: !this.state.showCockpit})
            }}>Toggle Cockpit</button>
            { this.state.showCockpit ?
          <Cockpit 
            title={this.props.appTitle}
            personsLength={this.state.persons.length} 
            showPersons={this.state.showPersons} 
            clicked={this.togglePersonsHandler}/>
            : null}
          {persons}
        </Aux>
    );

  }
}

//export default Radium(App);
export default withClass(App, classes.App);


