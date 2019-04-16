import React, { Component } from 'react';
import { setDataPlaces, setDataActivities, deletePlaces, deleteActivities } from './api';
import './App.css';

class App extends Component {
    render () {
        return (
            <div className="App" style={{flexDirection: 'row'}}>
                {/*<button onClick={setData}>*/ }
                {/*    Set data books*/ }
                {/*</button>*/ }
                {/*<button onClick={setDataEvents}>*/ }
                {/*Set data events*/ }
                {/*</button>*/ }
                <div style={{alignContent: 'center'}}>
                    <h2> Places </h2>
                    <button onClick={ setDataPlaces }>
                        Set data places
                    </button>
                    <button onClick={ deletePlaces }>
                        Delete data places
                    </button>

                </div>
                <div style={{alignContent: 'center'}}>
                    <h2> Activities </h2>
                    <button onClick={ setDataActivities }>
                        Set data Activities
                    </button>
                    <button onClick={ deleteActivities }>
                        Delete data Activities
                    </button>
                </div>
            </div>
        );
    }
}

export default App;
