import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './bug-tracker/layout/Home';
import Bugs from './bug-tracker/layout/Bugs';
import About from './bug-tracker/layout/About';
import Signin from './bug-tracker/layout/Signin';
import Signup from './bug-tracker/layout/Signup';
import Signout from './bug-tracker/layout/Signout';

import Navbar from './bug-tracker/Navbar';

import './styles/app.css';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/bugs" component={Bugs}/>
                        <Route path="/about" component={About}/>
                        <Route path="/signin" component={Signin}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/signout" component={Signout}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default App;