import React, { Component } from 'react';

import Navbar from './bug-tracker/Navbar';

import './styles/app.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar />
            </div>
        )
    }
}

export default App;