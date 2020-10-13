import React, { PureComponent } from 'react';
import Person from './Person/Person'

// PureComponet выполняет shouldComponentUpdate с проверкой всех props
class Persons extends PureComponent {
    // static getDerivedStateFromProps(state, props) {
    //     console.log('[Persons.js] getDerivedStateFromProps', props);
    //     return state;
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log('[Persons.js] shouldComponentUpdate');
    //     //Это сравнение указателей, а не значений ключей. Поэтому важно в App перезаписывать новый данные, а не менять по ссылке - так как указатель будут равные. 
    //     if (nextProps.persons !== this.props.persons ||
    //         nextProps.changed !== this.props.changed ||
    //         nextProps.clicked !== this.props.clicked) {
    //         return true;
    //       } else {
    //         return false
    //       }
    // }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return {message: 'Snapshot!'};
    }

    componentWillUnmount() {
        console.log('[Persons.js] componentWillUnmount')
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('[Persons.js] componentDidUpdate');
        console.log(snapshot);
    }

    render() {
        console.log('[Persons.js] rendering...');

        return this.props.persons.map((person, index) => {
            return (
                <Person
                    name={person.name}
                    age={person.age}
                    click={() => this.props.clicked(index)}
                    key={person.id}
                    changed={(event) => this.props.changed(event, person.id)} />);
        });
    }
};

export default Persons;