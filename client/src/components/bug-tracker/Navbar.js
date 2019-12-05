import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Navbar extends Component {
    render() {
        return (
            <nav className="Navbar">
                <h3>Bug Tracker</h3>
                <ul className="nav-links">
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/bugs">
                        <li>Bugs</li>
                    </Link>
                    <Link to="/about">
                        <li>About</li>
                    </Link>
                    <Link to="/signin">
                        <li>Sign In</li>
                    </Link>
                    <Link to="/signup">
                        <li>Sign Up</li>
                    </Link>
                    <Link to="/signout">
                        <li>Sign Out</li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar;