import React from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
    const asignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.persons.length <= 2) {
      asignedClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
      asignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hello, i am React App!</h1>
            <p className={asignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default cockpit;