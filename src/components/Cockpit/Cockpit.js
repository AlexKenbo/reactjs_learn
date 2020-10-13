import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const Cockpit = (props) => {
    //run one time
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // HTTP request
        setTimeout(() => {
            alert('Saved data cloud!');
        }, 3000);

        return () => {
            return console.log('[Cockpit.js] cleanup work in useEffect');
        } 
    }, []);

    //run cleanup evry time
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect')
        return () => console.log('[Cockpit.js] cleanup work in 2 nd useEffect') 
    });

    // run if [persons] changed
    // useEffect(() => {
    //     console.log('[Cockpit.js] useEffect');

    //     // HTTP request
    //     setTimeout(() => {
    //         alert('Saved data cloud!');
    //     }, 1000);
    // }, [props.persons]);

    const asignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
      asignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
      asignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={asignedClasses.join(' ')}>This is really working</p>
            <button className={btnClass} onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
}

export default React.memo(Cockpit);