import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import history from './history';
import Home from './component/Home';

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <div>
                    <Route exact to="/" component={Home} />
                </div>
            </Router>
        )
    }
}

export default Routes;