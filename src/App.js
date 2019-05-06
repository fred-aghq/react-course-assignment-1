import React, { Component } from 'react';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';
import './App.css';

class App extends Component {
    state = {
        username: "The User"
    };

    inputChanged = (event) => {
        // Manipulating the state in this way will "merge" states and not affect untouched
        // properties of the state.
        this.setState({
            username: event.target.value
        });
    };

    render () {
        return (
            <div className="App">
                <UserInput changed={this.inputChanged} initialValue={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
                <UserOutput username={this.state.username}/>
            </div>
        );
    }
}

export default App;
