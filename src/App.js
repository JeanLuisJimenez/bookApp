import React, { Component } from 'react';
import setData from './api';
import './App.css';

class App extends Component {
    render () {
        return (
            <div className="App">
                <button onClick={setData}>
                    Press me!!
                </button>
            </div>
        );
    }
}

export default App;
