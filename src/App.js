import React, { Component } from 'react';
import { setData, setDataPlaces } from './api';
import './App.css';

class App extends Component {
    render () {
        return (
            <div className="App">
                <button onClick={setData}>
                    Set data books
                </button>
                {/*<button onClick={setDataEvents}>*/}
                    {/*Set data events*/}
                {/*</button>*/}
                <button onClick={setDataPlaces}>
                    Set data places
                </button>
            </div>
        );
    }
}

export default App;
