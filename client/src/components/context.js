import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        bugs: [
            { bug_title: 'Crashing', bug_application: 'bug-tracker', bug_description: 'My program is crashing when I run a thingy' }
        ]
    };

    componentDidMount() {
        fetch('/api/bugs')
        .then(res => res.json())
        .then(bugs => this.setState({bugs}));
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;